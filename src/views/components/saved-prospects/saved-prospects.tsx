import { FC } from 'react';
import styled from 'styled-components';

import { SortItems } from '../../ui/sort-items';
import { Navigation } from '../../use-case/navigation';
import { Prospect } from '../../use-case/prospect';

export const SavedProspects: FC = () => {
  return (
    <Page>
      <Navigation titlePage="Prospects" />
      <Header>Prospects</Header>
      <Content>
        <HeaderItems>
          <Sort>
            <SortTitle>Sort by</SortTitle>
            <SortItems />
          </Sort>
        </HeaderItems>
        <Prospects>
          <Prospect />
          <Prospect />
        </Prospects>
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
  padding: 32px 284px 20% 60px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: auto;
    padding: 1%;
  }
`;

const HeaderItems = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;

const Sort = styled.div`
  display: flex;
  align-items: center;
`;

const SortTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.grayDark};
  ${({ theme: { typography } }) => typography.body.footnote};
  margin-right: 26px;
`;

const Prospects = styled.div`
  margin: 0;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    width: 45.5%;
  }
`;
