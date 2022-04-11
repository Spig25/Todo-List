// This file will be used to manipulate DOM

import './style.css';
import { projectFactory, addTodo, addProject, deleteProject, deleteTodo } from './todo';
// import icon from `../src/noun-down-arrow-1786976.png`

const content = document.querySelector(`.content`)
const projectFormContainer = document.querySelector(`.project-form-container`)
const itemFormContainer = document.querySelector(`.item-form-container`)

const defaultProject = projectFactory(`Starting List`)
let projectArray = [defaultProject]


export const display = () => {
    content.innerHTML = ``
    console.log(projectArray)

    projectArray.forEach((e, index) => {
        const projectContainer = document.createElement(`div`)
        projectContainer.setAttribute(`project-index`, index)
        projectContainer.classList.add(`project-container`)
        content.appendChild(projectContainer)

        const projectTitle = document.createElement(`div`)
        projectTitle.setAttribute(`project-index`, index)
        projectTitle.classList.add(`project-title`)
        projectContainer.appendChild(projectTitle)
            const titleText = document.createElement(`div`)
            titleText.setAttribute(`project-index`, index)
            titleText.classList.add(`project-title`)
            titleText.textContent = e.title
            projectTitle.appendChild(titleText)
            // const dropdown = document.createElement(`img`)
            // dropdown.src = `../src/noun-down-arrow-1786976.png`
            // projectTitle.appendChild(dropdown)

        const itemContainer = document.createElement(`div`)
        itemContainer.setAttribute(`project-index`, index)
        itemContainer.classList.add(`item-container`)
        projectContainer.appendChild(itemContainer)

        const addItem = document.createElement(`button`)
        addItem.setAttribute(`project-index`, index)
        addItem.classList.add(`add-item`)
        addItem.textContent = `+Item`
        projectContainer.appendChild(addItem)

        const deleteProject = document.createElement(`button`)
        deleteProject.setAttribute(`project-index`, index)
        deleteProject.classList.add(`project-delete`)
        deleteProject.textContent = `Delete Project`
        projectContainer.appendChild(deleteProject)

        // Iterates through each project object's itemArray which contains the project's todos and then posts each todo property to the webpage.
        e.itemArray.forEach((e, index) => {
            const itemTitle = document.createElement(`div`)
            itemTitle.setAttribute(`item-index`, index)
            itemTitle.classList.add(`item-title`)
            itemTitle.textContent = e.title
            itemContainer.appendChild(itemTitle)

            if (e.description !== ``) {
                const itemDesc = document.createElement(`div`)
                itemDesc.setAttribute(`item-index`, index)
                itemDesc.classList.add(`item-description`)
                itemDesc.textContent = `Description: ${e.description}`
                itemContainer.appendChild(itemDesc)
            }
            
            if (e.dueDate !== ``) {
                const itemDue = document.createElement(`div`)
                itemDue.setAttribute(`item-index`, index)
                itemDue.classList.add(`item-dueDate`)
                itemDue.textContent = `Due Date: ${e.dueDate}`
                itemContainer.appendChild(itemDue)
            }

            if (e.priority !== ``) {
                const itemPriority = document.createElement(`div`)
                itemPriority.setAttribute(`item-index`, index)
                itemPriority.classList.add(`item-priority`)
                itemPriority.textContent = `Priority: ${e.priority}`
                itemContainer.appendChild(itemPriority)
            }

            if (e.notes !== ``) {
                const itemNotes = document.createElement(`div`)
                itemNotes.setAttribute(`item-index`, index)
                itemNotes.classList.add(`item-notes`)
                itemNotes.textContent = `Notes: ${e.notes}`
                itemContainer.appendChild(itemNotes)
            }

            const itemDelete = document.createElement(`button`)
            itemDelete.setAttribute(`item-index`, index)
            itemDelete.classList.add(`item-delete`)
            itemDelete.textContent = `Delete Item`
            itemContainer.appendChild(itemDelete)
        })
    })
}
display()

// When project/item form is submitted/cancelled out we run this function. Created this so that if future form cancel/submit logic needs to be changed it can all be done right here
const formOpenOrExit = (formContainer, addOrRemove) => {
    if (addOrRemove === `add`) {
        formContainer.classList.add(`show`)
    }
    if (addOrRemove === `remove`) {
        formContainer.classList.remove(`show`)
        if (formContainer === itemFormContainer) {
            // Each time item modal is displayed, a submit button is created. This makes sure it is deleted upon modal closure. This ensures that we dont keep adding submit buttons onto the modal infinitely.
            document.querySelector(`.item-submit`).remove()
        }
    }
}

document.querySelector(`.add-project`).addEventListener(`click`, () => {
    formOpenOrExit(projectFormContainer, `add`)
})
document.querySelector(`.project-submit`).addEventListener(`click`, () => {
    addProject(projectArray)
    display()
    formOpenOrExit(projectFormContainer, `remove`)
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-delete`)) {
        deleteProject(event, projectArray)
        display()
    }
})
document.querySelector(`.project-cancel`).addEventListener(`click`, () => {
    formOpenOrExit(projectFormContainer, `remove`)
})

// Adding item takes far more code than adding project because there is only one add project button vs many add item buttons. We need to be able to tell addTodo() which project we are adding an item to
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`add-item`)) {
        // Prevents add item button from being accessed with spacebar whilst inside of modal
        document.querySelector(`.add-item`).disabled = true
        formOpenOrExit(itemFormContainer, `add`)
        const button = document.createElement(`button`)
        button.classList.add(`item-submit`)
        button.textContent = `Submit`
        button.type = `button`
        // We pass the project index value on from the add-item button to the newly created item-submit button.
        button.setAttribute(`project-index`, event.target.getAttribute(`project-index`))
        document.querySelector(`.item-form`).appendChild(button)
    }
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-submit`)) {
        const button = document.querySelector(`.item-submit`)
        const projectIndex = button.getAttribute(`project-index`)
        // We use the previously created button value to tell addTodo() which project we are adding a todo item to.
        addTodo(projectIndex, projectArray)
        display()
        formOpenOrExit(itemFormContainer, `remove`)
    }
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-delete`)) {
        deleteTodo(event, projectArray)
        display()
    }
})
document.querySelector(`.item-cancel`).addEventListener(`click`, () => {
    formOpenOrExit(itemFormContainer, `remove`)
    document.querySelector(`.add-item`).disabled = false
})

// This controls dropdown functionality when clicking on a project
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-title`)) {
        const projectIndex = event.target.getAttribute(`project-index`)
        const itemContainer = document.querySelector(`.item-container`)
        if (itemContainer.getAttribute(`project-index`) === projectIndex){
            if (itemContainer.style.display === `none`) {
                itemContainer.style.display = `grid`
            }
            else {
                itemContainer.style.display = `none`
            }
        }
        
    }
})

// Disabled enter key
document.addEventListener(`keypress`, (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
    }
})