import React from 'react';
import styles from './tasks.module.css';
import {Task} from './index';

const Tasks = ({getTask, updateTask}) => {
  // console.log('getTask:', getTask);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
