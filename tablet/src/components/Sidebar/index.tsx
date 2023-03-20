import useSidebar from './hooks/useSidebar';
import { apps } from '../../os/apps';
import { Link } from 'react-router-dom';
import {Settings} from "./components/Settings";

export const Sidebar = () => {
  const { isOpen, toggleSidebar, arrow } = useSidebar();

  return (
    <div
      className={
        isOpen
          ? 'relative bg-neutral-900 h-full rounded-tl-lg rounded-bl-lg w-64 transition-all duration-200'
          : 'relative bg-neutral-900 h-full rounded-tl-lg rounded-bl-lg w-16 transition-all duration-200'
      }
    >
      <div className={'relative flex flex-col grow items-center w-full pt-2 h-full'}>
        <div className={'grid place-items-center w-5/6 mt-4 mb-2'}>
          {isOpen ? (
            <div className={'flex items-center justify-start gap-x-4 w-full'}>
              <img
                className={'rounded-full h-10 w-10 shadow-md'}
                src={'https://avatars.githubusercontent.com/u/118932651?s=200&v=4'}
                alt={'MDT'}
              />
              <h1 className={'text-lg font-bold'}>OverDrive Labs</h1>
            </div>
          ) : (
            <img
              className={'rounded-full h-10 w-10 shadow-md'}
              src={'https://avatars.githubusercontent.com/u/118932651?s=200&v=4'}
              alt={'MDT'}
            />
          )}
        </div>
        <div className={'flex flex-col items-center w-[90%] mt-2 gap-y-2 grow'}>
          {apps.map((app) => {
            return (
              <Link
                className={
                  isOpen
                    ? 'flex items-center gap-x-3 h-12 w-full rounded hover:bg-neutral-800 transition-colors duration-200 px-3'
                    : 'flex flex-col items-center justify-center h-12 rounded w-12 hover:bg-neutral-800 transition-colors duration-200'
                }
                to={app.path}
                id={app.id}
                key={app.id}
              >
                {app.icon()}
                {isOpen && <p className={'text-md text-neutral-100 font-normal'}>{app.title}</p>}
              </Link>
            );
          })}
        </div>
        <Settings name={'Mauricio Rivera'} sidebarState={isOpen}/>
      </div>
      <button
        onClick={toggleSidebar}
        className={
          'absolute top-1/2 -right-4 h-8 w-8 p-1.5 rounded-full bg-amber-500 hover:bg-amber-600 tarnsition-colors duration-200 shadow-sm'
        }
      >
        {arrow}
      </button>
    </div>
  );
};
