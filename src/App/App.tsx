import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React from "react";

import ReposSearchPage from "./pages/reposSearchPage";
import "../../node_modules/antd/dist/antd.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/repos" component={ReposSearchPage} />
      <Redirect to="/repos" />
    </BrowserRouter>
  );
};

export default App;
