import { MockedProvider } from "@apollo/client/testing";
import Country from "./Country";
import COUNTRY_QUERY from "../queries/countryQuery";
import { MemoryRouter, Route } from "react-router-dom";
import { render, waitFor, cleanup } from "@testing-library/react";

const mocks = [
  {
    request: {
      query: COUNTRY_QUERY,
      variables: {
        id: "Q889",
      },
    },
    result: {
      data: {
        countries: [
          {
            name: "Afghanistan",
            vatRate: null,
            id: "Q889",
            capital: {
              id: "Q5838",
              name: "Kabul",
            },
            cities: [
              {
                id: "Q183303",
                name: "Jalalabad",
              },
              {
                id: "Q732879",
                name: "Baghlan",
              },
              {
                id: "Q476800",
                name: "Lashkar Gah",
              },
              {
                id: "Q1649301",
                name: "Sar-e Pol",
              },
              {
                id: "Q838954",
                name: "Sheberghan",
              },
              {
                id: "Q130469",
                name: "Mazar-i-Sharif",
              },
              {
                id: "Q386682",
                name: "Khost",
              },
              {
                id: "Q1247205",
                name: "Khan Abad",
              },
              {
                id: "Q45604",
                name: "Kandahar",
              },
              {
                id: "Q477238",
                name: "Taloqan",
              },
              {
                id: "Q1014375",
                name: "Kholm",
              },
              {
                id: "Q5838",
                name: "Kabul",
              },
              {
                id: "Q173731",
                name: "Ghazni",
              },
              {
                id: "Q477148",
                name: "Pul-e Khomri",
              },
              {
                id: "Q45313",
                name: "Herat",
              },
            ],
          },
        ],
      },
    },
  },
];

const componentToRender = ({ countryId }) =>
  render(
    <MemoryRouter initialEntries={[`/countries/${countryId}`]}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Route path="/countries/:id">
          <Country match={{ params: { id: countryId } }} />
        </Route>
      </MockedProvider>
    </MemoryRouter>
  );

afterEach(cleanup);
it("Properly renders country loading state", async () => {
  const { getByTestId } = componentToRender({ countryId: "Q889" });
  await waitFor(() => getByTestId("loading"));
});

it("Properly renders country data", async () => {
  const { getByTestId } = componentToRender({ countryId: "Q889" });
  await waitFor(() => getByTestId("country-name"));
});
