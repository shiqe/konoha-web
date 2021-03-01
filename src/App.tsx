import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';

import './styles/global.scss';
import Home from './pages/home';
import UserPrompt from './pages/userprompt';
import Loader from './components/Generic/Loader';
import { checkLogin } from '../src/store/user/user.actions';

const engine = new Styletron();
const Centered = styled('div', {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
});

interface AppProps {
    isLogged: boolean;
    checkLogin: () => void;
}

function App({ isLogged, checkLogin }: AppProps): JSX.Element {
    const [isChecking, setChecking] = useState(true);

    const renderPages = () => {
        if (isChecking) {
            return <Loader />;
        }
        if (isLogged) {
            return <Home />;
        }
        return <UserPrompt />;
    };

    const checkIfTokenStored = () => {
        checkLogin();
        setChecking(false);
    };

    useEffect(() => {
        checkIfTokenStored();
    }, []);

    return (
        <>
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <Centered>{renderPages()}</Centered>
                </BaseProvider>
            </StyletronProvider>
        </>
    );
}

const stateAsProps = (reducers: any) => {
    return {
        isLogged: reducers.user.isLogged,
    };
};

const actionAsProps = {
    checkLogin: checkLogin,
};

export default connect(stateAsProps, actionAsProps)(App);
