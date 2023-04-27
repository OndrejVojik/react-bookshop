export default function TopMenuLink({ url, label, currentItem, setTestValue, setPage}) {

    const linkedClicked = () => {
        setPage(url);
    }

    return (
        <a
         className= { 'link' + (currentItem === url ? ' link--highlighted' : '') }
         href= { '#' + url}
         onClick={linkedClicked}
         >
            { label }

         </a>
    )
}