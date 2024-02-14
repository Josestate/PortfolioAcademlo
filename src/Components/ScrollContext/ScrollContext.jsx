import React, { createContext, useRef } from 'react';

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  return (
    <ScrollContext.Provider value={scrollRef}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;