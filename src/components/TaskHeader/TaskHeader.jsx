import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({getTask}) => {
  // sample values to be replaced
  // console.log(getTask)
  let totalTask = getTask.length;
  // console.log('totalTask:', totalTask);
   let getIncTask = getTask.filter((el) => {
     return el.done !== true;
   });
  let unCompletedTask = getIncTask.length;
  // console.log('unCompletedTask', unCompletedTask);
 




  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>TODO LIST</h1>
      <b data-testid="header-remaining-task">You have{unCompletedTask}</b>
      <b data-testid="header-total-task">of {totalTask} task remaining</b>
    </div>
  );
};

export default TaskHeader;
