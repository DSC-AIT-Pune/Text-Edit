import React from "react";

function Ask(props) {
  return (
    <div>
      <h2 className="text-center" style={{ fontFamily: "cursive" }}>
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
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group m-3">
            <label for="query">Ask📌</label>
            <textarea
              type="query"
              className="form-control"
              id="query"
              aria-describedby="emailHelp"
              placeholder="Enter your query"
              rows="4"
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary my-2 mx-3">
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
