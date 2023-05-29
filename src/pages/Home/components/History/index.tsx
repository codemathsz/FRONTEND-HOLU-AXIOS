import { useEffect, useState } from 'react'
import { ContainerList, ListHistory, MessageEmpty } from './styles'
import { useNavigate } from 'react-router-dom'
import { API } from '../../../../lib/axios'

interface DocProps {
  id: string
  amountPlates: number
  inverters: number
  potential: number
  lengthOfStructure: number
  usefulArea: number
  structureType: string
}

export function History() {
  const [calculos, setCalculos] = useState<DocProps[]>([])
  const navigate = useNavigate()

  async function fetchDocs() {
    const response = await API.get('/calculo')
    console.log('todos calc: ' + response.data)
    setCalculos(response.data)
  }

  useEffect(() => {
    fetchDocs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(
    'calculos hitory' + calculos.map((document) => document.inverters),
  )
  return (
    <ContainerList>
      {calculos.length === 0 ? (
        <MessageEmpty>
          <p>Não tem nenhum calculo cadastrado!</p>
        </MessageEmpty>
      ) : (
        calculos.map((calc) => (
          <ListHistory
            key={calc.id}
            onClick={() => navigate(`/calculo/${calc.id}`)}
            title="Ver mais"
          >
            <li>ID: {calc.id}</li>
            <li>Structure Type: {calc.structureType}</li>
          </ListHistory>
        ))
      )}
    </ContainerList>
  )
}
