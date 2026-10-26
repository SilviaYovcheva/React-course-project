const restUrl = "https://qvizwoalgjaprthtoweb.supabase.co/rest/v1";
const authUrl = "https://qvizwoalgjaprthtoweb.supabase.co/auth/v1";

export default async function request({
  url,
  path,
  method = "GET",
  data = null,
  opts = {},
}) {
  const baseUrl = url || restUrl;
  const options = {
    ...opts,
    headers: {
      ...opts.headers,
      apiKey: import.meta.env.VITE_API_KEY,
      Prefer: "return=representation",
      ...getAuthHeader(),
    },
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${baseUrl}${path}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const authRequest = async (
  path = "/",
  method = "POST",
  data = null,
  opts = {},
) => {
  const url = authUrl;
  return request({ url, path, method, data, opts });
};

function getAuthHeader() {
  const authData = localStorage.getItem("auth");
  const accessToken = authData ? JSON.parse(authData)?.access_token : null;

  return {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
}
