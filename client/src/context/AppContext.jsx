import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = sessionStorage.getItem('user');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/users/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => console.error(error));
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        signUpModalOpen,
        setSignUpModalOpen,
        currentUser,
        setCurrentUser,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
