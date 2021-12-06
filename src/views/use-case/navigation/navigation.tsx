import { FC, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import { Profile, User } from '../../../store/user';
import { routes } from '../../routes';
import { IconBurger, IconSearch, LogoIcon } from '../../ui/icons';
import { NavItem } from '../../ui/nav-item';

interface NavigationProps {
  titlePage: string;
}

interface UserProp {
  user: Profile;
}

export const Navigation: FC<NavigationProps> = ({ titlePage }) => {
  const theme = useContext(ThemeContext);
  const profile = useSelector((state: UserProp) => state.user.user);
  return (
    <Header>
      <Icon className={Icon} width={170} height={40} color={theme.colors.black} />
      <NavItems>
        <ul>
          <Link to={routes.dashboard.root}>
            <NavItem title="Dashboard" active={titlePage} />
          </Link>
          <Link to={routes.search.root}>
            <NavItem title="Search" active={titlePage} />
          </Link>
          <Link to={routes.favorites.root}>
            <NavItem title="Favorites" active={titlePage} />
          </Link>
          <Link to={routes.prospects.root}>
            <NavItem title="Prospects" active={titlePage} />
          </Link>
          <Link to={routes.accountingServices.root}>
            <NavItem title="Services" active={titlePage} />
          </Link>
        </ul>
      </NavItems>
      <Search>
        <InputSearch placeholder="Search" />
        <Loupe className={Loupe} width={15} height={15} color={theme.colors.grayDark} />
      </Search>
      <UserProfile>
        <Avatar />
        <Username>
          {profile.firstName} {profile.lastName}
        </Username>
      </UserProfile>
      <Burger width={24} height={24} color={theme.colors.black} />
    </Header>
  );
};

const Header = styled.div`
  background-color: ${({ theme: { colors } }) => colors.blueHeader};
  margin: 0 auto;
  text-align: left;
  padding: 20px 60px;
  vertical-align: middle;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    padding: 5%;
  }
`;

const NavItems = styled.div`
  ${({ theme: { typography } }) => typography.body.footnote};
  display: inline-block;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    display: none;
  }
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

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    display: none;
  }
`;

const InputSearch = styled.input`
  background-color: ${({ theme: { colors } }) => colors.blueInputHeader};
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

const UserProfile = styled.div`
  margin: 0;
  display: inline-flex;
  float: right;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    display: none;
  }
`;

const Avatar = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
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

const Burger = styled(IconBurger)`
  display: none;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    display: block;
  }
`;
