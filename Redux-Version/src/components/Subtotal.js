import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Subtotal({ subTotalPrice }) {
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This is contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subTotalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to chekout
      </button>
    </div>
  );
}
export default Subtotal;
