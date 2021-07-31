import React from 'react';
import styled from 'styled-components';

function Loading({ className }) {
  return (
    <Wrapper className={className}>
      <div className="bar">
        <div className="circle" />
        <p className="loading__p">Loading</p>
      </div>
    </Wrapper>
  );
}

export default Loading;
const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
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
