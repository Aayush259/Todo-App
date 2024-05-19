import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "./Task";

function TaskList(props) {

    // Tasks array of objects.
    const tasks = props.taskList;

    return (
        <>
        <div id="taskList">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map(task => {
                    return <Task id={task.id} title={task.title} taskStatus={task.taskStatus} theme={props.theme} key={task.id} removeTask={props.removeTask} updateTaskStatus={props.updateTaskStatus} />
                })}
            </SortableContext>
        </div>
        </>
    )
}

export default TaskList;