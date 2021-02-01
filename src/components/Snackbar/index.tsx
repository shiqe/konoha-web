import React from 'react';
import { SnackbarProvider, SnackbarElement } from 'baseui/snackbar';

function Snackbar(props: propsInterface): JSX.Element {
    const { log, handleClose } = props;
    return (
        <div style={{ position: 'absolute' }}>
            <SnackbarProvider defaultDuration="short">
                <SnackbarElement
                    message={`${log}`}
                    actionMessage="Close"
                    actionOnClick={() => {
                        handleClose();
                    }}
                    focus={false}
                />
            </SnackbarProvider>
        </div>
    );
}

export default Snackbar;

interface propsInterface {
    log: string;
    handleClose(): void;
}
