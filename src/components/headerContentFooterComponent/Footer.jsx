import "./Footer.css"
const Footer = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}
export default Footer;