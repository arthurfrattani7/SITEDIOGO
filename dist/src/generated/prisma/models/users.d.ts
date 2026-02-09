import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    id: number | null;
};
export type UsersSumAggregateOutputType = {
    id: number | null;
};
export type UsersMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    type: $Enums.users_type | null;
    data_criacao: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    type: $Enums.users_type | null;
    data_criacao: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    type: number;
    data_criacao: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    id?: true;
};
export type UsersSumAggregateInputType = {
    id?: true;
};
export type UsersMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    type?: true;
    data_criacao?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    type?: true;
    data_criacao?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    type?: true;
    data_criacao?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    type: $Enums.users_type | null;
    data_criacao: Date | null;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    id?: Prisma.IntFilter<"users"> | number;
    name?: Prisma.StringFilter<"users"> | string;
    email?: Prisma.StringFilter<"users"> | string;
    password?: Prisma.StringFilter<"users"> | string;
    type?: Prisma.Enumusers_typeNullableFilter<"users"> | $Enums.users_type | null;
    data_criacao?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    authorprofile?: Prisma.XOR<Prisma.AuthorprofileNullableScalarRelationFilter, Prisma.authorprofileWhereInput> | null;
    comments?: Prisma.CommentsListRelationFilter;
    posts?: Prisma.PostsListRelationFilter;
};
export type usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    data_criacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorprofile?: Prisma.authorprofileOrderByWithRelationInput;
    comments?: Prisma.commentsOrderByRelationAggregateInput;
    posts?: Prisma.postsOrderByRelationAggregateInput;
    _relevance?: Prisma.usersOrderByRelevanceInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    name?: Prisma.StringFilter<"users"> | string;
    password?: Prisma.StringFilter<"users"> | string;
    type?: Prisma.Enumusers_typeNullableFilter<"users"> | $Enums.users_type | null;
    data_criacao?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    authorprofile?: Prisma.XOR<Prisma.AuthorprofileNullableScalarRelationFilter, Prisma.authorprofileWhereInput> | null;
    comments?: Prisma.CommentsListRelationFilter;
    posts?: Prisma.PostsListRelationFilter;
}, "id" | "email">;
export type usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    data_criacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"users"> | number;
    name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    email?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password?: Prisma.StringWithAggregatesFilter<"users"> | string;
    type?: Prisma.Enumusers_typeNullableWithAggregatesFilter<"users"> | $Enums.users_type | null;
    data_criacao?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
};
export type usersCreateInput = {
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    authorprofile?: Prisma.authorprofileCreateNestedOneWithoutUsersInput;
    comments?: Prisma.commentsCreateNestedManyWithoutUsersInput;
    posts?: Prisma.postsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    authorprofile?: Prisma.authorprofileUncheckedCreateNestedOneWithoutUsersInput;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutUsersInput;
    posts?: Prisma.postsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorprofile?: Prisma.authorprofileUpdateOneWithoutUsersNestedInput;
    comments?: Prisma.commentsUpdateManyWithoutUsersNestedInput;
    posts?: Prisma.postsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorprofile?: Prisma.authorprofileUncheckedUpdateOneWithoutUsersNestedInput;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutUsersNestedInput;
    posts?: Prisma.postsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
};
export type usersUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type usersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type usersOrderByRelevanceInput = {
    fields: Prisma.usersOrderByRelevanceFieldEnum | Prisma.usersOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    data_criacao?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    data_criacao?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    data_criacao?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutAuthorprofileInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAuthorprofileInput, Prisma.usersUncheckedCreateWithoutAuthorprofileInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAuthorprofileInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutAuthorprofileNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAuthorprofileInput, Prisma.usersUncheckedCreateWithoutAuthorprofileInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAuthorprofileInput;
    upsert?: Prisma.usersUpsertWithoutAuthorprofileInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutAuthorprofileInput, Prisma.usersUpdateWithoutAuthorprofileInput>, Prisma.usersUncheckedUpdateWithoutAuthorprofileInput>;
};
export type usersCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCommentsInput, Prisma.usersUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCommentsInput, Prisma.usersUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.usersUpsertWithoutCommentsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutCommentsInput, Prisma.usersUpdateWithoutCommentsInput>, Prisma.usersUncheckedUpdateWithoutCommentsInput>;
};
export type usersCreateNestedOneWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutPostsInput, Prisma.usersUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutPostsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutPostsInput, Prisma.usersUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutPostsInput;
    upsert?: Prisma.usersUpsertWithoutPostsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutPostsInput, Prisma.usersUpdateWithoutPostsInput>, Prisma.usersUncheckedUpdateWithoutPostsInput>;
};
export type NullableEnumusers_typeFieldUpdateOperationsInput = {
    set?: $Enums.users_type | null;
};
export type usersCreateWithoutAuthorprofileInput = {
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    comments?: Prisma.commentsCreateNestedManyWithoutUsersInput;
    posts?: Prisma.postsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutAuthorprofileInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutUsersInput;
    posts?: Prisma.postsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutAuthorprofileInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutAuthorprofileInput, Prisma.usersUncheckedCreateWithoutAuthorprofileInput>;
};
export type usersUpsertWithoutAuthorprofileInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutAuthorprofileInput, Prisma.usersUncheckedUpdateWithoutAuthorprofileInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutAuthorprofileInput, Prisma.usersUncheckedCreateWithoutAuthorprofileInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutAuthorprofileInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutAuthorprofileInput, Prisma.usersUncheckedUpdateWithoutAuthorprofileInput>;
};
export type usersUpdateWithoutAuthorprofileInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comments?: Prisma.commentsUpdateManyWithoutUsersNestedInput;
    posts?: Prisma.postsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutAuthorprofileInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutUsersNestedInput;
    posts?: Prisma.postsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutCommentsInput = {
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    authorprofile?: Prisma.authorprofileCreateNestedOneWithoutUsersInput;
    posts?: Prisma.postsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    authorprofile?: Prisma.authorprofileUncheckedCreateNestedOneWithoutUsersInput;
    posts?: Prisma.postsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutCommentsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutCommentsInput, Prisma.usersUncheckedCreateWithoutCommentsInput>;
};
export type usersUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutCommentsInput, Prisma.usersUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutCommentsInput, Prisma.usersUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutCommentsInput, Prisma.usersUncheckedUpdateWithoutCommentsInput>;
};
export type usersUpdateWithoutCommentsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorprofile?: Prisma.authorprofileUpdateOneWithoutUsersNestedInput;
    posts?: Prisma.postsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorprofile?: Prisma.authorprofileUncheckedUpdateOneWithoutUsersNestedInput;
    posts?: Prisma.postsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutPostsInput = {
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    authorprofile?: Prisma.authorprofileCreateNestedOneWithoutUsersInput;
    comments?: Prisma.commentsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutPostsInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    type?: $Enums.users_type | null;
    data_criacao?: Date | string | null;
    authorprofile?: Prisma.authorprofileUncheckedCreateNestedOneWithoutUsersInput;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutPostsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutPostsInput, Prisma.usersUncheckedCreateWithoutPostsInput>;
};
export type usersUpsertWithoutPostsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutPostsInput, Prisma.usersUncheckedUpdateWithoutPostsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutPostsInput, Prisma.usersUncheckedCreateWithoutPostsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutPostsInput, Prisma.usersUncheckedUpdateWithoutPostsInput>;
};
export type usersUpdateWithoutPostsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorprofile?: Prisma.authorprofileUpdateOneWithoutUsersNestedInput;
    comments?: Prisma.commentsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutPostsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableEnumusers_typeFieldUpdateOperationsInput | $Enums.users_type | null;
    data_criacao?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorprofile?: Prisma.authorprofileUncheckedUpdateOneWithoutUsersNestedInput;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type UsersCountOutputType = {
    comments: number;
    posts: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs;
    posts?: boolean | UsersCountOutputTypeCountPostsArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
};
export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    type?: boolean;
    data_criacao?: boolean;
    authorprofile?: boolean | Prisma.users$authorprofileArgs<ExtArgs>;
    comments?: boolean | Prisma.users$commentsArgs<ExtArgs>;
    posts?: boolean | Prisma.users$postsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    type?: boolean;
    data_criacao?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "type" | "data_criacao", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    authorprofile?: boolean | Prisma.users$authorprofileArgs<ExtArgs>;
    comments?: boolean | Prisma.users$commentsArgs<ExtArgs>;
    posts?: boolean | Prisma.users$postsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        authorprofile: Prisma.$authorprofilePayload<ExtArgs> | null;
        comments: Prisma.$commentsPayload<ExtArgs>[];
        posts: Prisma.$postsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        type: $Enums.users_type | null;
        data_criacao: Date | null;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    authorprofile<T extends Prisma.users$authorprofileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$authorprofileArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    comments<T extends Prisma.users$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    posts<T extends Prisma.users$postsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly id: Prisma.FieldRef<"users", 'Int'>;
    readonly name: Prisma.FieldRef<"users", 'String'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly password: Prisma.FieldRef<"users", 'String'>;
    readonly type: Prisma.FieldRef<"users", 'users_type'>;
    readonly data_criacao: Prisma.FieldRef<"users", 'DateTime'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type users$authorprofileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where?: Prisma.authorprofileWhereInput;
};
export type users$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where?: Prisma.commentsWhereInput;
    orderBy?: Prisma.commentsOrderByWithRelationInput | Prisma.commentsOrderByWithRelationInput[];
    cursor?: Prisma.commentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentsScalarFieldEnum | Prisma.CommentsScalarFieldEnum[];
};
export type users$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput | Prisma.postsOrderByWithRelationInput[];
    cursor?: Prisma.postsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostsScalarFieldEnum | Prisma.PostsScalarFieldEnum[];
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
};
export {};
