import React, { useState } from "react";
import AskContext from "./AskContext";

function AskState(props) {
  const host = "http://localhost:5000";
  const store_query = [];
  const [queries, setQueries] = useState(store_query);

  const addQuery = async (email, name, phone, query) => {
    const response = await fetch(`${host}/api/ask/addquery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, phone, query }),
    });
    const response_ask = await response.json();
    setQueries(query.concat(response_ask));
  };

  return (
    <AskContext.Provider value={{ queries, addQuery }}>
      {props.children}
    </AskContext.Provider>
  );
}

export default AskState;
