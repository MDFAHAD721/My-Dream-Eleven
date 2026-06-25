import { use } from "react";
import PlayerCard from "../playerCard/playerCard";

const AvailablePlayers = ({
  DreamPlayers,
  setAvailableBalance,
  availableBalance,
}) => {
  const playersData = use(DreamPlayers);
  console.log(playersData);

  return (
    <div className="w-11/12 mx-auto mt-10">
      {/* cards section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playersData.map((player) => (
          <PlayerCard
            player={player}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
