export interface Course {
  thumbnail: string;
  title: string;
  description: string;
  creator: {
    email: string,
    name: string,
  };
  price: {
    originalPrice?: number;
    discountPrice?: number;
  },
  isBestSeller: boolean;
  rating: {
    averageRating?: number;
    totalRating: number;
  };
}