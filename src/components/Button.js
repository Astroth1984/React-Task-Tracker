import PropTypes from 'prop-types'

export const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button style={{ backgroundColor: color }}
                className='btn'
                onClick={onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
