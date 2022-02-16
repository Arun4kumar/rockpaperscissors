import {
  Scoreboard,
  Scorecard,
  Title,
  Container,
} from "./Components/Header.styled";

import { useState, useEffect } from "react";
import "./App.css";
import { Button, BackDrop } from "./Components/Button.style";
import { Gameplay, Circle, Playing, Box } from "./Components/Gameplay.style";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Barlow Semi Condensed', sans-serif;
  box-sizing: border-box;
}

body {
  font-family: "Barlow Semi Condensed";
  
  width: 100vw;
  height: 100vh;
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
}
`;

const theme = {
  colors: {
    DarkText: "hsl(229, 25%, 31%)",
    ScoreText: "hsl(229, 64%, 46%)",
    HeaderOutline: "hsl(217, 16%, 45%)",
  },
  gradiants: {
    scissors: {
      from: "hsl(39, 89%, 49%)",
      to: "hsl(40, 84%, 53%)",
    },
    rock: { from: "hsl(349, 71%, 52%)", to: "hsl(349, 70%, 56%)" },
    paper: {
      from: "hsl(230, 89%, 62%)",
      to: "hsl(230, 89%, 65%)",
    },
  },
};

const maping = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

const images = {
  rock: "./images/icon-rock.svg",
  paper: "./images/icon-paper.svg",
  scissors: "./images/icon-scissors.svg",
};

function App() {
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState(0);
  const [computed, setComputed] = useState(0);
  const [result, setResult] = useState("");
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(false);

  const change = (num) => {
    setChoice(num);
    setPlaying(true);
  };

  const resetHandler = () => {
    setChoice(0);
    setPlaying(false);
    setComputed(0);
    setResult("");
  };

  useEffect(() => {
    if (choice === 0) {
      return;
    }
    const play = () => {
      let chance = (Math.random() * 10).toFixed(0) % 4;

      setTimeout(() => {
        setComputed(chance);
        if (chance === choice) {
          setResult("Tie");
        } else if (
          (choice === 1 && chance === 2) ||
          (chance === 3 && choice === 2) ||
          (chance === 1 && choice === 3)
        ) {
          setResult("You Loose");
        } else {
          setScore((s) => s + 1);
          setResult("You Win");
        }
      }, 1000);
    };
    play();
  }, [choice]);

  return (
    <ThemeProvider theme={theme}>
      {active && (
        <BackDrop
          onClick={() => {
            setActive(false);
          }}
        >
          <Scorecard>
            <img
              alt="image"
              onClick={() => {
                setActive(false);
              }}
              style={{ alignSelf: "flex-end" }}
              src={"./images/icon-close.svg"}
            ></img>
            <img alt="image" src={"./images/image-rules.svg"} />
          </Scorecard>
        </BackDrop>
      )}
      <GlobalStyles />
      <Container>
        <Scoreboard>
          <Title>
            <img alt="image" src={"./images/logo.svg"}></img>
          </Title>
          <Scorecard>
            <p>Score</p>
            <h1>{score}</h1>
          </Scorecard>
        </Scoreboard>
        {!playing && (
          <Gameplay img={"./images/bg-triangle.svg"}>
            <Circle
              from={theme.gradiants.rock.from}
              to={theme.gradiants.rock.to}
            >
              <div onClick={() => change(1)}>
                <img alt="image" src={images.rock} />
              </div>
            </Circle>
            <Circle
              from={theme.gradiants.paper.from}
              to={theme.gradiants.paper.to}
            >
              <div onClick={() => change(2)}>
                <img alt="image" src={images.paper} />
              </div>
            </Circle>

            <Circle
              from={theme.gradiants.scissors.from}
              to={theme.gradiants.scissors.to}
            >
              <div onClick={() => change(3)}>
                <img alt="image" src={images.scissors} />
              </div>
            </Circle>
          </Gameplay>
        )}
        {playing && (
          <Playing>
            <Box>
              <Title>You Picked</Title>
              {choice !== 0 && (
                <Circle
                  big={true}
                  from={theme.gradiants[maping[choice]].from}
                  to={theme.gradiants[maping[choice]].to}
                >
                  <div>
                    <img alt="image" src={images[maping[choice]]} />
                  </div>
                </Circle>
              )}
            </Box>
            {result && (
              <Box>
                <h1>{result}</h1>
                <Button textColor={"hsl(229, 25%, 31%)"} color={"white"}>
                  <h3 onClick={resetHandler}>Play Again</h3>
                </Button>
              </Box>
            )}
            <Box>
              <Title>The House Pick</Title>
              {computed ? (
                <Circle
                  big={true}
                  from={theme.gradiants[maping[computed]].from}
                  to={theme.gradiants[maping[computed]].to}
                >
                  <div>
                    <img alt="image" src={images[maping[computed]]} />
                  </div>
                </Circle>
              ) : (
                <Circle></Circle>
              )}
            </Box>
          </Playing>
        )}
        <Button
          onClick={() => {
            setActive(true);
          }}
          style={{ alignSelf: "flex-end" }}
          border={"white"}
          color=""
        >
          Rules
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
