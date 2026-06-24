import React, { use } from "react";

const AvailablePlayers = ({ DreamPlayers }) => {
  const playersData = use(DreamPlayers);
  console.log(playersData);

  return (
    <div>
      <h2>Available</h2>
    </div>
  );
};

export default AvailablePlayers;
