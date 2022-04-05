// This file will be used to manipulate DOM

import './style.css';
import { projectFactory } from './todo';
import { todoFactory } from './todo';
import { addProject } from './todo';
import { addTodo } from './todo';

const content = document.querySelector(`.content`)
const addProjBtn = document.querySelector(`.add-project`)

const defaultProject = projectFactory(`Starting List`)
defaultProject.itemArray = []
let projectArray = [defaultProject]

const display = () => {
    content.innerHTML = ``
    console.log(projectArray)

    projectArray.forEach((e, index) => {
        const div = document.createElement(`div`)
        div.setAttribute(`project-index`, index)
        div.classList.add(`project-title`)
        div.textContent = e.title
        content.appendChild(div)

        const itemContainer = document.createElement(`div`)
        itemContainer.classList.add(`item-container`)
        content.appendChild(itemContainer)

        const button = document.createElement(`button`)
        button.setAttribute(`project-index`, index)
        button.classList.add(`add-item`)
        button.textContent = `+`
        content.appendChild(button)

        e.itemArray.forEach((e, index) => {
            const itemTitle = document.createElement(`div`)
            itemTitle.setAttribute(`item-index`, index)
            itemTitle.classList.add(`item-title`)
            itemTitle.textContent = e.title
            itemContainer.appendChild(itemTitle)

            const itemDesc = document.createElement(`div`)
            itemDesc.setAttribute(`item-index`, index)
            itemDesc.classList.add(`item-title`)
            itemDesc.textContent = `Description: ${e.description}`
            itemContainer.appendChild(itemDesc)

            const itemDue = document.createElement(`div`)
            itemDue.setAttribute(`item-index`, index)
            itemDue.classList.add(`item-title`)
            itemDue.textContent = `Due Date: ${e.dueDate}`
            itemContainer.appendChild(itemDue)

            const itemPriority = document.createElement(`div`)
            itemPriority.setAttribute(`item-index`, index)
            itemPriority.classList.add(`item-title`)
            itemPriority.textContent = `Priority: ${e.priority}`
            itemContainer.appendChild(itemPriority)

            const itemNotes = document.createElement(`div`)
            itemNotes.setAttribute(`item-index`, index)
            itemNotes.classList.add(`item-title`)
            itemNotes.textContent = `Notes: ${e.notes}`
            itemContainer.appendChild(itemNotes)
        })
    })
}
display()

addProjBtn.addEventListener(`click`, () => {
    addProject(projectArray)
    display()
})

document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`add-item`)) {
        addTodo(event, projectArray)
        display()
    }
})