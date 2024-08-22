export interface Category {
  _id: string;
  name: string;
  color: string;
  url: string;
}

export type NewCategory = Omit<Category, "_id">;
