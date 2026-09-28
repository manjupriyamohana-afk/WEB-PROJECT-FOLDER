import { useContext } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../context/TravelContext";

function Home() {
  const { destination, setDestination } = useContext(TravelContext);

  return (
    <div>
      <h1>Travel Explorer</h1>

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >
        <option value="Chennai">Chennai</option>
        <option value="Ooty">Ooty</option>
        <option value="Goa">Goa</option>
      </select>

      <h2>Selected: {destination}</h2>

      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Home;