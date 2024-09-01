import {Link} from 'react-router-dom'
import React from 'react'

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Page not found</h2>
            <p>Well, this is disappointing.</p>
            <button className='button'>
                <Link to='/'> Visit our Homepage</Link>
            </button>
        </main>
    )
}

export default Missing