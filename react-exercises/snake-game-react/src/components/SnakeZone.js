import React, { useState, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";
import Button from "./controls/Button";
import GameOver from './controls/GameOver';

let isGameRunnig = false;
let btnInnerText = "Start Game";
let timeInterval = 0;
let time = 0;
let timer = '00:00';

const getRandomFoodLocation = () => {
  const min = 1;
  const max = 98;
  const x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  const y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomFoodLocation(),
  speed: 300,
  direction: "RIGHT",
  playing: false,
  foodCount: 0,
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
  ],
};

function SnakeZone() {
  const [modalShow, setModalShow] = useState(false);
  const [gameState, setGameState] = useState(initialState);

  useEffect(() => {
    let interval;
    if (gameState.playing) {
      interval = setInterval(moveSnake, gameState.speed);
    }
    return () => {
      clearInterval(interval);
    };
  });

  const onKeyDown = (e) => {

    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setGameState((prevState) => {
          if (prevState.direction === "DOWN") return prevState;
          return ({
            ...prevState,
            direction: "UP",
          })
        });
        break;
      case 40:
        setGameState((prevState) => {
          if (prevState.direction === "UP") return prevState;
          return ({
            ...prevState,
            direction: "DOWN",
          })
        });
        break;
      case 37:
        setGameState((prevState) => {
          if (prevState.direction === "RIGHT") return prevState;
          return ({
            ...prevState,
            direction: "LEFT",
          })
        });
        break;
      case 39:
        setGameState((prevState) => {
          if (prevState.direction === "LEFT") return prevState;
          return ({
            ...prevState,
            direction: "RIGHT",
          })
        });
        break;
      default:
        return;
    }
  };

  const moveSnake = () => {
    let dots = [...gameState.snakeDots];
    let head = dots[dots.length - 1];
    switch (gameState.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      default:
        return;
    }
    dots.push(head);
    dots.shift();
    setGameState((prevState) => ({ ...prevState, snakeDots: dots }));
    checkIfOutOfRestrcitedArea();
    checkIfEatFoodSelf();
    checkIfEatFood();
  };

  const checkIfOutOfRestrcitedArea = () => {
    let head = gameState.snakeDots[gameState.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  };

  const checkIfEatFoodSelf = () => {
    let snake = [...gameState.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver();
      }
    });
  };

  const checkIfEatFood = () => {
    let head = gameState.snakeDots[gameState.snakeDots.length - 1];
    let food = gameState.food;
    let foodCount = gameState.foodCount;
    if (head[0] === food[0] && head[1] === food[1]) {
      setGameState((prevState) => ({
        ...prevState,
        food: getRandomFoodLocation(),
        foodCount: foodCount + 1,
      }));
      enlargeSnake();
      increaseSpeed();
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...gameState.snakeDots];
    let head = newSnake[newSnake.length - 1];
    switch (gameState.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      default:
        return;
    }
    newSnake.push(head);
    setGameState((prevState) => ({
      ...prevState,
      snakeDots: newSnake,
    }));
  };

  const increaseSpeed = () => {
    if (gameState.speed > 10) {
      setGameState((prevState) => ({
        ...prevState,
        speed: gameState.speed - 10,
      }));
    }
  };

  const onGameOver = () => {
    clearInterval(timeInterval);
    setGameState((prevState) => ({ ...initialState, foodCount: prevState.foodCount }));
    setModalShow(true)
  };

  const startTimer = () => {
    time += 1;
    secondsToTime(time);
  }

  const secondsToTime = (timeInSeconds = 0) => {
    const divisor_for_minutes = timeInSeconds % (60 * 60);
    const minutes = (Math.floor(divisor_for_minutes / 60)).toString().padStart(2, '0');

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = (Math.ceil(divisor_for_seconds)).toString().padStart(2, '0');

    timer = `${minutes}:${seconds}`
  }

  const handleClick = () => {
    document.onkeydown = onKeyDown;
    isGameRunnig = !isGameRunnig;
    if (isGameRunnig === true) {
      timeInterval = setInterval(startTimer, 1000);
      btnInnerText = "Pause Game";
    } else {
      clearInterval(timeInterval);
      btnInnerText = "Resume Game";
    }
    setGameState((prevState) => ({ ...prevState, playing: isGameRunnig }));
  };

  const resetGame = () => {
    setModalShow(false)
    isGameRunnig = false;
    time = 0; timer = '00:00';
    setGameState((prevState) => ({ ...initialState }));
    btnInnerText = 'Start Game';
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="mt-4 d-flex">
          <span className="h1 pr-5">Snake Game</span>
          <Button
            onClick={() => handleClick()}
            innerText={btnInnerText}
            styleClass="btn btn-info"
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="game-area">
          <Snake snakeDots={gameState.snakeDots} />
          <Food food={gameState.food} />
        </div>
        <div className="instruction-area">
          <div className="label-area">
            <h4 style={{ marginTop: 0 }}>Scoreboard</h4>
            <p>
              <b>Score:</b> {gameState.foodCount}
            </p>
            <p>
              <b>Time:</b> {timer}
            </p>
          </div>
          <div className="label-area">
            <h4 style={{ marginTop: 0 }}>Instructions</h4>
            <p>Use arrow keys to control movement of snake</p>
            <span role="img" aria-label="directions"> ⬅️ ⬆️ ➡️ ⬇️</span>
            <p>
              <b>Use space bar to Pause/Resume the Game</b>
            </p>
            <p>
              <b>Every time snake eats it's speed increases</b>
            </p>
          </div>
        </div>
      </div>
      <GameOver score={gameState.foodCount} time={timer} show={modalShow}
        onHide={() => resetGame()} />
    </div>
  );
}

export default SnakeZone;
