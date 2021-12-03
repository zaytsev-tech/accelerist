import { FC, useContext } from 'react';
import { useNavigate } from 'react-router';
import styled, { ThemeContext } from 'styled-components';

import image from '../../../assets/images/companies/beko.png';
import { routes } from '../../routes';
import { DefaultButton } from '../../ui/buttons/default-button';
import {
  IconArrowLeft,
  IconHeart,
  IconMapPoint,
  IconPhone,
  IconPlanet,
} from '../../ui/icons';
import { Navigation } from '../../use-case/navigation';

export const CorporateProfile: FC = () => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <Page>
      <Navigation titlePage="Search" />
      <Header>
        <BackLink onClick={() => navigate(routes.search.root)}>
          <IconArrowLeft width={13} height={22} color={theme.colors.black} />
        </BackLink>
        <HeaderText>Corporate Profile</HeaderText>
      </Header>
      <Content>
        <CorporateHeader>
          <Avatar>
            <Picture />
          </Avatar>
          <CorporateDescription>
            <Title>
              <p>Beko</p>
              <IconHeart width={18} height={16} color={theme.colors.red} />
            </Title>
            <Text>2464 Royal Ln. Mesa, New Jersey 45463</Text>
          </CorporateDescription>
        </CorporateHeader>
        <CorporateContent>
          <BlockMain>
            <Description>
              <Title>Business Description Products</Title>
              <Subtitle>Description</Subtitle>
              <p>
                We are a national, award-winning nonprofit that provides the most flexible
                and accountable funding for K-12 teachers and schools with our
                proprietary, easy-to-use education fundraising platform. Through local
                impact, our goal is to give every child the tools they deserve to succeed
                in school.
              </p>
            </Description>
            <Reported>
              <Subtitle>Reported</Subtitle>
              <TableReported>
                <tbody>
                  <tr>
                    <td>
                      <Text>Revenue Reported</Text>
                      <Count>-</Count>
                    </td>
                    <td>
                      <Text>Employees Reported</Text>
                      <Count>-</Count>
                    </td>
                  </tr>
                </tbody>
              </TableReported>
            </Reported>
            <Ticker>
              <Subtitle>Company Ticker</Subtitle>
              <InfoTicker>No information</InfoTicker>
            </Ticker>
            <Contacts>
              <Subtitle>Company Contacts</Subtitle>
              <InfoBlock>
                <ContactInfo>
                  <IconPlanet width={24} height={24} color={theme.colors.blue} />
                  <p>ageliromir.com</p>
                </ContactInfo>
                <ContactInfo>
                  <IconPhone width={20} height={20} color={theme.colors.blue} />
                  <p>(702) 555-0122</p>
                </ContactInfo>
                <ContactInfo>
                  <IconMapPoint width={24} height={24} color={theme.colors.blue} />
                  <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                </ContactInfo>
              </InfoBlock>
            </Contacts>
            <Social>
              <Title>Social Impact</Title>
              <DefaultButton title="Request Profile Update" />
            </Social>
          </BlockMain>
          <BlockFeed></BlockFeed>
        </CorporateContent>
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

const BackLink = styled.a`
  cursor: pointer;
`;

const HeaderText = styled.h3`
  flex-grow: 1;
  margin-left: 22px;

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

const CorporateHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  padding: 40px;
  background-color: ${({ theme: { colors } }) => colors.grayCorpHeader};
`;

const Description = styled.div`
  ${({ theme: { typography } }) => typography.body.body};
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 100px;
  height: 100px;
`;

const Picture = styled.div`
  display: flex;
  flex-grow: 9;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    background-size: contain;
  }
`;

const CorporateDescription = styled.div`
  margin-left: 24px;
`;

const Text = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  & > p {
    margin: 0;
    margin-right: 10px;
  }
  ${({ theme: { typography } }) => typography.body.headline};
`;

const Subtitle = styled.p`
  ${({ theme: { typography } }) => typography.body.bodySelect};
  margin-top: 24px;
  margin-bottom: 16px;
`;

const CorporateContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const BlockMain = styled.div`
  width: 100%;
  padding: 32px 40px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-right: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
`;
const BlockFeed = styled.div`
  width: 40%;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const Reported = styled.div`
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const TableReported = styled.table`
  border-radius: 6px;
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  border-spacing: 0px;
  width: 100%;

  & td {
    border-right: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
    text-align: center;
    padding: 1%;
  }

  & td:last-child {
    border: none;
  }
`;

const Count = styled.div`
  ${({ theme: { typography } }) => typography.body.headline};
  margin-top: 8px;
`;

const Ticker = styled.div``;

const InfoTicker = styled.div`
  ${({ theme: { typography } }) => typography.body.headline};
  border: 2px solid ${({ theme: { colors } }) => colors.grayBorder};
  border-radius: 6px;
  width: fit-content;
  padding: 10px;
`;

const InfoBlock = styled.div`
  ${({ theme: { typography } }) => typography.body.headline};
  border: 2px solid ${({ theme: { colors } }) => colors.grayBorder};
  border-radius: 6px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Contacts = styled.div``;
const ContactInfo = styled.div`
  display: flex;
  ${({ theme: { typography } }) => typography.body.footnote};
  align-items: center;

  & svg {
    margin-right: 12px;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;

  & button {
    width: 25%;
    font-size: 13px;
  }
`;
