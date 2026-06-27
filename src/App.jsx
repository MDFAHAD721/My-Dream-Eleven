import { Suspense } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../src/components/Navbar/navbar.jsx";
import AvailablePlayers from "../src/components/availablePlayers/availablePlayers.jsx";
import SelectedPlayers from "../src/components/selectedPlayers/selectedPlayers.jsx";

const DreamPlayers = async () => {
  const res = await fetch("/playersList.json");
  return res.json();
};

const playersPromise = DreamPlayers();

function App() {
  const [availableBalance, setAvailableBalance] = useState(70000000);
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  const handleRemovePlayer = (playerId) => {
    setPurchasedPlayers(
      purchasedPlayers.filter((player) => player.id !== playerId),
      setAvailableBalance(
        (prevBalance) =>
          prevBalance +
          purchasedPlayers.find((player) => player.id === playerId).price,
      ),
    );
  };
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=" w-11/12 mx-auto flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/16)`}
        </h2>
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`flex justify-between items-center border border-r-0 border-gray-300  rounded-l-2xl px-4 py-2 ${toggle ? "bg-yellow-300" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`flex justify-between items-center border border-gray-300 rounded-r-2xl px-4 py-2 border-l-0 ${!toggle ? "bg-yellow-300" : ""}`}
          >
            Selected
            <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            DreamPlayers={playersPromise}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          handleRemovePlayer={handleRemovePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
