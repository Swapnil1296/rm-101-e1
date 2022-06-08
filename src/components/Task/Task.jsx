import React from 'react';
import styles from './task.module.css';
import Counter from '../Counter/Counter';
const Task = ({taskItems, sendTasks, updateTask}) => {
  // console.log('task:', sendTasks);
  // NOTE: do not delete `data-testid` key value pair
  const handleChandge = () => {
     console.log("HI")
    for (var i = 0; i < sendTasks.length; i++) {
      if (sendTasks[i].id === taskItems.id) {
        let output = [...sendTasks];
        output.splice(i, 1);

        return updateTask(output);
      }
    }
  };
  const handleValueDone = () => {
    let ans = [...sendTasks];
    for (let i = 0; i < ans.length; i++) {
      if (ans[i].id === taskItems.id) {
        ans[i].done = !ans[i].done;

        return updateTask(ans);
      }
    }
  };
  return (
    <li data-testid="task" className={styles.task}>
      {taskItems.done === true ? (
        <input
          onChange={() => handleValueDone()}
          type="checkbox"
          data-testid="task-checkbox"
          checked
        />
      ) : (
        <input
          onChange={() => handleValueDone()}
          type="checkbox"
          data-testid="task-checkbox"
        />
      )}
      {taskItems.done === true ? (
        <div
          data-testid="task-text"
          style={{
            textDecoration: 'line-through',
            textAlign: 'center',
            width: '80px',
          }}
        >
          {taskItems.text}
        </div>
      ) : (
        <div
          data-testid="task-text"
          style={{textAlign: 'center', width: '80px'}}
        >
          {taskItems.text}
        </div>
      )}
      {/* Counter here */}
      <Counter
        sendTasks={sendTasks}
        updateTask={updateTask}
        taskItems={taskItems}
      />
      <button data-testid="task-remove-button" onClick={() => handleChandge()}>
        🗑️
      </button>
    </li>
  );
};

export default Task;
