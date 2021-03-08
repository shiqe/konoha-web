import React, { ReactElement } from 'react';

import { Button, SHAPE } from 'baseui/button';

interface Props {
    label: string;
    handleClick: (event: any) => void;
}

export default function PrimaryButton(props: Props): ReactElement | null {
    const { handleClick, label } = props;

    return (
        <Button
            onClick={handleClick}
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
            {label}
        </Button>
    );
}
