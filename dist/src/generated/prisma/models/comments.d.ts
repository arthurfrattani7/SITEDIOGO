import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type commentsModel = runtime.Types.Result.DefaultSelection<Prisma.$commentsPayload>;
export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null;
    _avg: CommentsAvgAggregateOutputType | null;
    _sum: CommentsSumAggregateOutputType | null;
    _min: CommentsMinAggregateOutputType | null;
    _max: CommentsMaxAggregateOutputType | null;
};
export type CommentsAvgAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
};
export type CommentsSumAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
};
export type CommentsMinAggregateOutputType = {
    id: number | null;
    text: string | null;
    commentDate: Date | null;
    postId: number | null;
    userId: number | null;
};
export type CommentsMaxAggregateOutputType = {
    id: number | null;
    text: string | null;
    commentDate: Date | null;
    postId: number | null;
    userId: number | null;
};
export type CommentsCountAggregateOutputType = {
    id: number;
    text: number;
    commentDate: number;
    postId: number;
    userId: number;
    _all: number;
};
export type CommentsAvgAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
};
export type CommentsSumAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
};
export type CommentsMinAggregateInputType = {
    id?: true;
    text?: true;
    commentDate?: true;
    postId?: true;
    userId?: true;
};
export type CommentsMaxAggregateInputType = {
    id?: true;
    text?: true;
    commentDate?: true;
    postId?: true;
    userId?: true;
};
export type CommentsCountAggregateInputType = {
    id?: true;
    text?: true;
    commentDate?: true;
    postId?: true;
    userId?: true;
    _all?: true;
};
export type CommentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
    orderBy?: Prisma.commentsOrderByWithRelationInput | Prisma.commentsOrderByWithRelationInput[];
    cursor?: Prisma.commentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommentsCountAggregateInputType;
    _avg?: CommentsAvgAggregateInputType;
    _sum?: CommentsSumAggregateInputType;
    _min?: CommentsMinAggregateInputType;
    _max?: CommentsMaxAggregateInputType;
};
export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
    [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComments[P]> : Prisma.GetScalarType<T[P], AggregateComments[P]>;
};
export type commentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
    orderBy?: Prisma.commentsOrderByWithAggregationInput | Prisma.commentsOrderByWithAggregationInput[];
    by: Prisma.CommentsScalarFieldEnum[] | Prisma.CommentsScalarFieldEnum;
    having?: Prisma.commentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentsCountAggregateInputType | true;
    _avg?: CommentsAvgAggregateInputType;
    _sum?: CommentsSumAggregateInputType;
    _min?: CommentsMinAggregateInputType;
    _max?: CommentsMaxAggregateInputType;
};
export type CommentsGroupByOutputType = {
    id: number;
    text: string;
    commentDate: Date | null;
    postId: number;
    userId: number;
    _count: CommentsCountAggregateOutputType | null;
    _avg: CommentsAvgAggregateOutputType | null;
    _sum: CommentsSumAggregateOutputType | null;
    _min: CommentsMinAggregateOutputType | null;
    _max: CommentsMaxAggregateOutputType | null;
};
type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentsGroupByOutputType[P]>;
}>>;
export type commentsWhereInput = {
    AND?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    OR?: Prisma.commentsWhereInput[];
    NOT?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    id?: Prisma.IntFilter<"comments"> | number;
    text?: Prisma.StringFilter<"comments"> | string;
    commentDate?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    postId?: Prisma.IntFilter<"comments"> | number;
    userId?: Prisma.IntFilter<"comments"> | number;
    posts?: Prisma.XOR<Prisma.PostsScalarRelationFilter, Prisma.postsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type commentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    commentDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    posts?: Prisma.postsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.commentsOrderByRelevanceInput;
};
export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    OR?: Prisma.commentsWhereInput[];
    NOT?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    text?: Prisma.StringFilter<"comments"> | string;
    commentDate?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    postId?: Prisma.IntFilter<"comments"> | number;
    userId?: Prisma.IntFilter<"comments"> | number;
    posts?: Prisma.XOR<Prisma.PostsScalarRelationFilter, Prisma.postsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type commentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    commentDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.commentsCountOrderByAggregateInput;
    _avg?: Prisma.commentsAvgOrderByAggregateInput;
    _max?: Prisma.commentsMaxOrderByAggregateInput;
    _min?: Prisma.commentsMinOrderByAggregateInput;
    _sum?: Prisma.commentsSumOrderByAggregateInput;
};
export type commentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.commentsScalarWhereWithAggregatesInput | Prisma.commentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.commentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.commentsScalarWhereWithAggregatesInput | Prisma.commentsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"comments"> | number;
    text?: Prisma.StringWithAggregatesFilter<"comments"> | string;
    commentDate?: Prisma.DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null;
    postId?: Prisma.IntWithAggregatesFilter<"comments"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"comments"> | number;
};
export type commentsCreateInput = {
    text: string;
    commentDate?: Date | string | null;
    posts: Prisma.postsCreateNestedOneWithoutCommentsInput;
    users: Prisma.usersCreateNestedOneWithoutCommentsInput;
};
export type commentsUncheckedCreateInput = {
    id?: number;
    text: string;
    commentDate?: Date | string | null;
    postId: number;
    userId: number;
};
export type commentsUpdateInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    posts?: Prisma.postsUpdateOneRequiredWithoutCommentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type commentsCreateManyInput = {
    id?: number;
    text: string;
    commentDate?: Date | string | null;
    postId: number;
    userId: number;
};
export type commentsUpdateManyMutationInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type commentsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type commentsOrderByRelevanceInput = {
    fields: Prisma.commentsOrderByRelevanceFieldEnum | Prisma.commentsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type commentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    commentDate?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type commentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type commentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    commentDate?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type commentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    commentDate?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type commentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CommentsListRelationFilter = {
    every?: Prisma.commentsWhereInput;
    some?: Prisma.commentsWhereInput;
    none?: Prisma.commentsWhereInput;
};
export type commentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type commentsCreateNestedManyWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUpdateManyWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput | Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput | Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutPostsInput | Prisma.commentsUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput | Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput | Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutPostsInput | Prisma.commentsUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutUsersInput | Prisma.commentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutUsersInput | Prisma.commentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsCreateWithoutPostsInput = {
    text: string;
    commentDate?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutCommentsInput;
};
export type commentsUncheckedCreateWithoutPostsInput = {
    id?: number;
    text: string;
    commentDate?: Date | string | null;
    userId: number;
};
export type commentsCreateOrConnectWithoutPostsInput = {
    where: Prisma.commentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput>;
};
export type commentsCreateManyPostsInputEnvelope = {
    data: Prisma.commentsCreateManyPostsInput | Prisma.commentsCreateManyPostsInput[];
    skipDuplicates?: boolean;
};
export type commentsUpsertWithWhereUniqueWithoutPostsInput = {
    where: Prisma.commentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.commentsUpdateWithoutPostsInput, Prisma.commentsUncheckedUpdateWithoutPostsInput>;
    create: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput>;
};
export type commentsUpdateWithWhereUniqueWithoutPostsInput = {
    where: Prisma.commentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.commentsUpdateWithoutPostsInput, Prisma.commentsUncheckedUpdateWithoutPostsInput>;
};
export type commentsUpdateManyWithWhereWithoutPostsInput = {
    where: Prisma.commentsScalarWhereInput;
    data: Prisma.XOR<Prisma.commentsUpdateManyMutationInput, Prisma.commentsUncheckedUpdateManyWithoutPostsInput>;
};
export type commentsScalarWhereInput = {
    AND?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
    OR?: Prisma.commentsScalarWhereInput[];
    NOT?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
    id?: Prisma.IntFilter<"comments"> | number;
    text?: Prisma.StringFilter<"comments"> | string;
    commentDate?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    postId?: Prisma.IntFilter<"comments"> | number;
    userId?: Prisma.IntFilter<"comments"> | number;
};
export type commentsCreateWithoutUsersInput = {
    text: string;
    commentDate?: Date | string | null;
    posts: Prisma.postsCreateNestedOneWithoutCommentsInput;
};
export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number;
    text: string;
    commentDate?: Date | string | null;
    postId: number;
};
export type commentsCreateOrConnectWithoutUsersInput = {
    where: Prisma.commentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput>;
};
export type commentsCreateManyUsersInputEnvelope = {
    data: Prisma.commentsCreateManyUsersInput | Prisma.commentsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.commentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.commentsUpdateWithoutUsersInput, Prisma.commentsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput>;
};
export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.commentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.commentsUpdateWithoutUsersInput, Prisma.commentsUncheckedUpdateWithoutUsersInput>;
};
export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.commentsScalarWhereInput;
    data: Prisma.XOR<Prisma.commentsUpdateManyMutationInput, Prisma.commentsUncheckedUpdateManyWithoutUsersInput>;
};
export type commentsCreateManyPostsInput = {
    id?: number;
    text: string;
    commentDate?: Date | string | null;
    userId: number;
};
export type commentsUpdateWithoutPostsInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateWithoutPostsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type commentsUncheckedUpdateManyWithoutPostsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type commentsCreateManyUsersInput = {
    id?: number;
    text: string;
    commentDate?: Date | string | null;
    postId: number;
};
export type commentsUpdateWithoutUsersInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    posts?: Prisma.postsUpdateOneRequiredWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    commentDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type commentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    commentDate?: boolean;
    postId?: boolean;
    userId?: boolean;
    posts?: boolean | Prisma.postsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comments"]>;
