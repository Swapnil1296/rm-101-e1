import React from "react";
import styles from "./counter.module.css";

const Counter = ({taskItems, sendTasks, updateTask}) => {
  // sample value to be replaced
  console.log('sendTasks;', taskItems.count);
  // let count = 0;

  const handleChange = (value) => {
    for (let i in sendTasks) {
      if (sendTasks[i].id === taskItems.id) {
        if (sendTasks[i].count > 0) {
          let result = [...sendTasks];
          result[i].count += value;
          return updateTask(result);
        }
      }
    }
  };

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => handleChange(1)}
      >
        +
      </button>
      <span data-testid="task-counter-value">{taskItems.count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => handleChange(-1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
