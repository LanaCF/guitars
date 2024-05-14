import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useGetData = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        const url = 'http://localhost:3000/guitars';
        (async () => {
            const brandFetch = await fetch(url)
            const response = await brandFetch.json()
            setAllData(response)
            setLoading(false)
        })()

    }, [])

    // useEffect(() => {
    //     setLoading(true);
    //     const url = 'http://localhost:3000/guitars';
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setAllData(data);
    //             setLoading(false);
    //         })

    // }, [])


    return { allData, setAllData, loading, searchParams, setSearchParams }
}