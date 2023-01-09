import React from "react";

function Alert(props) {
  const capitalalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div
      style={{ height: "35px" }}
      className={`bg-${props.mode === "dark" ? "dark" : "white"}`}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          id="display"
        >
          <strong>{capitalalize(props.alert.type)} : </strong>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
