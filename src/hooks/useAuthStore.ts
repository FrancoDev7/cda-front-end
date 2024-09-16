// import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
// import { bodegaApi } from '../api';
// import {
//   clearErrorMessage,
//   onChecking,
//   onLogin,
//   onLogout,
//   onLogoutBodega,
// } from '../store';
// import { RootState, AppDispatch } from '../store';
// import axios from 'axios';

// // Definir interfaces para los datos



// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// interface RegisterCredentials extends LoginCredentials {
//   name: string;
// }

// interface AuthResponseData {
//   token: string;
//   name: string;
//   id: string;
// }

// export const useAuthStore = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//   const { status, user, errorMessage } = useAppSelector(
//     (state: RootState) => state.auth
//   );

//   const startLogin = async ({ email, password }: LoginCredentials) => {
//     dispatch(onChecking());
//     try {
//       const { data } = await bodegaApi.post<AuthResponseData>('/auth', {
//         email,
//         password,
//       });
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('token-init-date', new Date().getTime().toString());
//       dispatch(onLogin({ name: data.name, id: data.id }));
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         dispatch(
//           onLogout(error.response.data?.msg || 'Credenciales Incorrectas')
//         );
//       } else {
//         dispatch(onLogout('Credenciales Incorrectas'));
//       }
//       setTimeout(() => {
//         dispatch(clearErrorMessage());
//       }, 10);
//     }
//   };

//   const startRegister = async ({
//     email,
//     password,
//     name,
//   }: RegisterCredentials) => {
//     dispatch(onChecking());
//     try {
//       const { data } = await bodegaApi.post<AuthResponseData>('/auth/new', {
//         email,
//         password,
//         name,
//       });
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('token-init-date', new Date().getTime().toString());
//       dispatch(onLogin({ name: data.name, id: data.id }));
//     } catch (error) {
//       console.log(error);
//       if (axios.isAxiosError(error) && error.response) {
//         dispatch(onLogout(error.response.data?.msg || '--'));
//       } else {
//         dispatch(onLogout('--'));
//       }
//       setTimeout(() => {
//         dispatch(clearErrorMessage());
//       }, 10);
//     }
//   };

//   const checkAuthToken = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) return dispatch(onLogoutBodega()); // si no hay token, no hay nada que hacer

//     try {
//       const { data } = await bodegaApi.get<AuthResponseData>('/auth/renew');
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('token-init-date', new Date().getTime().toString());
//       dispatch(onLogin({ name: data.name, id: data.id }));
//     } catch (error) {
//       localStorage.clear();
//       dispatch(onLogout());
//     }
//   };

//   const startLogout = () => {
//     localStorage.clear();
//     dispatch(onLogoutBodega());
//     dispatch(onLogout());
//   };

//   return {
//     // Propiedades
//     errorMessage,
//     status,
//     user,

//     // Métodos
//     checkAuthToken,
//     startLogin,
//     startLogout,
//     startRegister,
//   };
// };