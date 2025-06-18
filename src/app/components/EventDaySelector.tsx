"use client";

import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  Chip,
  FormHelperText,
} from "@mui/material";

export interface EventDay {
  dayId: number;
  eventDate: string;
  availableSeats: number;
  isLocalDay: boolean;
}

interface Props {
  eventDays: EventDay[];
  selectedDayId: number | null;
  onChange: (dayId: number) => void;
  error?: boolean;
  helperText?: string;
}

const EventDaySelector: React.FC<Props> = ({
  eventDays,
  selectedDayId,
  onChange,
  error = false,
  helperText = "Please select an available date.",
}) => {
  return (
    <FormControl
      component="fieldset"
      style={{ width: "100%", marginBottom: ".5em" }}
      error={error}
      required
    >
      <FormLabel component="legend">Select a Day</FormLabel>

      {/* Horizontal Scroll Wrapper */}
<Box
  sx={{
    display: "flex",
    overflowX: "auto",
    gap: 2,
    paddingY: 1,
    flexWrap: "nowrap",          // Prevent items from wrapping to next line
    '&::-webkit-scrollbar': { display: 'none' }, // hide scrollbar on iOS
  }}
>

        {eventDays.map((day) => {
          const isDisabled = day.availableSeats <= 0;

          return (
            <FormControlLabel
              key={day.dayId}
              value={day.dayId.toString()}
              control={
                <Radio
                  checked={selectedDayId === day.dayId}
                  onChange={() => onChange(day.dayId)}
                />
              }
              disabled={isDisabled}
              sx={{
                minWidth: 180,
                border: "1px solid grey",
                padding: "0.5em",
                borderRadius: "8px",
                backgroundColor: "#fff",
                opacity: isDisabled ? 0.5 : 1,
                pointerEvents: isDisabled ? "none" : "auto",
                flexShrink: 0,
                margin: 0,
              }}
              label={
                <Box display="flex" flexDirection="column" gap={0.5}>
                  <Typography variant="body1">
                    {new Date(day.eventDate).toDateString()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {isDisabled
                      ? "No seats available"
                      : `${day.availableSeats} seat(s) available`}
                  </Typography>
                  {day.isLocalDay && (
                    <Chip size="small" label="Local Day" color="primary" />
                  )}
                </Box>
              }
            />
          );
        })}
      </Box>

      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default EventDaySelector;
