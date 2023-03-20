import { useState } from 'react';

export const useTablet = () => {
  const [tabletState, setTabletState] = useState(true);

  const toggleTablet = () => {
    setTabletState(!tabletState);
  };

  const setTablet = (value: boolean) => {
    setTabletState(value);
  };

  return {
    tabletState,
    toggleTablet,
    setTablet,
  };
};
