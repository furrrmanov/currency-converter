import styled from "styled-components";

import MaterialAutocomplete from "@material-ui/lab/Autocomplete";

export const Autocomplete = styled(MaterialAutocomplete)`
  @media screen and (max-width: 600px) {
    .MuiAutocomplete-inputRoot {
      width: 300px;
    }
  }
`;
