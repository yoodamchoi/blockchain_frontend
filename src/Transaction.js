import React from "react";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div>
      <h1 className="Title">Transaction History</h1>
      <div className="TransactionContainer">
        <p>
          <b>Transaction Hash:</b>{" "}
          0x18eda96777a1b1bbbd8bba546cf85804ecc7e480d7f3237704f54bfc0ac4a1bd
        </p>
        <p>
          <b>Status:</b> SUCCESS
        </p>
        <p>
          <b>Timestamp:</b> (Nov-06-2022 04:45:59 PM +UTC)
        </p>
        <p>
          <b>From:</b> 0x5c758adb6E48fe8D289cE4890C6f19120aAD74aC
        </p>
        <p>
          <b>To:</b> 0x388c818ca8b9251b393131c08a736a67ccb19297
        </p>
        <p>
          <b>Value:</b> 250 ETH
        </p>
        <p>
          <b>Gas used:</b> 21000
        </p>
      </div>
      <div className="TransactionContainer">
        <p>
          <b>Transaction Hash:</b>{" "}
          0xaf57f56e149c81f69eff2ac1161bc7bcda305dd4c2d8a43913a9c70d6ddc6e5f
        </p>
        <p>
          <b>Status:</b> SUCCESS
        </p>
        <p>
          <b>Timestamp:</b> (Nov-06-2022 04:50:59 PM +UTC)
        </p>
        <p>
          <b>From:</b> 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
        </p>
        <p>
          <b>To:</b> 0x00ecC96508d299Fa8d228d569d8582980C1bc75e
        </p>
        <p>
          <b>Value:</b> 5000 ETH
        </p>
        <p>
          <b>Gas used:</b> 14570
        </p>
      </div>
    </div>
  );
};

export default Transaction;
