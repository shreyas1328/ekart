import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { orderPlacedModal } from "../../datastore/slice/modal";
import { clearCart } from "../../datastore/slice/cart";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import { useHistory } from "react-router-dom";

function PaperComponent(props) {
  return <Paper {...props} />;
}

export default function OrderPlacedModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderPlaced = useSelector((state) => state.modal);
  const { cartAllData } = useSelector((state) => state.cart);

  const handleClose = () => {
    dispatch(orderPlacedModal(false));
  };

  const onButtonPressed = () => {
    dispatch(orderPlacedModal(false));
    history.push("/");
    dispatch(clearCart());
  };

  return (
    <div>
      <Dialog
        open={orderPlaced.orderPlacedModal}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        className="order-placed-modal-dialog"
        disableBackdropClick
      >
        <DialogTitle id="draggable-dialog-title"  className="order-placed-modal-dialog-title">Orders</DialogTitle>
        <DialogContent className="order-placed-modal-dialog-content">
          <div className="order-placed-modal-image-container">
            <BeenhereIcon className="order-placed-modal-image" />
          </div>
          <DialogContentText className="order-placed-modal-text">
            {cartAllData.length} order placed.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="order-placed-modal-actions" >
          <Button
          className="order-placed-modal-button"
            autoFocus
            onClick={onButtonPressed}
            color="primary"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Back to home
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
