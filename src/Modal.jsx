import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ showModal, userName,email,mobileNumber }) {
  const [open, setOpen] = React.useState(false);

  

  const handleClose = () => setOpen(false);

  // When showModal changes, update the state of 'open'
  useEffect(() => {
    if (showModal) {
      setOpen(true); // Open the modal
    } else {
      setOpen(false); // Close the modal
    }
  }, [showModal]); // Dependency on showModal state

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Hi {userName.toUpperCase()}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Your form is submitted. <hr />
              Email Id : {email} <hr />
              Mobile Number : {mobileNumber}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
