export const adminService = {
    getCategory: async () => {
        try {
            const result = await fetch("http://localhost:5000/v1/allCategory", {
                cache: "no-store"
            })
            return result
        } catch (error) { console.log(error) }
    }
}