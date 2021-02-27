import React, { useRef, useState } from 'react';
import Hero from '../assets/hero.jpg';
import '../styles/userprompt.scss';

//api
import { apiLogin } from '../api';

//Components
import { Input } from 'baseui/input';
import { Button, SHAPE } from 'baseui/button';
import Snackbar from '../components/Snackbar';

//store
import { connect } from 'react-redux';
import { login } from '../store/user/user.actions';

const UserPrompt = ({ setLogin }: typeof actionAsProps): JSX.Element => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);

    const login = async () => {
        const details = {
            email: emailRef.current.value,
            password: passRef.current.value,
        };
        try {
            const messege = await apiLogin(details);
            if (messege.error !== null) {
                setErrorMessage(messege.error);
                setShowSnackbar(true);
                return;
            }
            setLogin(messege.data);
        } catch (err) {
            setErrorMessage(err);
            setShowSnackbar(true);
        }
    };

    return (
        <div className="checking">
            <div className="hero-image">
                <img src={Hero} alt="hero-img" width="100%" height="100%" />
            </div>
            <div className="prompts">
                <p>Konohagakure</p>
                <div className="input-fields">
                    <div style={{ margin: '1em 0', width: '100%' }}>
                        <Input
                            startEnhancer="@"
                            placeholder="Email"
                            inputRef={emailRef}
                            size="large"
                        />
                    </div>
                    <div style={{ margin: '1em 0', width: '100%' }}>
                        <Input
                            startEnhancer="?"
                            type="password"
                            placeholder="Password"
                            inputRef={passRef}
                            size="large"
                        />
                    </div>
                    <div
                        style={{
                            margin: '1em 0',
                            width: '20em',
                            height: '5em',
                        }}
                    >
                        <Button
                            onClick={login}
                            size="large"
                            shape={SHAPE.pill}
                            overrides={{
                                BaseButton: {
                                    style: () => {
                                        return {
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#EFB7B7',
                                        };
                                    },
                                },
                            }}
                        >
                            Log In{' '}
                        </Button>
                    </div>
                    <Button
                        size="large"
                        shape={SHAPE.pill}
                        overrides={{
                            BaseButton: {
                                style: () => {
                                    return {
                                        backgroundColor:
                                            'rgba(73, 86, 203, 0.5)',
                                    };
                                },
                            },
                        }}
                    >
                        Sign Up{' '}
                    </Button>
                </div>
            </div>
            {showSnackbar && (
                <Snackbar
                    log={`${errorMessage}`}
                    handleClose={() => {
                        setShowSnackbar(false);
                    }}
                />
            )}
        </div>
    );
};

const actionAsProps = {
    setLogin: login,
};
const stateAsProps = (reducers: any) => {
    return {
        isLogged: reducers.user.isLogged,
    };
};

export default connect(stateAsProps, actionAsProps)(UserPrompt);
