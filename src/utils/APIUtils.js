export const fetchClothes = async () => {
    const response = await fetch("https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94")
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        return message;
    }
    const data = await response.json()
    return data
}