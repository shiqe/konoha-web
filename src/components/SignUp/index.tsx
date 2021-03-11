import React, { ReactElement, SyntheticEvent, useState } from 'react';

import { Input } from 'baseui/input';
import styled from 'styled-components';

import { size } from '../../utils/spacing';
import { signUpUser } from '../../api';
import PrimaryButton from '../Generic/PrimaryButton';
import { FlexContainer, Title } from '../Generic/styled';
import SnackBar from '../Snackbar';

const initialCredentials = {
    name: '',
    email: '',
    password: '',
};

export default function SignUp(): ReactElement | null {
    const [snackBarMsg, setSnackbarMsg] = useState('');
    const [openSnackbar, setSnackbar] = useState(false);
    const [userCredentials, setUserCredentials] = useState(initialCredentials);

    function handleInputChange(field: string, value: string) {
        setUserCredentials({ ...userCredentials, [field]: value });
    }

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const msg = await signUpUser(userCredentials);
        const { data } = msg;

        setSnackbar(true);
        setSnackbarMsg(data);
    }

    function renderSnackbar() {
        if (openSnackbar) {
            return (
                <SnackBar
                    log={snackBarMsg}
                    handleClose={() => setSnackbar(false)}
                />
            );
        }
        return null;
    }

    return (
        <Container>
            <FlexContainer flexDirection="column" gap={size.lg}>
                <Title fontSize={size.x2l}>Sign Up</Title>
                <form>
                    <FlexContainer flexDirection="column" gap={size.lg}>
                        <Input
                            startEnhancer="="
                            placeholder="Username"
                            size="large"
                            value={userCredentials.name}
                            onChange={(e) =>
                                handleInputChange('name', e.target.value)
                            }
                        />
                        <Input
                            startEnhancer="@"
                            placeholder="Email"
                            size="large"
                            value={userCredentials.email}
                            onChange={(e) =>
                                handleInputChange('email', e.target.value)
                            }
                        />
                        <Input
                            startEnhancer="?"
                            type="password"
                            placeholder="Password"
                            size="large"
                            value={userCredentials.password}
                            onChange={(e) =>
                                handleInputChange('password', e.target.value)
                            }
                        />
                        <PrimaryButton
                            type="submit"
                            handleClick={handleSubmit}
                            label="Sign Up"
                        />
                    </FlexContainer>
                </form>
                {renderSnackbar()}
            </FlexContainer>
        </Container>
    );
}

const Container = styled.div`
    padding: ${size.sm};
    margin: 0 auto;
`;
