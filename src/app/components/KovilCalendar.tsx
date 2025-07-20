import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import { format, startOfMonth, endOfMonth, addDays, isSameDay, getDay, subMonths, addMonths } from 'date-fns';
import { enUS } from 'date-fns/locale';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Dummy Tamil date conversion (replace with actual logic or library)
const getTamilDate = (date: Date) => {
  const tamilNumerals = ['௦','௧','௨','௩','௪','௫','௬','௭','௮','௯'];
  const enDate = format(date, 'dd', { locale: enUS });
  return enDate.replace(/\d/g, d => tamilNumerals[parseInt(d)]);
};

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function KovilCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [monthDate, setMonthDate] = useState(startOfMonth(new Date()));

  // Get all days in the selected month
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  const days: Date[] = [];
  for (let d = monthStart; d <= monthEnd; d = addDays(d, 1)) {
    days.push(d);
  }

  // Prepare a matrix for the calendar (weeks x days)
  const calendarMatrix: (Date | null)[][] = [];
  let week: (Date | null)[] = Array(7).fill(null);
  let dayIdx = getDay(monthStart);

  // Fill first week
  for (let i = 0; i < dayIdx; i++) week[i] = null;
  for (let d = monthStart; d <= monthEnd; d = addDays(d, 1)) {
    week[dayIdx] = d;
    dayIdx++;
    if (dayIdx === 7) {
      calendarMatrix.push(week);
      week = Array(7).fill(null);
      dayIdx = 0;
    }
  }
  if (week.some((v) => v)) calendarMatrix.push(week);

  return (
    <Box sx={{ p: 2 }}>
      {/* Month Selector */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <IconButton
          aria-label="Previous Month"
          onClick={() => setMonthDate(subMonths(monthDate, 1))}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h5" align="center" sx={{ mx: 2 }}>
          {format(monthDate, 'MMMM yyyy', { locale: enUS })} {/* Display current month and year */}
        </Typography>
        <IconButton
          aria-label="Next Month"
          onClick={() => setMonthDate(addMonths(monthDate, 1))}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      {/* Weekday headers */}
      <Grid container spacing={1} justifyContent="center" sx={{ mb: 1 }}>
        {weekDays.map((weekDay) => (
          <Grid item xs={12/7} key={weekDay}>
            <Typography variant="subtitle1" align="center" color="primary" sx={{ fontWeight: 'bold' }}>
              {weekDay}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {/* Calendar weeks */}
      {calendarMatrix.map((week, wIdx) => (
        <Grid container spacing={1} justifyContent="center" key={wIdx}>
          {week.map((day, dIdx) => (
            <Grid item xs={12/7} key={dIdx}>
              {day ? (
                <Paper
                  elevation={isSameDay(day, selectedDate) ? 6 : 1}
                  sx={{
                    p: 1,
                    bgcolor: isSameDay(day, selectedDate) ? '#ffe0b2' : '#fff',
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: isSameDay(day, selectedDate) ? '2px solid #ff9800' : '1px solid #eee',
                  }}
                  onClick={() => setSelectedDate(day)}
                >
                  <Typography variant="subtitle2" color="primary">
                    {format(day, 'dd', { locale: enUS })}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    தமிழ்: {getTamilDate(day)}
                  </Typography>
                </Paper>
              ) : (
                <Box sx={{ p: 1 }} />
              )}
            </Grid>
          ))}
        </Grid>
      ))}
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="primary">
          Selected Date: {format(selectedDate, 'MMMM dd, yyyy', { locale: enUS })}
        </Typography>
        <Typography variant="body1" color="secondary">
          தமிழ்: {getTamilDate(selectedDate)}
        </Typography>
      </Box>
    </Box>
  );
}