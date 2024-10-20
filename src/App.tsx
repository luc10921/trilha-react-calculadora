import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleAddNumber = (number: string) => {
    setCurrentNumber((prev: string) => `${prev==='0' ? '' : prev}${number}`)
  }
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(sum.toString())
      setOperation('')
    }
  }

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(sub.toString())
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(mult.toString())
      setOperation('')
    }
  }
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(div.toString())
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleSubNumbers()
          break
        case '*':
          handleMultNumbers()
          break
        case '/':
          handleDivNumbers()
          break
      }
    }
  }

  return (
    <>
      <div className='content'>
        <Input value={currentNumber}/>
        <div className='row'>
          <Button label='*' onClick={handleMultNumbers}/>
          <Button label='/' onClick={handleDivNumbers}/>
          <Button label='c' onClick={handleOnClear}/>
          <Button label='.'/>
        </div>
        <div className='row'>
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='-' onClick={handleSubNumbers}/>
        </div>
        <div className='row'>
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='+' onClick={handleSumNumbers}/>
        </div>
        <div className='row'>
          <Button label='1' onClick={() => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label='=' onClick={handleEquals}/>
        </div>
        <div className='row'>
          <Button label='0' onClick={() => handleAddNumber('0')}/>
        </div>
      </div>
    </>
  )
}

export default App
