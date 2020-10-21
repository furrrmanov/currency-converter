import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 300px;
  height: 80vh;
`;

export const InputContainer = styled.div``;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  overflow: auto;
`;

export const ListItem = styled.span`
  width: 100%;
  color: ${props => props.theme.text};
  cursor: pointer;
  :hover {
    color: #ffffff8a;
  }
`;