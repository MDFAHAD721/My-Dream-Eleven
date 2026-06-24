import { Suspense } from "react";
import Navbar from "../src/components/Navbar/navbar.jsx";
import AvailablePlayers from "../src/components/availablePlayers/availablePlayers.jsx";
// import SelectedPlayers from "../src/components/selectedPlayers/selectedPlayers.jsx";

const DreamPlayers = async () => {
  const res = await fetch("/playersList.json");
  return res.json();
};

const playersPromise = DreamPlayers();

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers DreamPlayers={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
