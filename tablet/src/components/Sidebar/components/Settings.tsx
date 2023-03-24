import { StyledBadge } from './StyledBadge';
import { Transition } from 'react-transition-group';
import { ReactNode, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const transitionStyles: {
  [key: string]: { opacity: number; transform: string };
} = {
  entering: { opacity: 0, transform: 'translateY(10%)' },
  entered: { opacity: 1, transform: 'translateY(0%)' },
  exiting: { opacity: 0, transform: 'translateY(10%)' },
  exited: { opacity: 0, transform: 'translateY(10%)' },
};

export const Settings = ({ ...props }: { name: string; sidebarState: boolean }) => {
  const { name, sidebarState } = props;
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [popoverState, setPopoverState] = useState<boolean>(false);

  const setPopover = () => {
    setPopoverState(!popoverState);
  };

  return (
    <div
      className={`flex items-center ${
        sidebarState ? 'justify-between' : 'justify-center'
      } h-16 bg-neutral-700 bg-opacity-60 rounded-bl-lg w-full px-2 gap-x-2`}
    >
      {sidebarState ? (
        <div
          className={`relative flex items-center gap-x-2 grow group hover:bg-neutral-800 px-2 py-1 rounded transition-colors duration-200 cursor-pointer ${
            popoverState && 'bg-neutral-800 bg-opacity-80'
          }`}
          onClick={setPopover}
        >
          <StyledBadge name={name} state={'settings'} />
          <div className={`flex flex-col items-start`}>
            <p className={`text-base font-semibold text-neutral-100`}>{name}</p>
            <p className={`text-sm font-light text-neutral-400`}>Boss</p>
          </div>
          <Transition nodeRef={nodeRef} in={popoverState} timeout={100} unmountOnExit={true}>
            {(state: string) => (
              <div
                ref={nodeRef}
                style={{
                  ...transitionStyles[state],
                  transition: `200ms ease`,
                }}
                className={
                  'absolute flex flex-col items-start gap-y-0.5 px-2 py-2 bg-neutral-800 bg-opacity-80 w-full bottom-[105%] -translate-y-2 rounded font-semibold left-0'
                }
              >
                <button
                  type="button"
                  className={`hover:bg-neutral-900 transition-colors duration-200 w-full rounded py-1 px-2`}
                >
                  <span
                    className={`before:block before:w-3 before:h-3 before:rounded-full before:relative before:bg-emerald-600 flex items-center gap-x-2`}
                  >
                    Available
                  </span>
                </button>
                <button
                  type="button"
                  className={`hover:bg-neutral-900 transition-colors duration-200 w-full rounded py-1 px-2`}
                >
                  <span
                    className={`before:block before:w-3 before:h-3 before:rounded-full before:relative before:bg-amber-500 flex items-center gap-x-2`}
                  >
                    Idle
                  </span>
                </button>
                <button
                  type="button"
                  className={`hover:bg-neutral-900 transition-colors duration-200 w-full rounded py-1 px-2`}
                >
                  <span
                    className={`before:block before:w-3 before:h-3 before:rounded-full before:relative before:bg-red-500 flex items-center gap-x-2`}
                  >
                    Do not disrupt
                  </span>
                </button>
              </div>
            )}
          </Transition>
        </div>
      ) : (
        <></>
      )}
      <Link
        className={`hover:bg-neutral-800 transition-colors duration-200 p-1.5 rounded`}
        to={'/settings'}
        id={'SETTINGS'}
        key={'SETTINGS'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-neutral-300"
        >
          <path
            fillRule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};
