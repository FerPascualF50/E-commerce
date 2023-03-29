import React from "react";
import './sing-in.styles.scss'

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custon-buttom/custom-buttom.component';
import { signInWhitGoogle } from '../../firebase/firebase.util';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handlerSubmit = event => {
        event.preventdefault();
        this.setState({email: '', password: ''})
    };

    handlerchange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value });


    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an accouent</h2>
                <span>Sign in whit your emal and password</span>

                <form onSubmit={this.handlerSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handlerchange={this.handlerchange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handlerchange={this.handlerchange}
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit'>Sig in</CustomButton>
                        <CustomButton onclick={signInWhitGoogle} isGoogleSignIn >Sing Google</CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}




export default SignIn;