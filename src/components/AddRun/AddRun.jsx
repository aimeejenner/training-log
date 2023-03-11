import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './AddRun.module.scss';

const AddRun = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.calendar}>
      <Calendar onChange={onChange} value={value} />      
    </div>
  );
}

export default AddRun;