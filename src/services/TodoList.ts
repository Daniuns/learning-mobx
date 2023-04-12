
import { action, computed, makeObservable, observable } from "mobx";

interface ITask {
    id: number;
    title: string;
    completed: boolean;
}
interface ITodoList {
    tasks: ITask[];
    addTask: (task: ITask) => void;
    completeTask: (id: number) => void;
} 

// const todoList = ():ITodoList => {
//     return {
//         tasks: [],
//         addTask(task: { id: number, title: string, completed: boolean }) {
//             this.tasks.push({id: Math.random(), title: task.title, completed: false });
//         },
//         completeTask(id: number) {
//             const filteredTasks = this.tasks.filter(t => t.id !== id);
//             this.tasks = filteredTasks;
//         }
//     }
// }

// export default todoList;

class TodoList {
    tasks: ITask[] = [{
        id: Math.random(),
        title: 'nova tarefa',
        completed: false
      }];

    constructor(){
        makeObservable(this, {
            tasks: observable,
            getTasks: computed,
            addTask: action
        })
    }

    get getTasks() {
        return this.tasks;
    }

    addTask(task: { id: number, title: string, completed: boolean }) {
        console.log("vamos adicionar uma task");

        const newTask = { 
            id: Math.random(), 
            title: task.title, 
            completed: false 
        }

        this.tasks.push(newTask);
    }
}

const todoList = new TodoList();
export default todoList;
