import { Routes, Route } from 'react-router-dom';
import { useTablet } from './os/hooks';
import { Sidebar, Slide } from './components';
import Home from './pages/home/Home';
import './App.css';

const App = () => {
  const { tabletState, toggleTablet } = useTablet();

  return (
    <Slide show={tabletState} duration={500}>
      <div
        className={
          'relative bg-neutral-800 h-[44rem] w-[72rem] rounded-lg shadow-md flex items-center'
        }
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Slide>
  );
};

export default App;
