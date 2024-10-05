import "./App.css";
import { nanoid } from "nanoid";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { TravelType } from "./types";
import data from "./data";

function App() {
  const cards = data.map((item: TravelType) => {
    return <Cards key={nanoid()} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
