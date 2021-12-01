import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconSearch, LogoIcon } from '../../ui/icons';
import { NavItem } from '../../ui/nav-item';

export const Navigation = () => {
  const theme = useContext(ThemeContext);
  return (
    <Header>
      <Icon className={Icon} width={170} height={40} color={theme.colors.black} />
      <NavItems>
        <ul>
          <NavItem title="Dashboard" active={true} />
          <NavItem title="Audience" />
          <NavItem title="Pricing" />
          <NavItem title="Prospecting" />
          <NavItem title="ROI" />
          <NavItem title="Upgrade Membership" />
        </ul>
      </NavItems>
      <Search>
        <InputSearch placeholder="Search" />
        <Loupe className={Loupe} width={15} height={15} color={theme.colors.grayDark} />
      </Search>
      <User>
        <Avatar />
        <Username>No name</Username>
      </User>
    </Header>
  );
};

const Header = styled.div`
  background: ${({ theme: { colors } }) => colors.blueHeader};
  margin: 0 auto;
  text-align: left;
  padding: 20px 60px;
  vertical-align: middle;

  @media (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const NavItems = styled.div`
  ${({ theme: { typography } }) => typography.body.footnote};
  display: inline-block;
`;

const Icon = styled(LogoIcon)`
  vertical-align: middle;
`;

const Search = styled.div`
  display: inline-block;
  width: 25%;
  vertical-align: text-bottom;
  position: relative;
  line-height: 150%;
`;

const InputSearch = styled.input`
  background: ${({ theme: { colors } }) => colors.blueInputHeader};
  padding: 10px 24px;
  border-radius: 6px;
  width: 100%;
  border: none;
  position: absolute;
`;

const Loupe = styled(IconSearch)`
  position: relative;
  vertical-align: middle;
  margin-top: 2%;
  left: 104%;
`;

const User = styled.div`
  margin: 0;
  display: inline-flex;
  float: right;
`;

const Avatar = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  width: 36px;
  height: 36px;
  border-radius: 6px;
  margin-right: 12px;
  display; inline-block;
`;

const Username = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  display: block;
  margin-top: 10%;
`;
