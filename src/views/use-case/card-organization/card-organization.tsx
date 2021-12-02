import styled from 'styled-components';

import image from '../../../assets/images/companies/beko.png';
import { CsrList } from '../../ui/csr-list';

export const CardOrganization = () => {
  return (
    <Container>
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
  margin-bottom: 24px;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  height: 14rem;
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  box-sizing: border-box;
  border-radius: 6px;
  flex-grow: 1;
`;

const Picture = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 7.6;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
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
  ${({ theme: { typography } }) => typography.body.body};
`;

const Description = styled.div`
  flex-grow: 4;
  margin-left: 5%;
`;

const Contacts = styled.div`
  margin-top: 12px;
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const Specifications = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const CsrFocus = styled.div`
  display: block;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  border-right: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  padding-bottom: 12px;
  padding-right: 21px;
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
  margin-top: 20px;

  &:after {
    content: '';
    display: flex;
    position: relative;
    margin-top: 52.4%;
    width: 420%;
    float: inherit;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  }
`;
