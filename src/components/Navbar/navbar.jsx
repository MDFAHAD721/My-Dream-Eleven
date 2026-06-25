import navImg from "../../assets/logo.png";
import coinImg from "../../assets/Currency.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div>
      {/* navbar design */}
      <div className="navbar w-11/12 mx-auto pt-5  ">
        <div className="flex-1">
          <a className="text-xl">
            <img src={navImg} alt="logo" className="w-15 mr-2" />
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            <a href="">Home</a>
            <a href="">Fixture</a>
            <a href="">Teams</a>
            <a href="">Schedules</a>
          </div>

          <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <span className="font-bold">${availableBalance}</span>
            <span className="mr-2 ml-1 font-bold">Coin</span>
            <img className="w-6 h-6" src={coinImg} alt="coin" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
