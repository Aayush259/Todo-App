import Task from "./Task";

function TaskList(props) {

    // Tasks array of objects.
    const tasks = props.taskList;

    return (
        <>
        <div id="taskList">
            {tasks.map(task => {
                return <Task id={task.id} title={task.title} theme={props.theme} key={task.id} />
            })}
        </div>
        </>
    )
}

export default TaskList;