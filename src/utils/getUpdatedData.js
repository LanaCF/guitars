export const getUpdatedData = (allData, searchParams) => {
    const brandParams=searchParams.getAll('brand')
    const numberStringsParams=searchParams.getAll('numberStrings')
    const colorParams=searchParams.getAll('color')
    const typeParams=searchParams.getAll('type')
    const countryParams=searchParams.getAll('country')

    return allData.filter(item => {
        return (
            (brandParams.length === 0 || brandParams.includes(item.brand)) &&
            (numberStringsParams.length === 0 || numberStringsParams.includes(item.numberStrings)) &&
            (colorParams.length === 0 || colorParams.includes(item.color)) &&
            (typeParams.length === 0 || typeParams.includes(item.type)) &&
            (countryParams.length === 0 || countryParams.includes(item.country))
        );
    });
}