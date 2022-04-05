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

const display = (() => {
    content.innerHTML = ``
    console.log(projectArray)

    projectArray.forEach((e, index) => {
        const div = document.createElement(`div`)
        div.setAttribute(`project-index`, index)
        div.classList.add(`project-title`)
        div.textContent = e.title
        content.appendChild(div)

        const button = document.createElement(`button`)
        button.setAttribute(`project-index`, index)
        button.classList.add(`add-item`)
        button.textContent = `+`
        content.appendChild(button)
    })
})()

addProjBtn.addEventListener(`click`, () => {
    addProject(projectArray)
    display()
})

document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`add-item`)) {
        addTodo(event, projectArray)
    }
})