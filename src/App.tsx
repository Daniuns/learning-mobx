import { useContext, useState } from 'react'
import { observer } from "mobx-react-lite"
import './App.css'
import CheckStoreComponent from './components/CheckStoreComponent'
import { StoreContext } from './Mobx/store'

const App = observer(() => {
  const store = useContext(StoreContext);

  const addTask = () => {
    const newTask = {
      id: Math.random(),
      title: 'nova tarefa ' + Math.floor(Math.random() * 10),
      completed: false
    }
    store.todoList.addTask(newTask);
  }

  return (
    <div className="App">
        <button onClick={addTask}>
         Add Task
        </button>
      <CheckStoreComponent />
    </div>
  )
})

export default App
