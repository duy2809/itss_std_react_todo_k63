import classnames from "classnames";
import { getKey } from "../lib/util";

/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/

function Filter({ filter, onSelectFilter }) {
  const tabs = [
    {
      label: "すべて",
      value: "all",
      key: getKey(),
    },
    {
      label: "未完了",
      value: "active",
      key: getKey(),
    },
    {
      label: "完了済み",
      value: "completed",
      key: getKey(),
    },
  ];
  return (
    <div className="panel-tabs">
      {tabs.map((tab) => (
        <a
          key={tab.key}
          className={classnames({
            "is-active": filter !== tab.value,
          })}
          onClick={() => onSelectFilter(tab.value)}
          style={{ marginLeft: "4px", marginRight: "4px" }}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}

export default Filter