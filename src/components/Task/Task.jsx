import React from 'react';
import styles from './task.module.css';
import Counter from '../Counter/Counter';
const Task = ({taskItems, sendTasks, updateTask}) => {
  // console.log('task:', sendTasks);
  // NOTE: do not delete `data-testid` key value pair
  const handleChandge = () => {
    //  console.log("HI")
    for (var i = 0; i < sendTasks.length; i++) {
      if (sendTasks[i].id === sendTasks.id) {
        let output = [...sendTasks];
        output.splice(i, 1);

        return updateTask(output);
      }
    }
  };
  const handleValueDone = () => {
    let ans = [...sendTasks];
    for (var i = 0; i < ans.length; i++) {
      if (ans[i].id === taskItems.id) {
        ans[i].done = !ans[i].done;

        return updateTask(ans);
      }
    }
  };
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text"></div>
      {/* Counter here */}
      {taskItems.done ? (
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
      {taskItems.done ? (
        <div
          key={taskItems.slug}
          className="container_one"
          style={{
            textDecoration: 'line-through',
            width: '80px',
            textAlign: 'center',
          }}
          data-testid="task-text"
        >
          {taskItems.text}
        </div>
      ) : (
        <div
          style={{width: '80px', textAlign: 'center'}}
          data-testid="task-text"
        >
          {taskItems.text}
        </div>
      )}
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
