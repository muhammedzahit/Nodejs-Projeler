import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function FormDialog(args) {

    const [description, setDescription] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [user, setUser] = React.useState("")

  const handleClickOpen = () => {
    args.setOpen(true);
  };

  const handleClose = () => {
    args.handleSend({title,description,user})
    args.setOpen(false);
  };

  return (
    <div>
      <Dialog open={args.open} onClose={handleClose}>
        <DialogTitle>New Post</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            autoFocus
            margin="dense"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            type="body"
            fullWidth
          />
          <TextField
            multiline
            autoFocus
            margin="dense"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            type="body"
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select User</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user}
              label="Select User"
              onChange={(e) => setUser(e.target.value)}
            >
              {console.log(args.usersData)}
              {args.usersData && args.usersData.users.map((user, index) => 
              <MenuItem value={user.id}>{user.fullName}</MenuItem>
              )}
            </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => args.setOpen(false)}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
