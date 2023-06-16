import axios from 'axios';
import React, { Component } from 'react';
import '../components/Users.css';

export default class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                const users = res.data;
                this.setState({ users })
            })
    }

    render() {
        return (
            <div>
                {this.state.personalidades.map((u, id )=>
                    <div className="CardUsers" key={id}>
                        <h3>{u.nome}</h3>
                        <p>{u.senha}</p>
                    </div>)}
            </div>
        );
    }
}