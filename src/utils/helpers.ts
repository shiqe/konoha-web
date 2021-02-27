const secret = 'konoha';

export const storeToken = (token: string): void => {
    localStorage.setItem(secret, token);
    return;
};

export const getToken = (): string => {
    return localStorage.getItem(secret);
};

export const removeToken = (): void => {
    localStorage.removeItem(secret);
    return;
};
