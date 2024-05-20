import { useState } from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "./Task";

function TaskList(props) {

    // Tasks array of objects.
    const tasks = props.taskList;

    // Active tasks array.
    const activeTasks = tasks.filter(task => task.taskStatus === "Incomplete");

    // Completed tasks array.
    const completedTasks = tasks.filter(task => task.taskStatus === "Completed");

    // Number of tasks Completed in taskList.
    const numberOfTasksCompleted = tasks.length - completedTasks.length;


    // This function displays all the tasks on screen.
    const displayAllTasks = () => {
        setActiveTasksView(null);
        setCompletedTasksView(null);
    }

    // This function creates a view for active tasks and displays them all screen.
    const displayActiveTasks = () => {
        const view = (
            <>
            {activeTasks.map(task => {
                return <Task id={task.id} title={task.title} taskStatus={task.taskStatus} theme={props.theme} key={task.id} removeTask={props.removeTask} updateTaskStatus={props.updateTaskStatus} />
            })}
            </>
        )
        setActiveTasksView(view);
        setCompletedTasksView(null);
    }

    // This function creates a view for completed tasks and displays them on screen.
    const displayCompletedTasks = () => {
        const view = (
            <>
            {completedTasks.map(task => {
                return <Task id={task.id} title={task.title} taskStatus={task.taskStatus} theme={props.theme} key={task.id} removeTask={props.removeTask} updateTaskStatus={props.updateTaskStatus} />
            })}
            </>
        )
        setActiveTasksView(null);
        setCompletedTasksView(view);
    }

    // All tasks view.
    const allTasksView = (
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map(task => {
                return <Task id={task.id} title={task.title} taskStatus={task.taskStatus} theme={props.theme} key={task.id} removeTask={props.removeTask} updateTaskStatus={props.updateTaskStatus} />
            })}
        </SortableContext>
    )

    // Initializing state for activeTasksView and completedTasksView with null.
    const [activeTasksView, setActiveTasksView] = useState(null);
    const [completedTasksView, setCompletedTasksView] = useState(null);


    return (
        <>
        <div id="taskList">
            {activeTasksView || completedTasksView || allTasksView}
            <div className={`taskListFooter flex ${props.theme}`}>
                <p className="numberOfTasks">{numberOfTasksCompleted} items left</p>

                <div className="taskActionBtnContainer flex">
                    <div className="primaryActions">
                        <button id="displayAllTasksBtn" className="actionBtn" style={{color: "#3F86B3"}} onClick={displayAllTasks}>All</button>
                        <button id="displayActiveTasksBtn" className="actionBtn" onClick={displayActiveTasks}>Active</button>
                        <button id="displayCompletedTasksBtn" className="actionBtn" onClick={displayCompletedTasks}>Completed</button>
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