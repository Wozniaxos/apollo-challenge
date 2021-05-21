import { useQuery } from "@apollo/client";
import COUNTRY_QUERY from "../queries/countryQuery";

const Country = (props) => {
  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { id: props.match.params.id },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something is wrong</div>;
  console.log("dupa"); // ;-) edit. leaving it to be found in production

  const country = data.countries[0];

  return (
    <div>
      {data ? (
        <div key={country.id}>
          <h1 data-testid="country-name">{country.name}</h1>
          {country.capital && (
            <h2>
              The capital of the given country is: <i>{country.capital.name}</i>
            </h2>
          )}
          <h2>The cities in given country:</h2>
          <ul>
            {country.cities.map((city) => (
              <li key={city.id}>{city.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Something went really wrong</div>
      )}
    </div>
  );
};

export default Country;
