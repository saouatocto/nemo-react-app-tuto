declare global {
  interface Window {
    ENV: {
      REACT_APP_API_URL: string;
    };
  }
}

export const { REACT_APP_API_URL = 'http://localhost:8080/api' } = window.ENV;
