import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const EvolutionLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const EvolutionCard = styled.div`
  margin-top: 2rem;
  width: 100%;
  padding: 1rem 1.5rem;
  min-height: 20rem;
  background: #a4a4a4;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%, 0 92%);
  background-image: url(${(props) => props.img});
`

export const EvolutionTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "FlexoBold", sans-serif;
`

export const EvolutionPer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  &:hover {
    .evo-img {
      transition: all 0.5s ease;
      background: #a4b0be;
    }
  }
`

export const EvolutionPerTitle = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  color: white;
  font-size: 1.4rem;
  font-family: "FlexoBold", sans-serif;
  text-transform: capitalize;
`

export const EvolutionPerNumber = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  color: #a4b0be;
  font-size: 1.4rem;
`

export const EvolutionImg = styled.div`
  transition: all 0.5s ease;
  width: 12rem;
  height: 12rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6rem;
  background: #616161;
  border: 0.4rem solid #fff;
`

export const NextEvo = styled(FontAwesomeIcon)`
  position: absolute;
  top: 6rem;
  right: -1rem;
  bottom: 0;
  color: white;
  font-size: 3rem;
  z-index: 5;
`

export const Row = styled.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`