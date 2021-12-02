import { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconAddFolder, IconExport } from '../icons';
import { IconMail } from '../icons/mail';

interface SettingItemProp {
  type: string;
}

export const SettingItem: FC<SettingItemProp> = ({ type }) => {
  const theme = useContext(ThemeContext);
  if (type === 'Export') {
    return (
      <Container>
        <IconExport width={20} height={20} color={theme.colors.blue} />
        <Text>Export to Excel</Text>
      </Container>
    );
  } else if (type === 'Save') {
    return (
      <Container>
        <IconAddFolder width={22} height={20} color={theme.colors.blue} />
        <Text>Save List</Text>
      </Container>
    );
  } else {
    return (
      <Container>
        <IconMail width={22} height={20} color={theme.colors.blue} />
        <Text>Accelerist Support</Text>
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  ${({ theme: { typography } }) => typography.footnote};
  margin-left: 9px;
  font-size: 12px;
`;
