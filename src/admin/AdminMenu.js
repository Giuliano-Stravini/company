import React from 'react'
import {Link} from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div>
            <h1>Menu ADM</h1>

            <div className="list-group">
                <Link to="/Admin" className="list-group-item active">Cras justo odio</Link>
                <Link to="/Admin" className="list-group-item">Dapibus ac facilisis in</Link>
                <Link to="/Admin" className="list-group-item">Morbi leo risus</Link>
                <Link to="/Admin" className="list-group-item">Porta ac consectetur ac</Link>
                <Link to="/Admin" className="list-group-item">Vestibulum at eros</Link>
            </div>

        </div>
    )

}

export default AdminMenu