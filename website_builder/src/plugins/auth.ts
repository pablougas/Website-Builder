// import Vue from "vue";
// import {
//   Auth0Client,
//   PopupConfigOptions,
//   PopupLoginOptions,
//   RedirectLoginOptions,
//   GetTokenSilentlyOptions,
//   GetTokenWithPopupOptions,
//   LogoutOptions,
//   createAuth0Client,
//   Auth0ClientOptions,
// } from "@auth0/auth0-spa-js";

// /* eslint-disable */

// /** Define a default action to perform after authentication */
// const DEFAULT_REDIRECT_CALLBACK = () =>
//   window.history.replaceState({}, document.title, window.location.pathname);

// let instance: Vue;

// /** Returns the current instance of the SDK */
// export const getInstance = (): Vue<Record<string, any>> => instance;

// /** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
// export const useAuth0 = ({
//   onRedirectCallback = DEFAULT_REDIRECT_CALLBACK as (() => void) | undefined,
//   redirectUri = window.location.origin as string | undefined,
//   ...options
// }): Vue<Record<string, any>> => {
//   if (instance) return instance;

//   // The 'instance' is simply a Vue object
//   instance = new Vue({
//     data() {
//       return {
//         loading: true,
//         isAuthenticated: false,
//         user: {} as Record<string, unknown> | undefined,
//         auth0Client: null as null | Auth0Client,
//         popupOpen: false,
//         error: null as null | string | unknown,
//       };
//     },
//     methods: {
//       /** Authenticates the user using a popup window */
//       async loginWithPopup(
//         options: PopupLoginOptions | undefined,
//         config: PopupConfigOptions | undefined
//       ) {
//         this.popupOpen = true;
//         if (!this.auth0Client) {
//           return;
//         }
//         try {
//           await this.auth0Client.loginWithPopup(options, config);
//           this.user = await this.auth0Client.getUser();
//           this.isAuthenticated = await this.auth0Client.isAuthenticated();
//           this.error = null;
//         } catch (e) {
//           this.error = e;
//           console.error(e);
//         } finally {
//           this.popupOpen = false;
//         }

//         this.user = await this.auth0Client.getUser();
//         this.isAuthenticated = true;
//       },
//       /** Handles the callback when logging in using a redirect */
//       async handleRedirectCallback() {
//         this.loading = true;
//         if (!this.auth0Client) {
//           return;
//         }
//         try {
//           await this.auth0Client.handleRedirectCallback();
//           this.user = await this.auth0Client.getUser();
//           this.isAuthenticated = true;
//           this.error = null;
//         } catch (e) {
//           this.error = e;
//         } finally {
//           this.loading = false;
//         }
//       },
//       /** Authenticates the user using the redirect method */
//       loginWithRedirect(o: RedirectLoginOptions<any> | undefined) {
//         if (!this.auth0Client) {
//           return;
//         }
//         return this.auth0Client.loginWithRedirect(o);
//       },
//       /** Returns all the claims present in the ID token */
//       getIdTokenClaims(o: Record<string, unknown>) {
//         if (!this.auth0Client) {
//           return;
//         }
//         // @ts-ignore
//         return this.auth0Client.getIdTokenClaims(o);
//       },
//       /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
//       getTokenSilently(
//         o: GetTokenSilentlyOptions & { detailedResponse: true }
//       ) {
//         if (!this.auth0Client) {
//           return;
//         }
//         return this.auth0Client.getTokenSilently(o);
//       },
//       /** Gets the access token using a popup window */

//       getTokenWithPopup(o: GetTokenWithPopupOptions | undefined) {
//         if (!this.auth0Client) {
//           return;
//         }
//         return this.auth0Client.getTokenWithPopup(o);
//       },
//       /** Logs the user out and removes their session on the authorization server */
//       logout(o: LogoutOptions | undefined) {
//         if (!this.auth0Client) {
//           return;
//         }
//         return this.auth0Client.logout(o);
//       },
//     },
//     /** Use this lifecycle method to instantiate the SDK client */
//     async created() {
//       // Create a new instance of the SDK client using members of the given options object
//       this.auth0Client = await createAuth0Client({
//         ...options,
//         authorizationParams: {
//           redirect_uri: redirectUri,
//           ...options.authorizationParams,
//         },
//       } as Auth0ClientOptions);

//       try {
//         // If the user is returning to the app after authentication..
//         if (
//           window.location.search.includes("code=") &&
//           window.location.search.includes("state=")
//         ) {
//           // handle the redirect and retrieve tokens
//           const { appState } = await this.auth0Client.handleRedirectCallback();

//           this.error = null;

//           // Notify subscribers that the redirect callback has happened, passing the appState
//           // (useful for retrieving any pre-authentication state)
//           // @ts-ignore
//           onRedirectCallback(appState);
//         }
//       } catch (e) {
//         this.error = e;
//       } finally {
//         // Initialize our internal authentication state
//         this.isAuthenticated = await this.auth0Client.isAuthenticated();
//         this.user = await this.auth0Client.getUser();
//         this.loading = false;
//       }
//     },
//   });

//   return instance;
// };

// // Create a simple Vue plugin to expose the wrapper object throughout the application
// export const Auth0Plugin = {
//   install(
//     Vue: {
//       prototype: {
//         $auth: Vue<
//           /* eslint-disable @typescript-eslint/no-explicit-any */
//           Record<string, any>,
//           /* eslint-disable @typescript-eslint/no-explicit-any */
//           Record<string, any>,
//           never,
//           never,
//           (
//             event: string,
//             /* eslint-disable @typescript-eslint/no-explicit-any */
//             ...args: any[]
//           ) => /* eslint-disable @typescript-eslint/no-explicit-any */
//           Vue<Record<string, any>, Record<string, any>, never, never, any>
//         >;
//       };
//     },
//     options: {
//       [x: string]: any;
//       onRedirectCallback?: (() => void) | undefined;
//       redirectUri?: string | undefined;
//     }
//   ) {
//     Vue.prototype.$auth = useAuth0(options);
//   },
// };
