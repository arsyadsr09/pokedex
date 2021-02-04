import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CompareButton = styled.div`
  position: fixed;
  top: 20%;
  left: 12.5%;
  height: 90px;
  width: 60px;
  clip-path: polygon(100% 0, 100% 88%, 75% 100%, 0 100%, 0 0);
  z-index: 10;
  transition: all 1.5s ease;
  display: flex;
  flex-direction: column;

  &.active {
    transition: all 1.5s ease;
    padding: 0;
    left: 87.4%;
    .compare-icon {
      opacity: 1;
    }
  }
`

export const InnerCompareButton = styled.div`
  transition: all 0.5s ease;
  background: #ff6348;
  height: 90px;
  width: 60px;
  clip-path: polygon(100% 0, 100% 88%, 75% 100%, 0 100%, 0 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  &:hover {
    transition: all 0.5s ease;
    .inner-compare {
      transition: all 0.5s ease;
      height: 90px;
      width: 60px;
    }

    .compare-icon {
      transition: all 1.3s ease;
      -o-transform: rotate(720deg);
      -ms-transform: rotate(720deg);
      -moz-transform: rotate(720deg);
      -webkit-transform: rotate(720deg);
      transform: rotate(720deg);
    }
  }
`
export const CompareIcon = styled(FontAwesomeIcon)`
  transition: all 0.5s ease;
  color: white;
  font-size: 2.5rem;
  opacity: 0.5;
  z-index: 1;
`

export const CompareCanvas = styled.div`
  transition: all 1.5s ease;
  background: #2f3542;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 12.5%;
  border-right: 0;
  width: 0;
  min-height: 100%;
  justify-content: flex-start;
  z-index: 5;
  overflow-y: scroll;
  overflow-x: hidden;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1s ease;
    opacity: 0;
  }

  &.active {
    transition: all 1.5s ease;
    width: 75% !important;
    border-right: 1rem solid #ff6348;
    padding: 2rem;
    .title {
      transition: all 1.5s ease;
      opacity: 1;
    }
    .content {
      transition: all 1.5s ease;
      opacity: 1;
    }
  }
`

export const CompareTitle = styled.div`
  transition: all 1s ease;
  color: white;
  font-size: 4rem;
  font-family: "FlexoBold", sans-serif;
`

export const CompareVersus = styled.div`
  transition: all 1s ease;
  position: absolute;
  top: 40vh;
  color: white;
  font-size: 6rem;
  font-family: "FlexoBold", sans-serif;
  z-index: 6;
`

export const CompareTypeStyled = styled.span`
  text-transform: capitalize;
  margin: 0 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: small;

  span {
    border-radius: 4px;
    padding: 5px 2rem;
    margin: 3px 5px;
    color: #fff;
    margin-right: 2px;
    font-size: 1.2rem;
    cursor: pointer;

    .check-icon {
      transition: all 0.5s ease;
      opacity: 0;
    }

    &.active {
      .check-icon {
        transition: all 0.5s ease;
        opacity: 1;
      }
    }
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
    color: #333;
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

export const Row = styled.div`
  width: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
`

export const Divider = styled.div`
  height: 2rem;
`

export const ContentWrapper = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderStyled = styled.div`
  margin-top: -4.2vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TitleRightStyled = styled.span`
  text-transform: capitalize;
  margin: 0rem 0.8rem 0 0;
  font-family: "FlexoBold", sans-serif;
  font-size: 2.4vw;
  color: white;
  align-self: flex-end;
`

export const NumberRightStyled = styled.div`
  text-transform: capitalize;
  padding: 0.5rem 1.2vw 0 2.4vw;
  font-family: "Flexo", sans-serif;
  font-size: 2.2vw;
  color: #747d8c;
`

export const TitleLeftStyled = styled.span`
  text-transform: capitalize;
  margin: 0rem 0.8rem 0 0;
  font-family: "FlexoBold", sans-serif;
  font-size: 2.4vw;
  color: white;
`

export const NumberLeftStyled = styled.div`
  text-transform: capitalize;
  margin: 0.5rem 2.4vw 0 1vw;
  font-family: "Flexo", sans-serif;
  font-size: 2.2vw;
  color: #747d8c;
  align-self: flex-end;
`

export const ImageLeftCanvas = styled.div`
  background-color #57606f;
  clip-path: polygon(100% 0, 100% 70%, 89% 82%, 48% 82%, 37% 100%, 0 100%, 0 0);
  padding: 10px;
  width:100%;
  border-radius: 8px;
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
`

export const ImageRightCanvas = styled.div`
  background-color #57606f;
  clip-path: polygon(100% 0, 100% 70%, 89% 82%, 48% 82%, 37% 100%, 0 100%, 0 0);
  padding: 10px;
  width:100%;
  border-radius: 8px;
`

export const LabelCompare = styled.div`
  margin: 1rem 3rem;
  color: #70a1ff;
  font-size: 2vw;
`

export const WinValueCompare = styled.div`
  // margin: 1rem 0;
  color: white;
  font-family: "FlexoBold", sans-serif;
  font-size: 3vw;
  text-transform: capitalize;
`

export const LoseValueCompare = styled.div`
  // margin: 1rem 0;
  color: #57606f;
  font-size: 2.5vw;
  text-transform: capitalize;
  font-family: "FlexoBold", sans-serif;
`

export const BtnExecute = styled.div`
  background-color #ff4757;
  clip-path: polygon(100% 0, 100% 75%, 92% 100%, 0 100%, 0 0);
  height: 2.5rem;
  width: 15rem;
  font-family: "FlexoBold", sans-serif;
  color: white;
  cursor: pointer;
`
