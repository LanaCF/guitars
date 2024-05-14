export const CountriesSelection = (props) => {
    const { data, searchParams, setSearchParams, updData } = props
    const curFilter = data.map(item => item.country);
    const contentSelection = Array.from(new Set(curFilter))
    const curParams = searchParams.getAll('country');

    return (
        <div className="country filter-box">
            <h3>КРАЇНА</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.country === option).length;
                    const curLength = updData.filter(item => item.country === option).length;
                    return(
                    <form key={ option } className="brand-box">
                        <label>
                            <input
                                type="checkbox"
                                name="info"
                                className="info"
                                checked = { curParams.includes(option) }
                                onChange={ e => {
                                    const isChecked = e.target.checked;
                                    let newParams = new URLSearchParams(searchParams);
                                    isChecked ? newParams.append('country', option) : newParams.delete('country', option);
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