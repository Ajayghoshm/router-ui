import axios from "axios"
import * as dayjs from 'dayjs'


// Time: (Math.random() + 1).toString(36).substring(7),
//     From: "ASdasd",
//    To: "Asdasd",
//    Status: "ASdasd",
const transform = (data, account) => {
    console.debug("axiosData", data)
    let newData = data.data.map(item => {
        let data = {
            Time: dayjs(item?.created_date).format('DD/MM/YYYY HH:m')
            , From: item?.src_token_address
            , To: item?.dest_token_address
            , Status: item?.transaction_status
            , source_Token: item?.srctokensymbol
            , Source_Token_Amount: item?.src_token_amount
            , destination_Token: item?.destinationtokensymbol
            , destination_TokenAmount: item?.dest_token_amount
            , Fee_Token: item?.feetokensymbol
            , Source_Transaction_Hash: item?.source_tx_hash
            , Destination_Transaction_Hash: item?.deposit_tx_hash
            , Depoist_Nonce: item?.nonce_id
        }
        if (account === item?.src_token_address || account === item?.dest_token_address) {
            return ({...data, highlight: true})
        }else{
            return (data)
        }
      
    })
    console.debug("newData", newData)
    return (newData)
}

export const getTransactionList = async (account) => {
    return await axios.get('https://api.stats.routerprotocol.com/api/deposits?networkId=137,56,43114,250,1,42161,10,1666600000,25&page=1&limit=11&orderBy=desc').then((res) => {
        return transform(res.data, account)
    })
}

export const getTokenList=async(account)=>{
    return await axios.get('https://bridge.arbitrum.io/token-list-42161.json').then(res=>{
        return (res.data.tokens)
    })
}