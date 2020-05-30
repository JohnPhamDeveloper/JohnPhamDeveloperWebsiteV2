import React from "react";
import "./App.scss";
import Header from "./component/Header";
import Cards from "./component/Cards";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome!</h1>
        <p>Add black box cover font then show</p>
        {/* Move to cards component */}
        <Cards />
      </main>
    </div>
  );
};

export default App;
