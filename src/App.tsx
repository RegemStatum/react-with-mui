import React from "react";
import AppProvider from "./context/AppProvider";
import PagesRouting from "./pages/PagesRouting";

function App() {
  return (
    <AppProvider>
      <PagesRouting />
    </AppProvider>
  );
}

export default App;
