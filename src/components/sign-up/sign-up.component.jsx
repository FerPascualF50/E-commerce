import React from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import FormImput from '../form-input/form-input-component';
import CustomButton from '../custon-buttom/custom-buttom.component';
import './sign-up.styles.scss'
//import { signInWhitGoogle } from '../../firebase/firebase.util';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: "",
            password: "",
            confirmPassword: ''
        };
    }
    handlerSubmit = async event => {
        event.prevenDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        try {
            const { } = await auth.createUserWhithEmailAndPassword(
                //displayName,
                email,
                password
            );
            await createUserProfileDocument(/*user, { displayMame }*/);
            this.setState({
                displayName: '',
                email: "",
                password: "",
                confirmPassword: ''
            });
        } catch (error){
            console.error(error);
        }
    };
    handlerChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })

    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have a account</h2>
                <span>Signup whit your email and password</span>
                <form className="sign-up-form" onSubmit={this.handlerSubmit}>
                    <FormImput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handlerChange}
                        label='Display Name'
                        required
                    />
                    <FormImput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handlerChange}
                        label='Email'
                        required
                    />
                    <FormImput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handlerChange}
                        label='Password'
                        required
                    />
                    <FormImput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handlerChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' > SIGN UP </CustomButton>
                </form>
            </div>

        )
    }


}

export default SignUp;

