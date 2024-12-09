const APIURL: string = process.env.NEXT_PUBLIC_API_URL as string;

export async function createOrder(products: number[], token: string) {
    try {
        const res = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify({ products })
        })
        const orders = await res.json()
        return orders
    } catch (error: any) {
        throw new Error(error)
    }
}