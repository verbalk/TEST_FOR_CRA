
import React, {useState} from 'react';
import styled from 'styled-components';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const submit = () => {
  
      setList([...list, text]);
      setText('');
  
  };

  const removeItem = (index) => {
    const filteredList = list.a((item, idx) => {
      if (index === idx) {
        return false;
      }
      return true;
    })
    setList(filteredList);

  };


  return (
    <StyledApp className="App">
      <div className="list"></div>
      <div>
        {list.map((item, idx) => {
          return <div>
            {item}
            <button onClick={() => removeItem(idx)}>
              삭제
            </button>
          </div>
        })}
      </div>
      <InlineFlex>
        <TextInput value={text} onChange={(e) => {
          setText(e.target.value);
        }} />
        <ButtonAdd onClick={submit}>일정추가</ButtonAdd>
      </InlineFlex>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: #efefef;
  padding:15px;
`;

const InlineFlex = styled.div`
  display:inline-flex;
`;

const TextInput = styled.input`
  font-size: 7px;
  width: 180px;
  border: 0.5px solid #e4e4e4;
  border-radius: 2px;
`;

const ButtonAdd = styled.button`
  border: 1px solid #454aca;
  background: #454aca;
  padding: 4px 8px;
  font-size: 8px;
  border-radius: 2px;
  margin-left: 4px;
  color: white;
`;

export default App;
