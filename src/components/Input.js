import React, { useState, useRef } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ onAddNewTodo }) {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddNewTodo(value);
    inputRef.current.value = "";
  };
  
  return (
    <div className="panel-block">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          onChange={onInputChange}
          ref={inputRef}
        />
      </form>
    </div>
  );
}

export default Input;
