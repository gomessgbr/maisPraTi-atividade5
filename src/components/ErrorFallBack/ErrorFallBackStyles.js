import styled from "styled-components";
import {Link} from 'react-router-dom'

export const ErrorFallBackContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  place-items: center;
  padding: 0 10px;
`


export const ErrorFallBackTitle = styled.p`
  font-size: 90px;
  font-weight: 700;
`

export const ErrorFallBackSubtitle = styled.p`
 font-size: 36px;
 font-size: 500;

 @media (max-width: 768px) {
    text-align: center;
  }
`

export const ErrorFallBackButton = styled(Link)`
  padding: 20px;
  background-color: cornflowerblue;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: black;

  &:hover{
    background-color: bisque;
  }

`