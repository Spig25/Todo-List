// This file will be used to manipulate DOM

import './style.css';
import { projectFactory, removeTodo } from './todo';
import { todoFactory } from './todo';
import { addProject } from './todo';
import { addTodo } from './todo';
import { deleteTodo } from './todo';
import { deleteProject } from './todo';

const content = document.querySelector(`.content`)
const projectFormContainer = document.querySelector(`.project-form-container`)
const itemFormContainer = document.querySelector(`.item-form-container`)

const defaultProject = projectFactory(`Starting List`)
defaultProject.itemArray = []
let projectArray = [defaultProject]


export const display = () => {
    content.innerHTML = ``
    console.log(projectArray)

    projectArray.forEach((e, index) => {
        const projectContainer = document.createElement(`div`)
        projectContainer.setAttribute(`project-index`, index)
        content.appendChild(projectContainer)

        const div = document.createElement(`div`)
        div.setAttribute(`project-index`, index)
        div.classList.add(`project-title`)
        div.textContent = e.title
        projectContainer.appendChild(div)

        const itemContainer = document.createElement(`div`)
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

            const itemDesc = document.createElement(`div`)
            itemDesc.setAttribute(`item-index`, index)
            itemDesc.classList.add(`item-description`)
            itemDesc.textContent = `Description: ${e.description}`
            itemContainer.appendChild(itemDesc)

            const itemDue = document.createElement(`div`)
            itemDue.setAttribute(`item-index`, index)
            itemDue.classList.add(`item-dueDate`)
            itemDue.textContent = `Due Date: ${e.dueDate}`
            itemContainer.appendChild(itemDue)

            const itemPriority = document.createElement(`div`)
            itemPriority.setAttribute(`item-index`, index)
            itemPriority.classList.add(`item-priority`)
            itemPriority.textContent = `Priority: ${e.priority}`
            itemContainer.appendChild(itemPriority)

            const itemNotes = document.createElement(`div`)
            itemNotes.setAttribute(`item-index`, index)
            itemNotes.classList.add(`item-notes`)
            itemNotes.textContent = `Notes: ${e.notes}`
            itemContainer.appendChild(itemNotes)

            const itemDelete = document.createElement(`button`)
            itemDelete.setAttribute(`item-index`, index)
            itemDelete.classList.add(`item-delete`)
            itemDelete.textContent = `Delete`
            itemContainer.appendChild(itemDelete)
        })
    })
}
display()

document.querySelector(`.project-submit`).addEventListener(`click`, () => {
    addProject(projectArray)
    projectFormContainer.classList.remove(`show`)
})

document.querySelector(`.add-project`).addEventListener(`click`, () => {
    projectFormContainer.classList.add(`show`)
})

document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-delete`)) {
        deleteProject(event, projectArray)
        display()
    }
})

document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`add-item`)) {
        itemFormContainer.classList.add(`show`)
        const button = document.createElement(`button`)
        button.classList.add(`item-submit`)
        button.type = `button`
        const projectIndex = event.target.getAttribute(`project-index`)
        button.setAttribute(`project-index`, projectIndex)
        document.querySelector(`.item-form`).appendChild(button)
    }
})

document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-submit`)) {
        const button = document.querySelector(`.item-submit`)
        const projectIndex = button.getAttribute(`project-index`)
        addTodo(projectIndex, projectArray)
        itemFormContainer.classList.remove(`show`)
        button.remove()
    }
})


document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-delete`)) {
        deleteTodo(event, projectArray)
        display()
    }
})