import { FC } from 'react';
import styled from 'styled-components';

import BgImage from '../../../../assets/images/homedark.png';
import { theme } from '../../../../styles';
import { LogoIcon, LogoIn } from '../../../ui/icons';
import { Tabs } from '../../../use-case/tabs';

export const Login: FC = () => {
  return (
    <Page>
      <Header>
        <LogoIcon width={160} height={30} color={theme.colors.white} />
      </Header>
      <Body>
        <LoginForm>
          <Welcome>Welcome to Accelerist</Welcome>
          <Tabs />
          <Footer>
            <AfterText>or continue with</AfterText>
            <LinkIn>
              <Icon className="Icon" width={24} height={24} />
            </LinkIn>
          </Footer>
        </LoginForm>
      </Body>
    </Page>
  );
};

const Page = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: auto;
  }
`;

const Body = styled.div`
  display: -webkit-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${BgImage});
  background-size: 100%;
  height: 900px;

  @media (min-height: 1024px) {
    height: 1300px;
    background-size: cover;
  }
  @media (max-height: 1250px) {
    background-size: cover;
  }
`;

const AfterText = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const Header = styled.div`
  ${({ theme: { typography } }) => typography.body.logoTitle};
  background-color: ${({ theme: { colors } }) => colors.black};
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 27px;
  padding-bottom: 27px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const LoginForm = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  margin: 0 auto;
  margin-top: 73px;
  display: block;
  border-radius: 6px;
  width: 454px;
  height: 630px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 97%;
    margin-top: 10%;
  }

  @media (min-height: 1024px) {
    width: 60%;
    height: 50%;
  }
`;

const Welcome = styled.div`
  ${({ theme: { typography } }) => typography.body.headline};
  text-align: center;
  margin-top: 40px;
`;

const Footer = styled.div`
  margin-top: 40px;
`;

const Icon = styled(LogoIn)`
  border: 10px solid ${({ theme: { colors } }) => colors.grayLight};
  border-radius: 100%;
`;

const LinkIn = styled.a`
  margin-top: 34px;
  display: block;
  cursor: pointer;
`;
