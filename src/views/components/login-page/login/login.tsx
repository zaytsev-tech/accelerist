import styled from 'styled-components';

import BgImage from '../../../../images/homedark.png';
import { theme } from '../../../../styles';
import { LogoIcon } from '../../../ui/icons';
import { Tabs } from '../../../ui/tabs';

export const Login = () => {
  return (
    <Page>
      <Header>
        <LogoIcon width={160} height={30} color={theme.colors.white} />
      </Header>
      <Body>
        <LoginForm>
          <Welcome>Welcome to Accelerist</Welcome>
          <Tabs />
        </LoginForm>
      </Body>
    </Page>
  );
};

const Page = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Body = styled.div`
  display: -webkit-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${BgImage});
  background-size: 100%;
  height: 900px;
`;

const Header = styled.div`
  ${({ theme: { typography } }) => typography.body.logoTitle};
  background: ${({ theme: { colors } }) => colors.black};
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 27px;
  padding-bottom: 27px;
`;

const LoginForm = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  margin: 0 auto;
  margin-top: 73px;
  display: block;
  border-radius: 6px;
  width: 454px;
  height: 630px;
`;

const Welcome = styled.div`
  ${({ theme: { typography } }) => typography.body.headline};
  text-align: center;
  margin-top: 40px;
`;
