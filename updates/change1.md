# Summary of Changes

This document outlines the recent changes in the codebase, providing explanations for each update.

## 1. **Login API structure**

```js
const response = await api.post(
  "/auth/login/", {
    email: formData.email,
    password: formData.password,
  }
);
```

This code sends a POST request to the `/auth/login/` endpoint using the `api` object, an Axios instance that exists at `services/axios.js`. It includes email and password from formData as the request payload, typically for user authentication. Ensure proper error handling is implemented to manage potential issues like network errors or invalid credentials.

## 2. **Register API structure**
This is just the same with No. 1


## 3. `API` Axios Instance
```js
import axios from 'axios';


const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

```
This code sets up an axios instance for making HTTP requests in the app. The baseURL is dynamically configured using an environment variable (`VITE_BACKEND_URL`) found in your `.env` file, which allows the API's base URL to change depending on the environment (e.g., development, staging, production). By creating a reusable axios instance, you avoid repeating configuration like headers in every request, making your code cleaner and easier to maintain.
You can use this by importing `api` into any file being used


## 4. `.env.example`
An `.env.example` file is a template that lists all the environment variables your project requires, without including sensitive values like API keys or passwords. It helps other developers understand what variables they need to configure in their own `.env` file to run the project locally.




# Steps you need to take


## 1. Setup `.env.local` file
The .env.local file is used in React projects to store environment-specific variables (like API keys) that should remain private and not be committed to version control. It overrides variables in .env and is specific to your local development environment. So when you run locally, `.env.local` variables will be used within the app