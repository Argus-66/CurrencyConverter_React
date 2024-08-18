import { useEffect, useState } from "react";


let url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json'


function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;