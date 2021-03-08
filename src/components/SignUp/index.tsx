import React, { ReactElement, useState } from 'react';

import { Input } from 'baseui/input';
import styled from 'styled-components';

import { size } from '../../utils/spacing';
import PrimaryButton from '../Generic/PrimaryButton';
import { FlexContainer, Title } from '../Generic/styled';

const initialCredentials = {
    username: '',
    email: '',
    password: '',
};

export default function SignUp(): ReactElement | null {
    const [userCredentials, setUserCredentials] = useState(initialCredentials);

    function handleInputChange(field: string, value: string) {
        setUserCredentials({ ...userCredentials, [field]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(userCredentials);
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
                            value={userCredentials.username}
                            onChange={(e) =>
                                handleInputChange('username', e.target.value)
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
            </FlexContainer>
        </Container>
    );
}

const Container = styled.div`
    padding: ${size.sm};
    margin: 0 auto;
`;
