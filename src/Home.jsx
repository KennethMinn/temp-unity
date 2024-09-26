import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center h-screen">
      <p className=" font-coiny">Chakara</p>
      <button
        className=" bg-black rounded-md text-white px-4 py-2"
        onClick={() => navigate("/game")}
      >
        load game
      </button>
    </div>
  );
};

export default Home;
