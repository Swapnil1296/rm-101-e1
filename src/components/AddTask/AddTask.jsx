import React, {useState} from 'react';
import styles from './addTask.module.css';

const AddTask = ({getTask, updateTask}) => {
  // console.log('getTask', getTask);
  // NOTE: do not delete `data-testid` key value pair
  const [data, setData] = useState({
    text: '',
    done: true,
    count: 1,
    id: null,
  });
  console.log('data', data);
  const handleChange = ({value}) => {
    setData({
      ...data,
      data: value,
    });
  };
  return (
    <div className={styles.todoForm} >
      
      <input
        className='input'
        data-testid="add-task-input"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Add your Tasks"
      />
      <button
        data-testid="add-task-button"
        onClick={() => {
          setData({
            ...data,
            id: getTask.length + 1,
          });
          updateTask([...getTask, data]);
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
