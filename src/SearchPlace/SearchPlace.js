import React from 'react';
import lupa from './lupa.png';
import './index.css';

const SearchPlace = () => {
    const [input, setInput] = React.useState();

    function handleChange(event) {
        return setInput(event.target.value)
    }

    function handleClick() {
        window.location.reload()
        return window.localStorage.setItem('location', input.replace(' ', '-'))
    }

    function handleKey(event) {
        if (event.code === 'Enter') {
            window.location.reload()
            return window.localStorage.setItem('location', input.replace(' ', '-'))
        }
    }

    return (
        <div className='search__box'>
            <input type='text' name='location' id='location' value={input} placeholder='Pesquise sua cidade' autoComplete='off' onChange={handleChange} onKeyDown={handleKey} />
            <button type='submit' className='button' onClick={handleClick}>
                <img src={lupa} className='img__search' alt='lupa procurar' />
            </button>
        </div>
    )
}

export default SearchPlace
