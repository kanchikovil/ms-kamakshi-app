"use client";
import * as React from "react";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import styles from "./NavratriInstructions.module.css";

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

export const NavratriInstructions: React.FC<RegistrationCardProps> = ({  }) => {
    return (
        <Grid container direction="column" spacing={1} sx={{
            backgroundColor: '#FFFFFF',
            marginLeft: "10%",
            height: "100%",
            padding: "1.5em 3em"
        }}>
            <Grid className={styles.gridItem} size={{ xs: 12 }}>
                <Typography color="#75762A" fontSize={18} fontWeight={700}>{instructionData.titile}</Typography>
            </Grid>
            <Grid className={styles.gridItem} size={{ xs: 12 }}>
                <Typography color="#616060" fontSize={16} fontWeight={900}>{instructionData.summary}</Typography>
            </Grid>
            {instructionData.sections?.map((item, index) => (
                <Grid key={index} className={styles.gridItem} size={{ xs: 12 }} data-index={(index + 1).toString().padStart(2, "0")}>
                    <Typography color="#616060" fontSize={12} fontWeight={400}>{item?.content}</Typography>
                </Grid>
            ))}
        </Grid>
    );
};
