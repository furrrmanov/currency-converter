import styled from 'styled-components'

export const Button = styled.button`
  color: ${(props) => props.theme.text};
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 75px;
  outline: none;
  transition: 0.2s linear;
  margin-top: calc((100px - 40px) / 2);

  :hover {
    background-color: rgba(226, 209, 206, 0.548);
  }

  @media only screen and (max-width: 620px) {
    margin: 10px auto;
  }
`
