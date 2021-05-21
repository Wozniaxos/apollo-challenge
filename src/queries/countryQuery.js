import { gql } from "@apollo/client";

const COUNTRY_QUERY = gql`
  query getCountry($id: String!) {
    countries(where: { id: { eq: $id } }) {
      name
      vatRate
      id
      capital {
          id
        name
      }
      cities {
          id
        name
      }
    }
  }
`;

export default COUNTRY_QUERY