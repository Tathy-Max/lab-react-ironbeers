import { Header } from "../../components/Header/index";
import { useState } from "react";

export function NewBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
}



contributed_by - must be type text
