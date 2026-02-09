import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly authorprofile: "authorprofile";
    readonly categories: "categories";
    readonly comments: "comments";
    readonly posts: "posts";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "authorprofile" | "categories" | "comments" | "posts" | "users";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        authorprofile: {
            payload: Prisma.$authorprofilePayload<ExtArgs>;
            fields: Prisma.authorprofileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.authorprofileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.authorprofileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload>;
                };
                findFirst: {
                    args: Prisma.authorprofileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.authorprofileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload>;
                };
                findMany: {
                    args: Prisma.authorprofileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload>[];
                };
                create: {
                    args: Prisma.authorprofileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload>;
                };
                createMany: {
                    args: Prisma.authorprofileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.authorprofileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload>;
                };
                update: {
                    args: Prisma.authorprofileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload>;
                };
                deleteMany: {
                    args: Prisma.authorprofileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.authorprofileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.authorprofileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$authorprofilePayload>;
                };
                aggregate: {
                    args: Prisma.AuthorprofileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuthorprofile>;
                };
                groupBy: {
                    args: Prisma.authorprofileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthorprofileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.authorprofileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthorprofileCountAggregateOutputType> | number;
                };
            };
        };
        categories: {
            payload: Prisma.$categoriesPayload<ExtArgs>;
            fields: Prisma.categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findMany: {
                    args: Prisma.categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                create: {
                    args: Prisma.categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                createMany: {
                    args: Prisma.categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                update: {
                    args: Prisma.categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategories>;
                };
                groupBy: {
                    args: Prisma.categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesCountAggregateOutputType> | number;
                };
            };
        };
        comments: {
            payload: Prisma.$commentsPayload<ExtArgs>;
            fields: Prisma.commentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.commentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                findFirst: {
                    args: Prisma.commentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                findMany: {
                    args: Prisma.commentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>[];
                };
                create: {
                    args: Prisma.commentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                createMany: {
                    args: Prisma.commentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.commentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                update: {
                    args: Prisma.commentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                deleteMany: {
                    args: Prisma.commentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.commentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.commentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                aggregate: {
                    args: Prisma.CommentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComments>;
                };
                groupBy: {
                    args: Prisma.commentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.commentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentsCountAggregateOutputType> | number;
                };
            };
        };
        posts: {
            payload: Prisma.$postsPayload<ExtArgs>;
            fields: Prisma.postsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.postsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                findFirst: {
                    args: Prisma.postsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                findMany: {
                    args: Prisma.postsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>[];
                };
                create: {
                    args: Prisma.postsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                createMany: {
                    args: Prisma.postsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.postsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                update: {
                    args: Prisma.postsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                deleteMany: {
                    args: Prisma.postsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.postsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.postsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                aggregate: {
                    args: Prisma.PostsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePosts>;
                };
                groupBy: {
                    args: Prisma.postsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PostsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.postsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PostsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type Enumusers_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_type'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    authorprofile?: Prisma.authorprofileOmit;
    categories?: Prisma.categoriesOmit;
    comments?: Prisma.commentsOmit;
    posts?: Prisma.postsOmit;
    users?: Prisma.usersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
