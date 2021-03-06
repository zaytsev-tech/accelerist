import { FC } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import image from '../../../assets/images/companies/beko.png';
import { CompanyDetails } from '../../../store/ducks/companies/types';
import { ButtonHeartEmpty } from '../../ui/buttons/button-heart-empty';
import { ButtonHeartFill } from '../../ui/buttons/button-heart-fill';
import { ButtonProfile } from '../../ui/buttons/button-profile';
import { CsrList } from '../../ui/csr-list';

interface CardOrganizationProps {
  item: CompanyDetails;
}

export const CardOrganization: FC<CardOrganizationProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <MainBlock>
        <Avatar>
          <Picture></Picture>
          <Ranking>
            <Text>Priority Ranking</Text>
            <Title>{item.score}</Title>
          </Ranking>
        </Avatar>
        <Description>
          <Title>{item.name}</Title>
          <Contacts>
            <Text>
              {item.street} {item.city} {item.state} {item.country}
            </Text>
            <Text>{item.phone}</Text>
          </Contacts>
          <Specifications>
            <CsrFocus>
              <SpecTitle>CSR Focus</SpecTitle>
              <SpecInfo>
                <CsrList list={item.crsFocus} />
              </SpecInfo>
            </CsrFocus>
            <Revenue>
              <RevenueTitle>Revenue</RevenueTitle>
              <SpecInfo>$ {item.revenue}</SpecInfo>
            </Revenue>
          </Specifications>
        </Description>
      </MainBlock>
      <Buttons>
        {item.like ? <ButtonHeartFill id={item.id} /> : <ButtonHeartEmpty id={item.id} />}
        <ButtonProfile
          onClick={() => {
            const url = `/search/corporate-profile/${item.id}`;
            return navigate(url);
          }}
        />
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 26px 32px;
  width: 44%;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  position: relative;

  @media (max-width: 1375px) {
    width: 40%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    width: 42%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.body.tabletLowScreen}) {
    width: 40%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 100%;
  }
`;

const MainBlock = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  box-sizing: border-box;
  border-radius: 6px;
  height: 137%;
  flex-grow: 2;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    height: 94%;
  }
`;

const Picture = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 9;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    background-size: contain;
  }
`;

const Ranking = styled.div`
  flex-grow: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
`;

const Text = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
`;
const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.bodySelect};
`;

const Description = styled.div`
  flex-grow: 4;
  margin-left: 5%;
  width: 70%;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 50%;
  }
`;

const Contacts = styled.div`
  margin-top: 12px;
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const Specifications = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grayBorder};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    border: none;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    margin-top: 0px;
  }
`;

const CsrFocus = styled.div`
  display: block;
  margin-top: 20px;
  border-right: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  padding-bottom: 12px;
  padding-right: 21px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    border: none;
  }

  & p:last-child {
    margin: 0;
  }
`;

const SpecTitle = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const RevenueTitle = styled.p`
  float: right;
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const SpecInfo = styled.p`
  ${({ theme: { typography } }) => typography.body.footnoteSelect};
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const Revenue = styled.div`
  float: right;
  padding-bottom: 12px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 0;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 60%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 100%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.body.mobileLowScreen}) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  margin-left: 29%;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    margin-left: 0%;
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    button:last-child {
      width: 80%;
    }
  }
`;
