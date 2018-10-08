import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: '',
            ptype: '',
        };
    }
    render (){
        return (
            <div className='login-section'>
                <input className='user' type='text' value={this.state.user} onChange={e => this.setState({user: e.target.value})} />
                <input className='pass' type='password' value={this.state.pass} onChange={e => this.setState({pass: e.target.value})} />
            </div>
        )
    }
}

export default Login;