export const TypeSelection = (props) => {
    const { data, searchParams, setSearchParams, updData } = props
    const curFilter = data.map(item => item.type);
    const contentSelection = Array.from(new Set(curFilter))
    const curParams = searchParams.getAll('type')

    return (
        <div className="type filter-box">
            <h3>ТИП</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.type === option).length;
                    const curLength = updData.filter(item => item.type === option).length;
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
                                    let newParams = new URLSearchParams(searchParams);
                                    isChecked ? newParams.append('type', option) : newParams.delete('type', option);
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