import './App.css';
import React from "react";
import RoundThreeContainer from "./component/Round/RoundThree/RoundThreeContainer";
import {Route} from "react-router-dom";
import InfoTableContainer from "./component/HeaderInfoTable/InfoTableContainer";
import RoundFourContainer from "./component/Round/RoundFour/RoundFourContainer";
import RoundOneContainer from "./component/Round/RoundOne/RoundOneContainer";
import RoundTwoContainer from "./component/Round/RoundTwo/RoundTwoContainer";
import MainMenuContainer from "./component/MainMenu/MainMenuContainer";

function App() {
  return (
      <div className="App">
         <header>
            <InfoTableContainer/>
         </header>
         <Route exact path={'/'} render={() => <MainMenuContainer/>} />
         <Route path={'/round-1'} render={() => <RoundOneContainer/>} />
         <Route path={'/round-2'} render={() => <RoundTwoContainer/>} />
         <Route path={'/round-3'} render={() => <RoundThreeContainer/>} />
         <Route path={'/round-4'} render={() => <RoundFourContainer/>} />
       </div>
  );
}

export default App;
