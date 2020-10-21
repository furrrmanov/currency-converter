import styled from "styled-components";

export const PaneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const CurrencyName = styled.span`
  width: 50px;
`;

export const CountryFlag = styled.div`
  margin-left: 4.5rem;
  user-select: none;

  @media screen and (max-width: 600px) {
    margin-left: 12rem;
  }
`;
