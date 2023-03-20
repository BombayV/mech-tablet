import { Transition } from 'react-transition-group';
import { ReactNode, useRef } from 'react';

const defaultStyle = (duration: number) => {
  return {
    transition: `${duration}ms ease-in-out`,
    opacity: 0,
  };
};

const transitionStyles: {
  [key: string]: { opacity: number; transform: string };
} = {
  entering: { opacity: 0, transform: 'translateY(30%)' },
  entered: { opacity: 1, transform: 'translateY(0%)' },
  exiting: { opacity: 0, transform: 'translateY(30%)' },
  exited: { opacity: 0, transform: 'translateY(30%)' },
};

export const Slide = ({
  children,
  ...props
}: {
  children: ReactNode;
  show: boolean;
  duration: number;
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  return (
    <Transition nodeRef={nodeRef} in={props.show} timeout={props.duration} unmountOnExit={true}>
      {(state: string) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle(props.duration),
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
