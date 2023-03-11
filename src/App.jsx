import styles from './App.module.scss';
import AddRun from './components/AddRun/AddRun';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div className={styles.App}>
      <Home />
      <AddRun />
    </div>
  );
}

export default App;
