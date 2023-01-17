const baseUrl = import.meta.env.VITE_API_URL;

export const urls = {
  auth: {
    login: `${baseUrl}/auth/login`,
    signup: `${baseUrl}/user`,
  },
};
