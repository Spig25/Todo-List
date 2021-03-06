// This file will be used to manipulate DOM

import './style.css';
import { projectFactory, addTodo, addProject, deleteProject, deleteTodo, editProject, editTodo } from './todo';
// import icon from `../src/noun-down-arrow-1786976.png`

const content = document.querySelector(`.content`)
const projectFormContainer = document.querySelector(`.project-form-container`)
const projectFormEdit = document.querySelector(`.project-form-edit-container`)
const itemFormContainer = document.querySelector(`.item-form-container`)
const itemFormEdit = document.querySelector(`.item-form-edit-container`)
const view = document.querySelector(`.view`)
const invalidProject = document.querySelector(`#invalid-project`)
const invalidProjectEdit = document.querySelector(`#invalid-project-edit`)
const invalidItem = document.querySelector(`#invalid-item`)
const invalidItemEdit = document.querySelector(`#invalid-item-edit`)

const defaultProject = projectFactory(`Starting List`)
let projectArray = [defaultProject]


const display = () => {
    content.innerHTML = ``
    view.innerHTML = ``
    console.log(projectArray)

    projectArray.forEach((e, projectIndex) => {
        const projectContainer = document.createElement(`div`)
        projectContainer.setAttribute(`project-index`, projectIndex)
        projectContainer.classList.add(`project-container`)
        content.appendChild(projectContainer)

        const projectTitle = document.createElement(`div`)
        projectTitle.setAttribute(`project-index`, projectIndex)
        projectTitle.classList.add(`project-title`)
        projectContainer.appendChild(projectTitle)
            const titleText = document.createElement(`div`)
            titleText.setAttribute(`project-index`, projectIndex)
            titleText.classList.add(`project-title`)
            titleText.textContent = `${e.title} - ${e.itemArray.length}`
            projectTitle.appendChild(titleText)
            // const dropdown = document.createElement(`img`)
            // dropdown.src = `../src/noun-down-arrow-1786976.png`
            // projectTitle.appendChild(dropdown)

        const addItem = document.createElement(`button`)
        addItem.setAttribute(`project-index`, projectIndex)
        addItem.classList.add(`add-item`)
        addItem.textContent = `+Item`
        projectContainer.appendChild(addItem)

        const editProject = document.createElement(`button`)
        editProject.setAttribute(`project-index`, projectIndex)
        editProject.classList.add(`project-edit-open`)
        editProject.textContent = `Edit Project`
        projectContainer.appendChild(editProject)
        
        const deleteProject = document.createElement(`button`)
        deleteProject.setAttribute(`project-index`, projectIndex)
        deleteProject.classList.add(`project-delete`)
        deleteProject.textContent = `Delete Project`
        projectContainer.appendChild(deleteProject)


        const itemContainer = document.createElement(`div`)
        itemContainer.setAttribute(`project-index`, projectIndex)
        itemContainer.classList.add(`item-container`)
        view.appendChild(itemContainer)

        const viewTitle = document.createElement(`div`)
        viewTitle.setAttribute(`project-index`, projectIndex)
        viewTitle.classList.add(`project-title`)
        viewTitle.textContent = e.title
        itemContainer.appendChild(viewTitle)

        // Iterates through each project object's itemArray which contains the project's todos and then posts each todo property to the webpage.
        e.itemArray.forEach((e, itemIndex) => {
            const itemTitle = document.createElement(`div`)
            itemTitle.setAttribute(`item-index`, itemIndex)
            itemTitle.classList.add(`item-title`)
            itemTitle.textContent = e.title
            itemContainer.appendChild(itemTitle)

            if (e.description !== ``) {
                const itemDesc = document.createElement(`div`)
                itemDesc.setAttribute(`item-index`, itemIndex)
                itemDesc.setAttribute(`project-index`, projectIndex)
                itemDesc.classList.add(`item-description`)
                itemDesc.textContent = `Description: ${e.description}`
                itemContainer.appendChild(itemDesc)
            }
            
            if (e.dueDate !== ``) {
                const itemDue = document.createElement(`div`)
                itemDue.setAttribute(`item-index`, itemIndex)
                itemDue.setAttribute(`project-index`, projectIndex)
                itemDue.classList.add(`item-dueDate`)
                itemDue.textContent = `Due Date: ${e.dueDate}`
                itemContainer.appendChild(itemDue)
            }

            if (e.priority !== ``) {
                const itemPriority = document.createElement(`div`)
                itemPriority.setAttribute(`item-index`, itemIndex)
                itemPriority.setAttribute(`project-index`, projectIndex)
                itemPriority.classList.add(`item-priority`)
                itemPriority.textContent = `Priority: ${e.priority}`
                itemContainer.appendChild(itemPriority)

                if (e.priority === `High`) {
                    itemPriority.style.color = `red`
                    itemPriority.style.fontWeight = `bold`
                }
                if (e.priority === `Normal`) {
                    itemPriority.style.color = `blue`
                }
                if (e.priority === `Low`) {
                    itemPriority.style.color = `green`
                }
            }

            if (e.notes !== ``) {
                const itemNotes = document.createElement(`div`)
                itemNotes.setAttribute(`item-index`, itemIndex)
                itemNotes.setAttribute(`project-index`, projectIndex)
                itemNotes.classList.add(`item-notes`)
                itemNotes.textContent = `Notes: ${e.notes}`
                itemContainer.appendChild(itemNotes)
            }

            const editItem = document.createElement(`button`)
            editItem.setAttribute(`item-index`, itemIndex)
            editItem.setAttribute(`project-index`, projectIndex)
            editItem.classList.add(`item-edit-open`)
            editItem.textContent = `Edit Item`
            itemContainer.appendChild(editItem)

            const itemDelete = document.createElement(`button`)
            itemDelete.setAttribute(`item-index`, itemIndex)
            itemDelete.setAttribute(`project-index`, projectIndex)
            itemDelete.classList.add(`item-delete`)
            itemDelete.textContent = `Delete Item`
            itemContainer.appendChild(itemDelete)
        })
    })
    // Hides all project items
    const itemContainerNode = document.querySelectorAll(`.item-container`)
    itemContainerNode.forEach((e) => {
        e.style.display = `none`
    })
}
display()

