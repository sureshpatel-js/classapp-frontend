import "./Body.css"
const Body = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}

export default Body