import axios, { AxiosInstance } from 'axios';
import { injectable } from "tsyringe";
import { STORAGE_KEYS } from "../constants";

@injectable()
export class HttpService {
  instance: AxiosInstance | undefined;

  constructor() {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async get(url: string) {
    return this.instance!.get(url);
  }

  async post(url: string, data: object) {
    return this.instance!.post(url, data);
  }

  async delete(url: string) {
    return this.instance!.delete(url);
  }
}