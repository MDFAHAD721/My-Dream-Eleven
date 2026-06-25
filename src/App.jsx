import { Suspense } from "react";
import { useState } from "react";
import Navbar from "../src/components/Navbar/navbar.jsx";
import AvailablePlayers from "../src/components/availablePlayers/availablePlayers.jsx";
import SelectedPlayers from "../src/components/selectedPlayers/selectedPlayers.jsx";

const DreamPlayers = async () => {
  const res = await fetch("/playersList.json");
  return res.json();
};

function App() {
  const playersPromise = DreamPlayers();
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar></Navbar>

      <div className=" w-11/12 mx-auto flex justify-between items-center mb-10">
        <h2>Available Players</h2>
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className="flex justify-between items-center border border-r-0 border-gray-300 bg-yellow-300 rounded-l-2xl px-4 py-2"
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className="flex justify-between items-center border border-gray-300 rounded-r-2xl px-4 py-2 border-l-0"
          >
            Selected
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers DreamPlayers={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
