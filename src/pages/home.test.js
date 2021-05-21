import Home from "./home";
import Countries from "./countries";
import { render, waitFor, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import COUNTRIES_QUERY from "../queries/countriesQuery";
import { MockedProvider } from "@apollo/client/testing";

const mocks = [
  {
    request: {
      query: COUNTRIES_QUERY,
      variables: {
        limit: 5,
        skip: 0,
      },
    },
    result: {
      data: {
        countries: [
          {
            id: "Q889",
            name: "Afghanistan",
            vatRate: null,
            languages: [
              {
                id: "Q13955",
                name: "Arabic",
              },
              {
                id: "Q58680",
                name: "Pashto",
              },
              {
                id: "Q9267",
                name: "Turkmen",
              },
              {
                id: "Q9264",
                name: "Uzbek",
              },
            ],
          },
          {
            id: "Q222",
            name: "Albania",
            vatRate: 20,
            languages: [],
          },
          {
            id: "Q262",
            name: "Algeria",
            vatRate: 19,
            languages: [
              {
                id: "Q13955",
                name: "Arabic",
              },
            ],
          },
          {
            id: "Q228",
            name: "Andorra",
            vatRate: 4.5,
            languages: [
              {
                id: "Q7026",
                name: "Catalan",
              },
            ],
          },
          {
            id: "Q916",
            name: "Angola",
            vatRate: null,
            languages: [
              {
                id: "Q5146",
                name: "Portuguese",
              },
            ],
          },
          {
            id: "Q781",
            name: "Antigua and Barbuda",
            vatRate: null,
            languages: [
              {
                id: "Q1860",
                name: "English",
              },
            ],
          },
          {
            id: "Q414",
            name: "Argentina",
            vatRate: 21,
            languages: [
              {
                id: "Q1321",
                name: "Spanish",
              },
            ],
          },
          {
            id: "Q399",
            name: "Armenia",
            vatRate: 20,
            languages: [],
          },
          {
            id: "Q408",
            name: "Australia",
            vatRate: 10,
            languages: [
              {
                id: "Q1860",
                name: "English",
              },
            ],
          },
          {
            id: "Q40",
            name: "Austria",
            vatRate: 20,
            languages: [
              {
                id: "Q188",
                name: "German",
              },
            ],
          },
        ],
      },
    },
  },
];

const componentToRender = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter initialEntries={["/"]}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  );

afterEach(cleanup);

it("renders homepage", async () => {
  const { getByTestId } = componentToRender();
  await waitFor(() => getByTestId("home-header"));
});

it("proceeds to countries page", async () => {
  const { getByTestId } = componentToRender();
  await waitFor(() => getByTestId("home-header"));
  fireEvent.click(getByTestId("countries-link"));

  await waitFor(() => getByTestId("countries-header"));
});
