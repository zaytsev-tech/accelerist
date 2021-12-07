import { FC, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import { Profile } from '../../../store/ducks/user';
import { logoutRequest } from '../../../store/ducks/user/actions';
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
  const dispatch = useDispatch();
  const profile = useSelector((state: UserProp) => state.user.user);
  function clickLogout() {
    dispatch(logoutRequest());
  }

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
        <MainProfile>
          <Avatar />
          <Username>
            {profile.firstName} {profile.lastName}
          </Username>
        </MainProfile>
        <Menu>
          <MenuProfile>User Profile</MenuProfile>
          <MenuLogout onClick={clickLogout}>Log out</MenuLogout>
        </Menu>
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
  flex-direction: column;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    display: none;
  }

  & button {
    border: none;
    background-color: ${({ theme: { colors } }) => colors.white};
    margin: 5%;
    margin-top: 7%;
    cursor: pointer;
  }

  &:hover {
    & div {
      display: flex;
    }
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

const MainProfile = styled.div`
  display: flex;
`;

const Menu = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuProfile = styled.button`
  margin-bottom: 5px;
`;
const MenuLogout = styled.button`
  color: ${({ theme: { colors } }) => colors.red};
`;
