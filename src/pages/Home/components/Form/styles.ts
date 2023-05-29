import { styled } from 'styled-components'

export const HeaderConatiner = styled.header`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`

export const Title = styled.p`
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 auto;
`

export const NavHeader = styled.nav`
  display: flex;
  gap: 0.5rem;

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
`

export const Container = styled.div`
  min-width: 40vw;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  text-align: center;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  input {
    width: 90%;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 0.8rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button[type='button'] {
    width: 50%;
    height: 4rem;
    border: 0;
    margin: 0 auto;
    border-radius: 6px;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    margin-top: 1.5rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }

  @media screen and (min-width: 721px) {
    form {
      width: 40vw;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 720px) {
    form {
      width: 80vw;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      padding: 0.5rem;
      width: 90vw;
    }
    form {
      width: 90vw;
    }
  }

  @media screen and (max-width: 320px) {
    form {
      width: 95vw;
    }
  }
`
