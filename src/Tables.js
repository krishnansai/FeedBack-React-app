import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
function Tables() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let result = localStorage.getItem("data");

    setData(JSON.parse(result));
  }, []);
  return (
    <div>
      <h1>All Feedback</h1>
      <hr />

      <Table className="table">
        <tr>
          <th>Form Name </th>
          <th> Text feild </th>
          <th> Phone feild </th>
          <th> Email feild </th>
          <th> Radio button </th>
          <th> Name </th>
        </tr>
       
        {data && data.map((e) => {
            return (
                <tr>
                     { Object.values(e).map((e) => { return (
                        <td>{e}</td>
                    )})} 
                </tr>
            )
        } )}
           
    
      </Table>
    </div>
  );
}

export default Tables;
