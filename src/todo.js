// This file will be used for application logic

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
    const itemArray = []
    return {
        title,
        itemArray
    }
}

export const addProject = (projectArray) => {
    const newProj = projectFactory(document.querySelector(`#project-title`).value)
    projectArray.push(newProj)
    // newProj.itemArray = []
}

export const deleteProject = (event, projectArray) => {
    const projectIndex = event.target.getAttribute(`project-index`)
    projectArray.splice(projectIndex, 1)
}

export const addTodo = (projectIndex, projectArray) => {
    const newItem = todoFactory(document.querySelector(`#item-title`).value, document.querySelector(`#item-description`).value, document.querySelector(`#item-dueDate`).value, document.querySelector(`#item-priority`).value, document.querySelector(`#item-notes`).value)
    const selectedProject = projectArray[projectIndex]
    selectedProject.itemArray.push(newItem)
}

export const deleteTodo = (event, projectArray) => {
     // We go up parent elements from the delete button to select the project index div and get its correlated project index position
     const projectIndex = event.target.parentElement.getAttribute(`project-index`)
     // We select the delete button to get its correlated item index posiition
     const itemIndex = event.target.getAttribute(`item-index`)
     // Then we select the correct project object inside the project array
     const selectedProject = projectArray[projectIndex]
     // Finally we access the itemArray inside of the correct project and splice out the Todo item
     selectedProject.itemArray.splice(itemIndex, 1)
}