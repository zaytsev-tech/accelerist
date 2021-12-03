import styled from 'styled-components';

import { UserAvatar } from '../../ui/user-avatar';

export const LastLogin = () => {
  return (
    <Container>
      <Title>Last Login</Title>
      <Entry>
        <Username>
          <UserAvatar name="Alexander Zaytsev" />
          <p>Alexander Zaytsev</p>
        </Username>
        <p>23 Jul 2021</p>
      </Entry>
      <Entry>
        <Username>
          <UserAvatar name="Ivan Ivanov" />
          <p>Ivan Ivanov</p>
        </Username>
        <p>23 Jul 2021</p>
      </Entry>
      <Entry>
        <Username>
          <UserAvatar name="Petr Alexandrov" />
          <p>Petr Alexandrov</p>
        </Username>
        <p>23 Jul 2021</p>
      </Entry>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.body};
  margin-bottom: 16px;
`;

const Username = styled.div`
  ${({ theme: { typography } }) => typography.body.footnoteSelect};
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    margin-left: 12px;
  }
`;

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  &:after {
    position: absolute;
    content: '';
    margin-top: 4%;
    margin-left: 3%;
    width: 30%;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.grayBorder};
  }

  & > p {
    ${({ theme: { typography } }) => typography.body.footnote};
    color: ${({ theme: { colors } }) => colors.grayDark};
  }
`;
