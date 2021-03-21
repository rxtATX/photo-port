import './App.css';
import {
  About,
  Nav
} from './components';

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
