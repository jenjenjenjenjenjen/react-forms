import {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const [formData, setFormData] = useState({
        width: "",
        height: "",
        backgroundColor: ""
    }) 
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="width" 
                name="width" 
                type="text" 
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input 
                id="height" 
                name="height" 
                type="text" 
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Color</label>
            <input 
                id="backgroundColor" 
                name="backgroundColor" 
                type="text" 
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button type="submit">Add Box</button>
        </form>
    )
}

export default NewBoxForm;