const restUrl = "https://qvizwoalgjaprthtoweb.supabase.co/rest/v1";

export default async function request(path = "/", method = "GET", data = null, opts = {}) {
    const options = {
        headers: {
            apiKey: import.meta.env.VITE_API_KEY,
            Prefer: "return=representation"
        },
        ...opts
    };

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${restUrl}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}
