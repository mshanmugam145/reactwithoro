import { useState } from 'react'
import S from './style'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchData = () => {
  return axios.get('https://ippo-pay-node.vercel.app/')
}

function AbsoluteDataTable() {

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('absolute-data', fetchData)

  if(isLoading || isFetching){
    return <h2>Loading ... </h2>
}

  if(isError){
    return <h2>{error.message}</h2>
}

  return (
    <S.BodyContainer>

      <S.Header>
        <h1 className='text-3xl font-bold'>Data Table</h1>
      </S.Header>
      <div>
      <button className='bg-yellow-500 p-1 rounded-sm mt-2' onClick={refetch}>Click here to Fetch Data </button> 
      </div>
      <table className='border-2 w-full h-full mt-2'>
        <tr>
          <th className='border-b-2'>Id</th>
          <th className='border-b-2'>Question</th>
          <th className='border-b-2'>Array One</th>
          <th className='border-b-2'>Array Two</th>
          <th className='border-b-2'>Result</th>
          <th className='border-b-2'>Created At</th>
        </tr>
      {
              data?.data.map(item => {
                    return (<tr key={item._id}>
                    <td className='text-center'>{item._id}</td>
                    <td className='text-center'>{item.questionArray}</td>
                    <td className='text-center'>{item.arrayCollectionOne}</td>
                    <td className='text-center'>{item.arrayCollectionTwo}</td>
                    <td className='text-center'>{item.result}</td>
                    <td className='text-center'>{item.createdAt}</td>
                  </tr>)
                })
            }
            </table>

    </S.BodyContainer>
  )
}

export default AbsoluteDataTable