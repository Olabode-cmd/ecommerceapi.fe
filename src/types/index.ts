export type User = {
  id: string;
  email: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  description?: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
  categoryId: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = AuthRequest & {
  username: string;
};

export type CategoryRequest = {
  name: string;
  description?: string;
};