import { useState } from "react";
import iconCross from "../images/icon-cross.svg";

function TaskList(props) {

    let [isTaskHovered, setTaskHoverState] = useState(null);

    return (
        <>
        <div id="taskList">
            {props.taskList.map((task,index) => {
                return (
                <div className={`task ${props.theme} flex`} key={index} onMouseEnter={() => {setTaskHoverState(index)}} onMouseLeave={() => {setTaskHoverState(null)}}>
                    <button id="addTaskBtn" className="leftTileBtn"></button>
                    <p style={{width: "90%"}}>{task}</p>
                    {isTaskHovered === index && (<button id="removeTaskBtn"><img src={iconCross} alt="Remove Task" /></button>)}
                </div>)
            })}
        </div>
        </>
    )
}

export default TaskList;