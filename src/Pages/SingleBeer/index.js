// import { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Header } from "../../components/Header/index";

// export function SingleBeer({ respApi }) {
//   console.log(respApi);
//   const { id } = useParams();
//   console.log(id);
//   return (
//     <div>
//       {respApi
//         .filter((currentElement) => {
//           console.log(currentElement);
//           return currentElement._id === id;
//         })
//         .map((currentElement) => {
//           console.log(currentElement);
//           return (
//             <>
//               <div>
//                 <Header />
//                 <div>
//                   <img src={currentElement.image_url} alt="beer-logo" />
//                 </div>
//                 <div>
//                   <div>
//                     <h1>{currentElement.name}</h1>
//                     <h2>{currentElement.tagline}</h2>
//                   </div>
//                   <div>
//                     <h1>{currentElement.attenuation_level}</h1>
//                     <h2>{currentElement.first_brewed}</h2>
//                   </div>
//                 </div>
//                 <div>
//                   <p>{currentElement.description}</p>
//                   <p>{currentElement.contributed_by}</p>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//     </div>
//   );
// }
