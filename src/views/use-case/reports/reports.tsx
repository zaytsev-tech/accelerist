import { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Counter } from '../../ui/counter';
import { IconArrowRight } from '../../ui/icons';
import { LastLogin } from '../last-login';

export const Reports: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Counters>
        <BlockCounter>
          <Title>Search Sessions</Title>
          <Counter title="Total" count={46} />
        </BlockCounter>
        <BlockCounter>
          <Title>Sent Pitches</Title>
          <Counter title="Company" count={0} />
        </BlockCounter>
      </Counters>
      <ProspectNavigator>
        <Title>Prospect Navigator</Title>
        <GotoBlock>
          <p>Go to page</p>
          <IconArrowRight width={10} height={18} color={theme.colors.grayDark} />
        </GotoBlock>
      </ProspectNavigator>
      <LastLogin />
    </Container>
  );
};

const Container = styled.div`
  border-radius: 6px;
  padding: 24px;
  background-color: ${({ theme: { colors } }) => colors.white};
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Counters = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BlockCounter = styled.div`
  width: 48%;
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.bodySelect};
  margin-bottom: 16px;
`;

const ProspectNavigator = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;
const GotoBlock = styled.div`
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.grayLight};
`;
