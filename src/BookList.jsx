import { useEffect, useState } from "react";
import './BookList.scss'

export default function BookList() {

    const [books, setBooks] = useState([]);

    const loadBooks = async() => {
        const response = await fetch(
          "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php"
        );
        const data = await response.json();

        setBooks(data);
    }
    
    useEffect(()=>{
        loadBooks();
    },[])

    // const bookItems = [];

    // books.forEach(book=> {

    //     bookItems.push((
    //         <div className="latest-books__book">
    //             <h4 className="latest-books__book-title">{ book.title }</h4>
    //         </div>
    //     ))
    // })

    return (
      <div className="latest-books">
        <h3>Latest books</h3>

        <div className="latest-books__books">
          {books.map((book) => (
            <div className="latest-books__book">
              <div className="latest-books__image">
                <img src={book.image} alt={`${book.title} cover`} />
              </div>
              <div className="latest-books__info">
                <h4 className="latest-books__book-title">{book.title}</h4>
                <div className="latest-books__book-price">&euro;{ book.price }</div>
                <div 
                className="latest-books__book-description" 
                dangerouslySetInnerHTML={{__html: book.description}}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}