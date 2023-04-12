import { useState } from 'react'
import {useMutation} from 'react-query';
import S from './style'
import axios from 'axios';

const addSuperData = (hero) => {
  return axios.post('https://ippo-pay-node.vercel.app/post-data', hero)
}

function AbsoluteDifferencePage() {
  const [ipValue, setIpValue] = useState("");
  const [data, setData] = useState([]);
  const [result, setResult] = useState('');
  const [firstArr, setFirstArr] = useState('');
  const [secArr, setSecArr] = useState('');
  const [error, setError] = useState('');

  const getSum = (total, item) => {
    return total + parseInt(item);
}

const { mutate: addData } = useMutation(addSuperData);

  const getDiff = () => {
    let convertedData = data.flat();
    let itemData = convertedData[0].split(",");
    const contres = convertedData[0].split(",");
    if((itemData.length)%2 !== 0){
      setError("Array is not in 2*n")
      return ;
    }
    itemData.sort((a,b) => a - b);
    let max = [];
    for(let i = (itemData.length/2); i > 0 ; i--){
      if((itemData.length)%2 === 0){
        max.push(itemData.pop()); 
      } else {
        max.push(itemData.shift());
      }
    }
  const first = itemData.reduce(getSum, 0)
  const second = max.reduce(getSum, 0)
  setFirstArr(JSON.stringify(itemData));
  setSecArr(JSON.stringify(max));
  setResult(Math.abs(first - second))

  
      //store data in db
      const hero = { firstArray:JSON.stringify(itemData), secondArray:JSON.stringify(max), result: Math.abs(first - second), question: JSON.stringify(contres)};
      addData(hero);
}

  const addToArr = () => {
    if(!ipValue) {
      setError("Please enter values")
      return;
    }
    let itemData = ipValue.split(",");
    if((itemData.length)%2 !== 0){
      data.push(ipValue);
      setData([data]);
      setIpValue('');
      setError("Array is not in 2*n")
      return;
    }
    data.push(ipValue);
    setData([data]);
    setIpValue('');
    return;
  }

  return (
    <S.bodyContainer>
      {/* <div className='flex flex-row justify-center text-white bg-purple-500 p-2 rounded-sm'>
        <h1 className='text-3xl font-bold'>Enter Comma separated numbers</h1>
      </div> */}

      <S.Header>
        <h1 className='text-3xl font-bold'>Enter Comma separated numbers</h1>
        <h2 className='text-xl font-bold'>Don't use "[""]" brackets, use simply 1,2,3,4 like this.</h2>
      </S.Header>

      <div className='flex flex-col justify-center align-middle text-center mt-4'>
        <S.ButtonDiv>
            <input type='text' className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={ipValue} onChange={(e) => setIpValue(e.target.value)} />  
        </S.ButtonDiv>
        <S.ButtonDiv>
        <button className='w-80 disabled:opacity-25 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={addToArr} disabled={data.length}> 
          Validate 
        </button>
        </S.ButtonDiv>
        <div className='mt-4 flex justify-center text-center content-center'>
          <div className='bg-green-500 w-96 rounded-md p-2'>
          <h2 className='text-2xl font-bold text-white'>Your Array </h2>
          {data.map(item => <h1 className='text-2xl font-bold text-white' key={item}> {item}</h1>)}
          </div>
        </div>
      <div className='mt-3'>
        <button onClick={getDiff} className='w-80 disabled:opacity-25 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' disabled={!data.length}>Get the min diff</button>
      </div>
      </div>

      <div className='mt-4 flex justify-center text-center content-center'> 
        <div className='bg-gray-500 w-96 rounded-md'>
        <h1 className='text-2xl font-bold text-white'>{result}</h1>
        {firstArr && <h2 className='text-2xl font-bold text-white'>First Array - {firstArr}</h2>}
        {secArr && <h2 className='text-2xl font-bold text-white'>Second Array - {secArr}</h2>}
        </div>
        
      </div>
      <div className='mt-4 flex justify-center text-center content-center'> 
        <div className='bg-red-500 w-96 rounded-md'>
          {error && <h2 className='text-2xl font-bold text-white'>{error}</h2>}
        </div>
        
      </div>
    </S.bodyContainer>
  )
}

export default AbsoluteDifferencePage