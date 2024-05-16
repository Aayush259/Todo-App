
function AddTask(props) {

    return (
        <>
        <div className={`addTask ${props.theme} flex`}>
            <button id="addTaskBtn" className="leftTileBtn"></button>
            <label htmlFor="newTask">
                <input type="text" id="newTask" placeholder="Create a new todo..." />
            </label>
        </div>
        </>
    )
}

export default AddTask;