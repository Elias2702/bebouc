const mongoose = require("mongoose");

// Mongoose Schema
const reviewSchema = new mongoose.Schema(
    {
        authorID: {
            type: String,
            required: true,
        },
        authorName: {
            type: String,
            required: true,
        },
        authorSurname: {
            type: String,
            required: true,
        },
        bookID: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            // Il faudrait le mettre entre intergers 0 et 5
        },
        comment: {
            type: String,
        },
    },
    {timestamps: {createdAt: "created_at"}},
);

// Translate Schema into Model and export
module.exports = mongoose.model("review", reviewSchema);
