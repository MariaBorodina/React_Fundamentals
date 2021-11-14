
const API_URL = "http://localhost:3000";


const HttpUtils = {

     post: async (url, data ) =>
    {
        const response = await fetch( API_URL + url,
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        } );
    
        const result = await response.json();

        if(!response.ok) {
            console.log("ERROR: " + response.statusText);
            console.log(JSON.stringify(result));
        }

        return result;    
    }


};

export default HttpUtils;