import React from "react";

function Alert(props) {
  // this complete capitalize fuction just to make first word capital , merely you can ignore this and focus on the main code
  const capitalalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: `${props.alertstate === true ? "40px" : "0px"}` }}>
      {props.alert && (
        <div>
          {" "}
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
