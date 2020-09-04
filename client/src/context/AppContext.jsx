import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [podcast, setPodcast] = useState({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const user = sessionStorage.getItem('user');
  useEffect(() => {
    console.log('fetching');
    // incase user refreshes and context is cleared.
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
        preview,
        setPreview,
        image,
        setImage,
        podcast,
        setPodcast,
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
