import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Tweet } from "../model/tweet.model.js";
import { User } from "../model/user.model.js";

const createTweet = asyncHandler(async (req, res) => {
  const { content } = req.body;

  if (!content || content.trim() === "") {
    throw new ApiError(400, "Tweet content is required");
  }

  if (content.length > 280) {
    throw new ApiError(400, "Tweet content must not exceed 280 characters");
  }

  const tweet = await Tweet.create({
    content: content.trim(),
    owner: req.user._id
  });

  if (!tweet) {
    throw new ApiError(500, "Failed to create tweet");
  }

  const createdTweet = await Tweet.findById(tweet._id).populate("owner", "f_name l_name username email");

  return res.status(201).json(
    new ApiResponse(201, createdTweet, "Tweet created successfully")
  );
});

const getAllTweets = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, sortBy = "createdAt", order = "desc" } = req.query;

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const sortOrder = order === "asc" ? 1 : -1;
  const sortOptions = { [sortBy]: sortOrder };

  const tweets = await Tweet.find()
    .populate("owner", "f_name l_name username email")
    .sort(sortOptions)
    .skip(skip)
    .limit(limitNum);

  const totalTweets = await Tweet.countDocuments();

  return res.status(200).json(
    new ApiResponse(200, {
      tweets,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalTweets / limitNum),
        totalTweets,
        hasNextPage: pageNum < Math.ceil(totalTweets / limitNum),
        hasPrevPage: pageNum > 1
      }
    }, "Tweets fetched successfully")
  );
});

const getTweetById = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  if (!tweetId) {
    throw new ApiError(400, "Tweet ID is required");
  }

  const tweet = await Tweet.findById(tweetId).populate("owner", "f_name l_name username email");

  if (!tweet) {
    throw new ApiError(404, "Tweet not found");
  }

  return res.status(200).json(
    new ApiResponse(200, tweet, "Tweet fetched successfully")
  );
});

const getUserTweets = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const tweets = await Tweet.find({ owner: userId })
    .populate("owner", "f_name l_name username email")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum);

  const totalTweets = await Tweet.countDocuments({ owner: userId });

  return res.status(200).json(
    new ApiResponse(200, {
      tweets,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalTweets / limitNum),
        totalTweets,
        hasNextPage: pageNum < Math.ceil(totalTweets / limitNum),
        hasPrevPage: pageNum > 1
      }
    }, "User tweets fetched successfully")
  );
});

const updateTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  const { content } = req.body;

  if (!tweetId) {
    throw new ApiError(400, "Tweet ID is required");
  }

  if (!content || content.trim() === "") {
    throw new ApiError(400, "Tweet content is required");
  }

  if (content.length > 280) {
    throw new ApiError(400, "Tweet content must not exceed 280 characters");
  }

  const tweet = await Tweet.findById(tweetId);

  if (!tweet) {
    throw new ApiError(404, "Tweet not found");
  }

  if (tweet.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to update this tweet");
  }

  tweet.content = content.trim();
  tweet.isEdited = true;
  tweet.editedAt = new Date();
  await tweet.save();

  const updatedTweet = await Tweet.findById(tweet._id).populate("owner", "f_name l_name username email");

  return res.status(200).json(
    new ApiResponse(200, updatedTweet, "Tweet updated successfully")
  );
});

const deleteTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  console.log('Delete tweet request:', {
    tweetId,
    userId: req.user?._id,
    userType: req.user?.user_type,
    userName: req.user?.username
  });

  if (!tweetId) {
    throw new ApiError(400, "Tweet ID is required");
  }

  const tweet = await Tweet.findById(tweetId);

  if (!tweet) {
    console.log('Tweet not found:', tweetId);
    throw new ApiError(404, "Tweet not found");
  }

  console.log('Tweet found:', {
    tweetId: tweet._id,
    ownerId: tweet.owner
  });

  const isOwner = tweet.owner.toString() === req.user._id.toString();
  const isAdmin = req.user.user_type === "admin";

  console.log('Authorization check:', {
    isOwner,
    isAdmin,
    userType: req.user.user_type
  });

  if (!isOwner && !isAdmin) {
    throw new ApiError(403, "You are not authorized to delete this tweet");
  }

  await Tweet.findByIdAndDelete(tweetId);
  console.log('Tweet deleted successfully');

  return res.status(200).json(
    new ApiResponse(200, {}, "Tweet deleted successfully")
  );
});

const likeTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  if (!tweetId) {
    throw new ApiError(400, "Tweet ID is required");
  }

  const tweet = await Tweet.findById(tweetId);

  if (!tweet) {
    throw new ApiError(404, "Tweet not found");
  }

  const alreadyLiked = tweet.likes.includes(req.user._id);

  if (alreadyLiked) {
    tweet.likes = tweet.likes.filter(userId => userId.toString() !== req.user._id.toString());
    await tweet.save();

    return res.status(200).json(
      new ApiResponse(200, { liked: false, likesCount: tweet.likes.length }, "Tweet unliked successfully")
    );
  } else {
    tweet.likes.push(req.user._id);
    await tweet.save();

    return res.status(200).json(
      new ApiResponse(200, { liked: true, likesCount: tweet.likes.length }, "Tweet liked successfully")
    );
  }
});

export {
  createTweet,
  getAllTweets,
  getTweetById,
  getUserTweets,
  updateTweet,
  deleteTweet,
  likeTweet
};
