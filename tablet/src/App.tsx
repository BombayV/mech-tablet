import { Routes, Route } from 'react-router-dom';
import { useTablet } from './os/hooks';
import { Sidebar, Slide } from './components';
import { apps } from './os/apps';
import { TabletApp } from './os/apps';
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
        <div className={`w-full h-full px-8 pt-8 pb-4 relative`}>
          <Routes>
            {apps.map((app: TabletApp) => {
              return <Route path={app.path} element={app.component()} key={app.id} />;
            })}
          </Routes>
        </div>
      </div>
    </Slide>
  );
};

export default App;
