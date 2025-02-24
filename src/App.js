import Navber from "./components/nav/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Business from "./components/Pages/Business";
import Enterainment from "./components/Pages/Enterainment";
import Health from "./components/Pages/Health";
import Science from "./components/Pages/Science";
import Sports from "./components/Pages/Sports";
import Technology from "./components/Pages/Technology";
function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/business" Component={Business}></Route>
        <Route exact path="/entertainment" Component={Enterainment}></Route>
        <Route exact path="/health" Component={Health}></Route>
        <Route exact path="/science" Component={Science}></Route>
        <Route exact path="/sports" Component={Sports}></Route>
        <Route exact path="/technology" Component={Technology}></Route>
      </Routes>
    </>
  );
}

export default App;
