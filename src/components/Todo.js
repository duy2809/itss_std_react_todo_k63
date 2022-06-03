import React, { useState, useEffect } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";


function Todo() {
  const [items, putItems, clearItems] = useStorage();
  const [filterTodos, setFilterTodos] = useState(items);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setFilterTodos(
      items.filter((item) => {
        if (filter === "completed") {
          return item.done;
        }
        if (filter === "active") {
          return !item.done;
        }
        return true;
      })
    );
  }, [filter, items]);

  const onCheck = (e, key) => {
    const newItems = items.map(item => {
      if (item.key === key) item.done = e.target.checked;
      return item;
    })
    putItems(newItems);
  }

  const onAddNewTodo = (value) => {
    const newItem = { key: getKey(), text: value, done: false }
    putItems([...items, newItem]);
  }

  const onSelectFilter = (value) => {
    setFilter(value);
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input 
        onAddNewTodo={onAddNewTodo}
      />
      <Filter filter={filter} onSelectFilter={onSelectFilter}/>
      {filterTodos.map(item => (
        <TodoItem 
          key={item.key}
          item={item}
          onCheck={onCheck}
        />
      ))}
      <div className="panel-block">
        {filterTodos.length} items
      </div>
      <div className="panel-block">
        <button className="button is-fullwidth is-light" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;