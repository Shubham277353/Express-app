const db = require("../db");

async function getBookById(req, res) {
    const {bookId} = req.params;

    const book = await db.getBookById(Number(bookId));

    if(!book){
        throw new Error("Book not found my guy");
    }

    res.send(`Book Name: ${book.name}`)
    
}

module.exports = {getBookById};