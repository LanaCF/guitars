export const BrandSelection = (props) => {
    const { data, setSearchParams, searchParams, updData } = props
    const curFilter = data.map(item => item.brand);
    const contentSelection = Array.from(new Set(curFilter))
    const curParams = searchParams.getAll('brand');

    return (
        <div className="country filter-box">
            <h3>БРЕНД</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.brand === option).length;
                    const curLength = updData.filter(item => item.brand === option).length;
                    return(
                    <form key={ option } className="brand-box">
                        <label>
                            <input
                                type="checkbox"
                                name="info"
                                className="info"
                                checked = { curParams.includes(option) }
                                onChange={ e => {
                                    const isChecked = e.target.checked
                                    let newParams = new URLSearchParams(searchParams)
                                    isChecked ? newParams.append('brand', option) : newParams.delete('brand', option)
                                    setSearchParams(newParams);
                                } }
                            />
                            { option } ({ curLength } / { factLength })
                        </label>
                    </form>
                )})
            }
        </div>
    )
}