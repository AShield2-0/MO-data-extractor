interface IEnv {
    port: number;
    currEnv: string;
    mongoURL: string;
    mongoDB_DBName: string;
}

interface IEnvHashType {
    [key: string]: IEnv
}

// ---------------------- Slack configuration ends --------------------------
const MONGO_URL = typeof (process.env.MONGO_URL) === "string" ? process.env.MONGO_URL : "mongodb://ashieldUser:ASh1e19U_21@localhost:27017"
const RESULT_OUTPUT_FILE = typeof (process.env.RESULT_OUTPUT_FILE) === "string" ? process.env.RESULT_OUTPUT_FILE : "/app/outfile.txt"


export const longCodesInfo = [{ "name": "Gupshup airtel", "code": 1644033266 },
{ "name": "Gupshup vodafoneidea", "code": 463069304 },
{ "name": "Routemobile VodafoneIdea", "code": 2027425935 },
]


const supportedEnvs: IEnvHashType = {
    "dev": {
        port: 3001,
        currEnv: "dev",
        mongoURL: MONGO_URL,
        mongoDB_DBName: 'AShieldClickless'

    },
    "staging": {
        port: 3002,
        currEnv: "staging",
        mongoURL: MONGO_URL,
        mongoDB_DBName: 'AShieldClickless'
    },
    "prod": {
        port: 3003,
        currEnv: "prod",
        mongoURL: MONGO_URL,
        mongoDB_DBName: 'AShieldClickless'
    }
}
const setEnv = typeof (process.env.NODE_ENV) === "string" ? process.env.NODE_ENV.toLowerCase() : "";
const ENV_VALS = typeof (supportedEnvs[setEnv]) === "object" ? supportedEnvs[setEnv] : supportedEnvs['dev'];


// Replace these values with your Azure Storage account details
const BLOB_CREDENTIALS = {
    accountName: typeof (process.env.BLOB_ACCOUNT_NAME) == "string" ? process.env.BLOB_ACCOUNT_NAME : "ashieldstorage",
    accountKey: typeof (process.env.BLOB_ACCOUNT_KEY) == "string" ? process.env.BLOB_ACCOUNT_KEY : "GYqqCTy7Tybrj669AnFlWMM1NlJSvppvm8NUbpxH9/NJyk4Q5ReM7DMzQYdmRgSom+6KQCxQZ3Fv+ASt/bVTug==",
    containerName: typeof (process.env.BLOB_CONTAINER_NAME) == "string" ? process.env.BLOB_CONTAINER_NAME : "reports-data",
    blobName: typeof (process.env.BLOB_NAME) == "string" ? process.env.BLOB_NAME : "6jX862fjtffDY2ItE0929xSeYjnHK22.txt",
}

export { BLOB_CREDENTIALS, ENV_VALS, RESULT_OUTPUT_FILE };

