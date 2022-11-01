import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
    const handleChange = event => {
        props.filterChange(event.target.value)
    }

    return (
        <div>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default connect(
    null,
    { filterChange }
)(Filter)