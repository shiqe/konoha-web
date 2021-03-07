import React, { ReactElement, useState } from 'react';

import { Input } from 'baseui/input';
import styled from 'styled-components';

import { size } from '../../utils/spacing';
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

    return (
        <Container>
            <FlexContainer flexDirection="column" gap={size.md}>
                <Title fontSize={size.x2l}>Sign Up</Title>
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
                    onChange={(e) => handleInputChange('email', e.target.value)}
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
            </FlexContainer>
        </Container>
    );
}

const Container = styled.div`
    padding: ${size.sm};
    margin: 0 auto;
`;
