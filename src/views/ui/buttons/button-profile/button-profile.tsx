import styled from 'styled-components';

export const ButtonProfile = () => {
  return (
    <Container>
      <p>Profile</p>
    </Container>
  );
};

const Container = styled.button`
  border-radius: 6px;
  padding: 0% 37%;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme: { colors } }) => colors.blue};
  background-color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blueProfileHover};
    color: ${({ theme: { colors } }) => colors.blue};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.blueSecond};
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;
