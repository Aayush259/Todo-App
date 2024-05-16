
function TaskList(props) {

    return (
        <>
        <div id="taskList">
            {props.taskList.map((task,index) => {
                return (
                <div className={`task ${props.theme} flex`} key={index}>
                    <button id="addTaskBtn" className="leftTileBtn"></button>
                    <p style={{width: "100%"}}>{task}</p>
                </div>)
            })}
        </div>
        </>
    )
}

export default TaskList;