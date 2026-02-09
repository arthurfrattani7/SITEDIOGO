import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type postsModel = runtime.Types.Result.DefaultSelection<Prisma.$postsPayload>;
export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null;
    _avg: PostsAvgAggregateOutputType | null;
    _sum: PostsSumAggregateOutputType | null;
    _min: PostsMinAggregateOutputType | null;
    _max: PostsMaxAggregateOutputType | null;
};
export type PostsAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    categorieId: number | null;
};
export type PostsSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    categorieId: number | null;
};
export type PostsMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    publication_date: Date | null;
    authorId: number | null;
    categorieId: number | null;
};
export type PostsMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    publication_date: Date | null;
    authorId: number | null;
    categorieId: number | null;
};
export type PostsCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    publication_date: number;
    authorId: number;
    categorieId: number;
    _all: number;
};
export type PostsAvgAggregateInputType = {
    id?: true;
    authorId?: true;
    categorieId?: true;
};
export type PostsSumAggregateInputType = {
    id?: true;
    authorId?: true;
    categorieId?: true;
};
export type PostsMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    publication_date?: true;
    authorId?: true;
    categorieId?: true;
};
export type PostsMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    publication_date?: true;
    authorId?: true;
    categorieId?: true;
};
export type PostsCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    publication_date?: true;
    authorId?: true;
    categorieId?: true;
    _all?: true;
};
export type PostsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput | Prisma.postsOrderByWithRelationInput[];
    cursor?: Prisma.postsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PostsCountAggregateInputType;
    _avg?: PostsAvgAggregateInputType;
    _sum?: PostsSumAggregateInputType;
    _min?: PostsMinAggregateInputType;
    _max?: PostsMaxAggregateInputType;
};
export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
    [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePosts[P]> : Prisma.GetScalarType<T[P], AggregatePosts[P]>;
};
export type postsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithAggregationInput | Prisma.postsOrderByWithAggregationInput[];
    by: Prisma.PostsScalarFieldEnum[] | Prisma.PostsScalarFieldEnum;
    having?: Prisma.postsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostsCountAggregateInputType | true;
    _avg?: PostsAvgAggregateInputType;
    _sum?: PostsSumAggregateInputType;
    _min?: PostsMinAggregateInputType;
    _max?: PostsMaxAggregateInputType;
};
export type PostsGroupByOutputType = {
    id: number;
    title: string;
    content: string;
    publication_date: Date | null;
    authorId: number;
    categorieId: number;
    _count: PostsCountAggregateOutputType | null;
    _avg: PostsAvgAggregateOutputType | null;
    _sum: PostsSumAggregateOutputType | null;
    _min: PostsMinAggregateOutputType | null;
    _max: PostsMaxAggregateOutputType | null;
};
type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PostsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PostsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PostsGroupByOutputType[P]>;
}>>;
export type postsWhereInput = {
    AND?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    OR?: Prisma.postsWhereInput[];
    NOT?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    id?: Prisma.IntFilter<"posts"> | number;
    title?: Prisma.StringFilter<"posts"> | string;
    content?: Prisma.StringFilter<"posts"> | string;
    publication_date?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    authorId?: Prisma.IntFilter<"posts"> | number;
    categorieId?: Prisma.IntFilter<"posts"> | number;
    comments?: Prisma.CommentsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    categories?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.categoriesWhereInput>;
};
export type postsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    publication_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    comments?: Prisma.commentsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
    categories?: Prisma.categoriesOrderByWithRelationInput;
    _relevance?: Prisma.postsOrderByRelevanceInput;
};
export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    OR?: Prisma.postsWhereInput[];
    NOT?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    title?: Prisma.StringFilter<"posts"> | string;
    content?: Prisma.StringFilter<"posts"> | string;
    publication_date?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    authorId?: Prisma.IntFilter<"posts"> | number;
    categorieId?: Prisma.IntFilter<"posts"> | number;
    comments?: Prisma.CommentsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    categories?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.categoriesWhereInput>;
}, "id">;
export type postsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    publication_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    _count?: Prisma.postsCountOrderByAggregateInput;
    _avg?: Prisma.postsAvgOrderByAggregateInput;
    _max?: Prisma.postsMaxOrderByAggregateInput;
    _min?: Prisma.postsMinOrderByAggregateInput;
    _sum?: Prisma.postsSumOrderByAggregateInput;
};
export type postsScalarWhereWithAggregatesInput = {
    AND?: Prisma.postsScalarWhereWithAggregatesInput | Prisma.postsScalarWhereWithAggregatesInput[];
    OR?: Prisma.postsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.postsScalarWhereWithAggregatesInput | Prisma.postsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"posts"> | number;
    title?: Prisma.StringWithAggregatesFilter<"posts"> | string;
    content?: Prisma.StringWithAggregatesFilter<"posts"> | string;
    publication_date?: Prisma.DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null;
    authorId?: Prisma.IntWithAggregatesFilter<"posts"> | number;
    categorieId?: Prisma.IntWithAggregatesFilter<"posts"> | number;
};
export type postsCreateInput = {
    title: string;
    content: string;
    publication_date?: Date | string | null;
    comments?: Prisma.commentsCreateNestedManyWithoutPostsInput;
    users: Prisma.usersCreateNestedOneWithoutPostsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutPostsInput;
};
export type postsUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    publication_date?: Date | string | null;
    authorId: number;
    categorieId: number;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutPostsInput;
};
export type postsUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comments?: Prisma.commentsUpdateManyWithoutPostsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPostsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutPostsNestedInput;
};
export type postsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.IntFieldUpdateOperationsInput | number;
    categorieId?: Prisma.IntFieldUpdateOperationsInput | number;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutPostsNestedInput;
};
export type postsCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    publication_date?: Date | string | null;
    authorId: number;
    categorieId: number;
};
export type postsUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type postsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.IntFieldUpdateOperationsInput | number;
    categorieId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PostsListRelationFilter = {
    every?: Prisma.postsWhereInput;
    some?: Prisma.postsWhereInput;
    none?: Prisma.postsWhereInput;
};
export type postsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PostsScalarRelationFilter = {
    is?: Prisma.postsWhereInput;
    isNot?: Prisma.postsWhereInput;
};
export type postsOrderByRelevanceInput = {
    fields: Prisma.postsOrderByRelevanceFieldEnum | Prisma.postsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type postsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    publication_date?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type postsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type postsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    publication_date?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type postsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    publication_date?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type postsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
};
export type postsCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCategoriesInput, Prisma.postsUncheckedCreateWithoutCategoriesInput> | Prisma.postsCreateWithoutCategoriesInput[] | Prisma.postsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCategoriesInput | Prisma.postsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.postsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
};
export type postsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCategoriesInput, Prisma.postsUncheckedCreateWithoutCategoriesInput> | Prisma.postsCreateWithoutCategoriesInput[] | Prisma.postsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCategoriesInput | Prisma.postsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.postsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
};
export type postsUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCategoriesInput, Prisma.postsUncheckedCreateWithoutCategoriesInput> | Prisma.postsCreateWithoutCategoriesInput[] | Prisma.postsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCategoriesInput | Prisma.postsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.postsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.postsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.postsCreateManyCategoriesInputEnvelope;
    set?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    disconnect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    delete?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    update?: Prisma.postsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.postsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.postsUpdateManyWithWhereWithoutCategoriesInput | Prisma.postsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
};
export type postsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCategoriesInput, Prisma.postsUncheckedCreateWithoutCategoriesInput> | Prisma.postsCreateWithoutCategoriesInput[] | Prisma.postsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCategoriesInput | Prisma.postsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.postsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.postsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.postsCreateManyCategoriesInputEnvelope;
    set?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    disconnect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    delete?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    update?: Prisma.postsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.postsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.postsUpdateManyWithWhereWithoutCategoriesInput | Prisma.postsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
};
export type postsCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.postsWhereUniqueInput;
};
export type postsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.postsUpsertWithoutCommentsInput;
    connect?: Prisma.postsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.postsUpdateToOneWithWhereWithoutCommentsInput, Prisma.postsUpdateWithoutCommentsInput>, Prisma.postsUncheckedUpdateWithoutCommentsInput>;
};
export type postsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
};
export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
};
export type postsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.postsUpsertWithWhereUniqueWithoutUsersInput | Prisma.postsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    set?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    disconnect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    delete?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    update?: Prisma.postsUpdateWithWhereUniqueWithoutUsersInput | Prisma.postsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.postsUpdateManyWithWhereWithoutUsersInput | Prisma.postsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
};
export type postsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.postsUpsertWithWhereUniqueWithoutUsersInput | Prisma.postsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    set?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    disconnect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    delete?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    update?: Prisma.postsUpdateWithWhereUniqueWithoutUsersInput | Prisma.postsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.postsUpdateManyWithWhereWithoutUsersInput | Prisma.postsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
};
export type postsCreateWithoutCategoriesInput = {
    title: string;
    content: string;
    publication_date?: Date | string | null;
    comments?: Prisma.commentsCreateNestedManyWithoutPostsInput;
    users: Prisma.usersCreateNestedOneWithoutPostsInput;
};
export type postsUncheckedCreateWithoutCategoriesInput = {
    id?: number;
    title: string;
    content: string;
    publication_date?: Date | string | null;
    authorId: number;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutPostsInput;
};
export type postsCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateWithoutCategoriesInput, Prisma.postsUncheckedCreateWithoutCategoriesInput>;
};
export type postsCreateManyCategoriesInputEnvelope = {
    data: Prisma.postsCreateManyCategoriesInput | Prisma.postsCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
};
export type postsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.postsWhereUniqueInput;
    update: Prisma.XOR<Prisma.postsUpdateWithoutCategoriesInput, Prisma.postsUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.postsCreateWithoutCategoriesInput, Prisma.postsUncheckedCreateWithoutCategoriesInput>;
};
export type postsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.postsWhereUniqueInput;
    data: Prisma.XOR<Prisma.postsUpdateWithoutCategoriesInput, Prisma.postsUncheckedUpdateWithoutCategoriesInput>;
};
export type postsUpdateManyWithWhereWithoutCategoriesInput = {
    where: Prisma.postsScalarWhereInput;
    data: Prisma.XOR<Prisma.postsUpdateManyMutationInput, Prisma.postsUncheckedUpdateManyWithoutCategoriesInput>;
};
export type postsScalarWhereInput = {
    AND?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
    OR?: Prisma.postsScalarWhereInput[];
    NOT?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
    id?: Prisma.IntFilter<"posts"> | number;
    title?: Prisma.StringFilter<"posts"> | string;
    content?: Prisma.StringFilter<"posts"> | string;
    publication_date?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    authorId?: Prisma.IntFilter<"posts"> | number;
    categorieId?: Prisma.IntFilter<"posts"> | number;
};
export type postsCreateWithoutCommentsInput = {
    title: string;
    content: string;
    publication_date?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutPostsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutPostsInput;
};
export type postsUncheckedCreateWithoutCommentsInput = {
    id?: number;
    title: string;
    content: string;
    publication_date?: Date | string | null;
    authorId: number;
    categorieId: number;
};
export type postsCreateOrConnectWithoutCommentsInput = {
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
};
export type postsUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.postsUpdateWithoutCommentsInput, Prisma.postsUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.postsWhereInput;
};
export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.postsWhereInput;
    data: Prisma.XOR<Prisma.postsUpdateWithoutCommentsInput, Prisma.postsUncheckedUpdateWithoutCommentsInput>;
};
export type postsUpdateWithoutCommentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutPostsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutPostsNestedInput;
};
export type postsUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.IntFieldUpdateOperationsInput | number;
    categorieId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type postsCreateWithoutUsersInput = {
    title: string;
    content: string;
    publication_date?: Date | string | null;
    comments?: Prisma.commentsCreateNestedManyWithoutPostsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutPostsInput;
};
export type postsUncheckedCreateWithoutUsersInput = {
    id?: number;
    title: string;
    content: string;
    publication_date?: Date | string | null;
    categorieId: number;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutPostsInput;
};
export type postsCreateOrConnectWithoutUsersInput = {
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput>;
};
export type postsCreateManyUsersInputEnvelope = {
    data: Prisma.postsCreateManyUsersInput | Prisma.postsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.postsWhereUniqueInput;
    update: Prisma.XOR<Prisma.postsUpdateWithoutUsersInput, Prisma.postsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput>;
};
export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.postsWhereUniqueInput;
    data: Prisma.XOR<Prisma.postsUpdateWithoutUsersInput, Prisma.postsUncheckedUpdateWithoutUsersInput>;
};
export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.postsScalarWhereInput;
    data: Prisma.XOR<Prisma.postsUpdateManyMutationInput, Prisma.postsUncheckedUpdateManyWithoutUsersInput>;
};
export type postsCreateManyCategoriesInput = {
    id?: number;
    title: string;
    content: string;
    publication_date?: Date | string | null;
    authorId: number;
};
export type postsUpdateWithoutCategoriesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comments?: Prisma.commentsUpdateManyWithoutPostsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPostsNestedInput;
};
export type postsUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.IntFieldUpdateOperationsInput | number;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutPostsNestedInput;
};
export type postsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type postsCreateManyUsersInput = {
    id?: number;
    title: string;
    content: string;
    publication_date?: Date | string | null;
    categorieId: number;
};
export type postsUpdateWithoutUsersInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comments?: Prisma.commentsUpdateManyWithoutPostsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutPostsNestedInput;
};
export type postsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categorieId?: Prisma.IntFieldUpdateOperationsInput | number;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutPostsNestedInput;
};
export type postsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    publication_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categorieId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PostsCountOutputType = {
    comments: number;
};
export type PostsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs;
};
export type PostsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostsCountOutputTypeSelect<ExtArgs> | null;
};
export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
};
export type postsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    publication_date?: boolean;
    authorId?: boolean;
    categorieId?: boolean;
    comments?: boolean | Prisma.posts$commentsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PostsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["posts"]>;
