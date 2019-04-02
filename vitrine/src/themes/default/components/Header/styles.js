import styled from 'styled-components';

export const _HeaderContainer = styled.header`
  display: flex;
  flex-direction: ${({ left }) => left ? 'row' : 'column'};
  justify-content: space-between;
  animation: ${({ scrolling }) => !scrolling ? 'none' : `slideFromTop 0.3s 0.3s both`};
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  background: ${({ scrolling }) => !scrolling ? 'rgba(240,91,120, 1)' : 'rgba(240,91,120, 0.9)'};
  color: #FFF;
  box-shadow: 0 0 10px -4px rgba(0,0,0,0.6);
  left: 0;
  box-sizing: border-box;

  @keyframes slideFromTop {
    from {
      top: -80px;
      position: fixed;
    }

    to {
      top: 0;
      position: fixed;
    }
  }
`;