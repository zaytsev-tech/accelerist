import styled from 'styled-components';

import { Counter } from '../../ui/counter';
import { FilterItem } from '../../ui/filter-item';
import { UserAvatar } from '../../ui/user-avatar';

export const Prospect = () => {
  return (
    <Container>
      <Head>
        <HeadText>Race for the Cure</HeadText>
      </Head>
      <Filters>
        <HeadFilter>Filters</HeadFilter>
        <FiltersContainer>
          <FilterItem text="Gender: Both" />
          <FilterItem text="Callifornia" />
          <FilterItem text="Advanced" />
        </FiltersContainer>
      </Filters>
      <Cells>
        <Counter title="№ of Prospects Available" count={230} />
      </Cells>
      <UserInfo>
        <UserAvatar name="Alex Zaytsev" />
        <Username>
          <Name>Alex Zaytsev</Name>
          <Position>Frontend</Position>
        </Username>
        <LastActivity>
          <Title>Last Activity</Title>
          <LastDate>23 Jul 2021</LastDate>
        </LastActivity>
      </UserInfo>
    </Container>
  );
};

const Container = styled.div`
  height: 312px;
  width: 536px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  padding: 24px;
  background: ${({ theme: { colors } }) => colors.white};
`;

const Head = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
`;

const HeadText = styled.p`
  ${({ theme: { typography } }) => typography.body.body};
  margin: 0;
  margin-bottom: 9px;
`;

const Filters = styled.div`
  margin-top: 16px;
`;

const HeadFilter = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const FiltersContainer = styled.div`
  display: inline-flex;
`;

const Cells = styled.div`
  width: 100%;
  margin-top: 5%;
  text-align: center;
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const UserInfo = styled.div`
  margin-top: 10%;
  display: inline-block;
  width: 100%;
`;

const Username = styled.div`
  display: inline-block;
  margin-left: 12px;
  vertical-align: middle;
`;

const Name = styled.p`
  ${({ theme: { typography } }) => typography.body.footnoteSelect};
`;

const Position = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const LastActivity = styled.div`
  display: inline-block;
  float: right;
`;

const LastDate = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  margin: 0;
`;
