const Filter = () => {
    const handleChange = event => {
        console.log(event.target.value)
    }

    return (
        <div>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter