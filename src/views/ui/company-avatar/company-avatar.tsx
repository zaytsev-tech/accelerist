import { FC } from 'react';
import styled from 'styled-components';

import nasa from '../../../assets/images/companies/nasa.png';

export const CompanyAvatar: FC = () => {
  return <Container />;
};

const Container = styled.div`
  background: url(${nasa});
  width: 48px;
  height: 48px;
  border-radius: 6px;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
`;
