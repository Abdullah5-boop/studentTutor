

interface userInfo {
  email: string;
  name?: string;
  password: string;
  callbackURL?: string;
}

export const authUserService = {
  authUserCreate: async (value: userInfo) => {
    try {
      let url = "http://localhost:5000/api/auth/sign-up/email";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      return response;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  },

  authUserLogin: async (value: userInfo) => {
    try {
      let url = "http://localhost:5000/api/auth/sign-in/email";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(value),
      });

      return response;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  },

  authSignOut: async () => {
    // let sesson = await authGetSession.getSession()
    try {
      let result = await fetch("http://localhost:5000/api/auth/sign-out", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });


      console.log("sign out -> ", result);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
