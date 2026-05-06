export interface ICreatePost {
  title: string;
  content: string;
  authorId: number;
  categorieId: number;
}

export interface IUpdatePost extends ICreatePost {}