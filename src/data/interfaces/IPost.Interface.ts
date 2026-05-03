export interface ICreatePost {
  title: string;
  content: string;
  authorId: number;
  categorieId: number;
  imageUrl?: string;
}

export interface IUpdatePost extends ICreatePost {}