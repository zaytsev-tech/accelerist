import { FC } from 'react';
import styled from 'styled-components';

interface AvatarProps {
  name: string;
}

export const UserAvatar: FC<AvatarProps> = ({ name }) => {
  const initials = name.split(' ');
  return (
    <Container>
      <p>
        {initials.reduce((prev, curr) => {
          prev += curr.substr(0, 1);
          return prev;
        }, '')}
      </p>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.blueSecond};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  text-align: center;
  display: inline-block;

  p {
    margin: 0;
    padding-top: 10px;
  }
`;
