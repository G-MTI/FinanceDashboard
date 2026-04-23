const API = import.meta.env.VITE_API_URL;

const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

export const loginUser = async (email, password) => {
  const data = await authFetch(`${API}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  localStorage.setItem("token", data.token);
  return data;
};

export const registerUser = async (email, password) => {
  return await authFetch(`${API}/register`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const getTransactions = async () => {
  return await authFetch(`${API}/transactions`);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};