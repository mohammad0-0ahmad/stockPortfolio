import React from "react";
import StockRow from './StockRow'
import '../css/StockTable.css'
import MessageCard from './MessageCard'

const StockTable = ({ rows }) => {

  return (
    <div className="StockTable">
      <table>
        <thead>
          <tr>
            <th>Företag</th>
            <th>Innehav</th>
            <th>Aktietyp</th>
            <th>Antal aktier</th>
            <th>Aktienummer</th>
            <th>Ägarandel</th>
            <th>Röstvärde</th>
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, i) => <StockRow key={i} info={row} />)
          }
        </tbody>
      </table>
      {
        !rows.length &&
        <div id='emptyTableMessage'>
          <MessageCard text='Inget innehav tillagt ännu' />
        </div>
      }
    </div>
  );
}

export default StockTable;