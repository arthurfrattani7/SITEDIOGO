"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersOrderByRelevanceFieldEnum = exports.postsOrderByRelevanceFieldEnum = exports.commentsOrderByRelevanceFieldEnum = exports.categoriesOrderByRelevanceFieldEnum = exports.authorprofileOrderByRelevanceFieldEnum = exports.NullsOrder = exports.SortOrder = exports.UsersScalarFieldEnum = exports.PostsScalarFieldEnum = exports.CommentsScalarFieldEnum = exports.CategoriesScalarFieldEnum = exports.AuthorprofileScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    authorprofile: 'authorprofile',
    categories: 'categories',
    comments: 'comments',
    posts: 'posts',
    users: 'users'
};
exports.TransactionIsolationLevel = {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
};
exports.AuthorprofileScalarFieldEnum = {
    id: 'id',
    biography: 'biography',
    userId: 'userId',
    socialProfile: 'socialProfile'
};
exports.CategoriesScalarFieldEnum = {
    id: 'id',
    nome: 'nome'
};
exports.CommentsScalarFieldEnum = {
    id: 'id',
    text: 'text',
    commentDate: 'commentDate',
    postId: 'postId',
    userId: 'userId'
};
exports.PostsScalarFieldEnum = {
    id: 'id',
    title: 'title',
    content: 'content',
    publication_date: 'publication_date',
    authorId: 'authorId',
    categorieId: 'categorieId'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    type: 'type',
    data_criacao: 'data_criacao'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.authorprofileOrderByRelevanceFieldEnum = {
    biography: 'biography',
    socialProfile: 'socialProfile'
};
exports.categoriesOrderByRelevanceFieldEnum = {
    nome: 'nome'
};
exports.commentsOrderByRelevanceFieldEnum = {
    text: 'text'
};
exports.postsOrderByRelevanceFieldEnum = {
    title: 'title',
    content: 'content'
};
exports.usersOrderByRelevanceFieldEnum = {
    name: 'name',
    email: 'email',
    password: 'password'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map