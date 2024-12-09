const APIURL: string = process.env.NEXT_PUBLIC_API_URL as string;

export async function getOrder(token: string) {
    try {
        const res = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: token
            }
        })
        const orders = await res.json()
        return orders
    } catch (error: any) {
        throw new Error(error)
    }
}