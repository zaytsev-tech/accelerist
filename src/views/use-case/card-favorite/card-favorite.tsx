import styled from 'styled-components';

import { CompanyAvatar } from '../../ui/company-avatar';

export const CardFavorite = () => {
  return (
    <Container>
      <CompanyInfo>
        <CompanyAvatar />
        <CompanyName>
          <Name>SuperMega Company</Name>
          <Position>Priority Ranking 12</Position>
        </CompanyName>
        <CsrFocus>
          <Title>CSR Focus</Title>
          <CsrInfo>No information</CsrInfo>
        </CsrFocus>
      </CompanyInfo>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  margin-bottom: 15px;
  padding: 24px;
`;

const CompanyInfo = styled.div`
  display: inline-block;
  width: 100%;
`;

const CompanyName = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Name = styled.p`
  ${({ theme: { typography } }) => typography.body.footnoteSelect};
`;

const Position = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const CsrFocus = styled.div`
  display: block;
  margin-top: 20px;
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const CsrInfo = styled.p`
  ${({ theme: { typography } }) => typography.body.footnoteSelect};
`;
