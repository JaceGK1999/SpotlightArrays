// import useState from 'react';
// import { countries } from './data';

export const getCountryNames = (countries) => {
  return countries.map((country) => country.name);
};

//   const [names, setNames] = useState([]);

// {return country.name})

//   return (
//     <div>
//       {countries.map((country) => (
//         <p key={country.id} name={country.name}></p>
//       ))}
//     </div>
//   );
// };

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryCodes = (countries) => {
  return countries.map((country) => [country.name, country.iso2]);
};
// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getBrands = (brands) => {
  return brands.map((brand) => brand.brand);
};
// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map
