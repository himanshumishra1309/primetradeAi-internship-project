import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../model/user.model.js";

const generateAccessAndRefreshTokens = async (userId) => {
  if (!userId) {
    throw new ApiError(400, "User ID is required for token generation");
  }

  const user = await User.findById(userId);
  
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (!process.env.ACCESS_TOKEN_SECRET || !process.env.REFRESH_TOKEN_SECRET) {
    throw new ApiError(500, "Token secrets are not configured");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "Failed to generate tokens");
  }

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

const registerUser = asyncHandler(async (req, res) => {
  const { f_name, l_name, email, username, dob, contact_no, password, user_type } = req.body;

  if (!f_name || !l_name || !email || !username || !password) {
    throw new ApiError(400, "All required fields must be provided");
  }

  if ([f_name, l_name, email, username, password].some((field) => typeof field !== 'string' || field.trim() === "")) {
    throw new ApiError(400, "All required fields must be valid non-empty strings");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError(400, "Invalid email format");
  }

  if (password.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters long");
  }

  if (user_type && !['user', 'admin'].includes(user_type)) {
    throw new ApiError(400, "Invalid user type. Must be 'user' or 'admin'");
  }

  const existingUser = await User.findOne({
    $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }]
  });

  if (existingUser) {
    if (existingUser.email === email.toLowerCase()) {
      throw new ApiError(409, "User with this email already exists");
    }
    if (existingUser.username === username.toLowerCase()) {
      throw new ApiError(409, "User with this username already exists");
    }
  }

  const user = await User.create({
    f_name: f_name.trim(),
    l_name: l_name.trim(),
    email: email.toLowerCase().trim(),
    username: username.toLowerCase().trim(),
    dob: dob || null,
    contact_no: contact_no || null,
    password,
    user_type: user_type || "user"
  });

  if (!user || !user._id) {
    throw new ApiError(500, "User creation failed - no user returned");
  }

  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "User created but could not be retrieved");
  }

  return res.status(201).json(
    new ApiResponse(201, createdUser, "User registered successfully")
  );
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if ((!email || email.trim() === "") && (!username || username.trim() === "")) {
    throw new ApiError(400, "Email or username is required");
  }

  if (!password || typeof password !== 'string' || password.trim() === "") {
    throw new ApiError(400, "Valid password is required");
  }

  const query = {};
  if (email) {
    query.$or = query.$or || [];
    query.$or.push({ email: email.toLowerCase().trim() });
  }
  if (username) {
    query.$or = query.$or || [];
    query.$or.push({ username: username.toLowerCase().trim() });
  }

  const user = await User.findOne(query);

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "Token generation returned empty tokens");
  }

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  if (!loggedInUser) {
    throw new ApiError(500, "Failed to retrieve user information");
  }

  const options = {
    httpOnly: true,
    secure: true
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken
        },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  if (!req.user || !req.user._id) {
    throw new ApiError(401, "User not authenticated");
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1
      }
    },
    {
      new: true
    }
  );

  if (!updatedUser) {
    throw new ApiError(404, "User not found during logout");
  }

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

export { registerUser, loginUser, logoutUser };