export type commentsSelectScalar = {
    id?: boolean;
    text?: boolean;
    commentDate?: boolean;
    postId?: boolean;
    userId?: boolean;
};
export type commentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "text" | "commentDate" | "postId" | "userId", ExtArgs["result"]["comments"]>;
export type commentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | Prisma.postsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $commentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "comments";
    objects: {
        posts: Prisma.$postsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        text: string;
        commentDate: Date | null;
        postId: number;
        userId: number;
    }, ExtArgs["result"]["comments"]>;
    composites: {};
};
export type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$commentsPayload, S>;
export type commentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentsCountAggregateInputType | true;
};
export interface commentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['comments'];
        meta: {
            name: 'comments';
        };
    };
    findUnique<T extends commentsFindUniqueArgs>(args: Prisma.SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends commentsFindFirstArgs>(args?: Prisma.SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends commentsFindManyArgs>(args?: Prisma.SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends commentsCreateArgs>(args: Prisma.SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends commentsCreateManyArgs>(args?: Prisma.SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends commentsDeleteArgs>(args: Prisma.SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends commentsUpdateArgs>(args: Prisma.SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends commentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends commentsUpdateManyArgs>(args: Prisma.SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends commentsUpsertArgs>(args: Prisma.SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends commentsCountArgs>(args?: Prisma.Subset<T, commentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentsCountAggregateOutputType> : number>;
    aggregate<T extends CommentsAggregateArgs>(args: Prisma.Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>;
    groupBy<T extends commentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: commentsGroupByArgs['orderBy'];
    } : {
        orderBy?: commentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: commentsFieldRefs;
}
export interface Prisma__commentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends Prisma.postsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.postsDefaultArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface commentsFieldRefs {
    readonly id: Prisma.FieldRef<"comments", 'Int'>;
    readonly text: Prisma.FieldRef<"comments", 'String'>;
    readonly commentDate: Prisma.FieldRef<"comments", 'DateTime'>;
    readonly postId: Prisma.FieldRef<"comments", 'Int'>;
    readonly userId: Prisma.FieldRef<"comments", 'Int'>;
}
export type commentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type commentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type commentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type commentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.commentsCreateInput, Prisma.commentsUncheckedCreateInput>;
};
export type commentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.commentsCreateManyInput | Prisma.commentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type commentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.commentsUpdateInput, Prisma.commentsUncheckedUpdateInput>;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.commentsUpdateManyMutationInput, Prisma.commentsUncheckedUpdateManyInput>;
    where?: Prisma.commentsWhereInput;
    limit?: number;
};
export type commentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.commentsCreateInput, Prisma.commentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.commentsUpdateInput, Prisma.commentsUncheckedUpdateInput>;
};
export type commentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
    limit?: number;
};
export type commentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
};
export {};
