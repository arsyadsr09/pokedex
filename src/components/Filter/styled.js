import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FilterButton = styled.div`
  position: fixed;
  top: 20%;
  left: 12.5%;
  height: 90px;
  width: 60px;
  background: #2f3542;
  clip-path: polygon(100% 0, 100% 88%, 75% 100%, 0 100%, 0 0);
  transition: all 0.5s ease;
  z-index: 4;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;

  &.active {
    transition: all 0.5s ease;
    padding: 0;
    left: 27.4%;
    height: 180px;

    .filter-icon {
      opacity: 1;
    }

    .submit-icon {
      opacity: 1;
    }

    .inner-filter {
      background: #ff4757;
    }

    .inner-submit {
      height: 90px;
    }
  }
`

export const InnerFilterButton = styled.div`
  transition: all 0.5s ease;
  background: #2ed573;
  height: 90px;
  width: 60px;
  clip-path: polygon(100% 0, 100% 88%, 75% 100%, 0 100%, 0 0);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.5s ease;
    .inner-filter {
      transition: all 0.5s ease;
      height: 90px;
      width: 60px;
    }

    .filter-icon {
      transition: all 1.3s ease;
      -o-transform: rotate(720deg);
      -ms-transform: rotate(720deg);
      -moz-transform: rotate(720deg);
      -webkit-transform: rotate(720deg);
      transform: rotate(720deg);
    }
  }
`

export const InnerSubmitButton = styled.div`
  transition: all 0.5s ease;
  height: 0;
  width: 60px;
  clip-path: polygon(100% 0, 100% 88%, 75% 100%, 0 100%, 0 0);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.5s ease;
    .inner-submit {
      transition: all 0.5s ease;
      height: 90px;
      width: 60px;
    }

    .submit-icon {
      transition: all 1.3s ease;
      -o-transform: rotate(720deg);
      -ms-transform: rotate(720deg);
      -moz-transform: rotate(720deg);
      -webkit-transform: rotate(720deg);
      transform: rotate(720deg);
    }
  }
`

export const FilterIcon = styled(FontAwesomeIcon)`
  transition: all 0.5s ease;
  color: white;
  font-size: 2.5rem;
  opacity: 0.5;
  z-index: 1;
`

export const SubmitIcon = styled(FontAwesomeIcon)`
  transition: all 0.5s ease;
  color: #2ed573;
  font-size: 2.5rem;
  opacity: 0.5;
  z-index: 1;
`

export const FilterCanvas = styled.div`
  transition: all 0.5s ease;
  background: #2f3542;
  position: fixed;
  padding: 1rem 0 20px 0;
  top: 20%;
  left: 12.5%;
  width: 0;
  z-index: 5;
  height: 22.5rem;
  clip-path: polygon(100% 0, 100% 88%, 85% 100%, 0 100%, 0 0);
  display: flex;
  justify-content: center;
  // align-items: center;

  &.active {
    transition: all 0.5s ease;
    width: 15% !important;
  }
`

export const FilterTypeStyled = styled.span`
  text-transform: capitalize;
  margin: 0 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: small;

  span {
    border-radius: 4px;
    padding: 5px 10px;
    margin: 3px 5px;
    color: #fff;
    margin-right: 2px;
    width: 45%;
    font-size: 11.5px;
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
