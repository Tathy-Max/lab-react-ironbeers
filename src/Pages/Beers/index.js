import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/index";

export function Beers() {
  const [beers, setBeers] = useState([{}]);
  // console.log(response);

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        console.log(response);
        setBeers(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBeers();
  }, []);
  //   console.log(response);
  return (
    <>
      <div>
        <Header />
        {beers.map((currentElement) => {
          return (
            <>
              <div>
                <Link to={`/beers/${currentElement._id}`}>
                  <img src={currentElement.image_url} alt="beer-logo" />
                  <div>
                    <h1>{currentElement.name}</h1>
                    <h2>t{currentElement.tagline}</h2>
                    <h3>{currentElement.contributed_by}</h3>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
