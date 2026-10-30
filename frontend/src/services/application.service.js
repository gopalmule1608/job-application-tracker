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


export async function sendData(data) {
    try {
        const res = await api.post('/application', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        return res

    } catch (error) {
        console.log(error)
    }
}
