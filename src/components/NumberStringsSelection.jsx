export const NumberStringsSelection = (props) => {
    const { data, searchParams, setSearchParams, updData } = props
    const curFilter = data.map(item => item.numberStrings);
    const contentSelection = Array.from(new Set(curFilter))
    const curParams = searchParams.getAll('numberStrings');

    return (
        <div className="country filter-box">
            <h3>КІЛЬКІСТЬ СТРУН</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.numberStrings === option).length;
                    const curLength = updData.filter(item => item.numberStrings === option).length;
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
                                    isChecked ? newParams.append('numberStrings', option) : newParams.delete('numberStrings', option);
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