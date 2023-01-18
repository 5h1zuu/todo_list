import { tabValue } from "./index"
import { createTodo } from "./createTodo"

let loopValue = 3


function createProject(){
    const created = document.getElementById("created")
    const mainContent = document.getElementById("mainContent")
    const createTask2 = document.getElementById("createTask2")
    const createTask = document.getElementById("createTask")
    let counter = 3

        createTask2.addEventListener("click", ()=>{
               for(let i = 3; i <= loopValue; i++){
                const newTodo = document.getElementById(`todos${i}`)
                if(newTodo.getAttribute("data-value") == counter){

                    function toDoObject(){
                        this.title = document.getElementById("title").value
                        this.description = document.getElementById("description").value
                        this.priority = document.getElementById("priority").value
                    }
                    const userDiv = document.createElement("div")
                    userDiv.setAttribute("id", "userDiv")
                    //userDiv.classList.add("userDiv")
                    
                    userDiv.setAttribute("data-value", counter)
                    newTodo.appendChild(userDiv)
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
                }
            }
            })

    const addProject = document.createElement("div")
    addProject.setAttribute("id", "addProject")
    addProject.innerText = "+ Add Project"

        created.appendChild(addProject)

        addProject.addEventListener("click" , () =>{  

            const projectName = document.createElement("input")
            const pushProject = document.createElement("button")
            pushProject.innerText = "Add Project"
            created.appendChild(projectName)
            created.appendChild(pushProject)

            pushProject.addEventListener("click", ()=>{
                counter++
                loopValue++
                tabValue = 0
            
                const projectTitle = document.createElement('div')
                projectTitle.innerText = projectName.value
                
                console.log(counter)

                created.appendChild(projectTitle)
                created.removeChild(projectName)
                created.removeChild(pushProject)
                
                let projectVar;
                let todoVar;
                
                function madeProject(){
                    //create another constructor for project
                    const newTodo = document.createElement("div")
                    mainContent.appendChild(newTodo)
                    projectTitle.setAttribute("id", `project${counter}`)
                    projectTitle.setAttribute("data-value", counter)
                    newTodo.setAttribute("id", `todos${loopValue}`)//changed counter to loop value
                    newTodo.setAttribute("data-value", counter)
                    newTodo.classList.add("DIV")
                    newTodo.style.display = "none"  

                    projectVar = projectTitle.getAttribute("data-value")
                    todoVar = newTodo.getAttribute("data-value")

                }

                madeProject()
                
   
            projectTitle.addEventListener("click", () =>{
                const todos1 = document.getElementById("todos1").style.display = "none"
                const todos2 = document.getElementById("todos2").style.display = "none"
                const todos3 = document.getElementById("todos3").style.display = "none"
                tabValue = 0
                const tabTitle = document.getElementById("tabTitle")
                tabTitle.innerText = projectName.value
                counter = projectTitle.getAttribute("data-value")
                
                    createTask2.style.display = "none"
                    createTask.style.display = "block"
                
                    createTask2.style.display = "block"
                    createTask.style.display = "none"

                for(let i = 3; i <= loopValue; i++){
                    const newTodo = document.getElementById(`todos${i}`)
                    newTodo.style.display = "none"             

                    if(newTodo.getAttribute("data-value") == counter){
                        newTodo.style.display = "block"
                    }
                }
            })

        })

    })
    
}

export { createProject }
export { loopValue }


