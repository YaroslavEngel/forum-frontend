export interface Category {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  authorId: number;
  category: Category;
  author: Author | null;
}