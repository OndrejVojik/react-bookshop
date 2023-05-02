import { useContext, useEffect, useState } from "react";
import './BookList.scss'
import Context from "./Context";
import CurrencyContext from "./CurrencyContext";

export default function BookList() {

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    // const {currency, exchangeRate} = useContext(CurrencyContext);

    const {context: {currency, exchangeRate},dispatch} = useContext(Context);

    const loadBooks = async() => {
        const response = await fetch(
          "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page="+page
        );
        const data = await response.json();

        setBooks(data);
    }
    
    // useEffect(()=>{
    //     loadBooks();
    // },[])

    useEffect(()=>{
        loadBooks();
    },[page])

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
        <div className="latest-books__header">
          <h3>Latest books</h3>
          <div className="latest-books__pagination">
            Page: { page }
            {
              page > 1
              ? (
              <button
                onClick={ ()=>{ setPage(page - 1)} }
              >
                Previous page

              </button>
              )
              : ''
            }
            <button
              onClick={ ()=>{ setPage(page + 1)} }
            >
              Next page
              </button>
          </div>
        </div>
        <div className="latest-books__books">
          {books.map((book) => (
            <div className="latest-books__book">
              <div className="latest-books__image">
                <img src={book.image} alt={`${book.title} cover`} />
              </div>
              <div className="latest-books__info">
                <button
                  onClick={()=>{
                    dispatch({
                      type: 'cart/addItem',
                      payload: book.id
                    })
                  }}
                >Add to cart</button>
                <h4 className="latest-books__book-title">{book.title}</h4>
                <div className="latest-books__book-price">
                  {currency}{(book.price*exchangeRate).toFixed(2)}
                </div>
                <div
                  className="latest-books__book-description"
                  dangerouslySetInnerHTML={{ __html: book.description }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}