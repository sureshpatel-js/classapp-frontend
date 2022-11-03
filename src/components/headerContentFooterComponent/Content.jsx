import "./Content.css";
const Content = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}

export default Content;