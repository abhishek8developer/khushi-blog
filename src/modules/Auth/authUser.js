import React, { Component } from 'react';

class AuthUser extends Component {
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
                <h1>AUTH USER asfsfdfdsfdsfds</h1>
            </div>
        )
    }
}

export default AuthUser;