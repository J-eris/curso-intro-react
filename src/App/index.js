import React from 'react'
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';

// import logo from './logo.svg';
// import './App.css';

// const defaultTodos = [
//   { text:  'Cortar cebolla', completed: true},
//   { text:  'Tomar el curso de Intro a React', completed: false},
//   { text:  'Llorar con la llorona', completed: true},
//   { text:  'LALALALAL', completed: false},
// ];



function App() {
  // const [patito, savePatito] = useLocaStorage('PATITO_V1', 'Fernando');
  

  return (
    <TodoProvider>
      <AppUI /> 
    </TodoProvider>
     
  );
}

export default App;
