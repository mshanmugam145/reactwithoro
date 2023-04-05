import { useSuperHeroesData } from '../Hooks/useFetchData';

export const FetchData = () => {

    const onSuccess = (data) => {
        console.log(`Perform side effect after  data fetching - ${data}`);
    }

    const onError = (error) => {
        console.log(`Perform side effect after Error - ${error}`);
    }

    const { isLoading, data, isError, error } = useSuperHeroesData(onSuccess, onError);

    if(isLoading){
        return <h2>Loading ... </h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    const newArr = [];
    const newArrResult = [];
    data.data.forEach((item) => {
      if (!newArr.includes(item.userId)) {
        console.log(item.userId);
        newArr.push(item.userId);
        newArrResult.push(item);
      }
    });

    return (
        <>
            <h2>Custom Hook</h2>
            <div>
            {
                newArrResult.map(item => { 
                    return (
                        <div key={item.userId}>
                            User id - {item.userId}
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}
  
    