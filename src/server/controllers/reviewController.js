const Review = require("../schema/schemaReview.js");

const show = (req, res) => {
    Review.find()
        .sort({bookID: 1})
        .then(review => res.json(review));
};

const create = (req, res) => {
    let review = {
            authorID: req.body.authorID,
            authorName: req.body.authorName,
            authorSurname: req.body.authorSurname,
            bookID: req.body.bookID,
            rating: req.body.rating,
            comment: req.body.comment,
        },
        findReview = new Promise((resolve, reject) => {
            Review.findOne(
                {
                    authorID: review.authorID,
                    bookID: review.bookID,
                },
                (err, result) => {
                    if (err) {
                        reject(500);
                    } else if (result) {
                        res.status(204).json({
                            text: "Review already exists",
                        });
                    } else {
                        resolve(true);
                    }
                },
            );
        });

    findReview.then(
        () => {
            let _u = new Review(review);

            _u.save(err => {
                if (err) {
                    res.status(500).json({
                        text: "Internal error",
                    });
                } else {
                    res.status(200).json({
                        text: "Review successfuly saved",
                    });
                }
            });
        },
        error => {
            switch (error) {
                case 500:
                    res.status(500).json({
                        text: "Internal error",
                    });
                    break;
                case 204:
                    res.status(204).json({
                        text: "Review already exists",
                    });
                    break;
                default:
                    res.status(500).json({
                        text: "Internal error",
                    });
            }
        },
    );
};

const store = (req, res) => {
    const updatedReview = {
        authorID: req.body.authorID,
        authorName: req.body.authorName,
        authorSurname: req.body.authorSurname,
        bookID: req.body.bookID,
        rating: req.body.rating,
        comment: req.body.comment,
    };

    Review.findByIdAndUpdate(req.params.id, updatedReview, {new: true})
        .then(review => res.json(review))
        .catch(err => res.status(400).send(err));
};

const destroy = (req, res) => {
    Review.findById(req.params.id)
        .then(review => review.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json(err));
};

// Exports des fonctions
exports.show = show;
exports.create = create;
exports.store = store;
exports.destroy = destroy;
