import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { addressModal } from "../../datastore/slice/modal";
import { addAddresses } from "../../datastore/slice/profile";
import TextField from "@material-ui/core/TextField";
import { addressValidation } from "../utiles/validation";
// import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   dialogTitle: {
//     color: theme.palette.secondary.main,
//   },
// }));

function PaperComponent(props) {
  return <Paper {...props} />;
}

export default function AddressModal() {
  const dispatch = useDispatch();
  // const classes = useStyles();
  const address = useSelector((state) => state.modal);
  const [state, setState] = useState({
    address1: "",
    address2: "",
  });

  const [error, setError] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (Object.keys(error).length === 0 && clicked) {
      onAddressAdded(clicked);
    }
  }, [error, clicked]);

  const onAddressAdded = () => {
    //continue
    dispatch(addAddresses(state));
    handleClose();
    setState({
      address1: "",
    address2: "",
    })
  };

  const handleClose = () => {
    dispatch(addressModal(false));
  };

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSaveButton = () => {
    setClicked(true);
    setError(addressValidation({ ...state, id: Math.random() }));
  };

  return (
    <Paper>
      <Dialog
        open={address.addressModal}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle  id={`draggable-dialog-title`}>Address</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: "100%", marginBottom: "10px" }}
            className="profile-field-input"
            label="Address Line 1"
            name="address1"
            value={state.address1}
            onChange={onTextChange}
            helperText={error?.address1}
            required
            autoComplete={false}
          />
          <TextField
            style={{ width: "100%" }}
            className="profile-field-input"
            label="Address Line 2"
            name="address2"
            value={state.address2}
            onChange={onTextChange}
            helperText={error?.address2}
            required
            autoComplete={false}
          />
        </DialogContent>
        <DialogActions style={{ marginTop: "10px" }}>
          <Button
            autoFocus
            onClick={onSaveButton}
            color="primary"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Save
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
