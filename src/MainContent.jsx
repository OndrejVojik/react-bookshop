import './MainContent.scss'
import Homepage from './Homepage'
import Context from './Context';
import { useContext } from 'react';

export default function MainContent({page}) {

  const {context: {theme}} = useContext(Context);

    let content = '';

    if (page === "") {
        content =  (
            <Homepage />
        )
    } else if (page === "about") {
      content = <h2>About Us</h2>;
    } else if (page === "contact") {
      content = <h2>Contact Us</h2>;
    } else if (page === "books") {
      content = <h2>Books index</h2>;
    } else if (page === "authors") {
      content = <h2>Authors index</h2>;
    } else {
      content = <h2>404: Page not found</h2>;
    }

    return (
        <main className={`main main--${theme}`}>
            <h1 className="app__headline">Flourish and Blotts</h1>
            {content}
        </main>
    )
}