import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  background-color: #fff159;
  width: 100%;
  z-index: 1;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;
  }
`;
