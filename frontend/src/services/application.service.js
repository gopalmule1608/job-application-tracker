import api from "../lib/axios"



export async function getApplications() {
    try {
        const res = await api.get('/application', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        return res.data
    } catch (error) {
        console.log(error)
    }
}

