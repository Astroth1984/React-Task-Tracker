import PropTypes from 'prop-types'
import { Button } from './Button'
import { useLocation } from 'react-router'

const Header = ({ title, onAdd, showAdd }) => {

    // const onClick = () => {
    //     console.log('click')
    // }
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {
                location.pathname === '/' &&
                <Button onClick={onAdd}
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                />
            }
        </header>
    )
}

// Default Props Goes in here
Header.defaultProps = {
    title: 'Task Traker from Defaut Props',
}

// Prop Types Goes in here
Header.prototype = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// Seperated Styling can goes in here (Optional)
// <h1 style={ headingStyle }>{title}</h1>
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}
export default Header