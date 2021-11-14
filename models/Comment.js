var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
  likes: {
    type: Array,
    default: [],
  },
  likesCount: {type: Number, default: 0},
}, {timestamps: true});

// Requires population of author
CommentSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    author: this.author.toProfileJSONFor(user),
    likesCount: this.likesCount,
    isLiked: this.likes.includes(user._id.toString()),
  };
};

CommentSchema.methods.like = function(id){
  if(this.likes.indexOf(id) === -1){
    this.likes.push(id);
    this.likesCount += 1;
  }

  return this.save();
};

CommentSchema.methods.dislike = function(id){
  this.likes.pull(id);
  if (this.likesCount > 0) this.likesCount -= 1;

  return this.save();
};

mongoose.model('Comment', CommentSchema);
