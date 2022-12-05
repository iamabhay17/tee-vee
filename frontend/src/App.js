import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Mylist from "./pages/Mylist";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import Teevee from "./pages/Teevee";
import Tvshows from "./pages/Tvshows";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Teevee />} />
        <Route path="/player" element={<Player />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/mylist" element={<Mylist />} />
      </Routes>
    </div>
  );
}

export default App;
