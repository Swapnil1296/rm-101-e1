import React, {useState} from 'react';
import AddTask from './AddTask/AddTask';


import styles from './taskApp.module.css';

import {TaskHeader} from './TaskHeader';
import Tasks from './Tasks/Tasks';

const TaskApp = ({task}) => {
  // console.log(task);

  // NOTE: do not delete `data-testid` key value pair
  const [data, setData] = useState(task);
  // console.log('data is:', data);

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}

      <TaskHeader getTask={data} />
      {/* Add Task */}
      <AddTask updateTask={setData} getTask={data} />
      {/* Tasks */}
      <Tasks updateTask={setData} getTask={data} />
    </div>
  );
};

export default TaskApp;
