import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../../styles/profile.scss";
import { profileValidation } from "../utiles/validation";
import { useSelector, useDispatch } from "react-redux";
import { profileModal } from "../../datastore/slice/modal";

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.modal);

  const [state, setState] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
  });

  const [error, setError] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (Object.keys(error).length === 0 && clicked) {
      onProfileSave();
    }
  }, [error, clicked]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(profileModal(open))
  };

  const onProfileSave = () => {
    //save profile
  };

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
    setError(profileValidation(state));

  };


  return (
    <div className="profil-e-container">
      <SwipeableDrawer
        className="profile-swipeable-container"
        anchor={"right"}
        open={profile.profileModal}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <div
          className="profile-main"
          role="presentation"
          //   onClick={toggleDrawer(anchor, false)}
          //   onKeyDown={toggleDrawer("right", false)}
        >
          <AccountCircleIcon className="profile-icon" />
          <form className="profile-field-wrapper" onSubmit={onSubmit}>
            <TextField
              className="profile-field-input"
              label="Name"
              name="name"
              value={state.name}
              onChange={onTextChange}
              required
              helperText={error?.name}
            />
            <TextField
              className="profile-field-input"
              label="Email"
              name="email"
              value={state.email}
              onChange={onTextChange}
              helperText={error?.email}
              required
            />
            <TextField
              className="profile-field-input"
              label="Address Line 1"
              name="address1"
              value={state.address1}
              onChange={onTextChange}
              helperText={error?.address1}
              required
            />
            <TextField
              className="profile-field-input"
              label="Address Line 2"
              name="address2"
              value={state.address2}
              onChange={onTextChange}
              helperText={error?.address2}
              required
            />
            <Button className="profile-save-button" type="submit">
            Save
          </Button>
          </form>

          
        </div>
      </SwipeableDrawer>
    </div>
  );
}
