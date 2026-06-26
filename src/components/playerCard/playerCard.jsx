import { useState } from "react";
import avatarImg from "../../assets/avatar.png";
import flagImg from "../../assets/flag.png";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const isSelected = purchasedPlayers.some((p) => p.id === player.id);
  return (
    <div key={player.id} className="bg-base-100 card shadow-sm p-4">
      <figure>
        <img src={player.image} alt="Shoes" />
      </figure>
      <div className="">
        <div className="flex mt-4 gap-4">
          <img src={avatarImg} alt="avatar" />
          <h2 className="card-title font-bold">{player.name}</h2>
        </div>

        <div className="flex justify-between items-center mt-4 border-b border-gray-300 pb-4">
          <div className="flex gap-4">
            <img src={flagImg} alt="flag" />
            <span className="font-light">{player.country}</span>
          </div>
          <div>
            <p className=" border-none border-gray-300 bg-base-200 rounded-xl px-4 py-2">
              {player.role}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-1">
          <p className="font-bold">Rating</p>
          <p className=" border-none rounded-xl">{player.rating}</p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="font-bold">Batting-Hand</p>
          <p className=" border-none rounded-xl">{player.battingHand}</p>
        </div>

        <div className="flex justify-between items-center mt-1">
          <p className="font-bold">Bowling-Hand</p>
          <p className=" border-none  rounded-xl">{player.bowlingHand}</p>
        </div>

        <div className="flex justify-between items-center mt-1">
          <p className="font-bold">Price : ${player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => {
              if (player.price > availableBalance) {
                alert("Insufficient balance to select this player.");
                return;
              }

              setAvailableBalance((prevBalance) => prevBalance - player.price);
              setPurchasedPlayers((prevPlayers) => [...prevPlayers, player]);
            }}
            className="btn btn-ghost border border-gray-300 rounded-xl"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
