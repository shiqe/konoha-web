import React from 'react';
import { connect } from 'react-redux';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';

import './styles/global.scss';
import Home from './pages/home';
import UserPrompt from './pages/userprompt';

const engine = new Styletron();
const Centered = styled('div', {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
});

interface AppProps {
    isLogged: boolean;
}

function App({ isLogged }: AppProps): JSX.Element {
    const renderPages = () => {
        if (isLogged) {
            return <Home />;
        }
        return <UserPrompt />;
    };

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

export default connect(stateAsProps, {})(App);
