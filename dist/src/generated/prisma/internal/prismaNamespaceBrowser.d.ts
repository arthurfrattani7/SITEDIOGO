import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly authorprofile: "authorprofile";
    readonly categories: "categories";
    readonly comments: "comments";
    readonly posts: "posts";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AuthorprofileScalarFieldEnum: {
    readonly id: "id";
    readonly biography: "biography";
    readonly userId: "userId";
    readonly socialProfile: "socialProfile";
};
export type AuthorprofileScalarFieldEnum = (typeof AuthorprofileScalarFieldEnum)[keyof typeof AuthorprofileScalarFieldEnum];
export declare const CategoriesScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const CommentsScalarFieldEnum: {
    readonly id: "id";
    readonly text: "text";
    readonly commentDate: "commentDate";
    readonly postId: "postId";
    readonly userId: "userId";
};
export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum];
export declare const PostsScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly content: "content";
    readonly publication_date: "publication_date";
    readonly authorId: "authorId";
    readonly categorieId: "categorieId";
};
export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly type: "type";
    readonly data_criacao: "data_criacao";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const authorprofileOrderByRelevanceFieldEnum: {
    readonly biography: "biography";
    readonly socialProfile: "socialProfile";
};
export type authorprofileOrderByRelevanceFieldEnum = (typeof authorprofileOrderByRelevanceFieldEnum)[keyof typeof authorprofileOrderByRelevanceFieldEnum];
export declare const categoriesOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
};
export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum];
export declare const commentsOrderByRelevanceFieldEnum: {
    readonly text: "text";
};
export type commentsOrderByRelevanceFieldEnum = (typeof commentsOrderByRelevanceFieldEnum)[keyof typeof commentsOrderByRelevanceFieldEnum];
export declare const postsOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly content: "content";
};
export type postsOrderByRelevanceFieldEnum = (typeof postsOrderByRelevanceFieldEnum)[keyof typeof postsOrderByRelevanceFieldEnum];
export declare const usersOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
};
export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum];
