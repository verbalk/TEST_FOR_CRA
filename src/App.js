

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
    const filteredList = list.filter((item, idx) => {
      if (index === idx) {
        return false;
      }
      return true;
    })
    setList(filteredList);

  };

const handleKeyPress = (e) => {
  if(e.key ==='Enter') {
    submit()
  }
} 

  return (
    <StyledApp className="App">
      <div className="list"></div>
      <ListBox>
      <InlineFlex>
        <TextInput  onKeyPress={handleKeyPress} value={text} onChange={(e) => {
          setText(e.target.value);
        }} />
        <ButtonAdd onClick={submit}>일정추가</ButtonAdd>
      </InlineFlex>
      <div>
        {list.map((item, idx) => {
          return <div>
            <input type="checkbox"/>
            {item}
            <button onClick={() => removeItem(idx)}>
              Del
            </button>
          </div>
        })}
      </div>
      </ListBox>
    </StyledApp>
    
  );
}

const ListBox = styled.div`
width: 210px;
height: 250px;
background: #ffffff;
text-align: center;
margin: auto;
border-radius: 4px;
box-shadow: 1 1 1 1px;
box-shadow: 0px 4px 4px 1px #e7e8e8;
`;

const StyledApp = styled.div`
  background-color: #efefef;
  padding:15px;
`;

const InlineFlex = styled.div`
  display:inline-flex;
  margin-top:16px;
`;

const TextInput = styled.input`
  font-size: 7px;
  width: 120px;
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
