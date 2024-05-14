export const ColorSelection = (props) => {
    const { data, setSearchParams, searchParams, updData } = props
    const curFilter = data.map(item => item.color);
    const contentSelection = Array.from(new Set(curFilter))
    const curParams = searchParams.getAll('color');

    return (
        <div className="color filter-box">
            <h3>КОЛІР</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.color === option).length;
                    const curLength = updData.filter(item => item.color === option).length;
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
                                    isChecked ? newParams.append('color', option) : newParams.delete('color', option);
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