import React, { createContext, useState } from 'react';

const initState = {
  burgerActive: false,
  theme: localStorage.getItem('theme') || 'dark'
};
export const GlobalState = createContext();

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initState);
  return (
    <GlobalState.Provider value={{ state, setState }}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalProvider;