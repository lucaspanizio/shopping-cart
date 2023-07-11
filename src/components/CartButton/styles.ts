import styled from "styled-components";

export const Container = styled.button`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 20px;
  color: #333;
`;

export const Count = styled.span`
  background-color: red;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
