const Box = (props) => {
    return (
        <>
            <div style={{backgroundColor: props.backgroundColor, width: props.width, height: props.height}}>
            </div>
            <button onClick={props.removeBox}>X</button>
        </>
    )
}

export default Box;