import React from "react";
import styles from "./task.module.css";

const Task = ({taskItems, sendTasks, updateTask}) => {
  // console.log('task:', sendTasks);
  // NOTE: do not delete `data-testid` key value pair
  const handleChandge = () => {
 console.log("HI")
     for (var i = 0; i < sendTasks.length; i++) {
       if (sendTasks[i].id === sendTasks.id) {
         let output = [...sendTasks];
         output.splice(i, 1);


         console.log('result', output);

         return updateTask(output);
       }
     }
  }
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text"></div>
      {/* Counter here */}
      <button data-testid="task-remove-button" onClick={() => handleChandge()}>
        +
      </button>
    </li>
  );
};

export default Task;
