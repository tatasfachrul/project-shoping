import axios from 'axios'
import {ip} from '../../setServer'

export function ALL_PRODUCTS(){
    return {
        type: "ALL_PRODUCTS",
        payload: axios.get(ip+'/api/v1/products')
    }
}

