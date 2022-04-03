import React, { FC, useContext, useState } from "react";

interface AppContextValue {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const appContextInitialValue: AppContextValue = {
  isSidebarOpen: false,
  toggleSidebar: () => {},
};

const AppContext = React.createContext(appContextInitialValue);

const AppProvider: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
