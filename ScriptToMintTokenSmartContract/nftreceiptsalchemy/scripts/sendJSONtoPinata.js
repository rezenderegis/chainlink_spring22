const axios = require('axios');

exports.pinJSONToIPFS = async (JSONBody) => {
    console.log("[pinJSONToIPFS] - Start");
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    try {
     const response = await axios.post(url, JSONBody, {
            headers: {
                pinata_api_key: "17b86a446af2478e7ed6",
                pinata_secret_api_key: "9f6eee7cc5488fe225687232cf7b9a16b08cf8baf48e67eb167df4fadf4f2ee8"
            }
        });

        if (response.data.IpfsHash) {
            return response.data;
        }
    } catch (error) {
        console.log("[pinJSONToIPFS] - Error");
        console.log(JSON.stringify(error));
        return error;
    }
};