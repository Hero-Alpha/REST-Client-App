import React, { useState } from "react";
import RequestForm from "../components/RequestForm";
import ResponseDisplay from "../components/ResponseDisplay";
import HistoryTable from "../components/HistoryTable";
import "../styles/main.css";

export default function Home() {
  const [response, setResponse] = useState(null);
  const [refreshHistory, setRefreshHistory] = useState(false);

  const triggerRefresh = () => setRefreshHistory(!refreshHistory);

  return (
    <div className="container">
      <h1>REST Client</h1>
      <RequestForm onResponse={setResponse} onRequestComplete={triggerRefresh} />
      {response && <ResponseDisplay response={response} />}
      <HistoryTable refresh={refreshHistory} />
    </div>
  );
}
