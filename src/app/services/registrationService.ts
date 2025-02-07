import axios from 'axios';

const API_URL = 'http://localhost:5000/api/registrations'; // Update if needed

// Create a new registration
export const createRegistration = async (user_name: string, user_phone: string, horoscope_name?: string, age?: string, aadharNumber?: string,
  school_name?: string, standard?: string, slogam_known?: string, music_known?: string, mothers_name?: string, grand_father?: string,
  mothers_vedam?: string, dressSize?: number, kolusuSize?: number, bangleSize?: number,
  mother_tongue?: string, native?: string, fathers_name?: string, fathers_gothram?: string,
  fathers_vedam?: string, fathers_profession?: string,referred_by?:string,
  mothers_profession?: string, kula_devatha?: string, place?: string, residential_address?: string,
) => {
  const response = await axios.post(API_URL, {
    user_name, user_phone, horoscope_name, age, aadharNumber,school_name, std:standard, slogam_known, 
    classical_music:music_known, mothers_name, maternal_gothram:grand_father,mothers_vedam, dressSize, 
    legchain_size:kolusuSize, bangke_size:bangleSize,mother_tongue, native, fathers_name, fathers_gothram,
    fathers_vedam, fathers_profession,referred_by,mothers_profession, kula_devatha, place, residential_address
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
