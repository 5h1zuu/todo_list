import { tabValue } from "./index"

function toDoLogic(){
    const mainContent = document.getElementById("mainContent")
    const createTask = document.getElementById("createTask")
    const todos1 = document.getElementById("todos1")
    const todos2 = document.getElementById("todos2")
    const todos3 = document.getElementById("todos3")
    const createTask2 = document.getElementById("createTask2")
    const inboxDiv = document.getElementById("inbox")
    const todayDiv = document.getElementById("today")
    const thisWeekDiv = document.getElementById("thisWeek")

    inboxDiv.addEventListener("click", () =>{
        createTask.style.display = "block"
        createTask2.style.display = "none"
    })

    todayDiv.addEventListener("click", () =>{
        createTask.style.display = "block"
        createTask2.style.display = "none"
    })

    thisWeekDiv.addEventListener("click", () =>{
        createTask.style.display = "block"
        createTask2.style.display = "none"
    })

    

  
    createTask.addEventListener("click", ()=>{

        function toDoObject(){
            this.title = document.getElementById("title").value
            this.description = document.getElementById("description").value
            this.priority = document.getElementById("priority").value
        }

        const userDiv = document.createElement("div")
        userDiv.setAttribute("id", "userDiv")

        if(tabValue ==1){
            todos1.appendChild(userDiv)
            userDiv.setAttribute("data-value", 1)
        }else if(tabValue == 2){
            todos2.appendChild(userDiv)
            userDiv.setAttribute("data-value", 2)
        }else if(tabValue == 3){
            todos3.appendChild(userDiv)
            userDiv.setAttribute("data-value", 3)
        }


        const title = document.createElement("input")
        title.setAttribute("id", "title")
        userDiv.appendChild(title)

        const description = document.createElement("input")
        description.setAttribute("id", "description")
        userDiv.appendChild(description)

        const priority = document.createElement("input")
        priority.setAttribute("id", "priority")
        userDiv.appendChild(priority)


        const addBtn = document.createElement('button')
        addBtn.innerText = "add todo"
        userDiv.appendChild(addBtn)



        addBtn.addEventListener("click", ()=>{

            let newObject = new toDoObject()

            const todoTitle = document.createElement("p")
            todoTitle.classList.add("lists")
            todoTitle.innerText = newObject.title
            const todoDescription = document.createElement("p")
            todoDescription.classList.add("lists")
            todoDescription.innerText = newObject.description
            const todoPriority = document.createElement("p")
            todoPriority.classList.add("lists")
            todoPriority.innerText = newObject.priority

            userDiv.removeChild(title)
            userDiv.removeChild(description)
            userDiv.removeChild(priority)
            userDiv.removeChild(addBtn)

            userDiv.appendChild(todoTitle)
            userDiv.appendChild(todoDescription)
            userDiv.appendChild(todoPriority)

        })
    })

    
}


export { toDoLogic }