import React from 'react'
import {Link} from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div>
            <h1>Menu ADM</h1>

            <div className="list-group">
                <Link to="/Admin/adminportifolio" className="list-group-item">Portifólio</Link>
                <Link to="/Admin" className="list-group-item">Opc 1</Link>
                <Link to="/Admin" className="list-group-item">Opc 2</Link>
                <Link to="/Admin" className="list-group-item">Opc 3</Link>
                <Link to="/Admin" className="list-group-item">Opc 4</Link>
            </div>

        </div>
    )

}

export default AdminMenu