// Displays the project item(s) that was just manipulated
const displayCurrent = (event) => {
    const projectIndex = event.target.getAttribute(`project-index`)
    const itemContainerNode = document.querySelectorAll(`.item-container`)
    // Iterates through node list of item-containers until we reach the one we clicked on then executes our dropdown style change.
    itemContainerNode.forEach((e) => {
        if (e.getAttribute(`project-index`) === projectIndex){
            e.style.display  = `flex`
        }
        else {
            e.style.display = `none`
        }
    })
}

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
        if (formContainer === projectFormEdit) {
            // Each time item modal is displayed, a submit button is created. This makes sure it is deleted upon modal closure. This ensures that we dont keep adding submit buttons onto the modal infinitely.
            document.querySelector(`.project-edit-submit`).remove()
        }
        if (formContainer === itemFormEdit) {
            // Each time item modal is displayed, a submit button is created. This makes sure it is deleted upon modal closure. This ensures that we dont keep adding submit buttons onto the modal infinitely.
            document.querySelector(`.item-edit-submit`).remove()
        }
    }
}

const clearForms = () => {
    document.querySelector(`#project-title`).value = ``
    document.querySelector(`#project-title-edit`).value = ``
    document.querySelector(`#item-title`).value = ``
    document.querySelector(`#item-description`).value = ``
    document.querySelector(`#item-dueDate`).value = ``
    document.querySelector(`#item-priority`).value = ``
    document.querySelector(`#item-notes`).value = ``
    document.querySelector(`#item-title-edit`).value = ``
    document.querySelector(`#item-description-edit`).value = ``
    document.querySelector(`#item-dueDate-edit`).value = ``
    document.querySelector(`#item-priority-edit`).value = ``
    document.querySelector(`#item-notes-edit`).value = ``
}



document.querySelector(`.add-project`).addEventListener(`click`, () => {
    invalidProject.style.display = `none`
    formOpenOrExit(projectFormContainer, `add`)
})
document.querySelector(`.project-submit`).addEventListener(`click`, () => {
    if (document.getElementById(`project-title`).value === ``) {
        invalidProject.style.display = `grid`
    }
    else {
        addProject(projectArray)
        display()
        formOpenOrExit(projectFormContainer, `remove`)
        clearForms()
    }
})



