export interface ICreateCommentData {
    text: string;
    postId: number;
    userId: number;
}
export interface IDeleteComment {
    commentId: number;
}
export interface IUpdateCommentData {
    text: string;
}
