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
    return {
        title
    }
}

export const addProject = (projectArray) => {
    const newProj = projectFactory(prompt(``))
    projectArray.push(newProj)
    newProj.itemArray = []
    console.log(newProj)
    console.log(projectArray)
}

export const addTodo = (event, projectArray) => {
    const newItem = todoFactory(`test`, `blah balh blah`, `3/17/2030`, `Urgent`, `blah blah blah`)
    const index = event.target.getAttribute(`project-index`)
    const selectObject = projectArray[index]
    selectObject.itemArray.push(newItem)
    console.log(selectObject.itemArray)
}