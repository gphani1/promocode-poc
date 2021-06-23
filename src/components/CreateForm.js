import React from "react";
//import './form.css'
import { Switch } from "@material-ui/core";

//Input ---code ---Description

const CreateForm = (props) => {
  return (
    <div>
      <div>
        <form onSubmit={props.handleformSubmit} className="form-display">
          <div className="m_bottom">
            <label htmlFor="code" className="label-display">
              Code
              <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
            </label>
            <input
              className="input_field"
              type="text"
              name="code"
              placeholder="Discount20"
              value={props.code}
              onChange={props.handleInputChange}
              required
            />
          </div>
          <div className="m_bottom">
            <label htmlFor="description" className="label-display">
              Description
              <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
            </label>
            <input
              className="input_field"
              type="text"
              name="description"
              placeholder="A discount code for our Winter promotion"
              value={props.description}
              onChange={props.handleInputChange}
              required
            />
          </div>

          <div className="flex-wrap">
            <div>
              <label htmlFor="discount" className="label-display">
                Discount(USD)
                <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
              </label>
              <select
                className="item_pos"
                name="discount"
                value={props.discount}
                onChange={props.handleInputChange}
              >
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="120">120</option>
              </select>
            </div>

            <div className="m_right">
              <label htmlFor="free" className="label-display">
                Free Delivery?
              </label>
              <Switch
                checked={props.delivery}
                onChange={props.handleChecked}
                name="delivery"
                color="primary"
                value={props.delivery}
              />
            </div>
          </div>
          <div className="btn-submit">
            <button type="submit" value="Submit">
              Create Promo Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
