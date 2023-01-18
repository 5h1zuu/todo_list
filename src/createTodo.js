function createTodo(){
    const mainContent = document.getElementById("mainContent")
    
    const createTask = document.createElement("div")
    createTask.setAttribute("id", "createTask")
    createTask.innerText = "+ Add Task"
    createTask.style.display = "block"

    const createTask2 = document.createElement("div")
    createTask2.setAttribute("id", "createTask2")
    createTask2.innerText = "+ Add Task"
    createTask2.style.display = "none"
    
    mainContent.appendChild(createTask)
    mainContent.appendChild(createTask2)

}

export { createTodo }