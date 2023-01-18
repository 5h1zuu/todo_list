import { inboxTab } from "./inbox"
import { thisWeekTab } from "./this_week"
import { todayTab } from "./today"
import { createTodo } from "./createTodo"
import { createProject } from "./createProject"
import { toDoLogic } from "./toDoFunction"
import { loopValue  } from "./createProject"



const inboxDiv = document.getElementById("inbox")
const todayDiv = document.getElementById("today")
const thisWeekDiv = document.getElementById("thisWeek")
const userDiv = document.getElementById("userDiv")
const mainContent = document.getElementById("mainContent")
const todos1 = document.getElementById("todos1")
const todos2 = document.getElementById("todos2")
const todos3 = document.getElementById("todos3")
const created = document.getElementById("created")
const addProject = document.getElementById("addProject")

let tabValue = 1

inboxTab()
createTodo()

//conditional to check which one of the functions below to use
toDoLogic()
createProject()



function resetDivs(){
    for(let i = 3; i <= loopValue; i++){
        const newTodo = document.getElementById(`todos${i}`)
        newTodo.style.display = "none"    
    }
}

todos1.style.display = "block"
todos2.style.display = "none"
todos3.style.display = "none"

inboxDiv.addEventListener("click", () =>{
    resetDivs()
    inboxTab()
    todos1.style.display = "block"
    todos2.style.display = "none"
    todos3.style.display = "none"
    return tabValue = 1
    //store data
  

})

todayDiv.addEventListener("click", ()=>{    
    resetDivs()
    todayTab()
    todos1.style.display = "none"
    todos2.style.display = "block"
    todos3.style.display = "none"
    return tabValue = 2
    //store data

    
})

thisWeekDiv.addEventListener("click", ()=>{
    resetDivs()
    thisWeekTab()
    todos1.style.display = "none"
    todos2.style.display = "none"
    todos3.style.display = "block"
    return tabValue = 3
    //store data


})




export { tabValue }