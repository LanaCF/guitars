import { useEffect, useState } from "react";
import { getUpdatedData } from "../utils/getUpdatedData";

export const useGetUpdatedData = (allData, searchParams) => {
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        setFilteredData(getUpdatedData(allData, searchParams))
    }, [allData, searchParams])

    return { filteredData, setFilteredData }
}