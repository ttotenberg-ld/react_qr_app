function getClientKey() {
    let params = new URLSearchParams(document.location.search);
    let clientKey = params.get('clientKey') || params.get('clientkey');
    if (!clientKey) {
        window.alert('No client key found in URL');
    }
    return clientKey;
}

export default getClientKey;