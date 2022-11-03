import "./LeftHeaderElement.css"
const LeftHeaderElement = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}

export default LeftHeaderElement;