import { createContext, useContext, useState } from "react";

const LodderContext = createContext();

export const ContextProider = ({ children }) => {
  const [lodder, setLodder] = useState(false);
  return (
    <LodderContext.Provider value={{ lodder, setLodder }}>
      {children}
    </LodderContext.Provider>
  );
};

export const Lodder = () => {
  return useContext(LodderContext);
};
