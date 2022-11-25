import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
}

const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];       //carga lo que tengo grabado en local o carga lista vacia
    //console.log(taskList);
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    const date = calendar.value;
    /*
    https://momentjs.com/
    console.log(moment(date).format("DD/MM/YYYY"));
    */
    const dateFormat = moment(date).format("DD/MM/YYYY");

    const value = input.value;

    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');

    //console.log(value, dateFormat);
    const taskObj = {
        value,
        dateFormat
    };

    taskList.push(taskObj);

    //sessionStorage.setItem("tasks", JSON.stringify(taskObj));
    localStorage.setItem("tasks", JSON.stringify(taskList));

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;

    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    //console.log(dateElement);
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;

};