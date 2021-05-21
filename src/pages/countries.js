import { useQuery } from "@apollo/client";
import { Link, useLocation, useHistory } from "react-router-dom";
import CountriesList from "../components/CountriesList";
import { useState, useEffect, useMemo } from "react";
import COUNTRIES_QUERY from "../queries/countriesQuery";

function useQueryUrl() {
  return new URLSearchParams(useLocation().search);
}

const Countries = (props) => {
  const query = useQueryUrl();
  const history = useHistory();

  const countriesPerPage = 5;
  const [page, setPage] = useState(query.get("page") || 0);

  useEffect(() => {
    setPage(query.get("page") || 0);
  }, [query]);

  const variables = {
    variables: { limit: countriesPerPage, skip: page * countriesPerPage },
  };

  const { loading, error, data } = useQuery(COUNTRIES_QUERY, variables);

  const { onFirstPage, onLastPage, currPage } = useMemo(
    () => ({
      currPage: parseInt(page),
      onFirstPage: page < 1,
      onLastPage: page > 20,
    }),
    [page]
  );

  const handleOnClickPrevious = () => {
    if (!onFirstPage) {
      history.push(`/countries?page=${currPage - 1}`);
    } else {
      alert("There's nothing left");
    }
  };
  const handleOnClickNext = () => {
    if (!onLastPage) {
      history.push(`/countries?page=${currPage + 1}`);
    } else {
      alert("There's nothing left");
    }
  };

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1 data-testid="countries-header">Countries page</h1>
      <div>
        <button onClick={handleOnClickPrevious} disabled={onFirstPage}>
          Wróć
        </button>
        <button onClick={handleOnClickNext} disabled={onLastPage}>
          Dalej
        </button>
      </div>
      <div>
        <CountriesList data={data} />
      </div>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default Countries;
