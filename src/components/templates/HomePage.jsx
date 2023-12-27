import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/Tablecoin';
import {getCoinList} from '../../services/cryptoApi'

function HomePage() {
    const[coins,setCoins] = useState([]);
    const [isLoading,setLoading] = useState(true);
    useEffect(()=>{
        const getData = async () => {
          const res = await fetch(getCoinList());
          const json = await res.json();
          setCoins(json);
          setLoading(false)
        }
        getData();
    },[]);
  return (
    <div>
        <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  )
}

export default HomePage