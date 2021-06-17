import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../../styles/profile.scss";
import { profileValidation } from "../utiles/validation";
import { useSelector, useDispatch } from "react-redux";
import { addressModal } from "../../datastore/slice/modal";
import { removeAddress } from "../../datastore/slice/profile";
import { Card } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";

export default function MultipleAddressTile({
  selected,
  onAddressSelect,
  addressError,
}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [state, setState] = useState(0);

  const onCardClick = (e) => {
    onAddressSelect(e);
  };

  const onDeleteClick = (index) => {
    // setState(e);
    dispatch(removeAddress(index));
  };

  const onAddAddress = () => {
    dispatch(addressModal(true));
  };

  return (
    <div className="profile-address-container">
      <Typography className="profile-address-title">Address</Typography>
      {addressError ? (
        <Typography className="profile-address-addressError">
          {addressError}
        </Typography>
      ) : (
        <></>
      )}

      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={selected}
        onChange={onCardClick}
      >
        {profile.arrayAddress?.map((val, index) => (
          <Card className="profile-address-card">
            <div
              className="profile-address-left-block"
              onClick={() => onCardClick(index)}
            >
              <FormControlLabel
                className="profile-address-radio"
                value={index}
                control={<Radio />}
              />
              <Typography
                className="profile-address-text1"
                component={"p"}
                variant="p"
              >
                {val.address1}
              </Typography>
              <Typography
                className="profile-address-text2"
                component={"p"}
                variant="p"
              >
                {val.address2}
              </Typography>
            </div>
            <Button
              className="profile-address-right-block"
              onClick={() => onDeleteClick(index)}
            >
              <DeleteIcon className="profile-address-delete" />
            </Button>
          </Card>
        ))}
      </RadioGroup>

      <Button className="profile-add-address-button" onClick={onAddAddress}>
        Add Address
      </Button>
    </div>
  );
}