import { useState } from "react";
import iconCross from "../images/icon-cross.svg";

function TaskList(props) {

    // Initializing taskHoverIndex state. When user will hover on any task then this state will be updated to the index of that task and removeTaskBtn will be displayed.
    let [taskHoverIndex, setTaskHoverIndex] = useState(null);

    return (
        <>
        <div id="taskList">
            {props.taskList.map((task, index) => {
                return (
                <div className={`task ${props.theme} flex`} key={task["id"]} onMouseEnter={() => {setTaskHoverIndex(index)}} onMouseLeave={() => {setTaskHoverIndex(null)}}>
                    <button id="addTaskBtn" className="leftTileBtn"></button>
                    <p style={{width: "90%"}}>{task["task"]}</p>
                    {taskHoverIndex === index && (<button id="removeTaskBtn"><img src={iconCross} alt="Remove Task" /></button>)}
                </div>)
            })}
        </div>
        </>
    )
}

export default TaskList;