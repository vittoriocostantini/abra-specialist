export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export const loginUser = async ({ email, password }: LoginCredentials) => {
    if (email && password) {
      return {
        email,
      };
    } else {
      throw new Error("Credenciales inválidas");
    }
  };
  