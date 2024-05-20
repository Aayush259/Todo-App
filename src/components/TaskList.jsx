import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "./Task";

function TaskList(props) {

    // Tasks array of objects.
    const tasks = props.taskList;

    // Number of tasks Completed in taskList.
    const numberOfTasksCompleted = tasks.length - tasks.filter(task => task.taskStatus === "Completed").length;

    return (
        <>
        <div id="taskList">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map(task => {
                    return <Task id={task.id} title={task.title} taskStatus={task.taskStatus} theme={props.theme} key={task.id} removeTask={props.removeTask} updateTaskStatus={props.updateTaskStatus} />
                })}
            </SortableContext>
            <div className={`taskListFooter flex ${props.theme}`}>
                <p className="numberOfTasks">{numberOfTasksCompleted} items left</p>

                <div className="taskActionBtnContainer flex">
                    <div className="primaryActions">
                        <button id="displayAllTasksBtn" className="actionBtn" style={{color: "#3F86B3"}}>All</button>
                        <button id="displayActiveTasksBtn" className="actionBtn">Active</button>
                        <button id="displayCompletedTasksBtn" className="actionBtn">Completed</button>
                    </div>
                    <div className="secondaryActions">
                        <button id="clearAllTasksBtn" className="actionBtn">Clear Completed</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TaskList;