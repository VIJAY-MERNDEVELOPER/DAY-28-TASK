/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";

function Card({ cart, discountPrice }) {
  const [newPrice, setNewPrice] = useState(discountPrice);
  let productCost = (e) => {
    let newPrice = e.target.value * discountPrice;
    setNewPrice(newPrice);
  };

  const [selected, setSelect] = useState(true);
  let unSelected = () => {
    if (selected === true) {
      setSelect(false);
    }
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-sm-2">
          {selected ? (
            <input
              className="form-check-input mx-2"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked
              onClick={() => {
                unSelected();
              }}
            />
          ) : (
            <input
              className="form-check-input mx-2"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
          )}

          <img
            src={cart.thumbnail}
            className="img-fluid rounded-start "
            alt="..."
          />
        </div>
        <div className="col-sm-9  ">
          <div className="card-body">
            <div className="row ">
              <h5 className="col-sm-4 card-title">{cart.title}</h5>
              <div className="col-sm-7 ">
                <div className="row justify-content-end">
                  <div className="col-sm-8 justify-content-end">
                    {" "}
                    <select
                      className="form-select  "
                      aria-label="Default select example"
                      style={{ width: "60px" }}
                      onChange={(e) => {
                        productCost(e);
                      }}
                    >
                      <option defaultValue value="1">
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>

                  <div className="col-sm-4 text-end ">
                    {" "}
                    <h4
                      className="fw-bold text-decoration-line-through fs-4"
                      style={{ opacity: "0.5" }}
                    >
                      ₹{cart.price}
                    </h4>
                    <h4 className=" fw-bold fs-3">₹{discountPrice}</h4>
                  </div>
                </div>
              </div>
              <p className="card-text row mx-0 text-wrap mb-5 col-sm-8 ">
                {cart.description}
              </p>
            </div>

            <div className="row mt-5">
              <p className="card-text col-sm-9">
                <b>Subsidity</b>
              </p>
              <button className="btn btn-danger col-sm-2">Remove</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <h6 className="col-sm-9 mx-5">SUBTOTAL: </h6>
        <h6 className="col-sm-2 ">₹{newPrice}</h6>
      </div>{" "}
      <div className="row">
        <h6 className="col-sm-9 mx-5">SHIPPING: </h6>
        <h6 className="col-sm-2 mx-1">FREE</h6>
      </div>
      <hr />
      <div className="row">
        <h6 className="col-md-9 mx-5">TOTAL: </h6>

        <h6 className="col-md-2 ">₹{newPrice}</h6>
      </div>
    </div>
  );
}

export default Card;
