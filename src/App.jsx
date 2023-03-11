import styles from './App.module.scss';
import Calendar from './components/Calendar/Calendar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div className={styles.App}>
      App works
      <Calendar />
      <Home />
    </div>
  );
}

export default App;
