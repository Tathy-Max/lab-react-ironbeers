import { Link } from "react-router-dom";
import allBeers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";

export function Home() {
  return (
    <>
      <div>
        <Link to="/beers">
          <img src={allBeers} alt="all beers" />
          <h1>All Beers</h1>
          <p>BEERSBEERSBEERS</p>
        </Link>
      </div>
      <div>
        <Link to="/random-beer">
          <img src={randomBeer} alt="random beers" />
          <h1>Random Beers</h1>
          <p>RANDOMBEERSRANDOMBEERSRANDOMBEERS</p>
        </Link>
      </div>
      <div>
        <Link to="/new-beer">
          <img src={newBeer} alt="new beer" />
          <h1>New Beer</h1>
          <p>NEWBEERNEWBEERNEWBEER</p>
        </Link>
      </div>
    </>
  );
}
