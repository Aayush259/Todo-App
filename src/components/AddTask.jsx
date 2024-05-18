import { useState } from "react";

function AddTask(props) {

    // Initializing inputValue state to empty string.
    let [inputValue, setInputValue] = useState("");

    // This function update the state of inputValue.
    const updateInputValue = (e) => {
        const newTask = {
            id: Date.now(),
            title: e.target.value
        }
        setInputValue(newTask);
    }

    // This function handles the click of addTaskBtn and add task to taskLIst array.
    const handleAddBtnClick = () => {
        const newTask = {
            id: Date.now(),
            task: inputValue
        }
        props.addTask(newTask);
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