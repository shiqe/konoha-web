import configs from "../configs";

const apiLogin = async (details: {
    email: string;
    password: string;
}): Promise<{ data: string; error: string }> => {
    try {
        const res = await fetch(configs.api + "/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        });
        const data = await res.text();
        if (res.status != 200) return { data: null, error: data };
        return { data: data, error: null };
    } catch (err) {
        return { data: null, error: err };
    }
};

export { apiLogin };
