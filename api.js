const express = require('express');

const app = express();
// const bookRouter = express.Router();
const port = process.env.PORT || 3000;

/* bookRouter.route('/books')
    .get((req, res) => {
        const response = { hello: 'API message'};
        res.json(response);
    });
*/

app.get('/', (req, res) => {
    res.send('hi chicken');
});

app.listen(port, () => {
    console.log("hi"+port);
})