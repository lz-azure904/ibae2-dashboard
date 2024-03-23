import { Configuration } from '@azure/msal-browser';

// MSAL configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: "82d85eb4-5a60-4239-ad9e-1a8ad2dad2e5", // From Azure portal
    authority: "https://login.microsoftonline.com/de4af286-1bb9-4ea2-8f82-4fe43516f79c", // Replace YOUR_TENANT_ID
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set to true if you are having issues on IE11 or Edge
  }
};

// Add scopes
export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"] // Add other scopes as needed
};
