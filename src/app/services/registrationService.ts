import axios from 'axios';
import Registration from '../types/Registration';

const API_URL = 'http://localhost:8080/api/registrations'; // Update if needed

export const createRegistration = async (param: Registration) => {
  try {
    const response = await axios.post(API_URL, param);
    return response.data;
  } catch (error) {
    console.error("Error creating registration:", error);
    throw error;
  }
};

// Get all registrations
export const getAllRegistrations = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getStatusByAadhar = async (aadhar: string) => {
  const response = await axios.get(`http://localhost:8080/api/registrations/aadhar/${aadhar}` );
  return response.data;
};

// Edit a registration
export const editRegistration = async (id: number, userName: string, userPhone: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { userName, userPhone });
  return response.data;
};

// handle approval
export const approveRegistration = async (id: number, approvalStatus: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { approvalStatus });
  return response.data;
};

// Delete a registration
export const deleteRegistration = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
