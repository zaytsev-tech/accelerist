import { FC } from 'react';
import styled from 'styled-components';

import { useInitials } from '../../hooks';

interface AvatarProps {
  name: string;
}

export const UserAvatar: FC<AvatarProps> = ({ name }) => {
  return (
    <Container>
      <p>{useInitials(name)}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.blueSecond};
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
