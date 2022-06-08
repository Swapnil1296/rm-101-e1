import React from 'react';
import styles from './tasks.module.css';
import {Task} from '../Task/index';

const Tasks = ({ getTask, updateTask }) => {
  
  // console.log('getTask:', getTask);
  // NOTE: do not delete `data-testid` key value pair

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {getTask.length !== 0
          ? getTask.map((ele) => {
              return <Task taskItems={ele} sendTasks={getTask} updateTask={updateTask} key={ele.id} />;
            })
          : null}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {getTask.length === 0 ? <h1>No Tasks to show</h1> : null}
      </div>
    </>
  );
};

export default Tasks;
