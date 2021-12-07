import { FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

import { getCompanies } from '../../../store/ducks/companies/actions';
import { CompanyData } from '../../../store/ducks/companies/types';
import { IconClose, IconSearch, IconSettings } from '../../ui/icons';
import { Pagination } from '../../ui/pagination';
import { SettingItem } from '../../ui/setting-item/setting-item';
import { CardOrganization } from '../../use-case/card-organization';
import { Navigation } from '../../use-case/navigation';

interface CompaniesItems {
  companies: CompanyData;
}

export const Search: FC = () => {
  const theme = useContext(ThemeContext);
  const companies = useSelector((state: CompaniesItems) => state.companies.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, []);
  return (
    <Page>
      <Navigation titlePage="Search" />
      <Header>
        <HeaderText>Search</HeaderText>
        <SearchContainer>
          <InputSearch placeholder="Search" />
          <Icons>
            <IconClose width={24} height={24} color={theme.colors.grayDark} />
            <IconSettings width={24} height={24} color={theme.colors.grayDark} />
            <IconSearch width={24} height={24} color={theme.colors.grayDark} />
          </Icons>
        </SearchContainer>
      </Header>
      <Content>
        <Title>Found 2054 companies</Title>
        <HeaderItems>
          <Settings>
            <SettingItem type="Save" />
            <SettingItem type="Export" />
            <SettingItem type="Mail" />
          </Settings>
          <Pagination />
        </HeaderItems>
        <Cards>
          {Object.values(companies).map((value) => {
            return <CardOrganization key={value.id} item={value} />;
          })}
        </Cards>
      </Content>
    </Page>
  );
};

const Page = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: auto;
  }
`;

const Header = styled.div`
  margin: 0;
  padding: 5px 60px;
  font-size: 32px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderText = styled.h3`
  flex-grow: 1;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    margin: 16px;
  }
`;

const Content = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grayBorder};
  padding: 32px 18% 10% 60px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    padding: 32px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  margin-right: 30%;
  flex-grow: 3;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    margin-right: 0;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 100%;
  }
`;

const InputSearch = styled.input`
  background-color: ${({ theme: { colors } }) => colors.grayBgInput};
  padding: 10px 24px;
  border-radius: 6px;
  width: 100%;
  border: none;
`;

const Icons = styled.div`
  position: absolute;
  display: flex;
  margin-top: 0.5%;
  justify-content: space-around;
  width: 12%;
  left: 87%;
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.bodySelect};
`;

const Settings = styled.div`
  display: flex;
  margin-top: 26px;
  width: 30%;
  justify-content: space-between;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    width: 40%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 50%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 100%;
  }
`;

const HeaderItems = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
