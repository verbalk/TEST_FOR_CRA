

import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"



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

  const textDeco = (checkbox) => {
    if(checkbox === 'click') {
      onchange('text-decoration: line-through;')
    }
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
        <ListHeader>TO DO</ListHeader>
      <InlineFlex>
        <TextInput  onKeyPress={handleKeyPress} value={text} onChange={(e) => {
          setText(e.target.value);
        }} />
        <ButtonAdd onClick={submit}>일정추가</ButtonAdd>
      </InlineFlex>
      <div>
        {list.map((item, idx) => {
          return <ItemList>
            <input onClick={() => textDeco()} type="checkbox"/>
            <TextList>{item}</TextList>
            <TrashBtn onClick={() => removeItem(idx)}>
                    <FontAwesomeIcon icon={faTrash}/> 
            </TrashBtn>
          </ItemList>
        })}
      </div>
      </ListBox>
    </StyledApp>
    
  );
}

const ListHeader = styled.div`
  width: 100%;
  background: #454aca;
  color: #fff;
  font-size: 10px;
  padding: 8px 0px;
`;

const TextList = styled.p`
  margin: 4px 0px;
`;


const TrashBtn = styled.button`
  font-size: 8px;
  background: none;
  border: none;
  color: #e0e0e0;
  margin: 4px;
  padding: 0px 4px;
`;

const ItemList = styled.div`
  border-bottom: 0.5px solid #e4e4e4;
  margin: 4px 16px;
  font-size: 8px;
  text-align: left;
  display: flex;
  vertical-align: middle;
`;

const ListBox = styled.div`
  width: 210px;
  height: 250px;
  background: #ffffff;
  text-align: center;
  margin: auto;
  border-radius: 4px;
  box-shadow: 1 1 1 1px;
  box-shadow: 0px 4px 4px 1px #e7e8e8;
  overflow:scroll;
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
