const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
    .get((req, res) => {
        const response = { hello: ' message'};
        res.json(response);
    });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('test run');
});

app.listen(port, () => {
    console.log("hi"+port);
})
