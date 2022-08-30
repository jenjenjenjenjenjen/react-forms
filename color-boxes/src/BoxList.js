import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {useState} from "react";
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([{backgroundColor: "pink", width: "20px", height: "30px"}])
    const addBox = box => {
        let newBox = {...box, id: uuid()};
        setBoxes(boxes => [...boxes, newBox]);
    }
    const removeBox = box => {
       setBoxes(boxes => 
        boxes.filter(b => (
            b.id !== box.id
        )))
    }
    return (
        <>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(box=> (
                    <Box key={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} removeBox={() => removeBox(box)} />
                ))}
            </div>
        </>
    )
}

export default BoxList;