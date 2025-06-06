'use client';
import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Collapse,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './NavratriInstructions.module.css';


interface RegistrationCardProps {
    regType: string;
}

const instructionData = {
    titile: "Kroothi Nama Samvatsara Sharadha Navaratri Mahotsavam 2025",
    summary: "Kanya who hasn’t started her menstrual cycle should enroll and adhere to the following guidelines",
    sections: [
        {
            content: `Only one parent of guardian is permitted to accompany Kanya
             to the designated location (Sri Kamakshi Kalyana Mandapam, North Mada Street, 
             Big Kanchipuram Tamil Nadu 631 502) by 7.00 am`
        }, {
            content: `Following breakfast, the participant should proceed with the rituals 
            of Vastra Dharanam and Sowmangalya Bhushanams. By 09.30am, a procession will commence 
            towards Ambal Devasthanam (Vasantha Mandapam) The pooja will then take place, lasting for
             a duration of 90 minutes. After the pooja lunch will be served at the Kalyana Mandapam`
        }, {
            content: `Only one parent of guardian is permitted to accompany Kanya
             to the designated location (Sri Kamakshi Kalyana Mandapam, North Mada Street, 
             Big Kanchipuram Tamil Nadu 631 502) by 7.00 am`
        }, {
            content: `Following breakfast, the participant should proceed with the rituals 
            of Vastra Dharanam and Sowmangalya Bhushanams. By 09.30am, a procession will commence 
            towards Ambal Devasthanam (Vasantha Mandapam) The pooja will then take place, lasting for
             a duration of 90 minutes. After the pooja lunch will be served at the Kalyana Mandapam`
        }, {
            content: `Only one parent of guardian is permitted to accompany Kanya
             to the designated location (Sri Kamakshi Kalyana Mandapam, North Mada Street, 
             Big Kanchipuram Tamil Nadu 631 502) by 7.00 am`
        }, {
            content: `Following breakfast, the participant should proceed with the rituals 
            of Vastra Dharanam and Sowmangalya Bhushanams. By 09.30am, a procession will commence 
            towards Ambal Devasthanam (Vasantha Mandapam) The pooja will then take place, lasting for
             a duration of 90 minutes. After the pooja lunch will be served at the Kalyana Mandapam`
        }
    ]
}

export const NavratriInstructions: React.FC<RegistrationCardProps> = ({}) => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [open, setOpen] = React.useState(false);

  const toggleInstructions = () => setOpen(!open);

  return (
    <Grid2
      container
      direction="column"
      spacing={1}
      sx={{
        backgroundColor: '#FFFFFF',
        marginLeft: isMobile ? '0' : '10%',
        padding: isMobile ? '1em' : '1.5em 3em',
      }}
    >
      <Grid2 xs={12}>
        <Typography color="#75762A" fontSize={18} fontWeight={700}>
          {instructionData.titile}
        </Typography>
      </Grid2>

      <Grid2 xs={12}>
        <Typography color="#616060" fontSize={16} fontWeight={900}>
          {instructionData.summary}
        </Typography>
      </Grid2>

      {/* Mobile Only: Toggle Button */}
      {isMobile && (
        <Box display="flex" alignItems="center" gap={1} onClick={toggleInstructions} sx={{ cursor: 'pointer' }}>
          <IconButton color="primary">
            <MenuBookIcon />
          </IconButton>
          <Typography fontWeight={600}>Show Instructions</Typography>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
      )}

      {/* Instructions: Always visible on desktop, collapsible on mobile */}
      <Collapse in={open || !isMobile}>
        {instructionData.sections.map((item, index) => (
          <Grid2
            key={index}
            className={styles.gridItem}
            xs={12}
            data-index={(index + 1).toString().padStart(2, '0')}
          >
            <Typography color="#616060" fontSize={13} fontWeight={400}>
              {item.content}
            </Typography>
          </Grid2>
        ))}
      </Collapse>
    </Grid2>
  );
};