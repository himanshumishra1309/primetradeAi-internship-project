import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createTweet,
  getAllTweets,
  getTweetById,
  getUserTweets,
  updateTweet,
  deleteTweet,
  likeTweet
} from "../controller/tweet.controller.js";

const router = Router();

router.get("/", getAllTweets);
router.get("/:tweetId", getTweetById);
router.get("/user/:userId", getUserTweets);

router.post("/", verifyJWT, createTweet);
router.patch("/:tweetId", verifyJWT, updateTweet);
router.delete("/:tweetId", verifyJWT, deleteTweet);
router.post("/:tweetId/like", verifyJWT, likeTweet);

export default router;
