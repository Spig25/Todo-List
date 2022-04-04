import './style.css';
import { project } from './todo';
import { todoItem } from './todo';

const main = document.querySelector(`.main`)

const defaultProject = project(`Starting List`)
console.log(defaultProject)