import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { logoutModal } from "../../datastore/slice/modal";

function PaperComponent(props) {
  return <Paper {...props} />;
}

export default function LogoutModal() {
  const dispatch = useDispatch();

  const logout = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(logoutModal(false));
  };

  const onLogoutButton = () => {
    localStorage.clear();
    dispatch(logoutModal(false));
    window.location.reload();
  };

  return (
    <div>
      <Dialog
        open={logout.logoutModal}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={onLogoutButton}
            color="primary"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Logout
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
    </div>
  );
}
