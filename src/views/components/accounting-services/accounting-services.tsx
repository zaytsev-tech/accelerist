import styled from 'styled-components';

import { ButtonDelete } from '../../ui/buttons/button-delete';
import { ButtonEdit } from '../../ui/buttons/button-edit';
import { FilterItem } from '../../ui/filter-item';
import { Pagination } from '../../ui/pagination';
import { SettingItem } from '../../ui/setting-item';
import { CardOrganization } from '../../use-case/card-organization';
import { Navigation } from '../../use-case/navigation';

export const AccountingServices = () => {
  return (
    <Page>
      <Navigation titlePage="Services" />
      <Header>
        Accounting Services
        <Buttons>
          <ButtonEdit />
          <ButtonDelete />
        </Buttons>
      </Header>
      <Content>
        <Companies>
          <Title>5 companies</Title>
        </Companies>
        <Filters>
          <HeadFilter>Filters</HeadFilter>
          <FiltersContainer>
            <FilterItem text="Gender: Both" />
            <FilterItem text="Accounting Services" />
          </FiltersContainer>
        </Filters>
        <HeaderItems>
          <Settings>
            <SettingItem type="Export" />
          </Settings>
          <Pagination />
        </HeaderItems>
        <Cards>
          <CardOrganization />
          <CardOrganization />
          <CardOrganization />
          <CardOrganization />
          <CardOrganization />
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

const Header = styled.h3`
  flex: none;
  order: 1;
  display: flex;
  justify-content: space-between;
  padding: 24px 60px;
  font-size: 32px;
  margin: 0;

  & button {
    margin-right: 8px;
  }
`;

const Content = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grayBorder};
  padding: 32px 284px 10% 60px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: auto;
    padding: 1%;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.bodySelect};
`;

const Companies = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;

const Filters = styled.div`
  margin-top: 16px;
`;

const HeadFilter = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
  margin-top: 8px;
`;

const FiltersContainer = styled.div`
  display: inline-flex;
  margin-left: 1%;
`;

const Settings = styled.div`
  display: flex;
  margin-top: 15px;
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
  margin-top: 24px;
`;
