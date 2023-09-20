import { styled } from 'styled-components';

export const Statisticss = styled.div`
  display: ${span => (span.$total === 0 ? 'none' : 'block')};
`;
