import mongoose, {Schema} from "mongoose";

const tweetSchema = new Schema({
  content: {
    type: String,
    required: true,
    maxLength: 280
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  isEdited: {
    type: Boolean,
    default: false
  },
  editedAt: {
    type: Date
  }
}, {timestamps: true});

export const Tweet = mongoose.model("Tweet", tweetSchema);