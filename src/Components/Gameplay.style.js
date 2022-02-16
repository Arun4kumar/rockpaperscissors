import styled from "styled-components";

export const Gameplay = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  max-width: 600px;
`;

export const Circle = styled.div`
  width: ${({ big }) => (big ? "200px" : "150px")};
  height: ${({ big }) => (big ? "200px" : "150px")};
  margin: 30px 30px;
  border-radius: 50%;
  background: radial-gradient(
    circle at top left,
    ${({ from, theme }) => (from ? from : theme.colors.DarkText)},
    ${({ to, theme }) => (to ? to : theme.colors.DarkText)}
  );

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: ${({ big }) => (big ? "100px" : "60px")};
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    width: ${({ big }) => (big ? "140px" : "100px")};
    height: ${({ big }) => (big ? "140px" : "100px")};
  }
  &:hover {
    scale: 1.1;
    box-shadow: 0 0 30px 10px rgba(225, 225, 225, 0.2);
    transition: all 0.2s ease-in;
  }
`;

export const Playing = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    &::nth-child(2) {
      order: 3;
    }
  }
`;

export const Box = styled.div`
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: larger;
  text-transform: uppercase;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
