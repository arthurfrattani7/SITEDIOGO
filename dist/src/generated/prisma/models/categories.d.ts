import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$categoriesPayload>;
export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
export type CategoriesAvgAggregateOutputType = {
    id: number | null;
};
export type CategoriesSumAggregateOutputType = {
    id: number | null;
};
export type CategoriesMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
};
export type CategoriesMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
};
export type CategoriesCountAggregateOutputType = {
    id: number;
    nome: number;
    _all: number;
};
export type CategoriesAvgAggregateInputType = {
    id?: true;
};
export type CategoriesSumAggregateInputType = {
    id?: true;
};
export type CategoriesMinAggregateInputType = {
    id?: true;
    nome?: true;
};
export type CategoriesMaxAggregateInputType = {
    id?: true;
    nome?: true;
};
export type CategoriesCountAggregateInputType = {
    id?: true;
    nome?: true;
    _all?: true;
};
export type CategoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriesCountAggregateInputType;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategories[P]> : Prisma.GetScalarType<T[P], AggregateCategories[P]>;
};
export type categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithAggregationInput | Prisma.categoriesOrderByWithAggregationInput[];
    by: Prisma.CategoriesScalarFieldEnum[] | Prisma.CategoriesScalarFieldEnum;
    having?: Prisma.categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type CategoriesGroupByOutputType = {
    id: number;
    nome: string;
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
}>>;
export type categoriesWhereInput = {
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    id?: Prisma.IntFilter<"categories"> | number;
    nome?: Prisma.StringFilter<"categories"> | string;
    posts?: Prisma.PostsListRelationFilter;
};
export type categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    posts?: Prisma.postsOrderByRelationAggregateInput;
    _relevance?: Prisma.categoriesOrderByRelevanceInput;
};
export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    nome?: Prisma.StringFilter<"categories"> | string;
    posts?: Prisma.PostsListRelationFilter;
}, "id">;
export type categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    _count?: Prisma.categoriesCountOrderByAggregateInput;
    _avg?: Prisma.categoriesAvgOrderByAggregateInput;
    _max?: Prisma.categoriesMaxOrderByAggregateInput;
    _min?: Prisma.categoriesMinOrderByAggregateInput;
    _sum?: Prisma.categoriesSumOrderByAggregateInput;
};
export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"categories"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"categories"> | string;
};
export type categoriesCreateInput = {
    nome: string;
    posts?: Prisma.postsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateInput = {
    id?: number;
    nome: string;
    posts?: Prisma.postsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    posts?: Prisma.postsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    posts?: Prisma.postsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateManyInput = {
    id?: number;
    nome: string;
};
export type categoriesUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type categoriesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type categoriesOrderByRelevanceInput = {
    fields: Prisma.categoriesOrderByRelevanceFieldEnum | Prisma.categoriesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
};
export type categoriesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
};
export type categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
};
export type categoriesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CategoriesScalarRelationFilter = {
    is?: Prisma.categoriesWhereInput;
    isNot?: Prisma.categoriesWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type categoriesCreateNestedOneWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutPostsInput, Prisma.categoriesUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutPostsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneRequiredWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutPostsInput, Prisma.categoriesUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutPostsInput;
    upsert?: Prisma.categoriesUpsertWithoutPostsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutPostsInput, Prisma.categoriesUpdateWithoutPostsInput>, Prisma.categoriesUncheckedUpdateWithoutPostsInput>;
};
export type categoriesCreateWithoutPostsInput = {
    nome: string;
};
export type categoriesUncheckedCreateWithoutPostsInput = {
    id?: number;
    nome: string;
};
export type categoriesCreateOrConnectWithoutPostsInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutPostsInput, Prisma.categoriesUncheckedCreateWithoutPostsInput>;
};
export type categoriesUpsertWithoutPostsInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutPostsInput, Prisma.categoriesUncheckedUpdateWithoutPostsInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutPostsInput, Prisma.categoriesUncheckedCreateWithoutPostsInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutPostsInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutPostsInput, Prisma.categoriesUncheckedUpdateWithoutPostsInput>;
};
export type categoriesUpdateWithoutPostsInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type categoriesUncheckedUpdateWithoutPostsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CategoriesCountOutputType = {
    posts: number;
};
export type CategoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | CategoriesCountOutputTypeCountPostsArgs;
};
export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriesCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriesCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
};
export type categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    posts?: boolean | Prisma.categories$postsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectScalar = {
    id?: boolean;
    nome?: boolean;
};
export type categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["categories"]>;
export type categoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | Prisma.categories$postsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "categories";
    objects: {
        posts: Prisma.$postsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
    }, ExtArgs["result"]["categories"]>;
    composites: {};
};
export type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoriesPayload, S>;
export type categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriesCountAggregateInputType | true;
};
export interface categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['categories'];
        meta: {
            name: 'categories';
        };
    };
    findUnique<T extends categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoriesCreateArgs>(args: Prisma.SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends categoriesDeleteArgs>(args: Prisma.SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoriesUpdateArgs>(args: Prisma.SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends categoriesUpsertArgs>(args: Prisma.SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoriesCountArgs>(args?: Prisma.Subset<T, categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriesCountAggregateOutputType> : number>;
    aggregate<T extends CategoriesAggregateArgs>(args: Prisma.Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;
    groupBy<T extends categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoriesFieldRefs;
}
export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends Prisma.categories$postsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$postsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"categories", 'Int'>;
    readonly nome: Prisma.FieldRef<"categories", 'String'>;
}
export type categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
};
export type categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoriesCreateManyInput | Prisma.categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyInput>;
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
};
export type categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categories$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
};
export {};
