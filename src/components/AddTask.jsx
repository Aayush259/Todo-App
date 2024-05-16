import { useState } from "react";

function AddTask(props) {

    // Initializing inputValue state to empty string.
    let [inputValue, setInputValue] = useState("");

    // This function update the state of inputValue.
    const updateInputValue = (e) => {
        setInputValue(e.target.value);
    }

    // This function handles the click of addTaskBtn and add task to taskLIst array.
    const handleAddBtnClick = () => {
        props.addTask(inputValue);
        setInputValue("");
    }

    return (
        <>
        <div className={`addTask ${props.theme} flex`}>
            <button id="addTaskBtn" className="leftTileBtn" onClick={handleAddBtnClick}></button>
            <label htmlFor="newTask">
                <input type="text" id="newTask" placeholder="Create a new todo..." value={inputValue} onChange={updateInputValue} />
            </label>
        </div>
        </>
    )
}

export default AddTask;