function getClientKey() {
    let params = new URLSearchParams(document.location.search);
    let clientKey = params.get('clientKey') || params.get('clientkey');
    return clientKey;
}

export default getClientKey;