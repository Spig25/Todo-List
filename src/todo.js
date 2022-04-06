// This file will be used for application logic

import { display } from "."

export const todoFactory = (title, description, dueDate, priority, notes) => {
    
    return {
        title,
        description,
        dueDate,
        priority,
        notes
    }
}

export const projectFactory = (title) => {
    return {
        title
    }
}

export const addProject = (projectArray) => {
    const newProj = projectFactory(document.querySelector(`#project-title`).value)
    projectArray.push(newProj)
    newProj.itemArray = []
    console.log(newProj)
    console.log(projectArray)
    display()
}

export const deleteProject = (event, projectArray) => {
    const projectIndex = event.target.getAttribute(`project-index`)
    projectArray.splice(projectIndex, 1)
}

export const addTodo = (projectIndex, projectArray) => {
    const newItem = todoFactory(document.querySelector(`#item-title`).value, document.querySelector(`#item-description`).value, document.querySelector(`#item-dueDate`).value, document.querySelector(`#item-priority`).value, document.querySelector(`#item-notes`).value)
    const selectedProject = projectArray[projectIndex]
    selectedProject.itemArray.push(newItem)
    console.log(selectedProject.itemArray)
    display()
}

export const deleteTodo = (event, projectArray) => {
     // We go up parent elements twice from the delete button to select the project index div and get its correlated project index position
     const projectIndex = event.target.parentElement.parentElement.getAttribute(`project-index`)
     // We select the delete button to get its correlated item index posiition
     const itemIndex = event.target.getAttribute(`item-index`)
     // Then we select the correct project object inside the project array
     const selectedProject = projectArray[projectIndex]
     // Finally we access the itemArray inside of the correct project and splice out the Todo item
     selectedProject.itemArray.splice(itemIndex, 1)
     console.log(projectIndex)
     console.log(itemIndex)
}