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

      //   if (!response.ok) {
      //     // Handle HTTP errors, e.g., status 400, 500
      //     // throw new Error(`HTTP error! status: ${response.status}`);
      //     console.log(response);
      //     const result = await response.json();

      //     return false
      //   }
      //   if (response.ok) {
      //     const result = await response.json();

      //     console.log(result);
      //     return true

      //   }
      // return result;

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
        credentials:'include',
        body: JSON.stringify(value),
      });

      return response;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  },
};
