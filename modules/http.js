export const postData = async (url, body) => {
    const res = await fetch('http://localhost:9000' + url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res
}
