const express = require('express');

function routes(Book) {
    const bookRouter = express.Router();

    bookRouter.route('/books')
        .post((req, res) => {
            const book = new Book(req.body);

            book.save();
            return res.status(201).json(book);
        })
        .get((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            const query = {};
            if(req.query.genre) {
                query.genre = req.query.genre;
            }
            Book.find(query, (err, books) => {
                if(err) {
                    return res.send(err);
                }
                return res.json(books);
            });
        });

    bookRouter.route('/books/:bookId')
        .get((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            Book.findById(req.params.bookId, (err, book) => {
                if(err) {
                    return res.send(err);
                }
                return res.json(book);
            });
        })
        .put((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
            Book.findById(req.params.bookId, (err, book) => {
                if (err) {
                    return res.send(err);
                }
                book.title = req.body.title;
                book.author = req.body.author;
                book.schedule = req.book.schedule;
                book.genre = req.body.genre;
                book.read = req.body.read;

                book.save();
                return res.json(book);
            });
        });

    return bookRouter;        
}

module.exports = routes;