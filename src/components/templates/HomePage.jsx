import React, { useEffect, useState } from "react";
import TableCoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };
    getData();
  }, [page]);
  return (
    <div>
      <Pagination page={page} setPage={setPage}/>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
