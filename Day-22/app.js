import {TaskManager} from "./taskmanager.js";

document.getElementById("done").addEventListener("click",() => {
    completed();
});

const manager = new TaskManager();
manager.addTask("Learn Javascript Modules");
console.log(manager.tasks);

function completed(){
    manager.addTask("Classes", true);
    console.log(manager.tasks);

}
