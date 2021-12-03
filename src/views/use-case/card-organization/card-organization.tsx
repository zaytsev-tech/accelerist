import { FC } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import image from '../../../assets/images/companies/beko.png';
import { routes } from '../../routes';
import { ButtonHeartEmpty } from '../../ui/buttons/button-heart-empty';
import { ButtonProfile } from '../../ui/buttons/button-profile';
import { CsrList } from '../../ui/csr-list';

export const CardOrganization: FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MainBlock>
        <Avatar>
          <Picture></Picture>
          <Ranking>
            <Text>Priority Ranking</Text>
            <Title>4</Title>
          </Ranking>
        </Avatar>
        <Description>
          <Title>Beko</Title>
          <Contacts>
            <Text>2464 Royal Ln. Mesa, New Jersey 45463</Text>
            <Text>(702) 555-0122</Text>
          </Contacts>
          <Specifications>
            <CsrFocus>
              <SpecTitle>CSR Focus</SpecTitle>
              <SpecInfo>
                <CsrList list={['Health', 'Animals', 'Education']} />
              </SpecInfo>
            </CsrFocus>
            <Revenue>
              <RevenueTitle>Revenue</RevenueTitle>
              <SpecInfo>$ 434 476</SpecInfo>
            </Revenue>
          </Specifications>
        </Description>
      </MainBlock>
      <Buttons>
        <ButtonHeartEmpty />
        <ButtonProfile onClick={() => navigate(routes.search.corporateProfile)} />
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
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

  @media (max-width: 1024px) {
    width: 42%;
  }

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 703px) {
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
  flex-grow: 1;

  @media (max-width: 1024px) {
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

  @media (max-width: 768px) {
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

  @media (max-width: 703px) {
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

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    border: none;
  }

  @media (max-width: 703px) {
    margin-top: 0px;
  }
`;

const CsrFocus = styled.div`
  display: block;
  margin-top: 20px;
  border-right: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  padding-bottom: 12px;
  padding-right: 21px;

  @media (max-width: 1024px) {
    border: none;
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
`;

const Revenue = styled.div`
  float: right;
  padding-bottom: 12px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 703px) {
    width: 100%;
  }

  @media (max-width: 330px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  margin-left: 29%;

  @media (max-width: 1024px) {
    margin-left: 0%;
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    button:last-child {
      width: 80%;
    }
  }
`;
