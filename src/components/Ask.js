import React, { useState, useContext } from "react";
import AskContext from "../context/AskContext";

function Ask() {
  const context = useContext(AskContext);
  const { addQuery } = context;

  const [ask, setAsk] = useState({
    email: "",
    name: "",
    phone: "",
    query: "",
  });

  const btnSubmit = (e) => {
    e.preventDefault();
    addQuery(ask.email, ask.name, ask.phone, ask.query);
    setAsk({ email: "", name: "", phone: "", query: "" });
  };

  const inputEvent = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setAsk({ ...ask, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-center p-2" style={{ fontFamily: "cursive" }}>
        Ask It Down👇
      </h2>
      <div
        className="mx-5 my-3 px-3 py-2"
        style={{ border: "3px solid gray", borderRadius: "20px" }}
      >
        <form>
          <div className="form-group m-3">
            <label for="exampleInputEmail1">Email address 🪧</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              placeholder="Enter email"
              onChange={inputEvent}
              value={ask.email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group m-3">
            <label for="name">Name 😃</label>
            <input
              type="name"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={inputEvent}
              value={ask.name}
            />
          </div>
          <div className="form-group m-3">
            <label for="phone">Phone no. ☎️</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter your phone no."
              onChange={inputEvent}
              value={ask.phone}
            />
          </div>
          <div className="form-group m-3">
            <label for="query">Ask📌</label>
            <textarea
              type="query"
              className="form-control"
              id="query"
              name="query"
              placeholder="Enter your query"
              rows="4"
              onChange={inputEvent}
              value={ask.query}
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary my-2 mx-3"
              onClick={btnSubmit}
            >
              Submit
            </button>
            <button type="reset" className="btn btn-danger my-2 mx-3">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ask;
