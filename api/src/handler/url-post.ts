const UrlPost = () => {
    const body = JSON.stringify({
        "test": 1
    })
    const headers = { 'Content-type': 'application/json' }
    return new Response(body, { headers })
}

export default UrlPost
