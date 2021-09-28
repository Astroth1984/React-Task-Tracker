import { Task } from "./Task"
const Tasks = ({ tasks, onDelete, onToggle }) => {
    //Note map() to create a list of objects
    return (
        <>
            {
                tasks.map((task) => (
                    <Task key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}>
                    </Task>

                ))
            }

        </>
    )
}


export default Tasks
