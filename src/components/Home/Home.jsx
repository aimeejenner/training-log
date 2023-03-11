import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Training Log</h1>
      <p>Add a run to the calendar.</p>
    </div>
  )
}

export default Home