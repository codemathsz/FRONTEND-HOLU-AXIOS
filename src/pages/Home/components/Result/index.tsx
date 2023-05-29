import { ContentsResult, Label, ResultContainer, Value } from './styles'

interface ResultProps {
  result: {
    amountPlates: number
    inverters: number
    potential: number
    lengthOfStructure: number
    usefulArea: number
    structureType: string
  }
}

export function Result({ result }: ResultProps) {
  return (
    <ResultContainer>
      <ContentsResult>
        <Label>Estrutura Usada:</Label>
        <Value>{result.structureType}</Value>
      </ContentsResult>

      <ContentsResult>
        <Label>Quantidade de Placas:</Label>
        <Value>{result.amountPlates}</Value>
      </ContentsResult>

      <ContentsResult>
        <Label>Quantidade de Inversores:</Label>
        <Value>{result.inverters}</Value>
      </ContentsResult>

      <ContentsResult>
        <Label>Potência das Placas:</Label>
        <Value>{result.potential}w</Value>
      </ContentsResult>

      <ContentsResult>
        <Label>Comprimento da estrutura:</Label>
        <Value>{result.lengthOfStructure}m</Value>
      </ContentsResult>

      <ContentsResult>
        <Label>Área util:</Label>
        <Value>{result.usefulArea}m²</Value>
      </ContentsResult>
    </ResultContainer>
  )
}
