import {useState} from 'react'
import TopMenuLink from './TopMenuLink'

export default function TopMenu({currentItem, setTestValue, setPage}) {

    const [open, setOpen] = useState(false)

    const ToggleMenu = () => {
        setOpen(!open)
    }

        const linkClicked = (event) => {
            const link = event.target;
            const id = link.id;

            setPage(id);
        };

    return (
      <div className="top-menu">
        {open === false ? (
          ""
        ) : (
          <nav className="top-menu__navigation">
            <TopMenuLink
              url=""
              label="Home"
              currentItem={currentItem}
              setTestValue={setTestValue}
              setPage={setPage}
            />

            <TopMenuLink
              url="about"
              label="About"
              currentItem={currentItem}
              setTestValue={setTestValue}
              setPage={setPage}
            />

            <TopMenuLink
              url="contact"
              label="Contact"
              currentItem={currentItem}
              setTestValue={setTestValue}
              setPage={setPage}
            />

            <a
              className={
                "link" + (currentItem === "books" ? " link--highlighted" : "")
              }
              href={"#books"}
              onClick={linkClicked}
              id="books"
            >
              Books
            </a>

            <a
              className={
                "link" + (currentItem === "authors" ? " link--highlighted" : "")
              }
              href={"#authors"}
              onClick={() => {
                setPage("authors");
              }}
            >
              Authors
            </a>
          </nav>
        )}

        <div className="top-menu__burger" onClick={ToggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
}