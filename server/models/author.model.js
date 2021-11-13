const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Author's name is required."],
        minLength: [3, "Author's name must be at least 3 characters long."]
    },

    category: {
        type: String,
        required: [true, "Put a label on it!"],
        enum: [
            "Fiction",
            "Non-Fiction",
            "Autobiography",
            "Biography",
            "Business and Economics",
            "Folklore",
            "Health and Wellness",
            "Historical Fiction",
            "Mystery and Suspense",
            "Philosophy",
            "Science Fiction and Fantasy",
        ]
    },

    image1: {
        type: String,
        required:[true, "Don't worry - we won't judge a book by its cover!"],
    },
    
    image2: {
        type: String,
    },
    
    image3: {
        type: String,
    },

    quote: {
        type: String,
        required: [true, "Please provide some words of wisdom from this author!"],
        minLength: [5, "Quote must be at least 5 characters long."]

    }

}, {timestamps: true})

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
