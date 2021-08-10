import React from 'react';
import styled from 'styled-components';

function Loading({ className }) {
  return (
    <BigWrapper>
      <Wrapper className={`section-middle ${className}`}>
        {/* <div className="bar">
          <div className="circle" />
          <p className="loading__p">Loading</p>
        </div> */}
        <div className="planet" />
      </Wrapper>
    </BigWrapper>
  );
}
const BigWrapper = styled.section`
  height: 100vh;
`;

export default Loading;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .planet {
    display: block;
    width: 125px;
    height: 125px;
    position: relative;
    transform-style: preserve-3d;
    border-radius: 50%;
    background: #fcc96b;
    background: rgb(252, 201, 107);
    background: linear-gradient(
      180deg,
      rgba(252, 201, 107, 1) 0%,
      rgba(252, 201, 107, 1) 15%,
      rgba(247, 174, 1, 1) 15%,
      rgba(247, 174, 1, 1) 19%,
      rgba(252, 201, 107, 1) 19%,
      rgba(252, 201, 107, 1) 22%,
      rgba(247, 174, 1, 1) 22%,
      rgba(247, 174, 1, 1) 28%,
      rgba(252, 201, 107, 1) 28%,
      rgba(252, 201, 107, 1) 31%,
      rgba(252, 201, 107, 1) 33%,
      rgba(252, 201, 107, 1) 36%,
      rgba(247, 174, 1, 1) 36%,
      rgba(247, 174, 1, 1) 48%,
      rgba(252, 201, 107, 1) 48%,
      rgba(252, 201, 107, 1) 55%,
      rgba(247, 174, 1, 1) 55%,
      rgba(247, 174, 1, 1) 66%,
      rgba(252, 201, 107, 1) 66%,
      rgba(252, 201, 107, 1) 70%,
      rgba(247, 174, 1, 1) 70%,
      rgba(247, 174, 1, 1) 73%,
      rgba(252, 201, 107, 1) 73%,
      rgba(252, 201, 107, 1) 82%,
      rgba(247, 174, 1, 1) 82%,
      rgba(247, 174, 1, 1) 86%,
      rgba(252, 201, 107, 1) 86%
    );
    box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.25),
      inset 8px -4px 6px rgba(199, 128, 0, 0.5),
      inset -8px 4px 8px rgba(255, 235, 199, 0.5), inset 20px -5px 12px #f7ae01,
      0 0 100px rgba(255, 255, 255, 0.35);
    transform: rotateZ(-15deg);
  }

  .planet::before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 16px solid #7b6f42;
    border-top-width: 0;
    border-radius: 50%;
    box-shadow: 0 -2px 0 #b1a693;
    animation: rings1 0.8s infinite linear;
  }

  .planet::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 8px solid #b1a693;
    border-top-width: 0;
    border-radius: 50%;
    box-shadow: 0 -2px 0 #7b6f42;
    animation: rings2 0.8s infinite linear;
  }

  @keyframes rings1 {
    0% {
      transform: rotateX(65deg) rotateZ(0deg) scale(1.75);
    }
    100% {
      transform: rotateX(65deg) rotateZ(360deg) scale(1.75);
    }
  }

  @keyframes rings2 {
    0% {
      transform: rotateX(65deg) rotateZ(0deg) scale(1.7);
    }
    100% {
      transform: rotateX(65deg) rotateZ(360deg) scale(1.7);
    }
  }

  /*  */
  .bar {
    position: relative;
    height: 5px;
    width: 300px;
    margin: 0 auto;
    background: #fff;
    margin-top: 300px;
  }

  .circle {
    position: absolute;
    top: -30px;
    margin-left: -30px;
    height: 60px;
    width: 60px;
    left: 0;
    background: #fff;
    border-radius: 30%;
    animation: move 5s infinite;
  }

  p {
    position: absolute;
    font-size: 2rem;
    top: -50px;
    right: -35px;
    text-transform: uppercase;
    font-weight: bold;
  }

  @keyframes move {
    0% {
      left: 0;
    }
    50% {
      left: 75%;
      -webkit-transform: rotate(450deg);
      width: 300px;
      height: 300px;
    }
    75% {
      left: 75%;
      -webkit-transform: rotate(450deg);
      width: 300px;
      height: 300px;
    }
    100% {
      right: 100%;
    }
  }
  @media screen and (min-width: 1000px) {
    .bar {
      width: 600px;
    }

    p {
      right: -85px;
    }

    @keyframes move {
      0% {
        left: 0;
      }
      50% {
        left: 100%;
        -webkit-transform: rotate(450deg);
        width: 300px;
        height: 300px;
      }
      75% {
        left: 100%;
        -webkit-transform: rotate(450deg);
        width: 300px;
        height: 300px;
      }
      100% {
        right: 100%;
      }
    }
  }
`;
