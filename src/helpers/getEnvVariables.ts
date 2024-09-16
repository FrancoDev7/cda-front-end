
export interface EnvVariables {
  VITE_API_URL: string;
  // Añade otras variables si es necesario
}

export const getEnvVariables = () : EnvVariables => {

  // import.meta.env;

  return {
    // ...import.meta.env,
    VITE_API_URL: import.meta.env.VITE_API_URL,
  };
};