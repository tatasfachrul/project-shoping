import axios from 'axios'
import {ip} from '../../setServer'

export function ALL_ORDERS(){
    return {
        type: "ALL_ORDERS",
        payload: axios.get(ip+'/api/v1/orders')
    }
}

