import styled from "styled-components";

export const Button = styled.div`
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px;
  border: 2px solid ${({ border }) => (border ? border : "transparent")};

  background: ${({ color }) => (color ? color : "transparent")};
  color: ${({ textColor }) => (textColor ? textColor : "white")};
`;

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;
