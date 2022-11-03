import "./RightHeaderElement.css"
const RightHeaderElement = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}

export default RightHeaderElement;