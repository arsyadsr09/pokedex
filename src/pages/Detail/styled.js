import styled from "styled-components"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PathWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const PathLeftStyled = styled(Link)`
  position: relative;
  // width: 50%;
  height: 130px;
  margin-right: 2px;
  flex: 1;
  background: #a4a4a4;
  clip-path: polygon(0 0, 100% 0, 100% 65%, 45% 65%, 40% 100%, 0 100%);
  transition: all 0.5s ease;
  text-decoration: none;

  &.disabled {
    transition: all 0.5s ease;
    text-decoration: none;
    background: #57606f;
    color: #747d8c;
    &:hover {
      transition: all 0.5s ease;
      text-decoration: none;
      background: #57606f;
      color: #747d8c;
    }
  }

  &:hover {
    text-decoration: none;
    background: #eccc68;
    transition: all 0.5s ease;
  }
`

export const PathRightStyled = styled(Link)`
  position: relative;
  // width: 50%;
  height: 130px;
  margin-left: 2px;
  flex: 1;
  background: #a4a4a4;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 55% 65%, 0 65%);
  transition: all 0.5s ease;
  text-decoration: none;

  &.disabled {
    transition: all 0.5s ease;
    text-decoration: none;
    background: #57606f;
    color: #747d8c;
    &:hover {
      transition: all 0.5s ease;
      text-decoration: none;
      background: #57606f;
      color: #747d8c;
    }
  }

  &:hover {
    text-decoration: none;
    background: #eccc68;
    transition: all 0.5s ease;
  }
`

export const PathContent = styled.div`
  min-height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-family: "Exo", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    &.number {
      margin-right: 10px;
      color: white;
    }
    &.name {
      text-transform: capitalize;
      color: #616161;
    }
  }
`

export const ChevronLeft = styled(FontAwesomeIcon)`
  position: absolute;
  top: -3rem;
  left: 3rem;
  bottom: 0;
  color: #2f3542;
  font-size: 15rem;
  opacity: 0.3;
  z-index: 1;
`
export const ChevronRight = styled(FontAwesomeIcon)`
  position: absolute;
  top: -3rem;
  right: 3rem;
  bottom: 0;
  color: #2f3542;
  font-size: 15rem;
  opacity: 0.3;
  z-index: 5;
`

export const ContainerWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`

export const ContentWrapper = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleStyled = styled.span`
  text-transform: capitalize;
  margin: -1rem 0.8rem 0 0.8rem;
  font-family: "Exo", sans-serif;
  font-weight: 600;
  font-size: 2.4rem;
  color: #2f3542;
`

export const NumberStyled = styled.span`
  text-transform: capitalize;
  margin: -1rem 0.8rem 0 0.2rem;
  font-family: 'Exo', sans-serif;
  font-size: 2.4rem;
  color: #747d8c;
`

export const ImageCanvas = styled.div`
  background-color #f1f2f6;
  padding: 10px;
  width:100%;
  border-radius: 8px;
`

export const Row = styled.div`
  width: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
`

export const Divider = styled.div`
  height: 2rem;
`

export const FlavorText = styled.div`
  margin-top: 0.5rem;
  font-size: 18px;
`

export const GeneralCard = styled.div`
  background-color #1e90ff;
  padding: 1rem;
  width:100%;
  min-height: 10rem;
  border-radius: 8px;
`

export const FormGeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const LabelGeneralInfo = styled.span`
  color: white;
  margin-bottom: 0.3rem;
`

export const ValueGeneralInfo = styled.span`
  color: white;
  font-family: "Exo", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-transform: capitalize;
  display: flex;
  flex-direction: row;

  &.hidden {
    color: #ff6348;
  }
`

export const GenderIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
`

export const GenderDivider = styled.div`
  width: 10px;
`

export const LabelType = styled.span`
  color: #2f3542;
  margin-bottom: 0.3rem;
  font-size: 22px;
`

export const TypeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.8rem;
  // justify-content: center;
`

export const TypeStyled = styled.span`
  text-transform: capitalize;
  display: flex;
  align-self: flex-start;
  justify-content: space-around;
  font-size: small;

  span {
    border-radius: 4px;
    padding: 0.3rem 2rem;
    color: #fff;
    margin-right: 2px;
    font-size: 1rem;
    font-family: "Exo", sans-serif;
    font-weight: 600;
  }

  .normal {
    background: #eee;
    color: #333;
  }

  .grass {
    background: #56ab2f;
  }

  .poison {
    background: #ad5389;
  }

  .fighting {
    background: #ff8008;
  }

  .flying {
    background: #5c258d;
  }

  .ground {
    background: #ba8b02;
  }

  .rock {
    background: #3c3b3f;
  }

  .bug {
    background: #dce35b;
    color: #333;
  }

  .ghost {
    background: #9d50bb;
  }

  .steel {
    background: #8e9eab;
    color: #333;
  }

  .fire {
    background: #ff416c;
  }

  .water {
    background: #43c6ac;
  }

  .electric {
    background: #42275a;
  }

  .psychic {
    background: #bc4e9c;
  }

  .ice {
    background: #7f7fd5;
  }

  .dragon {
    background: #0f0c29;
  }

  .dark {
    background: #232526;
  }

  .fairy {
    background: #b24592;
  }
`
