/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import classnames from "classnames";

function TodoItem({item, onCheck}) {
  return (
    <label 
      className={classnames("panel-block", {
        "has-text-grey-light": item.done,
      })}
    >
      <input 
        type="checkbox" 
        value={item.done}
        onChange={(e) => onCheck(e, item.key)}
        defaultChecked={item.done}
      />
      {item.text}
    </label>
  );
}

export default TodoItem;