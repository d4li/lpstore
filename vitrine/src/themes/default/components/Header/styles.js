import styled from 'styled-components';

export const _HeaderContainer = styled.header`
  display: flex;
  flex-direction: ${({ left }) => left ? 'row' : 'column'};
  justify-content: space-between;
  height: 40px;
  margin-bottom: 20px;
  background: #000;
  color: #FFF;
`;