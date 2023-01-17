import { inject, injectable } from "tsyringe";
import { HttpService } from "./http.service";
import { STORAGE_KEYS } from "../constants";

@injectable()
export class AuthService {
  namespace = 'auth';
  constructor(
    @inject(HttpService) private httpService: HttpService,
  ) {}

  async getMe() {
    return this.httpService.get(`/${this.namespace}/me`);
  }

  async login(email: string, password: string) {
    return this.httpService.post(`/${this.namespace}/login`, {
      email,
      password,
    }).then((response) => {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.data.jwt)
      return response;
    })
  }

  async signup(email: string, password: string, name: string) {
    return this.httpService.post(`/${this.namespace}/signup`, {
      email,
      password,
      name,
    })
  }
}