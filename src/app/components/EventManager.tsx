"use client";

import { useState, useEffect, FormEvent } from "react";

// import axios from "axios";
import {
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  FormControlLabel,
  Switch,
  Chip,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import APP_CONFIG from "../utils/config";
import { useNotification } from "../context/NotificationContext";
import axios_instance from "../utils/axiosInstance";
import { useMediaQuery } from "@mui/material";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"; 



dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

interface Event {
  eventId?: number;
  eventName: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  registrationStartDate: Dayjs | null;
  registrationEndDate: Dayjs | null;
  eventDays?: EventDay[];
}

interface EventDay {
  dayId?: number;
  eventId?: number;
  eventDate: Dayjs | null;
  maxRegistrations: number;
  isLocalsDay: boolean;
  isKanyaDay: boolean;
  minAge: number;
  maxAge: number;
  availableSeats: number;
}

export default function EventManager() {
  const { showError } = useNotification();
  const defaultEventDetails: Event = {
    eventName: "",
    startDate: null,
    endDate: null,
    registrationStartDate: null,
    registrationEndDate: null,
    eventDays: [],
  };
  const [events, setEvents] = useState<Event[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingEventId, setEditingEventId] = useState<number | null>(null);
  const [form, setForm] = useState<Event>(defaultEventDetails);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const isMobile = useMediaQuery("(max-width:600px)");


  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios_instance.get<Event[]>(APP_CONFIG.apiBaseUrl + "/events");
      setEvents(response.data);
    } catch (error) {
      showError('Failed to get Events' + error);
    }
  };


  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.eventName) tempErrors.eventName = "Event name is required";
    if (!form.startDate) tempErrors.startDate = "Start date is required";
    if (!form.endDate) tempErrors.endDate = "End date is required";
    if (!form.registrationStartDate) tempErrors.registrationStartDate = "Registration start date is required";
    if (!form.registrationEndDate) tempErrors.registrationEndDate = "Registration end date is required";

    if (form.startDate && form.endDate && form.startDate.isAfter(form.endDate)) {
      tempErrors.startDate = "Start date cannot be after end date";
      tempErrors.endDate = "End date cannot be before start date";
    }
    if (form.registrationStartDate && form.registrationEndDate && form.registrationStartDate.isAfter(form.registrationEndDate)) {
      tempErrors.registrationStartDate = "Registration start date cannot be after registration end date";
      tempErrors.registrationEndDate = "Registration end date cannot be before registration start date";
    }
    if (form.registrationStartDate && form.startDate && form.registrationStartDate.isBefore(form.startDate)) {
      tempErrors.registrationStartDate = "Registration start date must be within event dates";
    }
    if (form.registrationEndDate && form.endDate && form.registrationEndDate.isAfter(form.endDate)) {
      tempErrors.registrationEndDate = "Registration end date must be within event dates";
    }

    if (form.eventDays && form.eventDays.some(day => !day.maxRegistrations || !day.eventDate)) {
      tempErrors.eventDays = "Each event day must have a date and Max Registrations";
    }

    setErrors(tempErrors);


    const noErrors = Object.keys(tempErrors).length === 0
    if (!noErrors) {
      showError(Object.values(tempErrors).join(', '));
    }
    return noErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      ...form,
      startDate: form.startDate?.format("DD-MM-YYYY"),
      endDate: form.endDate?.format("DD-MM-YYYY"),
      registrationStartDate: form.registrationStartDate?.format("DD-MM-YYYY"),
      registrationEndDate: form.registrationEndDate?.format("DD-MM-YYYY"),
      eventDays: form.eventDays?.map(day => ({
        ...day,
        eventDate: day.eventDate?.format("DD-MM-YYYY"),
      })),
    };

    try {
      if (editingEventId) {
        await axios_instance.put(`${APP_CONFIG.apiBaseUrl}/events/${editingEventId}`, payload);
      } else {
        await axios_instance.post(`${APP_CONFIG.apiBaseUrl}/events`, payload);
      }

      fetchEvents();
      setShowForm(false);
      setEditingEventId(null);
      setForm(defaultEventDetails);
    } catch (error) {
      showError('Failed to create/update Event' + error);
    }
  };

  const handleCancel = () => {
    setForm(defaultEventDetails);
    setShowForm(false);
  }

  const handleEdit = (event: Event) => {
    setForm({
      ...event,
      startDate: event.startDate ? dayjs(event.startDate) : null,
      endDate: event.endDate ? dayjs(event.endDate) : null,
      registrationStartDate: event.registrationStartDate ? dayjs(event.registrationStartDate) : null,
      registrationEndDate: event.registrationEndDate ? dayjs(event.registrationEndDate) : null,
      eventDays: event.eventDays?.map(day => ({
        ...day,
        eventDate: day.eventDate ? dayjs(day.eventDate) : null,
      })) || [],
    });
    setEditingEventId(event.eventId || null);
    setShowForm(true);
  };

  const addEvent = () => {
    setForm(defaultEventDetails);
    setShowForm(true);
  }

  const addEventDay = () => {
    setForm(prev => ({
      ...prev,
      eventDays: [
        ...(prev.eventDays || []),
        { eventDate: null, maxRegistrations: 0, isLocalsDay: false, availableSeats: 0, isKanyaDay: false, minAge: 0, maxAge: 0 }
      ],
    }));
  };

  const removeEventDay = (index: number) => {
    setForm(prev => ({
      ...prev,
      eventDays: prev.eventDays?.filter((_, i) => i !== index) || [],
    }));
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Event Manager
        </Typography>

        {showForm && (
          <Card sx={{ mt: 2, p: 2 }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction={isMobile ? "column" : "row"} flexWrap="wrap" gap={1.5}>
                  <TextField
                    fullWidth
                    label="Event Name"
                    value={form.eventName}
                    onChange={(e) => setForm({ ...form, eventName: e.target.value })}
                    error={!!errors.eventName}
                    helperText={errors.eventName}
                  />
                  <DatePicker
                    label="Start Date"
                    value={form.startDate}
                    onChange={(date) => setForm({ ...form, startDate: date })}
                    minDate={dayjs()}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="End Date"
                    value={form.endDate}
                    onChange={(date) => setForm({ ...form, endDate: date })}
                    minDate={dayjs()}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="Registration Start Date"
                    value={form.registrationStartDate}
                    onChange={(date) => setForm({ ...form, registrationStartDate: date })}
                    minDate={dayjs()}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="Registration End Date"
                    value={form.registrationEndDate}
                    onChange={(date) => setForm({ ...form, registrationEndDate: date })}
                    minDate={dayjs()}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <Typography variant="h6">Event Days</Typography>
                  {form.eventDays?.map((day, index) => (
                    <Stack key={index} direction={isMobile ? "column" : "row"} spacing={2} alignItems="flex-start" width="100%">

                      <DatePicker
                        label="Date"
                        value={day.eventDate}
                        onChange={(date) => {
                          const newDays = [...form.eventDays!];
                          newDays[index].eventDate = date;
                          setForm({ ...form, eventDays: newDays });
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <TextField
                        label="Max Registrations"
                        type="number"
                        value={day.maxRegistrations || ""}
                        onChange={(e) => {
                          const newDays = [...form.eventDays!];
                          newDays[index].maxRegistrations = Number(e.target.value);
                          setForm({ ...form, eventDays: newDays });
                        }}
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={day.isLocalsDay || false}
                            onChange={(e) => {
                              const newDays = [...form.eventDays!];
                              newDays[index].isLocalsDay = e.target.checked;
                              setForm({ ...form, eventDays: newDays });
                            }}
                          />
                        }
                        label="Is Locals Day?"
                      />
                      <TextField
                        label="Available Seats"
                        type="number"
                        value={day.availableSeats || ""}
                        onChange={(e) => {
                          const newDays = [...form.eventDays!];
                          newDays[index].availableSeats = Number(e.target.value);
                          setForm({ ...form, eventDays: newDays });
                        }}
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={day.isKanyaDay || false}
                            onChange={(e) => {
                              const newDays = [...form.eventDays!];
                              newDays[index].isKanyaDay = e.target.checked;
                              setForm({ ...form, eventDays: newDays });
                            }}
                          />
                        }
                        label="Is Kanya Day?"
                      />
                      <TextField
                        helperText={"Min Age for this day"}
                        label="Min Age"
                        type="number"
                        value={day.minAge || ""}
                        onChange={(e) => {
                          const newDays = [...form.eventDays!];
                          newDays[index].minAge = Number(e.target.value);
                          setForm({ ...form, eventDays: newDays });
                        }}
                      />
                      <TextField
                      helperText={"Max Age for this day"}
                        label="Max Age"
                        type="number"
                        value={day.maxAge || ""}
                        onChange={(e) => {
                          const newDays = [...form.eventDays!];
                          newDays[index].maxAge = Number(e.target.value);
                          setForm({ ...form, eventDays: newDays });
                        }}
                      />
                      <IconButton onClick={() => removeEventDay(index)}><DeleteIcon /></IconButton>
                    </Stack>
                  ))}
                  <Button startIcon={<AddIcon />} onClick={addEventDay}>Add Event Day</Button>

                  <Button type="submit" variant="contained" color="success">
                    {editingEventId ? "Update Event" : "Create Event"}
                  </Button>
                  <Button variant="contained" color="error" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        )}

        {(!showForm && <>
          <Button variant="contained" color="primary" onClick={addEvent}>
            Add Event
          </Button>
          <Typography variant="h5" sx={{ mt: 4 }}>
            Event List
          </Typography>
          <TableContainer component={Paper} sx={{ overflowX: isMobile ? "auto" : "unset" }}>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events.length > 0 ? (
                  events.map((event) => (
                    <TableRow key={event.eventId}>
                      <TableCell>{event.eventName}</TableCell>
                      <TableCell>
                        {event.startDate ? dayjs(event.startDate).format("DD-MM-YYYY") : ""}
                      </TableCell>
                      <TableCell>
                        {event.endDate ? dayjs(event.endDate).format("DD-MM-YYYY") : ""}
                      </TableCell>
                     <TableCell>
                      {dayjs().isSameOrAfter(event.startDate, 'day') &&
                      dayjs().isSameOrBefore(event.endDate, 'day') ? (
                        <Chip label="Active" color="success" />
                      ) : (
                        <Chip label="Inactive" color="error" />
                      )}
                    </TableCell>

                      <TableCell>
                        <Button onClick={() => handleEdit(event)}>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No events available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>)}
      </Container>
    </LocalizationProvider>
  );
}
