import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        signUpModalOpen,
        setSignUpModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
