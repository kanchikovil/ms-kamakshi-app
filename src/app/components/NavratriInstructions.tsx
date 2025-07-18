'use client';
import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Typography,
  IconButton,
  Collapse,
  useMediaQuery,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './NavratriInstructions.module.css';
import CloseIcon from '@mui/icons-material/Close'; // Add this import


interface RegistrationCardProps {
  regType: string;
}


export const NavratriInstructions: React.FC<RegistrationCardProps> = ({ regType }) => {
  const isMobile = useMediaQuery('(max-width:1070px)');
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
const handleDialogToggle = () => setDialogOpen(!dialogOpen);
const instructionData = {
    titile: "Kroothi Nama Samvatsara Sharadha Navaratri Mahotsavam 2025",
    summary:  regType === "kanya"
        ? "Kanya who hasn’t started her menstrual cycle should enroll and adhere to the following guidelines."
        : "Suvasini, ladies who are above 40 years and have completed menstrual cycle.",
    sections: [
        {
            content: `Fill in the Required Details:
            Ensure that all mandatory fields are completed accurately. This includes 
            contact details, and any other relevant information requested in the registration form.`
        }, 
        {
            content: `Kanchi kovil admin will verify the registration details and approve the registration.
            Once approved, you will receive a confirmation email with further instructions.`
        }, 
        {
            content: `For any queries or assistance, please contact the Kanchi Kovil administration at
            kanchikovil2024@gmail.com or 98765 43210`
        }, 
       
    ]
}


  const toggleInstructions = () => setOpen(!open);

  return (
<Grid2
  container
  direction="column"
  spacing={1}
  sx={{
    backgroundColor: '#FFFFFF',
    minHeight: isMobile ? 'auto' : 'calc(100vh - 60px)', // adjust 60px as needed
    marginLeft: isMobile ? '0%' : '10%',
    padding: isMobile ? '1em 0.5em' : '6.5em 3em',
    boxSizing: 'border-box',
  }}
>




      {/* Title */}
      <Grid2 xs={12}>
        <Typography
          color="#75762A"
          fontSize={isMobile ? 16 : 18}
          fontWeight={700}
          textAlign={isMobile ? 'center' : 'left'}
          
                 >
          {instructionData.titile}
        </Typography>
      </Grid2>

      {/* Summary */}
      <Grid2 xs={12}>
        <Typography
          color="#616060"
          fontSize={isMobile ? 14 : 16}
          fontWeight={900}
          textAlign={isMobile ? 'center' : 'left'}
          
        >
          {instructionData.summary}
        </Typography>
      </Grid2>

{isMobile && (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap={1}
    onClick={handleDialogToggle}
    sx={{
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '5px',
    }}
  >
    <IconButton
      color="primary"
      sx={{
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        margin:'-30px',
        marginLeft:'-50px'
      }}
    >
      <MenuBookIcon sx={{ fontSize: 30 }} />
    </IconButton>
  </Box>
)}

{isMobile && (
  <Dialog
    fullScreen
    open={dialogOpen}
    onClose={handleDialogToggle}
    PaperProps={{
      sx: { backgroundColor: '#fdf8f3' },
    }}
  >
<DialogTitle
  sx={{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#75762A',
    textAlign: 'center',
    padding: '16px',
    position: 'relative', 
  }}
>
  {instructionData.titile}

  {/* Close Button */}
  <IconButton
    aria-label="close"
    onClick={handleDialogToggle}
    sx={{
      position: 'absolute',
      right: 8,
      top: 8,
      color: (theme) => theme.palette.grey[500],
    }}
  >
    <CloseIcon />
  </IconButton>
</DialogTitle>


    <DialogContent>
      <Typography
        color="#616060"
        fontSize={14}
        fontWeight={900}
        textAlign="center"
        mb={2}
      >
        {instructionData.summary}
      </Typography>

      {instructionData.sections.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '10px 12px',
            border: '1px solid #e0e0e0',
            mb: 2,
            
          }}
        >
          <Box
            sx={{
              minWidth: '24px',
              height: '24px',
              backgroundColor: '#c0b84b',
              color: '#fff',
              borderRadius: '50%',
              fontSize: '13px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '3px',
            }}
          >
            {index + 1}
          </Box>

          <Typography
            color="#616060"
            fontSize={13}
            fontWeight={400}
            lineHeight={1.6}
           
          >
            {item.content}
          </Typography>
        </Box>
      ))}
    </DialogContent>
  </Dialog>
)}

<Collapse in={open || !isMobile}>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '12px' : '20px',
      marginTop: isMobile ? '10px' : '20px',
      backgroundColor: isMobile ? '#fdf8f3' : 'transparent',
      borderRadius: isMobile ? '12px' : 'none',
      padding: isMobile ? '1em' : '0',
      boxShadow: isMobile ? '0px 2px 8px rgba(0, 0, 0, 0.05)' : 'none',
    }}
  >
    {instructionData.sections.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '10px 12px',
          border: '1px solid #e0e0e0',
          
        }}
      >
        <Box
          sx={{
            minWidth: '24px',
            height: '24px',
            backgroundColor: '#c0b84b',
            color: '#fff',
            borderRadius: '50%',
            fontSize: '13px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginTop: '3px'
          }}
        >
          {index + 1}
        </Box>

        <Typography
          color="#616060"
          fontSize={13}
          fontWeight={400}
          lineHeight={1.6}
            
        >
          {item.content}
        </Typography>
      </Box>
    ))}
  </Box>
</Collapse>

    </Grid2>
    
  );
};
