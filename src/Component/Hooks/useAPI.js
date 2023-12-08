import { useState } from "react";
import api from "../Global Api/GlobalApi";

// Custom hook for making GET requests
export function useAPI(initialData = []) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const get = async (url) => {
    try {
      const response = await api.get(url);
      setData(response?.data?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const post = async (url, requestData) => {
    try {
      const response = await api.post(url, requestData);
      setData(response?.data);
      console.log(response);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const patch = async (url, requestData) => {
    try {
      const response = await api.patch(url, requestData);
      setData(response?.data);
      console.log(response);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const Delete = async (url) => {
    try {
      const response = await api.delete(url);
      setData(response?.data);
      console.log(response);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, isError, get, post, patch, Delete };
}
