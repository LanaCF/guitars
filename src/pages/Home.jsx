import React from 'react';
import { Link } from 'react-router-dom';
import { CountriesSelection } from '../components/CountriesSelection';
import { TypeSelection } from '../components/TypeSelection';
import { ColorSelection } from '../components/ColorSelection';
import { BrandSelection } from '../components/BrandSelection';
import { NumberStringsSelection } from '../components/NumberStringsSelection';
import { ProductsBlock } from '../components/ProductsBlock';
import { useGetData } from '../hooks/useGetData';
import { useGetUpdatedData } from '../hooks/useGetUpdatedData';

export const Home = () => {
    const { allData, loading, searchParams, setSearchParams } = useGetData();
    const { filteredData, setFilteredData } = useGetUpdatedData(allData, searchParams)
    return (
        <div className="container">
            <div className="header">
                <Link to='/'>
                    <h1 className="title-page">ГІТАРИ</h1>
                </Link>
            </div>

            <div className='empty-tag'>
                <p className='empty-tag'>
                    <b>Всього товарів на сторінці:</b> { filteredData.length }
                </p>

                <Link to='/' className='empty-tag'>
                    <button>Очистити фільтр</button>
                </Link>
            </div>

            <div className="wrapper">
                <div className="filter-block">
                    <BrandSelection 
                        data = { allData } 
                        setSearchParams = { setSearchParams } 
                        searchParams = { searchParams }
                        setFilteredData = { setFilteredData }
                        updData = { filteredData }
                    />
                    <NumberStringsSelection 
                        data = { allData } 
                        setSearchParams = { setSearchParams } 
                        searchParams = { searchParams }
                        setFilteredData = { setFilteredData }
                        updData = { filteredData }
                    />
                    <ColorSelection 
                        data = { allData } 
                        setSearchParams = { setSearchParams } 
                        searchParams = { searchParams }
                        setFilteredData = { setFilteredData }
                        updData = { filteredData }
                    />
                    <TypeSelection 
                        data = { allData } 
                        setSearchParams = { setSearchParams } 
                        searchParams = { searchParams }
                        setFilteredData = { setFilteredData }
                        updData = { filteredData }
                    />
                    <CountriesSelection 
                        data = { allData } 
                        setSearchParams = { setSearchParams } 
                        searchParams = { searchParams }
                        setFilteredData = { setFilteredData }
                        updData = { filteredData }
                    />
                </div>

                <ProductsBlock 
                    // allData = { allData }
                    filteredData = { filteredData }
                    loading = { loading } 
                />
            </div>
        </div>
    )
}