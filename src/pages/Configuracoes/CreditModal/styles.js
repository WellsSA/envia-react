import styled from 'styled-components';
import { SectionDivisor as OriginalSectionDivisor } from '../../../components';

export const Container = styled.div`
  width: 600px;
`;

export const SectionDivisor = styled(OriginalSectionDivisor)`
  padding: 0;
  section {
    padding: 20px;
    label {
      margin: 5px 0;
    }
  }
`;
