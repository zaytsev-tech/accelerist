import styled from 'styled-components';

import { CardFavorite } from '../../use-case/card-favorite';
import { Navigation } from '../../use-case/navigation';
import { Prospect } from '../../use-case/prospect';

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
        <Favorites>
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
        </Favorites>
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

  & > div {
    margin-right: 24px;
    width: 49%;
  }
`;

const Favorites = styled.div`
  margin: 0;
  margin-top: 40px;
  width: 50%;
`;

const Cards = styled.div`
  margin: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin-right: 24px;
    width: 38%;
  }
`;
