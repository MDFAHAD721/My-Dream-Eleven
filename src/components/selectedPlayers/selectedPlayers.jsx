const selectedPlayers = ({ purchasedPlayers, handleRemovePlayer }) => {
  console.log(purchasedPlayers);
  return (
    <div className="w-11/12 mx-auto min-h-screen">
  

      {purchasedPlayers.map((player) => (
        <div
          key={player.id}
          className="flex justify-between items-center border border-gray-300 rounded-xl p-4 mt-4"
        >
          <div className="flex gap-3 items-center">
            <img
              className="w-20 h-20 rounded-xl"
              src={player.image}
              alt={player.name}
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{player.name}</h2>
              <p className="font-semibold">{player.role}</p>
              <p className="font-light">{player.country}</p>
            </div>
          </div>

          <div>
            <p className="font-bold">Price: ${player.price}</p>
          </div>

          <div>
            <button
              onClick={() => handleRemovePlayer(player.id)}
              className="btn btn-outline "
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default selectedPlayers;
