import { styled } from 'styled-components'

export const ContainerList = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const MessageEmpty = styled.div`
  width: 100%;

  p {
    color: ${(props) => props.theme['gray-700']};
    font-weight: bold;
    font-size: 24px;
  }
`

export const ListHistory = styled.ul`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme['gray-900']};
  display: flex;
  justify-content: space-around;
  padding: 1.5rem 0;
  list-style: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    & {
      flex-direction: column;
      gap: 1rem;
      border-radius: 6px;
    }
  }
`
