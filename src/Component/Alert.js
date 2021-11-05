import React, { useEffect } from "react";

export default function Alert({ removeAlert, list, alert }) {
  console.log(alert);
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}
