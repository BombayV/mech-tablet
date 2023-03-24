import useSidebar from './hooks/useSidebar';
import { apps } from '../../os/apps';
import { Link } from 'react-router-dom';
import { Settings } from './components/Settings';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const { isOpen, toggleSidebar, arrow } = useSidebar();
  const { t } = useTranslation();

  // Get the current route
  const currentPath = useLocation().pathname;

  return (
    <div
      className={
        isOpen
          ? 'relative bg-neutral-900 h-full rounded-tl-lg rounded-bl-lg w-72 transition-all duration-200 z-10'
          : 'relative bg-neutral-900 h-full rounded-tl-lg rounded-bl-lg w-16 transition-all duration-200 z-10'
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
              <h1 className={'text-lg font-black text-amber-100'}>OverDrive Labs</h1>
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
                    ? `flex items-center gap-x-3 h-12 w-full rounded hover:bg-neutral-800 transition-colors duration-200 px-3 ${
                        currentPath === app.path ? 'bg-neutral-800' : ''
                      }`
                    : `flex flex-col items-center justify-center h-12 rounded w-12 hover:bg-neutral-800 transition-colors duration-200 ${
                        currentPath === app.path ? 'bg-neutral-800' : ''
                      }`
                }
                to={app.path}
                id={app.id}
                key={app.id}
              >
                {app.icon()}
                {isOpen && (
                  <p className={'text-md text-amber-50 text-opacity-90 font-bold'}>
                    {t(`${app.locale}.TITLE`)}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
        <Settings name={'Mauricio Rivera'} sidebarState={isOpen} />
      </div>
      <button
        onClick={toggleSidebar}
        className={
          'absolute top-1/2 -right-1 translate-x-1/2 h-8 w-8 p-1.5 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors duration-200 shadow-sm'
        }
      >
        {arrow}
      </button>
    </div>
  );
};