document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-edit-open`)) {
        const projectIndex = event.target.getAttribute(`project-index`)

        document.querySelector(`#project-title-edit`).value = projectArray[projectIndex].title

        invalidProjectEdit.style.display = `none`
        document.querySelector(`.project-edit-open`).disabled = true
        formOpenOrExit(projectFormEdit, `add`)
        
        const button = document.createElement(`button`)
        button.classList.add(`project-edit-submit`)
        button.textContent = `Submit`
        button.type = `button`

        button.setAttribute(`project-index`, projectIndex)
        document.querySelector(`.project-form-edit`).appendChild(button)
    }
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-edit-submit`)) {
        if (document.getElementById(`project-title-edit`).value === ``) {
            invalidProjectEdit.style.display = `grid`
        }
        else {
            editProject(event, projectArray)
            formOpenOrExit(projectFormEdit, `remove`)
            display()
            clearForms()
        }
    }
})
document.querySelector(`.project-edit-cancel`).addEventListener(`click`, () => {
    formOpenOrExit(projectFormEdit, `remove`)
    document.querySelector(`.project-edit-open`).disabled = false
    clearForms()
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
        // Make priority default to normal
        document.querySelector(`#item-priority`).value = `Normal`

        displayCurrent(event)
        invalidItem.style.display = `none`
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
        
        if (document.getElementById(`item-title`).value === ``) {
            invalidItem.style.display = `grid`
        }
        // We use the previously created button value to tell addTodo() which project we are adding a todo item to.
        else {
            addTodo(projectIndex, projectArray)
            display()
            displayCurrent(event)
            formOpenOrExit(itemFormContainer, `remove`)
            clearForms()
        }
    }
})


// Edit item WIP
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-edit-open`)) {
        const projectIndex = event.target.getAttribute(`project-index`)
        const itemIndex = event.target.getAttribute(`item-index`)

        // Updates the form values to match the values of the item that is currently being edited
        document.querySelector(`#item-title-edit`).value = projectArray[projectIndex].itemArray[itemIndex].title
        document.querySelector(`#item-description-edit`).value = projectArray[projectIndex].itemArray[itemIndex].description
        document.querySelector(`#item-dueDate-edit`).value = projectArray[projectIndex].itemArray[itemIndex].dueDate
        document.querySelector(`#item-priority-edit`).value = projectArray[projectIndex].itemArray[itemIndex].priority
        document.querySelector(`#item-notes-edit`).value = projectArray[projectIndex].itemArray[itemIndex].notes

        invalidItemEdit.style.display = `none`
        document.querySelector(`.item-edit-open`).disabled = true
        formOpenOrExit(itemFormEdit, `add`)
        
        const button = document.createElement(`button`)
        button.classList.add(`item-edit-submit`)
        button.textContent = `Submit`
        button.type = `button`

        // Trying to figure set up edit button properly. Needs to have appropriate info for the editTodo() to import so it targets the correct item in the correct project
        button.setAttribute(`project-index`, projectIndex)
        button.setAttribute(`item-index`, itemIndex)
        document.querySelector(`.item-form-edit`).appendChild(button)
    }
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-edit-submit`)) {
        const button = document.querySelector(`.item-edit-submit`)
        const projectIndex = button.getAttribute(`project-index`)
        const itemIndex = button.getAttribute(`item-index`)


        if (document.getElementById(`item-title-edit`).value === ``) {
            invalidItemEdit.style.display = `grid`
        }
        else {
            editTodo(projectIndex, projectArray, itemIndex)
            formOpenOrExit(itemFormEdit, `remove`)
            display()
            displayCurrent(event)
            clearForms()
        }
    }
})
document.querySelector(`.item-edit-cancel`).addEventListener(`click`, () => {
    formOpenOrExit(itemFormEdit, `remove`)
    document.querySelector(`.item-edit-open`).disabled = false
    clearForms()
})



document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-delete`)) {
        deleteTodo(event, projectArray)
        display()
        displayCurrent(event)
    }
})
document.querySelector(`.item-cancel`).addEventListener(`click`, () => {
    formOpenOrExit(itemFormContainer, `remove`)
    document.querySelector(`.add-item`).disabled = false
    clearForms()
})



// This controls dropdown functionality when clicking on a project
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-title`)) {
        const projectIndex = event.target.getAttribute(`project-index`)
        const itemContainerNode = document.querySelectorAll(`.item-container`)
        // Iterates through node list of item-containers until we reach the one we clicked on then executes our dropdown style change.
        itemContainerNode.forEach((e) => {
            if (e.getAttribute(`project-index`) === projectIndex){
                e.style.display  = `flex`
            }
            else {
                e.style.display = `none`
            }
        })
    }
})

// Disabled enter key
document.addEventListener(`keypress`, (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
    }
})