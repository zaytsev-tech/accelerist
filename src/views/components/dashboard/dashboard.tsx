import styled from 'styled-components';

import { CardFavorite } from '../../use-case/card-favorite';
import { Navigation } from '../../use-case/navigation';
import { Prospect } from '../../use-case/prospect';
import { Reports } from '../../use-case/reports';

export const Dashboard = () => {
  return (
    <Page>
      <Navigation />
      <Header>Dashboard</Header>
      <Content>
        <Prospecting>
          <Heading>
            <TitleHeading>Prospecting Sessions</TitleHeading>
            <SeeMore>see more</SeeMore>
          </Heading>
          <Prospects>
            <Prospect />
            <Prospect />
          </Prospects>
        </Prospecting>
        <Section>
          <HalfSection>
            <Heading>
              <TitleHeading>Favorites</TitleHeading>
              <SeeMore>see more</SeeMore>
            </Heading>
            <Cards>
              <CardFavorite />
              <CardFavorite />
              <CardFavorite />
              <CardFavorite />
            </Cards>
          </HalfSection>
          <HalfSection>
            <Heading>
              <TitleHeading>Reports</TitleHeading>
              <SeeMore>see more</SeeMore>
            </Heading>
            <Reports />
          </HalfSection>
        </Section>
      </Content>
    </Page>
  );
};

const Page = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (max-width: 600px) {
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
  background: ${({ theme: { colors } }) => colors.grayBorder};
  padding: 32px 284px 0px 60px;
`;

const Prospecting = styled.div`
  margin: 0;
`;

const Heading = styled.div`
  margin: 0;
  display: block;
`;

const TitleHeading = styled.p`
  margin: 0;
  width: 90%;
  display: inline;
  ${({ theme: { typography } }) => typography.body.headline};
`;

const SeeMore = styled.a`
  cursor: pointer;
  float: right;
  font-size: 13px;
  margin-top: 1.2% !important;
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.blue};
`;

const Prospects = styled.div`
  margin: 0;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  & > div {
    width: 45.5%;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HalfSection = styled.div`
  margin: 0;
  margin-top: 40px;
  width: 48.5%;
  display: inline-block;
`;

const Cards = styled.div`
  margin: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 41%;
  }
`;
