import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { CompanyData } from '../../../store/ducks/companies/types';
import { usePageSearchParams } from '../../hooks';
import { Pagination } from '../../ui/pagination';
import { CardOrganization } from '../../use-case/card-organization';
import { Navigation } from '../../use-case/navigation';

interface CompaniesItems {
  companies: CompanyData;
}

export const Favorites: FC = () => {
  const companies = useSelector((state: CompaniesItems) => state.companies.items);
  const [search] = usePageSearchParams();
  const totalItems = useSelector(
    (state: CompaniesItems) => state.companies.meta.totalItems,
  );
  const totalPages = useSelector(
    (state: CompaniesItems) => state.companies.meta.totalPages,
  );
  const page = Number(search.page) || 1;
  const limit = Number(search.limit) || 15;

  return (
    <Page>
      <Navigation titlePage="Favorites" />
      <Header>Favorites</Header>
      <Content>
        <HeaderItems>
          <Title>{totalItems} companies</Title>
          <Pagination initPage={page} initLimit={limit} totalPages={totalPages} />
        </HeaderItems>
        <Cards>
          {Object.values(companies).map((value) => {
            if (value.like) {
              return <CardOrganization key={value.id} item={value} />;
            }
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

const Header = styled.h3`
  flex: none;
  order: 1;
  flex-grow: 0;
  padding: 24px 60px;
  font-size: 32px;
  margin: 0;
`;

const Content = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grayBorder};
  padding: 32px 284px 10% 60px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: auto;
    padding: 1%;
  }
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.bodySelect};
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;
`;

const HeaderItems = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;
