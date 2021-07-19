import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [ ws ] = useState(new WebSocket('ws://localhost:3001'))

  useEffect(() => {
    console.log('fetch')
    // const ws = new WebSocket('ws://localhost:3001');
    ws.onmessage = res => console.log(res.data)
    ws.onopen = () => {
      ws.send('hello world')
    }
  }, [ws])

  const onClose = () => {
    ws.close()
  }

  return (
    <div className="App">
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
