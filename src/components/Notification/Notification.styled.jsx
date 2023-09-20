import { styled } from 'styled-components';

export const Notifications = styled.h3`
  display: ${h3 => (h3.option === 0 ? 'block' : 'none')};
`;
