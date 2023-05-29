import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CalcContainer, HeaderCalc } from './styles'
import { Note } from 'phosphor-react'
import { API } from '../../lib/axios'

interface DocProps {
  amountPlates: number
  inverters: number
  potential: number
  lengthOfStructure: number
  usefulArea: number
  structureType: string
}

export function DetailsCalc() {
  const [docOfCalc, setDocOfCalc] = useState<DocProps>()
  const navigate = useNavigate()
  const { id } = useParams()
  /* const idParam = id ?? '' */

  async function getCalcByID() {
    console.log(id)

    const response = await API.get(`/calculo/${id}`)
    console.log('Get By ID: ' + response.data)
    setDocOfCalc(response.data)
  }

  useEffect(() => {
    getCalcByID()
  }, [])

  return (
    <CalcContainer>
      <HeaderCalc>
        <h1>Resultado da Busca</h1>
        <nav>
          <a onClick={() => navigate(`/calculo`)} title="Formulário">
            <Note size={24} />
          </a>
        </nav>
      </HeaderCalc>
      <div>
        <p>amountPlates: {docOfCalc?.amountPlates}</p>
        <p>inverters: {docOfCalc?.inverters}</p>
        <p>lengthOfStructure: {docOfCalc?.lengthOfStructure}</p>
        <p>potential: {docOfCalc?.potential}</p>
        <p>structureType: {docOfCalc?.structureType}</p>
        <p>usefulArea: {docOfCalc?.usefulArea}</p>
      </div>
    </CalcContainer>
  )
}
