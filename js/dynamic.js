var list = []
var selectedTask = ""

function selectTask(event){
    selectedTask = event.target.id
    if(event.target.style.textDecoration == "underline"){
        event.target.style.textDecoration = "none"
    }else{
        event.target.style.textDecoration = "underline"
    }
}

function mountList(){
    document.getElementById("listOfTodos").innerHTML = ""
    if(list.length > 0){
        list.forEach( tarefa => {
            let li = document.createElement("LI")
            li.addEventListener("click", selectTask)
            li.id = tarefa.id
            li.innerHTML = tarefa.tarefa
            if(tarefa.completada){
                li.style.textDecoration = "line-through"
            }
            document.getElementById("listOfTodos").appendChild(li)
        })
    }
}

function showAdd(){
    document.querySelector('.divAddTodo').style.display = "flex"
    document.querySelector('.divAddTodo').style.transform = "scale(1)"
}

function addTarefa(event){
    list.push({
        tarefa: document.getElementById("novaTarefa").value,
        completada: false,
        id: list.length
    })
    document.querySelector('.divAddTodo').style.display = "none"
    document.getElementById("novaTarefa").value = ""
    mountList()
    event.preventDefault()
}

function removeTask(){

    list = list.filter((task) => {
        if(task.id != selectedTask){
            if(task.id > selectedTask){
                task.id--
            }
            return true
        }else{
            return false
        }
    })
    
    mountList()
}

function checkAndUncheck(){
    list[selectedTask].completada = !list[selectedTask].completada
    mountList()
}