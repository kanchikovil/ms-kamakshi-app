"use client";

import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  Chip,
  FormHelperText,
} from "@mui/material";

export interface EventDay {
  dayId: number;
  eventDate: string; // format: YYYY-MM-DD
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
      <RadioGroup
        sx={{ width: "100%", flexDirection: "row", flexWrap: "wrap", gap: 1 }}
        value={selectedDayId?.toString() || ""}
        onChange={(e) => {
          const val = e.target.value;
          if (val !== "") onChange(Number(val));
        }}
      >
        {eventDays.map((day) => {
          const isDisabled = day.availableSeats <= 0;

          return (
            <FormControlLabel
              key={day.dayId}
              value={day.dayId.toString()}
              control={<Radio />}
              disabled={isDisabled}
              sx={{
                border: "1px solid grey",
                padding: ".5em .5em .5em 0",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                margin: 0,
                opacity: isDisabled ? 0.5 : 1,
                pointerEvents: isDisabled ? "none" : "auto",
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
      </RadioGroup>

      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default EventDaySelector;
