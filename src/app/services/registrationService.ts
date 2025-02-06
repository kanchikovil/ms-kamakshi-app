import axios from 'axios';

const API_URL = 'http://localhost:5000/api/registrations'; // Update if needed

// Create a new registration
export const createRegistration = async (user_name: string, user_phone: string, horoscope_name: string, age: string, 
  school_name: string, standard: string, slogan_known: string, 
  music_known: string, mother_tongue: string, native: string, fathers_name: string, fathers_gothram: string,
fathers_vedam: string, fathers_profession: string, mothers_name: string, grand_father: string, mothers_vedam: string,
mothers_profession: string, kula_devatha: string, place: string, residential_address: string, dressSize: number,
kolusuSize: number, bangleSize: number) => {
  const response = await axios.post(API_URL, { user_name, user_phone, horoscope_name, age, school_name, standard,

   });
  return response.data;
};

// Get all registrations
export const getAllRegistrations = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Edit a registration
export const editRegistration = async (id: number, user_name: string, user_phone: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { user_name, user_phone });
  return response.data;
};

// Delete a registration
export const deleteRegistration = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
