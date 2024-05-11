// App.js
import React, { useState } from "react";
import LoadingPage from "./components/Loading";
import Home from "./components/Home";
import assets from "./assets";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading ? (
        <LoadingPage onFinishLoading={handleFinishLoading} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;