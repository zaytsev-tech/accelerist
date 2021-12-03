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
        <TextExport></TextExport>
      </Container>
    );
  } else if (type === 'Save') {
    return (
      <Container>
        <IconAddFolder width={22} height={20} color={theme.colors.blue} />
        <TextSave></TextSave>
      </Container>
    );
  } else {
    return (
      <Container>
        <IconMail width={22} height={20} color={theme.colors.blue} />
        <TextSupport></TextSupport>
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

const TextSave = styled(Text)`
  &:after {
    content: 'Save List';

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
      content: 'Save';
    }
  }
`;

const TextSupport = styled(Text)`
  &:after {
    content: 'Accelerist Support';

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
      content: 'Support';
    }
  }
`;

const TextExport = styled(Text)`
  &:after {
    content: 'Export to Excel';

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
      content: 'Export';
    }
  }
`;
