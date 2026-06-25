import React, { use } from "react";

import avatarImg from "../../assets/avatar.png";

import flagImg from "../../assets/flag.png";

const AvailablePlayers = ({ DreamPlayers }) => {
  const playersData = use(DreamPlayers);
  console.log(playersData);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex justify-between items-center mb-10">
        <h2>Available Players</h2>
        <div className="flex">
          <button className="flex justify-between items-center border border-gray-300 rounded-l-2xl px-4 py-2">
            Available
          </button>
          <button className="flex justify-between items-center border border-gray-300 rounded-r-2xl px-4 py-2">
            Selected
          </button>
        </div>
      </div>

      {/* cards section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playersData.map((player) => (
          <div className="bg-base-100 card shadow-sm p-4">
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
                    All-Rounder
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
                <p className="font-bold">Price</p>
                <button className="btn btn-ghost border border-gray-300 rounded-xl">
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
