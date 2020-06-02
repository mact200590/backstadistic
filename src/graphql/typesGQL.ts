import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  customers: Array<Customer>;
  hostalId?: Maybe<Hostal>;
  hostalLike?: Maybe<Array<Maybe<Hostal>>>;
  hostals: Array<Hostal>;
  rooms: Array<Rooms>;
  roomsId?: Maybe<Rooms>;
};


export type QueryHostalIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryHostalLikeArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryRoomsIdArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  roomUpdate: Scalars['ID'];
  roomsDelete: Scalars['ID'];
  roomsInput: Rooms;
};


export type MutationRoomUpdateArgs = {
  id: Scalars['Int'];
  id_hostal?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['Int']>;
};


export type MutationRoomsDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationRoomsInputArgs = {
  data?: Maybe<RoomsInput>;
};

export type Customer = {
   __typename?: 'Customer';
  passport: Scalars['String'];
  name: Scalars['String'];
  age: Scalars['Int'];
  country: Scalars['String'];
  sexo: Scalars['String'];
};

export type Hostal = {
   __typename?: 'Hostal';
  id: Scalars['Int'];
  name: Scalars['String'];
  fullcapacity: Scalars['String'];
  address: Scalars['String'];
};

export type Rooms = {
   __typename?: 'Rooms';
  name: Scalars['String'];
  capacity: Scalars['Int'];
  id_hostal: Scalars['Int'];
};

export type RoomsInput = {
  name: Scalars['String'];
  capacity: Scalars['Int'];
  id_hostal: Scalars['Int'];
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Mutation: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Customer: ResolverTypeWrapper<Customer>,
  Hostal: ResolverTypeWrapper<Hostal>,
  Rooms: ResolverTypeWrapper<Rooms>,
  RoomsInput: RoomsInput,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Query: {},
  Int: Scalars['Int'],
  Mutation: {},
  ID: Scalars['ID'],
  Customer: Customer,
  Hostal: Hostal,
  Rooms: Rooms,
  RoomsInput: RoomsInput,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  customers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>,
  hostalId?: Resolver<Maybe<ResolversTypes['Hostal']>, ParentType, ContextType, RequireFields<QueryHostalIdArgs, never>>,
  hostalLike?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hostal']>>>, ParentType, ContextType, RequireFields<QueryHostalLikeArgs, never>>,
  hostals?: Resolver<Array<ResolversTypes['Hostal']>, ParentType, ContextType>,
  rooms?: Resolver<Array<ResolversTypes['Rooms']>, ParentType, ContextType>,
  roomsId?: Resolver<Maybe<ResolversTypes['Rooms']>, ParentType, ContextType, RequireFields<QueryRoomsIdArgs, never>>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  roomUpdate?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationRoomUpdateArgs, 'id'>>,
  roomsDelete?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationRoomsDeleteArgs, 'id'>>,
  roomsInput?: Resolver<ResolversTypes['Rooms'], ParentType, ContextType, RequireFields<MutationRoomsInputArgs, never>>,
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  passport?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  sexo?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type HostalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hostal'] = ResolversParentTypes['Hostal']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fullcapacity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RoomsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rooms'] = ResolversParentTypes['Rooms']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  capacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  id_hostal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Customer?: CustomerResolvers<ContextType>,
  Hostal?: HostalResolvers<ContextType>,
  Rooms?: RoomsResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
