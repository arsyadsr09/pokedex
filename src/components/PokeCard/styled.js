import styled from "styled-components"

export const PokemonCard = styled.div`
  display: flex;
  position: relative;
  min-width: 200px;
  min-height: 300px;
  // box-shadow: 0 5px 5px rgba(109, 213, 237, 0.2);
  // -webkit-transform: skew(-9deg);
  // -moz-transform: skew(-9deg);
  // -o-transform: skew(-9deg);
  // border: 1px solid #2f3542;
  flex-direction: column;
  margin: 10px 5px;

  @-webkit-keyframes swing {
    50% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes swing {
    50% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  &.swing:hover {
    -webkit-animation: swing 0.3s ease;
    animation: swing 0.3s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  &:hover {
    .img-canvas {
      min-width: 225px;
      min-height: 225px;
      transition: all 0.5s ease;
    }
    .pokemon-image {
      width: 200px;
      height: 200px;
      transition: all 0.5s ease;
    }
    .circle-bg {
      position: absolute;
      top: -50px;
      right: -50px;
      width: 350px;
      height: 350px;
      border-radius: 250px;
      transition: all 0.5s ease;
    }
  }
`

export const ImageCanvas = styled.div`
  transition: all 0.5s ease;
  background-color #f1f2f6;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  min-width: 200px;
  min-height: 200px;
  z-index: 2;
`

export const CirlceBg = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 0px;
  height: 0px;
  background-color: #dfe4ea;
  border-radius: 100px;
  z-index: 3;
`

export const PokemonImage = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  z-index: 4;
  width: 180px;
  height: 180px;
  justify-content: center;
  align-self: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
`

export const PokemonContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`

export const PokemonTitle = styled.span`
  margin: 0.5rem 0.8rem;
  font-family: "FlexoBold", sans-serif;
  font-size: 1.4rem;
  color: #2f3542;
`

export const PokemonNumber = styled.span`
  font-family: "FlexoBold", sans-serif;
  padding: 0 5px;
  font-size: 0.8rem;
  color: #747d8c;
  margin-left: 10px;
`

export const PokemonTypeStyled = styled.span`
  // text-transform: uppercase;
  margin: 0 0.8rem;
  display: flex;
  align-self: flex-start;
  justify-content: space-around;
  font-size: small;

  span {
    border-radius: 4px;
    padding: 1px 10px;
    color: #fff;
    margin-right: 2px;
    font-size: 11px;
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
