import { authGetSession } from "./getSession";

export const adminService = {
  getAllUser: async () => {
    try {
      let url = "http://localhost:5000/v1/alluser";

     
      const sessionHeaders = await authGetSession.getSession();

      let result = await fetch(url, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          ...sessionHeaders,
        },
        cache: "no-store",
      });

      if (!result.ok) {
        throw new Error(`Error: ${result.status}`);
      }

      const data = await result.json();
      return data
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  },

  getCategory: async () => {
    try {
      const result = await fetch("http://localhost:5000/v1/allCategory", {
        cache: "no-store",
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