export type postsSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    publication_date?: boolean;
    authorId?: boolean;
    categorieId?: boolean;
};
export type postsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "content" | "publication_date" | "authorId" | "categorieId", ExtArgs["result"]["posts"]>;
export type postsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | Prisma.posts$commentsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PostsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $postsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "posts";
    objects: {
        comments: Prisma.$commentsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
        categories: Prisma.$categoriesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        content: string;
        publication_date: Date | null;
        authorId: number;
        categorieId: number;
    }, ExtArgs["result"]["posts"]>;
    composites: {};
};
export type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$postsPayload, S>;
export type postsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostsCountAggregateInputType | true;
};
export interface postsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['posts'];
        meta: {
            name: 'posts';
        };
    };
    findUnique<T extends postsFindUniqueArgs>(args: Prisma.SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends postsFindFirstArgs>(args?: Prisma.SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends postsFindManyArgs>(args?: Prisma.SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends postsCreateArgs>(args: Prisma.SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends postsCreateManyArgs>(args?: Prisma.SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends postsDeleteArgs>(args: Prisma.SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends postsUpdateArgs>(args: Prisma.SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends postsDeleteManyArgs>(args?: Prisma.SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends postsUpdateManyArgs>(args: Prisma.SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends postsUpsertArgs>(args: Prisma.SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends postsCountArgs>(args?: Prisma.Subset<T, postsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PostsCountAggregateOutputType> : number>;
    aggregate<T extends PostsAggregateArgs>(args: Prisma.Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>;
    groupBy<T extends postsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: postsGroupByArgs['orderBy'];
    } : {
        orderBy?: postsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: postsFieldRefs;
}
export interface Prisma__postsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comments<T extends Prisma.posts$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    categories<T extends Prisma.categoriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoriesDefaultArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface postsFieldRefs {
    readonly id: Prisma.FieldRef<"posts", 'Int'>;
    readonly title: Prisma.FieldRef<"posts", 'String'>;
    readonly content: Prisma.FieldRef<"posts", 'String'>;
    readonly publication_date: Prisma.FieldRef<"posts", 'DateTime'>;
    readonly authorId: Prisma.FieldRef<"posts", 'Int'>;
    readonly categorieId: Prisma.FieldRef<"posts", 'Int'>;
}
export type postsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
};
export type postsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
};
export type postsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type postsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type postsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type postsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.postsCreateInput, Prisma.postsUncheckedCreateInput>;
};
export type postsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.postsCreateManyInput | Prisma.postsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type postsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.postsUpdateInput, Prisma.postsUncheckedUpdateInput>;
    where: Prisma.postsWhereUniqueInput;
};
export type postsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.postsUpdateManyMutationInput, Prisma.postsUncheckedUpdateManyInput>;
    where?: Prisma.postsWhereInput;
    limit?: number;
};
export type postsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateInput, Prisma.postsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.postsUpdateInput, Prisma.postsUncheckedUpdateInput>;
};
export type postsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
};
export type postsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
    limit?: number;
};
export type posts$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type postsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
};
export {};
