//write http post method
import axios from 'axios';
import {QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const post = async (url, data) => {
  try {
    console.log("data",data);
    console.log("url",url);
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const get = async ({url}) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}