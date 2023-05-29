import { styled } from 'styled-components'

export const HeaderCalc = styled.header`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 1rem;

  h1 {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 auto;
  }

  nav {
    a {
      width: 2rem;
      height: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-800']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`

export const CalcContainer = styled.div`
  width: 50vw;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme['gray-700']};

  div {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 720px) {
    & {
      width: 80vw;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      width: 95vw;
    }
  }
`
