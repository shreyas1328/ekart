import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../../styles/profile.scss";
import { profileValidation } from "../utiles/validation";
import { useSelector, useDispatch } from "react-redux";
import { profileModal } from "../../datastore/slice/modal";
import { setProfileData } from "../../datastore/slice/profile";
import MultipleAddressTile from "./multipleAddressTile";
import { showToast } from "../../datastore/slice/toast";

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.modal);
  const profileData = useSelector((state) => state.profile);

  const [state, setState] = useState({
    name: "",
    email: "",
    selected: 0,
  });

  const [error, setError] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (profileData.name || profileData.email) {
      setState({
        ...state,
        ...profileData,
      });
    }
  }, [profileData]);

  useEffect(() => {
    if (Object.keys(error).length === 0 && clicked) {
      onProfileSave();
    }
  }, [error, clicked]);

  console.log(error);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(profileModal(open));
  };

  const onAddressSelect = (id) => {
    setState({
      ...state,
      selected: id,
    });
  };

  const onProfileSave = () => {
    //save profile
    dispatch(setProfileData(state));
    dispatch(profileModal(false));
    dispatch(showToast({
      message: `Profile Updated`,
      severity: "info",
    }))
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

    if (profileData.arrayAddress.length <= 0) {
      setError({
        ...profileValidation(state),
        addressError: "Please select an address",
      });
    } else {
      setError(profileValidation(state));
    }
  };

  return (
    <div className="profil-e-container">
      <SwipeableDrawer
        className="profile-swipeable-container"
        anchor={"right"}
        open={profile.profileModal}
        // open={true}
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
            {/* <TextField
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
            /> */}

            <MultipleAddressTile
              selected={state.selected}
              onAddressSelect={onAddressSelect}
              addressError={error?.addressError}
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
