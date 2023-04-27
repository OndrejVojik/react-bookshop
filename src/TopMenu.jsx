import {useState} from 'react'
import TopMenuLink from './TopMenuLink'

export default function TopMenu({currentItem}) {

    const [open, setOpen] = useState(false)

    const ToggleMenu = () => {
        setOpen(!open)
    }

    return (
      <div className="top-menu">
        {open === false ? (
          ""
        ) : (
          <nav className="top-menu__navigation">

            <TopMenuLink 
                url = ""
                label = "Home"
                currentItem = { currentItem }
            />

            <TopMenuLink 
                url = "about"
                label = "About"
                currentItem = { currentItem }
            />

            <TopMenuLink 
                url = "contact"
                label = "Contact"
                currentItem = { currentItem }
            />
            
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