import React from "react";
import "./App.scss";
import Header from "./component/Header";
import Cards from "./component/Cards";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>My Past Projects!</h1>
        <p>Add black box cover font then show</p>
        <Cards />
        <h1>Hobbies</h1>
        <h2>Music</h2>
        <p>Japanese songs I've covered in English</p>
      </main>
      {/* FOOTER */}
    </div>
  );
};

export default App;
