export default function ShowTask({taskList, setTaskList, task, setTask}){
    // const tasks = [{id:10001, name:"Task A" , date: "19:44:43 01/04/2026"},
    // {id:10001, name:"Task B" , date: "19:44:43 01/04/2026"},
    // {id:10001, name:"Task C" , date: "19:44:43 01/04/2026"}]
    function handleEdit(id){
        const selectedTask = taskList.find((todo)=>todo.id===id);
setTask(selectedTask)
    }
    function handleDelete(id){
        const updatedTaskList = taskList.filter((todo)=> todo.id!==id);
setTaskList(updatedTaskList);
    }
    return(
        <>
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
            </div>
            <ul>
           {taskList.map((todo) => (
            <li key={todo.id}>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <i className="bi bi-pencil-square" onClick={()=>handleEdit(todo.id)}></i>
                    <i className="bi bi-trash" onClick={()=>handleDelete(todo.id)}></i>
                </li>
           )
        )}
            </ul>
        </section>
        </>
    )
}