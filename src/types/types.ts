type Review = {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
};

export type Product = {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  reviews: Review[];
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  shippingInformation: string;
  weight: number;
};

export type Category = {
  name: string;
  slug: string;
};


export type SelectOption = {
  value: string;
  label: string;
};