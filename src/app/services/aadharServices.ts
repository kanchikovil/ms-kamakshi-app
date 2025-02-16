import axios from 'axios';

export const validateAadharDetails = async () => {
    const response = await axios.get(`http://localhost:5000/api/checkAadharDetails` );
    return response.data;
  };