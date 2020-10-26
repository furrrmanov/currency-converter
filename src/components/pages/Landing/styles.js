import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 550px;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px auto;

  @media only screen and (max-width: 620px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const PaneContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
`
