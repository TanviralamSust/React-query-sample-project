import React, {useContext, useState} from "react";
import axios from "axios";

const FundContext = React.createContext();

export function useFunds(){
    return useContext(FundContext);
}

export function FundProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [funds, setFunds] = useState([])

    async function getFundsList(url, method, payload) {
        try {
            const res = await axios.request({
                data:payload,
                method,
                url
            })
            setFunds(res.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
        return {
            funds
        }
    }

    const value = {
        getFundsList,
    }

    return(
        <FundContext.Provider value={value}>
            {!loading && children}
        </FundContext.Provider>
    )
}