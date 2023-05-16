import Table from "react-bootstrap/Table";
import styles from "./orderhistory.module.scss";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";
const OrderHistoryTable = () => {
  const authCtx = useContext(AuthContext);
  const [Orders, setOrders] = useState([
    {
      "amount": 0,
      "cardNumber": "",
      "created_at": "",
      "creditCardType": "",
      "id": 1,
      "product_title": "",
      "status": "",
      "transactionNumber": null,
    },
  ]);
  const gettingOrderInfo = async () => {
    const route = "/api/order/get-orders";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res.data);
          setOrders(res.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    gettingOrderInfo();
  }, []);

  return (
    <Table className={styles.tableContainer} responsive striped bordered hover>
      <thead className={styles.tableHead}>
        <tr>
          <th>Transaction ID</th>
          <th>Product</th>
          <th>Qty</th>
          <th>Amount</th>
          <th>Status</th>
          <th>CC type</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {Orders.map((element) => {
          return (
            <tr key={element.id}>
              <td>{element.transactionNumber}</td>
              <td>{element.product_title}</td>
              <td>1</td>
              <td>{element.amount}</td>
              <td>{element.status}</td>
              <td>{element.creditCardType}</td>
              <td>{element.created_at}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default OrderHistoryTable;
