export class PostEntity {
  id: number;
  title: string;
  content: string;
  publicationDate: Date;
  authorId: number;
  categorieId: number;
  imageUrl?: string;
}
