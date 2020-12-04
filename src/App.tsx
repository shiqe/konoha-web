import React from "react";
import "./styles/global.scss";
import UserPrompt from "./pages/userprompt";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

const engine = new Styletron();
const Centered = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
});

function App(): JSX.Element {
    return (
        <>
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <Centered>
                        <UserPrompt />
                    </Centered>
                </BaseProvider>
            </StyletronProvider>
        </>
    );
}

export default App;
