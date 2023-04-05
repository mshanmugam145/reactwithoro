import { useQuery } from "react-query"
import axios from "axios"

const fetchData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/')
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchData, {
        onSuccess,
        onError,
    })
}
