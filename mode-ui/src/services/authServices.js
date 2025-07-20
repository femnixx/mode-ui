import axios from "axios";
const API_Url = "http://localhost:5000/api/users";

// function to handle login
const Login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {email, password});
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Login failed due to unknown error. Please try again';
    }
};

// function to handle sign up
const Signup = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, {
            firstName, 
            lastName, 
            username: email, 
            email, 
            password,    
        });
        return response.data;
    } catch (error) {
       throw error.response?.data?.message || "Signup failed due to unexpected error. Please try again";
    }
};

const authService = {
    Login,
    Signup,
};

export default authService;
