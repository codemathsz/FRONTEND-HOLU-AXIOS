import { styled } from 'styled-components'

export const ResultContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const ContentsResult = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: scale 0.2s;
  flex-wrap: wrap;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    & {
      width: 80vw;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      width: 90vw;
    }
  }
`
export const Label = styled.p`
  color: ${(prosp) => prosp.theme['gray-800']};
  font-weight: bold;
  font-size: 1.2rem;
`
export const Value = styled.span`
  color: ${(prosp) => prosp.theme['gray-800']};
  font-weight: bold;
  font-size: 1.2rem;
`
