export default function TopMenuLink({ url, label, currentItem}) {
    return (
        <a
         className= { 'link' + (currentItem === url ? ' link--highlighted' : '') }
         href= { '#' + url}
         >
            { label }

         </a>
    )
}