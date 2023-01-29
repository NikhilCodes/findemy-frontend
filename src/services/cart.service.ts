import { inject, injectable } from "tsyringe";
import { HttpService } from "./http.service";

@injectable()
export class CartService {
  namespace = 'cart';
  constructor(
    @inject(HttpService) private httpService: HttpService,
  ) {}

  async getCart() {
    return this.httpService.get(`/${this.namespace}`).then((response) => response.data);
  }

  async addToCart(productId: string) {
    return this.httpService.post(`/${this.namespace}`, {
      productId,
    });
  }

  async removeFromCart(productId: string) {
    return this.httpService.delete(`/${this.namespace}/${productId}`);
  }
}
