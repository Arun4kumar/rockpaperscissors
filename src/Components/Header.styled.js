import styled from "styled-components";
export const Scoreboard = styled.div`
  width: 100%;

  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  padding: 15px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) {
    max-width: 700px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;
export const Scorecard = styled.div`
  border-radius: 5px;
  padding: 5px 20px;
  max-width: fit-content;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: hsl(229, 64%, 46%);
  }
  h1 {
    color: hsl(229, 25%, 31%);
    font-weight: 700;
  }
`;

export const Container = styled.div`
  padding: 30px 20px;
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
