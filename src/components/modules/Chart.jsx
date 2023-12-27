import React, { useState } from 'react'
import {convertData} from "../../helpers/convertData"
import styles from "./Chart.module.css"
function Chart({chart,setChart}) {
    const [type,setType] = useState("market_caps")
    console.log(convertData(chart,type))
  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={()=>setChart(null)}>X</span>
        <div className={styles.chart}></div>
    </div>
  )
}

export default Chart