import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 15rem auto;
`

export const Text = styled.span`
  color: ${(props) => props.theme.text};
`
