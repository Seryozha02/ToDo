import Form from "./Form";
function List({todos,onCompleted,onEdit,onDelete,inputText,onUpdate}){
    return(        
               <div className='todoList'>
                   {todos.map((todo) => {
                     return  todo.isEditMode?<Form inputText={inputText}
                     onSubmit={onUpdate} key={todo.id}
                     />:
                     <div  className='todo-row' key={todo.id}>
                   
                    <input type="checkbox" checked={todo.isChecked} onChange={()=>{
                         onCompleted(todo.id);
                    }} />
                    {todo.value}                   
                   
                    <button onClick={()=>{ onEdit(todo.id)}}>Edit</button>
                    <button onClick={()=>{onDelete(todo.id)}}>Delete</button>
                </div>
            })
            }
             </div>
    )
}
export default List;.todoList{
    list-style-type: none;
}

    .todo-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4px auto;
        color: #fff;
        background: #008b8b;
        padding: 16px;
        width: 90%;
      }