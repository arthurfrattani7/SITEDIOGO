import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type authorprofileModel = runtime.Types.Result.DefaultSelection<Prisma.$authorprofilePayload>;
export type AggregateAuthorprofile = {
    _count: AuthorprofileCountAggregateOutputType | null;
    _avg: AuthorprofileAvgAggregateOutputType | null;
    _sum: AuthorprofileSumAggregateOutputType | null;
    _min: AuthorprofileMinAggregateOutputType | null;
    _max: AuthorprofileMaxAggregateOutputType | null;
};
export type AuthorprofileAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type AuthorprofileSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type AuthorprofileMinAggregateOutputType = {
    id: number | null;
    biography: string | null;
    userId: number | null;
    socialProfile: string | null;
};
export type AuthorprofileMaxAggregateOutputType = {
    id: number | null;
    biography: string | null;
    userId: number | null;
    socialProfile: string | null;
};
export type AuthorprofileCountAggregateOutputType = {
    id: number;
    biography: number;
    userId: number;
    socialProfile: number;
    _all: number;
};
export type AuthorprofileAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type AuthorprofileSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type AuthorprofileMinAggregateInputType = {
    id?: true;
    biography?: true;
    userId?: true;
    socialProfile?: true;
};
export type AuthorprofileMaxAggregateInputType = {
    id?: true;
    biography?: true;
    userId?: true;
    socialProfile?: true;
};
export type AuthorprofileCountAggregateInputType = {
    id?: true;
    biography?: true;
    userId?: true;
    socialProfile?: true;
    _all?: true;
};
export type AuthorprofileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.authorprofileWhereInput;
    orderBy?: Prisma.authorprofileOrderByWithRelationInput | Prisma.authorprofileOrderByWithRelationInput[];
    cursor?: Prisma.authorprofileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuthorprofileCountAggregateInputType;
    _avg?: AuthorprofileAvgAggregateInputType;
    _sum?: AuthorprofileSumAggregateInputType;
    _min?: AuthorprofileMinAggregateInputType;
    _max?: AuthorprofileMaxAggregateInputType;
};
export type GetAuthorprofileAggregateType<T extends AuthorprofileAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthorprofile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuthorprofile[P]> : Prisma.GetScalarType<T[P], AggregateAuthorprofile[P]>;
};
export type authorprofileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.authorprofileWhereInput;
    orderBy?: Prisma.authorprofileOrderByWithAggregationInput | Prisma.authorprofileOrderByWithAggregationInput[];
    by: Prisma.AuthorprofileScalarFieldEnum[] | Prisma.AuthorprofileScalarFieldEnum;
    having?: Prisma.authorprofileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthorprofileCountAggregateInputType | true;
    _avg?: AuthorprofileAvgAggregateInputType;
    _sum?: AuthorprofileSumAggregateInputType;
    _min?: AuthorprofileMinAggregateInputType;
    _max?: AuthorprofileMaxAggregateInputType;
};
export type AuthorprofileGroupByOutputType = {
    id: number;
    biography: string | null;
    userId: number;
    socialProfile: string | null;
    _count: AuthorprofileCountAggregateOutputType | null;
    _avg: AuthorprofileAvgAggregateOutputType | null;
    _sum: AuthorprofileSumAggregateOutputType | null;
    _min: AuthorprofileMinAggregateOutputType | null;
    _max: AuthorprofileMaxAggregateOutputType | null;
};
type GetAuthorprofileGroupByPayload<T extends authorprofileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuthorprofileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuthorprofileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuthorprofileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuthorprofileGroupByOutputType[P]>;
}>>;
export type authorprofileWhereInput = {
    AND?: Prisma.authorprofileWhereInput | Prisma.authorprofileWhereInput[];
    OR?: Prisma.authorprofileWhereInput[];
    NOT?: Prisma.authorprofileWhereInput | Prisma.authorprofileWhereInput[];
    id?: Prisma.IntFilter<"authorprofile"> | number;
    biography?: Prisma.StringNullableFilter<"authorprofile"> | string | null;
    userId?: Prisma.IntFilter<"authorprofile"> | number;
    socialProfile?: Prisma.StringNullableFilter<"authorprofile"> | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type authorprofileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    biography?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    socialProfile?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    _relevance?: Prisma.authorprofileOrderByRelevanceInput;
};
export type authorprofileWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId?: number;
    AND?: Prisma.authorprofileWhereInput | Prisma.authorprofileWhereInput[];
    OR?: Prisma.authorprofileWhereInput[];
    NOT?: Prisma.authorprofileWhereInput | Prisma.authorprofileWhereInput[];
    biography?: Prisma.StringNullableFilter<"authorprofile"> | string | null;
    socialProfile?: Prisma.StringNullableFilter<"authorprofile"> | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "userId">;
