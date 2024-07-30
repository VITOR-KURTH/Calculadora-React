import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import Frase from './pages/Frase'
import Calculadora from './components/Calculadora'

function HelloWorld(){
  return <p>Hello World</p>
}

function App() {


  return (
    <>
    <HelloWorld></HelloWorld>
    <Mensagem texto="Hello World 2"></Mensagem>
    <Frase></Frase>
    <Calculadora/>
    </>
  )
}

export default App
