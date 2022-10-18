import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const CustomDialog = ({ open, title, content, actions }) => {
    const dialogActions = actions.map((action) => (<Button onClick={action.onClick}>{action.displayName}</Button>));

    return (
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions> {dialogActions} </DialogActions>
      </Dialog>
    );
  };

export default CustomDialog;