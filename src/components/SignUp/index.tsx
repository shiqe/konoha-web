import React, { ReactElement, SyntheticEvent, useState } from 'react';

import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import styled from 'styled-components';
import { ArrowLeft } from 'baseui/icon';

import { size } from '../../utils/spacing';
import { signUpUser } from '../../api';
import PrimaryButton from '../Generic/PrimaryButton';
import { FlexContainer, Title } from '../Generic/styled';
import SnackBar from '../Snackbar';

interface SignUpProps {
    handleBackPress: () => void;
}

const initialCredentials = {
    name: '',
    email: '',
    password: '',
};

export default function SignUp(props: SignUpProps): ReactElement | null {
    const { handleBackPress } = props;
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
                <FlexContainer
                    flexDirection="row"
                    justify="space-between"
                    gap={size.sm}
                    style={{ width: '100%' }}
                >
                    <Button onClick={handleBackPress}>
                        <ArrowLeft size={size.xl} />
                    </Button>
                    <Title fontSize={size.x2l}>Sign Up</Title>
                    <div />
                </FlexContainer>
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
