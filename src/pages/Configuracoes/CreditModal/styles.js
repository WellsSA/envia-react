import styled from 'styled-components';
import { SectionDivisor as OriginalSectionDivisor } from '../../../components';

export const Container = styled.div`
  width: 500px;
  padding: 20px;

  label {
    margin-bottom: 5px;
  }
`;

export const SectionDivisor = styled(OriginalSectionDivisor)`
  padding: 0;
  section {
    padding: 10px;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 120px;
  }
`;
