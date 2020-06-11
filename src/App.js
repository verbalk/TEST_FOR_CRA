
import React, {useState} from 'react';

function App() {
  const [hello, setHello] = useState('안녕하세요');

  const onClick = () => {
    setHello('문자열을 변경해 봤어요');
  }

  return (
    <div className="App">
      {hello}
      <button onClick={onClick}>문자열 변경</button>
    </div>
  );
}

export default App;
