import axios from 'axios';
import Settings from '../types/Settings';
import { Dayjs } from 'dayjs';

const API_URL = 'http://localhost:5000/api/settings'; // Update if needed

export const createSettings = async (param: Settings) => {
  try {
    const response = await axios.post(API_URL, param);
    return response.data;
  } catch (error) {
    console.error("Error creating settings:", error);
    throw error;
  }
};

// Get all settings
export const getAllSettingss = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Edit a settings
export const editSettings = async (id: number, eventStartDate: Dayjs, eventEndDate: Dayjs) => {
  const response = await axios.put(`${API_URL}/${id}`, { eventStartDate, eventEndDate });
  return response.data;
};

// handle approval
export const approveSettings = async (id: number, approvalStatus: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { approvalStatus });
  return response.data;
};

// Delete a settings
export const deleteSettings = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
