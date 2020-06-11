import styled from 'styled-components';
import { SectionDivisor as OriginalSectionDivisor } from '../../../components';

export const Container = styled.div`
  width: 600px;
`;

export const SectionDivisor = styled(OriginalSectionDivisor)`
  padding: 20px;

  section {
    padding: 0;
  }
`;
