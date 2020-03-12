var list = []

function mountList(){
    document.getElementById("listOfTodos").innerHTML = ""

    if(list.length > 0){
        list.forEach( tarefa => {
            let li = document.createElement("LI")
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
        completada: false
    })
    document.querySelector('.divAddTodo').style.display = "none"
    document.getElementById("novaTarefa").value = ""
    mountList()
    event.preventDefault()
}