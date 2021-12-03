import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconArrowLeft } from '../../ui/icons';
import { Navigation } from '../../use-case/navigation';

export const CorporateProfile = () => {
  const theme = useContext(ThemeContext);
  return (
    <Page>
      <Navigation titlePage="Search" />
      <Header>
        <IconArrowLeft width={13} height={22} color={theme.colors.black} />
        <h3>Corporate Profile</h3>
      </Header>
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

const Header = styled.div`
  margin: 0;
  padding: 5px 60px;
  font-size: 32px;
  display: flex;
  align-items: center;

  & > h3 {
    flex-grow: 1;
    margin-left: 22px;
  }

  @media (max-width: 703px) {
    flex-direction: column;
    align-items: flex-start;

    & > h3 {
      margin: 16px;
    }
  }
`;
