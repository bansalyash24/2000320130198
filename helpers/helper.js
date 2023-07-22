async function getToken() {
    const authData = await fetch("http://20.244.56.144/train/auth", {
        method: 'POST',
        body: JSON.stringify({
            "companyName": "Express Railway",
            "clientID": "5bf522b0-105d-4a51-a6d8-2c3154cc2e4c",
            "clientSecret": "VVVIrFCqrhOGVehn",
            "ownerName": "Yash Bansal",
            "ownerEmail": "yash.20b0131043@abes.ac.in",
            "rollNo": "2000320130198"
        })
    })
    const curData = await authData.json()
    return curData;
}

module.exports={getToken}