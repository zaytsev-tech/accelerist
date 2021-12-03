import { FC } from 'react';
import styled from 'styled-components';

interface CounterProps {
  title: string;
  count: number;
}

export const Counter: FC<CounterProps> = ({ title, count }) => {
  return (
    <Cell>
      <Title>{title}</Title>
      <Count>{count}</Count>
    </Cell>
  );
};

const Cell = styled.div`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.grayLight};
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const Count = styled.div`
  ${({ theme: { typography } }) => typography.body.headline};
  margin-top: 8px;
`;
