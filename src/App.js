import './App.css';
import {
  About,
  Nav,
  Gallery
} from './components';

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Gallery />
        <About />
      </main>
    </div>
  );
}

export default App;