export type authorprofileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    biography?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    socialProfile?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.authorprofileCountOrderByAggregateInput;
    _avg?: Prisma.authorprofileAvgOrderByAggregateInput;
    _max?: Prisma.authorprofileMaxOrderByAggregateInput;
    _min?: Prisma.authorprofileMinOrderByAggregateInput;
    _sum?: Prisma.authorprofileSumOrderByAggregateInput;
};
export type authorprofileScalarWhereWithAggregatesInput = {
    AND?: Prisma.authorprofileScalarWhereWithAggregatesInput | Prisma.authorprofileScalarWhereWithAggregatesInput[];
    OR?: Prisma.authorprofileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.authorprofileScalarWhereWithAggregatesInput | Prisma.authorprofileScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"authorprofile"> | number;
    biography?: Prisma.StringNullableWithAggregatesFilter<"authorprofile"> | string | null;
    userId?: Prisma.IntWithAggregatesFilter<"authorprofile"> | number;
    socialProfile?: Prisma.StringNullableWithAggregatesFilter<"authorprofile"> | string | null;
};
export type authorprofileCreateInput = {
    biography?: string | null;
    socialProfile?: string | null;
    users: Prisma.usersCreateNestedOneWithoutAuthorprofileInput;
};
export type authorprofileUncheckedCreateInput = {
    id?: number;
    biography?: string | null;
    userId: number;
    socialProfile?: string | null;
};
export type authorprofileUpdateInput = {
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutAuthorprofileNestedInput;
};
export type authorprofileUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    socialProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type authorprofileCreateManyInput = {
    id?: number;
    biography?: string | null;
    userId: number;
    socialProfile?: string | null;
};
export type authorprofileUpdateManyMutationInput = {
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type authorprofileUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    socialProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type authorprofileOrderByRelevanceInput = {
    fields: Prisma.authorprofileOrderByRelevanceFieldEnum | Prisma.authorprofileOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type authorprofileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    socialProfile?: Prisma.SortOrder;
};
export type authorprofileAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type authorprofileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    socialProfile?: Prisma.SortOrder;
};
export type authorprofileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    socialProfile?: Prisma.SortOrder;
};
export type authorprofileSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AuthorprofileNullableScalarRelationFilter = {
    is?: Prisma.authorprofileWhereInput | null;
    isNot?: Prisma.authorprofileWhereInput | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type authorprofileCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.authorprofileCreateWithoutUsersInput, Prisma.authorprofileUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.authorprofileCreateOrConnectWithoutUsersInput;
    connect?: Prisma.authorprofileWhereUniqueInput;
};
export type authorprofileUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.authorprofileCreateWithoutUsersInput, Prisma.authorprofileUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.authorprofileCreateOrConnectWithoutUsersInput;
    connect?: Prisma.authorprofileWhereUniqueInput;
};
export type authorprofileUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.authorprofileCreateWithoutUsersInput, Prisma.authorprofileUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.authorprofileCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.authorprofileUpsertWithoutUsersInput;
    disconnect?: Prisma.authorprofileWhereInput | boolean;
    delete?: Prisma.authorprofileWhereInput | boolean;
    connect?: Prisma.authorprofileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.authorprofileUpdateToOneWithWhereWithoutUsersInput, Prisma.authorprofileUpdateWithoutUsersInput>, Prisma.authorprofileUncheckedUpdateWithoutUsersInput>;
};
export type authorprofileUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.authorprofileCreateWithoutUsersInput, Prisma.authorprofileUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.authorprofileCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.authorprofileUpsertWithoutUsersInput;
    disconnect?: Prisma.authorprofileWhereInput | boolean;
    delete?: Prisma.authorprofileWhereInput | boolean;
    connect?: Prisma.authorprofileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.authorprofileUpdateToOneWithWhereWithoutUsersInput, Prisma.authorprofileUpdateWithoutUsersInput>, Prisma.authorprofileUncheckedUpdateWithoutUsersInput>;
};
export type authorprofileCreateWithoutUsersInput = {
    biography?: string | null;
    socialProfile?: string | null;
};
export type authorprofileUncheckedCreateWithoutUsersInput = {
    id?: number;
    biography?: string | null;
    socialProfile?: string | null;
};
export type authorprofileCreateOrConnectWithoutUsersInput = {
    where: Prisma.authorprofileWhereUniqueInput;
    create: Prisma.XOR<Prisma.authorprofileCreateWithoutUsersInput, Prisma.authorprofileUncheckedCreateWithoutUsersInput>;
};
export type authorprofileUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.authorprofileUpdateWithoutUsersInput, Prisma.authorprofileUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.authorprofileCreateWithoutUsersInput, Prisma.authorprofileUncheckedCreateWithoutUsersInput>;
    where?: Prisma.authorprofileWhereInput;
};
export type authorprofileUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.authorprofileWhereInput;
    data: Prisma.XOR<Prisma.authorprofileUpdateWithoutUsersInput, Prisma.authorprofileUncheckedUpdateWithoutUsersInput>;
};
export type authorprofileUpdateWithoutUsersInput = {
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type authorprofileUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type authorprofileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    biography?: boolean;
    userId?: boolean;
    socialProfile?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["authorprofile"]>;
export type authorprofileSelectScalar = {
    id?: boolean;
    biography?: boolean;
    userId?: boolean;
    socialProfile?: boolean;
};
export type authorprofileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "biography" | "userId" | "socialProfile", ExtArgs["result"]["authorprofile"]>;
export type authorprofileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $authorprofilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "authorprofile";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        biography: string | null;
        userId: number;
        socialProfile: string | null;
    }, ExtArgs["result"]["authorprofile"]>;
    composites: {};
};
export type authorprofileGetPayload<S extends boolean | null | undefined | authorprofileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$authorprofilePayload, S>;
export type authorprofileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<authorprofileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthorprofileCountAggregateInputType | true;
};
export interface authorprofileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['authorprofile'];
        meta: {
            name: 'authorprofile';
        };
    };
    findUnique<T extends authorprofileFindUniqueArgs>(args: Prisma.SelectSubset<T, authorprofileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends authorprofileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, authorprofileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends authorprofileFindFirstArgs>(args?: Prisma.SelectSubset<T, authorprofileFindFirstArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends authorprofileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, authorprofileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends authorprofileFindManyArgs>(args?: Prisma.SelectSubset<T, authorprofileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends authorprofileCreateArgs>(args: Prisma.SelectSubset<T, authorprofileCreateArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends authorprofileCreateManyArgs>(args?: Prisma.SelectSubset<T, authorprofileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends authorprofileDeleteArgs>(args: Prisma.SelectSubset<T, authorprofileDeleteArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends authorprofileUpdateArgs>(args: Prisma.SelectSubset<T, authorprofileUpdateArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends authorprofileDeleteManyArgs>(args?: Prisma.SelectSubset<T, authorprofileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends authorprofileUpdateManyArgs>(args: Prisma.SelectSubset<T, authorprofileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends authorprofileUpsertArgs>(args: Prisma.SelectSubset<T, authorprofileUpsertArgs<ExtArgs>>): Prisma.Prisma__authorprofileClient<runtime.Types.Result.GetResult<Prisma.$authorprofilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends authorprofileCountArgs>(args?: Prisma.Subset<T, authorprofileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuthorprofileCountAggregateOutputType> : number>;
    aggregate<T extends AuthorprofileAggregateArgs>(args: Prisma.Subset<T, AuthorprofileAggregateArgs>): Prisma.PrismaPromise<GetAuthorprofileAggregateType<T>>;
    groupBy<T extends authorprofileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: authorprofileGroupByArgs['orderBy'];
    } : {
        orderBy?: authorprofileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, authorprofileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorprofileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: authorprofileFieldRefs;
}
export interface Prisma__authorprofileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface authorprofileFieldRefs {
    readonly id: Prisma.FieldRef<"authorprofile", 'Int'>;
    readonly biography: Prisma.FieldRef<"authorprofile", 'String'>;
    readonly userId: Prisma.FieldRef<"authorprofile", 'Int'>;
    readonly socialProfile: Prisma.FieldRef<"authorprofile", 'String'>;
}
export type authorprofileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where: Prisma.authorprofileWhereUniqueInput;
};
export type authorprofileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where: Prisma.authorprofileWhereUniqueInput;
};
export type authorprofileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where?: Prisma.authorprofileWhereInput;
    orderBy?: Prisma.authorprofileOrderByWithRelationInput | Prisma.authorprofileOrderByWithRelationInput[];
    cursor?: Prisma.authorprofileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuthorprofileScalarFieldEnum | Prisma.AuthorprofileScalarFieldEnum[];
};
export type authorprofileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where?: Prisma.authorprofileWhereInput;
    orderBy?: Prisma.authorprofileOrderByWithRelationInput | Prisma.authorprofileOrderByWithRelationInput[];
    cursor?: Prisma.authorprofileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuthorprofileScalarFieldEnum | Prisma.AuthorprofileScalarFieldEnum[];
};
export type authorprofileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where?: Prisma.authorprofileWhereInput;
    orderBy?: Prisma.authorprofileOrderByWithRelationInput | Prisma.authorprofileOrderByWithRelationInput[];
    cursor?: Prisma.authorprofileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuthorprofileScalarFieldEnum | Prisma.AuthorprofileScalarFieldEnum[];
};
export type authorprofileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.authorprofileCreateInput, Prisma.authorprofileUncheckedCreateInput>;
};
export type authorprofileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.authorprofileCreateManyInput | Prisma.authorprofileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type authorprofileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.authorprofileUpdateInput, Prisma.authorprofileUncheckedUpdateInput>;
    where: Prisma.authorprofileWhereUniqueInput;
};
export type authorprofileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.authorprofileUpdateManyMutationInput, Prisma.authorprofileUncheckedUpdateManyInput>;
    where?: Prisma.authorprofileWhereInput;
    limit?: number;
};
export type authorprofileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where: Prisma.authorprofileWhereUniqueInput;
    create: Prisma.XOR<Prisma.authorprofileCreateInput, Prisma.authorprofileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.authorprofileUpdateInput, Prisma.authorprofileUncheckedUpdateInput>;
};
export type authorprofileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
    where: Prisma.authorprofileWhereUniqueInput;
};
export type authorprofileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.authorprofileWhereInput;
    limit?: number;
};
export type authorprofileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.authorprofileSelect<ExtArgs> | null;
    omit?: Prisma.authorprofileOmit<ExtArgs> | null;
    include?: Prisma.authorprofileInclude<ExtArgs> | null;
};
export {};
