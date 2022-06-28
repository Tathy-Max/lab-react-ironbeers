import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/index";
import { useEffect, useState } from "react";
import axios from "axios";

export function SingleBeer() {
  const { beerId } = useParams();
  console.log(beerId);
  const [beer, setBeer] = useState({});
  useEffect(() => {
    async function fetchBeer() {
      try {
        const resp = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );

        setBeer(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeer();
  }, []);
  // console.log(beer);
  return (
    <div>
      <div>
        <Header />
        <div>
          <img src={beer.image_url} alt="beer-logo" />
        </div>
        <div>
          <div>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
          </div>
          <div>
            <h1>{beer.attenuation_level}</h1>
            <h2>{beer.first_brewed}</h2>
          </div>
        </div>
        <div>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}
