import React from 'react'
import Form from '../components/Form'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <div className="dashboard-content">

                    <div className="dashboard-form">
                        <Form/>
                    </div>

                    <div className="dashboard-profile">
                        <h2>Perfil del add project</h2>
                        <div className="dashboard-profile-info">
                            <img src="/" alt="Name User"/>
                            <span>Nombre:</span>
                            <h4>Percy Tuncar</h4>
                            <span>Email</span>
                            <h4>percy@tuncar.com</h4>
                            <button>Cerrar Sesion</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;
