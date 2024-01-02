import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background: green;
`;
const Left = styled.div`
  background-color: red;
  flex: ${(props) => props.left};
`;

const Right = styled.div`
  flex: ${(props) => props.right};
`;

export const SplitScreen = ({ left = 3, right = 1 }) => {
  return (
    <Wrapper>
      <Left left={left}>Left!</Left>

      <Right right={right}>Right!</Right>
    </Wrapper>
  );
};
