import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

    let history = useHistory()

    return (
        <header>
            <h1>หนังสือมือสอง</h1>
            <nav>
                <div className="container">
                    <ul>
                        <li><p onClick={() => history.push('/promotions')}>โปรโมชัน</p></li>

                        <li><p onClick={() => history.push('/allbook')}>หนังสือ</p></li>
                        <li><p>นิยาย</p></li>
                        <li><p>login</p></li>

                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Navbar