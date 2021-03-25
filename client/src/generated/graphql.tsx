import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  allUsers: Array<User>;
  me?: Maybe<User>;
  singleUser: UserResponse;
  userHasPlatform?: Maybe<Scalars['String']>;
  allTutors: Array<Tutor>;
  allTutorsByCategory: Array<Category>;
  singleTutor: TutorResponse;
  allTypes: Array<TutorType>;
  allClasses: Array<Classes>;
  singleClass: Classes;
  allTutorClasses: Array<Classes>;
  allPrices: Array<Price>;
  allCategories: Array<Category>;
  allCategoriesTutor: Array<Category>;
  allPlatforms: Array<Platforms>;
  allPlatformAccount: Array<UserPlatformAccount>;
  getSingleAccount: Array<UserPlatformAccount>;
  getTutorFeedbacks: Array<Feedback>;
  getUserOrders: OrderDetailsAmount;
  orderDetail: Order;
  ordersTutorAwaitingApproval: Array<Order>;
};


export type QuerySingleUserArgs = {
  id: Scalars['Float'];
};


export type QueryUserHasPlatformArgs = {
  userId: Scalars['Float'];
  platformId: Scalars['Float'];
};


export type QueryAllTutorsArgs = {
  country?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Array<Scalars['String']>>;
  category?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Scalars['String']>;
  page: Scalars['Int'];
  limit: Scalars['Int'];
};


export type QueryAllTutorsByCategoryArgs = {
  categoryID: Scalars['Float'];
};


export type QuerySingleTutorArgs = {
  id: Scalars['Float'];
};


export type QuerySingleClassArgs = {
  id: Scalars['Float'];
};


export type QueryAllTutorClassesArgs = {
  tutorId: Scalars['Float'];
};


export type QueryAllCategoriesTutorArgs = {
  tutorID: Scalars['Float'];
};


export type QueryGetSingleAccountArgs = {
  id: Scalars['Float'];
};


export type QueryGetTutorFeedbacksArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserOrdersArgs = {
  page: Scalars['Int'];
  userID: Scalars['Float'];
};


export type QueryOrderDetailArgs = {
  id: Scalars['String'];
};


export type QueryOrdersTutorAwaitingApprovalArgs = {
  tutorId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  dateBirth?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  followersAmount?: Maybe<Scalars['Float']>;
  avatar?: Maybe<Scalars['String']>;
  tutor?: Maybe<Tutor>;
  platforms?: Maybe<Array<Platforms>>;
  classes?: Maybe<Array<Classes>>;
  orders?: Maybe<Array<Order>>;
  userPlatformAccount?: Maybe<Array<UserPlatformAccount>>;
  feedback?: Maybe<Array<Feedback>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Tutor = {
  __typename?: 'Tutor';
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  type?: Maybe<TutorType>;
  description?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  amountClasses?: Maybe<Scalars['Int']>;
  amountStudents?: Maybe<Scalars['Int']>;
  instructionalVideo?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Classes>>;
  categories?: Maybe<Array<Category>>;
  availability?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TutorType = {
  __typename?: 'TutorType';
  id: Scalars['Int'];
  name: Scalars['String'];
  needsApproval: Scalars['Boolean'];
  rules: Scalars['String'];
  tutor?: Maybe<Array<Tutor>>;
};

export type Classes = {
  __typename?: 'Classes';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tutor?: Maybe<Tutor>;
  amountTimeTaught?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Array<Price>>;
  users?: Maybe<Array<User>>;
  orders?: Maybe<Order>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Price = {
  __typename?: 'Price';
  id?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  classes?: Maybe<Classes>;
  isPromotionalCode?: Maybe<Scalars['Boolean']>;
  discountAmount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['String']>;
  user: User;
  classes?: Maybe<Classes>;
  date: Scalars['String'];
  platformId?: Maybe<Scalars['Int']>;
  classDuration: Scalars['String'];
  userAccount: Scalars['String'];
  classPrice?: Maybe<Scalars['Float']>;
  isOrderAproved?: Maybe<Scalars['Boolean']>;
  hasTutorConfirmedClassDone?: Maybe<Scalars['Boolean']>;
  hasUserConfirmedClassDone?: Maybe<Scalars['Boolean']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  paymentDetails?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  tutors?: Maybe<Array<Tutor>>;
};

export type Platforms = {
  __typename?: 'Platforms';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  users?: Maybe<Array<User>>;
  userPlatformAccount?: Maybe<UserPlatformAccount>;
};

export type UserPlatformAccount = {
  __typename?: 'UserPlatformAccount';
  userPlatformAccount?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  platformId?: Maybe<Scalars['Int']>;
  account?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  platform?: Maybe<Platforms>;
};

export type Feedback = {
  __typename?: 'Feedback';
  id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  user: User;
  tutorID: Scalars['Int'];
  createdAt?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type TutorResponse = {
  __typename?: 'TutorResponse';
  errors?: Maybe<Array<FieldError>>;
  tutor?: Maybe<Tutor>;
};

export type OrderDetailsAmount = {
  __typename?: 'OrderDetailsAmount';
  order?: Maybe<Array<Order>>;
  amount?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  signup: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  addMoreInfo: UserResponse;
  changeAvatar: UserResponse;
  newTutor: TutorResponse;
  deleteTutor: Scalars['Boolean'];
  updateTutor: TutorResponse;
  deleteAccount: Scalars['Boolean'];
  typeToTutor: TutorResponse;
  addAvailableDate: TutorResponse;
  addType: TypeResponse;
  updateType: TypeResponse;
  deleteType: Scalars['Boolean'];
  newClass: ClassesResponse;
  updateClass: ClassesResponse;
  deleteClass: Scalars['Boolean'];
  priceToClasses: Classes;
  userToClass: ClassesResponse;
  changeClassStatus: ClassesResponse;
  newPrice: PriceResponse;
  updatePrice: PriceResponse;
  deletePrice: Scalars['Boolean'];
  newCategory: CategoryResponse;
  categoryToTutor: Category;
  removeCategoryFromTutor: Scalars['Boolean'];
  updateCategory: Category;
  deleteCategory: Scalars['Boolean'];
  newPlatform: PlatformsResponse;
  updatePlatform: PlatformsResponse;
  addPlatformUser: Scalars['Boolean'];
  updatePlatformUser: UserPlatformAccount;
  newFeedback: FeedbackResponse;
  createNewOrder: OrderResponse;
  makeOrderApproved: Order;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSignupArgs = {
  options: UsernameEmailPasswordInput;
};


export type MutationLoginArgs = {
  options: EmailPasswordInput;
};


export type MutationAddMoreInfoArgs = {
  options: MoreInfoUser;
  id: Scalars['Float'];
};


export type MutationChangeAvatarArgs = {
  avatar: Scalars['String'];
  id: Scalars['Float'];
};


export type MutationNewTutorArgs = {
  options: NewTutorInput;
};


export type MutationDeleteTutorArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateTutorArgs = {
  options: TutorInput;
  id: Scalars['Float'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['Float'];
};


export type MutationTypeToTutorArgs = {
  typeID: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationAddAvailableDateArgs = {
  options: Scalars['String'];
  id: Scalars['Float'];
};


export type MutationAddTypeArgs = {
  options: TypeInput;
};


export type MutationUpdateTypeArgs = {
  options: TypeInput;
  id: Scalars['Float'];
};


export type MutationDeleteTypeArgs = {
  id: Scalars['Float'];
};


export type MutationNewClassArgs = {
  options: ClassesInput;
  tutorID: Scalars['Float'];
};


export type MutationUpdateClassArgs = {
  options: ClassesInput;
  classID: Scalars['Float'];
};


export type MutationDeleteClassArgs = {
  id: Scalars['Float'];
};


export type MutationPriceToClassesArgs = {
  priceID: Scalars['Float'];
  classesID: Scalars['Float'];
};


export type MutationUserToClassArgs = {
  classID: Scalars['Float'];
  userID: Scalars['Float'];
};


export type MutationChangeClassStatusArgs = {
  active: Scalars['Boolean'];
  classID: Scalars['Float'];
};


export type MutationNewPriceArgs = {
  classID: Scalars['Float'];
  options: PriceInput;
};


export type MutationUpdatePriceArgs = {
  id: Scalars['Float'];
  options: PriceInput;
};


export type MutationDeletePriceArgs = {
  id: Scalars['Float'];
};


export type MutationNewCategoryArgs = {
  options: CategoryInput;
};


export type MutationCategoryToTutorArgs = {
  categoryID: Scalars['Float'];
  tutorID: Scalars['Float'];
};


export type MutationRemoveCategoryFromTutorArgs = {
  categoryID: Scalars['Float'];
  tutorID: Scalars['Float'];
};


export type MutationUpdateCategoryArgs = {
  options: CategoryInput;
  id: Scalars['Float'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float'];
};


export type MutationNewPlatformArgs = {
  options: PlatformsInput;
};


export type MutationUpdatePlatformArgs = {
  options: PlatformsInput;
  id: Scalars['Float'];
};


export type MutationAddPlatformUserArgs = {
  userAccount: Scalars['String'];
  platformID: Scalars['Float'];
  userID: Scalars['Float'];
};


export type MutationUpdatePlatformUserArgs = {
  newAccount: Scalars['String'];
  platformID: Scalars['Float'];
  userID: Scalars['Float'];
};


export type MutationNewFeedbackArgs = {
  options: FeedbackInput;
  tutorID: Scalars['Float'];
  userID: Scalars['Float'];
};


export type MutationCreateNewOrderArgs = {
  options: OrderInput;
  userID: Scalars['Float'];
};


export type MutationMakeOrderApprovedArgs = {
  orderID: Scalars['String'];
};

export type UsernameEmailPasswordInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type EmailPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MoreInfoUser = {
  description?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type NewTutorInput = {
  description: Scalars['String'];
  type: Scalars['Float'];
};

export type TutorInput = {
  description?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  amountClasses?: Maybe<Scalars['Float']>;
  amountStudents?: Maybe<Scalars['Float']>;
  instructionalVideo?: Maybe<Scalars['String']>;
};

export type TypeResponse = {
  __typename?: 'TypeResponse';
  errors?: Maybe<Array<FieldError>>;
  type?: Maybe<TutorType>;
};

export type TypeInput = {
  name: Scalars['String'];
  needsApproval: Scalars['Boolean'];
  rules: Scalars['String'];
};

export type ClassesResponse = {
  __typename?: 'ClassesResponse';
  errors?: Maybe<Array<FieldError>>;
  classes?: Maybe<Classes>;
};

export type ClassesInput = {
  name?: Maybe<Scalars['String']>;
  amountTimeTaught?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PriceResponse = {
  __typename?: 'PriceResponse';
  errors?: Maybe<Array<FieldError>>;
  price?: Maybe<Price>;
};

export type PriceInput = {
  time?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  isPromotionalCode: Scalars['Boolean'];
  discountAmount?: Maybe<Scalars['Int']>;
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  errors?: Maybe<Array<FieldError>>;
  category?: Maybe<Category>;
};

export type CategoryInput = {
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type PlatformsResponse = {
  __typename?: 'PlatformsResponse';
  errors?: Maybe<Array<FieldError>>;
  platforms?: Maybe<Platforms>;
};

export type PlatformsInput = {
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type FeedbackResponse = {
  __typename?: 'FeedbackResponse';
  errors?: Maybe<Array<FieldError>>;
  feedback?: Maybe<Feedback>;
};

export type FeedbackInput = {
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  errors?: Maybe<Array<FieldError>>;
  order?: Maybe<Order>;
};

export type OrderInput = {
  classID?: Maybe<Scalars['Int']>;
  date: Scalars['String'];
  classDuration: Scalars['String'];
  classPrice?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Int']>;
  userAccount: Scalars['String'];
};

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email'>
  & { tutor?: Maybe<(
    { __typename?: 'Tutor' }
    & Pick<Tutor, 'id'>
  )> }
);

export type AllCategoriesTutorQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type AllCategoriesTutorQuery = (
  { __typename?: 'Query' }
  & { allCategoriesTutor: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'icon'>
  )> }
);

export type CategoryToTutorMutationVariables = Exact<{
  tutorID: Scalars['Float'];
  categoryID: Scalars['Float'];
}>;


export type CategoryToTutorMutation = (
  { __typename?: 'Mutation' }
  & { categoryToTutor: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'icon'>
    & { tutors?: Maybe<Array<(
      { __typename?: 'Tutor' }
      & Pick<Tutor, 'id' | 'description'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      )> }
    )>> }
  ) }
);

export type ChangeAvatarMutationVariables = Exact<{
  id: Scalars['Float'];
  avatar: Scalars['String'];
}>;


export type ChangeAvatarMutation = (
  { __typename?: 'Mutation' }
  & { changeAvatar: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'description' | 'email' | 'dateBirth' | 'sex' | 'country' | 'city' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { tutor?: Maybe<(
        { __typename?: 'Tutor' }
        & Pick<Tutor, 'id' | 'description'>
      )>, userPlatformAccount?: Maybe<Array<(
        { __typename?: 'UserPlatformAccount' }
        & { platform?: Maybe<(
          { __typename?: 'Platforms' }
          & Pick<Platforms, 'id' | 'name'>
        )> }
      )>> }
    )> }
  ) }
);

export type ChangeClassStatusMutationVariables = Exact<{
  id: Scalars['Float'];
  active: Scalars['Boolean'];
}>;


export type ChangeClassStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeClassStatus: (
    { __typename?: 'ClassesResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message'>
    )>>, classes?: Maybe<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'amountTimeTaught' | 'level' | 'active'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'time' | 'price'>
      )>>, users?: Maybe<Array<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      )>> }
    )> }
  ) }
);

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email'>
    )> }
  ) }
);

export type DeleteClassMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteClassMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteClass'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MakeOrderApprovedMutationVariables = Exact<{
  orderID: Scalars['String'];
}>;


export type MakeOrderApprovedMutation = (
  { __typename?: 'Mutation' }
  & { makeOrderApproved: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'date' | 'platformId' | 'classDuration' | 'userAccount' | 'classPrice' | 'isOrderAproved' | 'hasTutorConfirmedClassDone' | 'hasUserConfirmedClassDone' | 'isPaid' | 'paymentDetails' | 'createdAt' | 'updatedAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ), classes?: Maybe<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'description' | 'active' | 'level' | 'createdAt' | 'updatedAt'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'time' | 'price'>
      )>>, tutor?: Maybe<(
        { __typename?: 'Tutor' }
        & Pick<Tutor, 'id' | 'description'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        )> }
      )> }
    )> }
  ) }
);

export type MoreInfoUserMutationVariables = Exact<{
  id: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}>;


export type MoreInfoUserMutation = (
  { __typename?: 'Mutation' }
  & { addMoreInfo: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'description' | 'email' | 'dateBirth' | 'sex' | 'country' | 'city' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { tutor?: Maybe<(
        { __typename?: 'Tutor' }
        & Pick<Tutor, 'id' | 'description'>
      )>, userPlatformAccount?: Maybe<Array<(
        { __typename?: 'UserPlatformAccount' }
        & { platform?: Maybe<(
          { __typename?: 'Platforms' }
          & Pick<Platforms, 'id' | 'name'>
        )> }
      )>> }
    )> }
  ) }
);

export type NewClassMutationVariables = Exact<{
  tutorId: Scalars['Float'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
}>;


export type NewClassMutation = (
  { __typename?: 'Mutation' }
  & { newClass: (
    { __typename?: 'ClassesResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, classes?: Maybe<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'amountTimeTaught' | 'description'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'time' | 'price'>
      )>> }
    )> }
  ) }
);

export type NewOrderMutationVariables = Exact<{
  userID: Scalars['Float'];
  classID: Scalars['Int'];
  date: Scalars['String'];
  classDuration: Scalars['String'];
  classPrice: Scalars['Float'];
  platformId: Scalars['Int'];
}>;


export type NewOrderMutation = (
  { __typename?: 'Mutation' }
  & { createNewOrder: (
    { __typename?: 'OrderResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, order?: Maybe<(
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'date' | 'platformId' | 'classDuration' | 'userAccount' | 'classPrice' | 'isOrderAproved' | 'hasTutorConfirmedClassDone' | 'hasUserConfirmedClassDone' | 'isPaid' | 'paymentDetails' | 'createdAt' | 'updatedAt'>
      & { classes?: Maybe<(
        { __typename?: 'Classes' }
        & Pick<Classes, 'id' | 'name' | 'description' | 'active' | 'level' | 'createdAt' | 'updatedAt'>
        & { price?: Maybe<Array<(
          { __typename?: 'Price' }
          & Pick<Price, 'id' | 'time' | 'price'>
        )>>, tutor?: Maybe<(
          { __typename?: 'Tutor' }
          & Pick<Tutor, 'id' | 'description'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'name'>
          )> }
        )> }
      )> }
    )> }
  ) }
);

export type NewPriceMutationVariables = Exact<{
  classID: Scalars['Float'];
  time: Scalars['Int'];
  price: Scalars['Float'];
}>;


export type NewPriceMutation = (
  { __typename?: 'Mutation' }
  & { newPrice: (
    { __typename?: 'PriceResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, price?: Maybe<(
      { __typename?: 'Price' }
      & Pick<Price, 'id' | 'time'>
      & { classes?: Maybe<(
        { __typename?: 'Classes' }
        & Pick<Classes, 'id' | 'name'>
      )> }
    )> }
  ) }
);

export type NewTutorMutationVariables = Exact<{ [key: string]: never; }>;


export type NewTutorMutation = (
  { __typename?: 'Mutation' }
  & { newTutor: (
    { __typename?: 'TutorResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message'>
    )>>, tutor?: Maybe<(
      { __typename?: 'Tutor' }
      & Pick<Tutor, 'id' | 'description'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      )>, type?: Maybe<(
        { __typename?: 'TutorType' }
        & Pick<TutorType, 'id' | 'name'>
      )> }
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type RemoveCategoryFromTutorMutationVariables = Exact<{
  tutorID: Scalars['Float'];
  categoryID: Scalars['Float'];
}>;


export type RemoveCategoryFromTutorMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeCategoryFromTutor'>
);

export type UpdateClassMutationVariables = Exact<{
  id: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
}>;


export type UpdateClassMutation = (
  { __typename?: 'Mutation' }
  & { updateClass: (
    { __typename?: 'ClassesResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, classes?: Maybe<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'description' | 'amountTimeTaught' | 'active' | 'createdAt' | 'updatedAt'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'time' | 'price'>
      )>> }
    )> }
  ) }
);

export type UpdateTutorMutationVariables = Exact<{
  id: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
}>;


export type UpdateTutorMutation = (
  { __typename?: 'Mutation' }
  & { updateTutor: (
    { __typename?: 'TutorResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, tutor?: Maybe<(
      { __typename?: 'Tutor' }
      & Pick<Tutor, 'id' | 'description' | 'rating' | 'createdAt' | 'updatedAt'>
      & { categories?: Maybe<Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name' | 'icon'>
      )>>, user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'email' | 'sex' | 'country' | 'city' | 'avatar'>
        & { userPlatformAccount?: Maybe<Array<(
          { __typename?: 'UserPlatformAccount' }
          & { platform?: Maybe<(
            { __typename?: 'Platforms' }
            & Pick<Platforms, 'id' | 'name' | 'account'>
          )> }
        )>> }
      )>, type?: Maybe<(
        { __typename?: 'TutorType' }
        & Pick<TutorType, 'id' | 'name'>
      )>, classes?: Maybe<Array<(
        { __typename?: 'Classes' }
        & Pick<Classes, 'id' | 'name' | 'description' | 'amountTimeTaught' | 'level' | 'active' | 'createdAt' | 'updatedAt'>
        & { price?: Maybe<Array<(
          { __typename?: 'Price' }
          & Pick<Price, 'id' | 'price' | 'time'>
        )>> }
      )>> }
    )> }
  ) }
);

export type AllPlatformsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPlatformsQuery = (
  { __typename?: 'Query' }
  & { allPlatforms: Array<(
    { __typename?: 'Platforms' }
    & Pick<Platforms, 'id' | 'name' | 'icon'>
  )> }
);

export type AllTutorClassesQueryVariables = Exact<{
  tutorId: Scalars['Float'];
}>;


export type AllTutorClassesQuery = (
  { __typename?: 'Query' }
  & { allTutorClasses: Array<(
    { __typename?: 'Classes' }
    & Pick<Classes, 'id' | 'name' | 'description' | 'amountTimeTaught' | 'level' | 'active' | 'createdAt' | 'updatedAt'>
    & { price?: Maybe<Array<(
      { __typename?: 'Price' }
      & Pick<Price, 'id' | 'price' | 'time'>
    )>> }
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { allCategories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'icon'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'description' | 'email' | 'dateBirth' | 'sex' | 'country' | 'city' | 'avatar' | 'followersAmount' | 'createdAt' | 'updatedAt'>
    & { classes?: Maybe<Array<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'amountTimeTaught' | 'level'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'time' | 'price'>
      )>> }
    )>>, tutor?: Maybe<(
      { __typename?: 'Tutor' }
      & Pick<Tutor, 'id' | 'description'>
      & { classes?: Maybe<Array<(
        { __typename?: 'Classes' }
        & Pick<Classes, 'id' | 'name' | 'amountTimeTaught' | 'level'>
        & { price?: Maybe<Array<(
          { __typename?: 'Price' }
          & Pick<Price, 'id' | 'time' | 'price'>
        )>> }
      )>> }
    )>, userPlatformAccount?: Maybe<Array<(
      { __typename?: 'UserPlatformAccount' }
      & Pick<UserPlatformAccount, 'account'>
      & { platform?: Maybe<(
        { __typename?: 'Platforms' }
        & Pick<Platforms, 'id' | 'name'>
      )> }
    )>> }
  )> }
);

export type MeSimplifiedQueryVariables = Exact<{ [key: string]: never; }>;


export type MeSimplifiedQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'description' | 'email' | 'dateBirth' | 'sex' | 'country' | 'city' | 'avatar' | 'followersAmount' | 'createdAt' | 'updatedAt'>
    & { userPlatformAccount?: Maybe<Array<(
      { __typename?: 'UserPlatformAccount' }
      & Pick<UserPlatformAccount, 'account'>
      & { platform?: Maybe<(
        { __typename?: 'Platforms' }
        & Pick<Platforms, 'id' | 'name'>
      )> }
    )>> }
  )> }
);

export type OrderDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OrderDetailQuery = (
  { __typename?: 'Query' }
  & { orderDetail: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'date' | 'platformId' | 'classDuration' | 'userAccount' | 'classPrice' | 'isOrderAproved' | 'hasTutorConfirmedClassDone' | 'hasUserConfirmedClassDone' | 'isPaid' | 'paymentDetails' | 'createdAt' | 'updatedAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ), classes?: Maybe<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'description' | 'active' | 'level' | 'createdAt' | 'updatedAt'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'time' | 'price'>
      )>>, tutor?: Maybe<(
        { __typename?: 'Tutor' }
        & Pick<Tutor, 'id' | 'description'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        )> }
      )> }
    )> }
  ) }
);

export type SingleClassQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type SingleClassQuery = (
  { __typename?: 'Query' }
  & { singleClass: (
    { __typename?: 'Classes' }
    & Pick<Classes, 'id' | 'name' | 'description' | 'amountTimeTaught' | 'level'>
    & { price?: Maybe<Array<(
      { __typename?: 'Price' }
      & Pick<Price, 'id' | 'price' | 'time'>
    )>>, tutor?: Maybe<(
      { __typename?: 'Tutor' }
      & Pick<Tutor, 'id'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'name' | 'avatar' | 'email'>
      )> }
    )> }
  ) }
);

export type SingleTutorQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type SingleTutorQuery = (
  { __typename?: 'Query' }
  & { singleTutor: (
    { __typename?: 'TutorResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message'>
    )>>, tutor?: Maybe<(
      { __typename?: 'Tutor' }
      & Pick<Tutor, 'id' | 'description' | 'rating' | 'createdAt' | 'updatedAt'>
      & { categories?: Maybe<Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name' | 'icon'>
      )>>, user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'email' | 'sex' | 'country' | 'city' | 'avatar'>
        & { userPlatformAccount?: Maybe<Array<(
          { __typename?: 'UserPlatformAccount' }
          & { platform?: Maybe<(
            { __typename?: 'Platforms' }
            & Pick<Platforms, 'id' | 'name' | 'account' | 'icon'>
          )> }
        )>> }
      )>, type?: Maybe<(
        { __typename?: 'TutorType' }
        & Pick<TutorType, 'id' | 'name'>
      )>, classes?: Maybe<Array<(
        { __typename?: 'Classes' }
        & Pick<Classes, 'id' | 'name' | 'description' | 'amountTimeTaught' | 'level' | 'active' | 'createdAt' | 'updatedAt'>
        & { price?: Maybe<Array<(
          { __typename?: 'Price' }
          & Pick<Price, 'id' | 'price' | 'time'>
        )>> }
      )>> }
    )> }
  ) }
);

export type TutorFeedbackQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type TutorFeedbackQuery = (
  { __typename?: 'Query' }
  & { getTutorFeedbacks: Array<(
    { __typename?: 'Feedback' }
    & Pick<Feedback, 'id' | 'rating' | 'content' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'avatar'>
    ) }
  )> }
);

export type TutorOrdersAwaitingApprovalQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type TutorOrdersAwaitingApprovalQuery = (
  { __typename?: 'Query' }
  & { ordersTutorAwaitingApproval: Array<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'date' | 'platformId' | 'classDuration' | 'userAccount' | 'classPrice' | 'isOrderAproved' | 'hasTutorConfirmedClassDone' | 'hasUserConfirmedClassDone' | 'isPaid' | 'paymentDetails' | 'createdAt' | 'updatedAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ), classes?: Maybe<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'description' | 'active' | 'level' | 'createdAt' | 'updatedAt'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'time' | 'price'>
      )>>, tutor?: Maybe<(
        { __typename?: 'Tutor' }
        & Pick<Tutor, 'id' | 'description'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type TutorsQueryVariables = Exact<{
  limit: Scalars['Int'];
  page: Scalars['Int'];
  order?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  type?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  country?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type TutorsQuery = (
  { __typename?: 'Query' }
  & { allTutors: Array<(
    { __typename?: 'Tutor' }
    & Pick<Tutor, 'id' | 'description' | 'rating' | 'amountClasses' | 'amountStudents'>
    & { type?: Maybe<(
      { __typename?: 'TutorType' }
      & Pick<TutorType, 'id' | 'name'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email' | 'sex' | 'country' | 'city' | 'avatar'>
      & { userPlatformAccount?: Maybe<Array<(
        { __typename?: 'UserPlatformAccount' }
        & { platform?: Maybe<(
          { __typename?: 'Platforms' }
          & Pick<Platforms, 'id' | 'name' | 'account'>
        )> }
      )>> }
    )>, classes?: Maybe<Array<(
      { __typename?: 'Classes' }
      & Pick<Classes, 'id' | 'name' | 'description' | 'active' | 'amountTimeTaught'>
      & { price?: Maybe<Array<(
        { __typename?: 'Price' }
        & Pick<Price, 'id' | 'price' | 'time'>
      )>> }
    )>>, categories?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name' | 'icon'>
    )>> }
  )> }
);

export type AllTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTypesQuery = (
  { __typename?: 'Query' }
  & { allTypes: Array<(
    { __typename?: 'TutorType' }
    & Pick<TutorType, 'id' | 'name' | 'rules'>
  )> }
);

export type UserOrdersQueryVariables = Exact<{
  id: Scalars['Float'];
  page: Scalars['Int'];
}>;


export type UserOrdersQuery = (
  { __typename?: 'Query' }
  & { getUserOrders: (
    { __typename?: 'OrderDetailsAmount' }
    & Pick<OrderDetailsAmount, 'amount'>
    & { order?: Maybe<Array<(
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'date' | 'platformId' | 'classDuration' | 'userAccount' | 'classPrice' | 'isOrderAproved' | 'hasTutorConfirmedClassDone' | 'hasUserConfirmedClassDone' | 'isPaid' | 'paymentDetails' | 'createdAt' | 'updatedAt'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ), classes?: Maybe<(
        { __typename?: 'Classes' }
        & Pick<Classes, 'id' | 'name' | 'description' | 'active' | 'level' | 'createdAt' | 'updatedAt'>
        & { price?: Maybe<Array<(
          { __typename?: 'Price' }
          & Pick<Price, 'id' | 'time' | 'price'>
        )>>, tutor?: Maybe<(
          { __typename?: 'Tutor' }
          & Pick<Tutor, 'id' | 'description'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'name'>
          )> }
        )> }
      )> }
    )>> }
  ) }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
  tutor {
    id
  }
}
    `;
export const AllCategoriesTutorDocument = gql`
    query AllCategoriesTutor($id: Float!) {
  allCategoriesTutor(tutorID: $id) {
    id
    name
    icon
  }
}
    `;

export function useAllCategoriesTutorQuery(options: Omit<Urql.UseQueryArgs<AllCategoriesTutorQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllCategoriesTutorQuery>({ query: AllCategoriesTutorDocument, ...options });
};
export const CategoryToTutorDocument = gql`
    mutation CategoryToTutor($tutorID: Float!, $categoryID: Float!) {
  categoryToTutor(tutorID: $tutorID, categoryID: $categoryID) {
    id
    name
    icon
    tutors {
      id
      description
      user {
        id
        name
      }
    }
  }
}
    `;

export function useCategoryToTutorMutation() {
  return Urql.useMutation<CategoryToTutorMutation, CategoryToTutorMutationVariables>(CategoryToTutorDocument);
};
export const ChangeAvatarDocument = gql`
    mutation changeAvatar($id: Float!, $avatar: String!) {
  changeAvatar(id: $id, avatar: $avatar) {
    errors {
      field
      message
    }
    user {
      id
      name
      description
      email
      dateBirth
      sex
      country
      city
      avatar
      tutor {
        id
        description
      }
      userPlatformAccount {
        platform {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
}
    `;

export function useChangeAvatarMutation() {
  return Urql.useMutation<ChangeAvatarMutation, ChangeAvatarMutationVariables>(ChangeAvatarDocument);
};
export const ChangeClassStatusDocument = gql`
    mutation changeClassStatus($id: Float!, $active: Boolean!) {
  changeClassStatus(classID: $id, active: $active) {
    errors {
      message
    }
    classes {
      id
      name
      amountTimeTaught
      level
      active
      price {
        id
        time
        price
      }
      users {
        id
        name
      }
    }
  }
}
    `;

export function useChangeClassStatusMutation() {
  return Urql.useMutation<ChangeClassStatusMutation, ChangeClassStatusMutationVariables>(ChangeClassStatusDocument);
};
export const ChangePasswordDocument = gql`
    mutation changePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    errors {
      field
      message
    }
    user {
      id
      name
      email
    }
  }
}
    `;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const DeleteClassDocument = gql`
    mutation DeleteClass($id: Float!) {
  deleteClass(id: $id)
}
    `;

export function useDeleteClassMutation() {
  return Urql.useMutation<DeleteClassMutation, DeleteClassMutationVariables>(DeleteClassDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const MakeOrderApprovedDocument = gql`
    mutation MakeOrderApproved($orderID: String!) {
  makeOrderApproved(orderID: $orderID) {
    id
    user {
      id
      name
    }
    classes {
      id
      name
      description
      active
      level
      price {
        id
        time
        price
      }
      tutor {
        id
        description
        user {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
    date
    platformId
    classDuration
    userAccount
    classPrice
    isOrderAproved
    hasTutorConfirmedClassDone
    hasUserConfirmedClassDone
    isPaid
    paymentDetails
    createdAt
    updatedAt
  }
}
    `;

export function useMakeOrderApprovedMutation() {
  return Urql.useMutation<MakeOrderApprovedMutation, MakeOrderApprovedMutationVariables>(MakeOrderApprovedDocument);
};
export const MoreInfoUserDocument = gql`
    mutation MoreInfoUser($id: Float!, $description: String, $country: String, $name: String) {
  addMoreInfo(
    id: $id
    options: {description: $description, country: $country, name: $name}
  ) {
    errors {
      field
      message
    }
    user {
      id
      name
      description
      email
      dateBirth
      sex
      country
      city
      avatar
      tutor {
        id
        description
      }
      userPlatformAccount {
        platform {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
}
    `;

export function useMoreInfoUserMutation() {
  return Urql.useMutation<MoreInfoUserMutation, MoreInfoUserMutationVariables>(MoreInfoUserDocument);
};
export const NewClassDocument = gql`
    mutation NewClass($tutorId: Float!, $name: String!, $description: String, $level: String) {
  newClass(
    tutorID: $tutorId
    options: {name: $name, description: $description, level: $level}
  ) {
    errors {
      field
      message
    }
    classes {
      id
      price {
        id
        time
        price
      }
      name
      amountTimeTaught
      description
    }
  }
}
    `;

export function useNewClassMutation() {
  return Urql.useMutation<NewClassMutation, NewClassMutationVariables>(NewClassDocument);
};
export const NewOrderDocument = gql`
    mutation NewOrder($userID: Float!, $classID: Int!, $date: String!, $classDuration: String!, $classPrice: Float!, $platformId: Int!) {
  createNewOrder(
    userID: $userID
    options: {classID: $classID, date: $date, classDuration: $classDuration, classPrice: $classPrice, platformId: $platformId, userAccount: ""}
  ) {
    errors {
      field
      message
    }
    order {
      id
      date
      platformId
      classDuration
      userAccount
      classPrice
      classes {
        id
        name
        description
        active
        level
        price {
          id
          time
          price
        }
        tutor {
          id
          description
          user {
            id
            name
          }
        }
        createdAt
        updatedAt
      }
      isOrderAproved
      hasTutorConfirmedClassDone
      hasUserConfirmedClassDone
      isPaid
      paymentDetails
      createdAt
      updatedAt
    }
  }
}
    `;

export function useNewOrderMutation() {
  return Urql.useMutation<NewOrderMutation, NewOrderMutationVariables>(NewOrderDocument);
};
export const NewPriceDocument = gql`
    mutation NewPrice($classID: Float!, $time: Int!, $price: Float!) {
  newPrice(
    classID: $classID
    options: {time: $time, price: $price, isPromotionalCode: false, discountAmount: 0}
  ) {
    errors {
      field
      message
    }
    price {
      id
      time
      classes {
        id
        name
      }
    }
  }
}
    `;

export function useNewPriceMutation() {
  return Urql.useMutation<NewPriceMutation, NewPriceMutationVariables>(NewPriceDocument);
};
export const NewTutorDocument = gql`
    mutation newTutor {
  newTutor(options: {description: "", type: 1}) {
    errors {
      message
    }
    tutor {
      id
      description
      user {
        id
        name
      }
      type {
        id
        name
      }
    }
  }
}
    `;

export function useNewTutorMutation() {
  return Urql.useMutation<NewTutorMutation, NewTutorMutationVariables>(NewTutorDocument);
};
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $name: String!) {
  signup(options: {email: $email, password: $password, name: $name}) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const RemoveCategoryFromTutorDocument = gql`
    mutation removeCategoryFromTutor($tutorID: Float!, $categoryID: Float!) {
  removeCategoryFromTutor(tutorID: $tutorID, categoryID: $categoryID)
}
    `;

export function useRemoveCategoryFromTutorMutation() {
  return Urql.useMutation<RemoveCategoryFromTutorMutation, RemoveCategoryFromTutorMutationVariables>(RemoveCategoryFromTutorDocument);
};
export const UpdateClassDocument = gql`
    mutation UpdateClass($id: Float!, $name: String, $description: String, $level: String) {
  updateClass(
    classID: $id
    options: {name: $name, description: $description, level: $level}
  ) {
    errors {
      field
      message
    }
    classes {
      id
      name
      description
      amountTimeTaught
      active
      price {
        id
        time
        price
      }
      createdAt
      updatedAt
    }
  }
}
    `;

export function useUpdateClassMutation() {
  return Urql.useMutation<UpdateClassMutation, UpdateClassMutationVariables>(UpdateClassDocument);
};
export const UpdateTutorDocument = gql`
    mutation UpdateTutor($id: Float!, $description: String) {
  updateTutor(id: $id, options: {description: $description}) {
    errors {
      field
      message
    }
    tutor {
      id
      description
      rating
      categories {
        id
        name
        icon
      }
      user {
        id
        name
        email
        sex
        country
        city
        avatar
        userPlatformAccount {
          platform {
            id
            name
            account
          }
        }
      }
      type {
        id
        name
      }
      classes {
        id
        name
        description
        amountTimeTaught
        level
        active
        price {
          id
          price
          time
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
}
    `;

export function useUpdateTutorMutation() {
  return Urql.useMutation<UpdateTutorMutation, UpdateTutorMutationVariables>(UpdateTutorDocument);
};
export const AllPlatformsDocument = gql`
    query AllPlatforms {
  allPlatforms {
    id
    name
    icon
  }
}
    `;

export function useAllPlatformsQuery(options: Omit<Urql.UseQueryArgs<AllPlatformsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllPlatformsQuery>({ query: AllPlatformsDocument, ...options });
};
export const AllTutorClassesDocument = gql`
    query AllTutorClasses($tutorId: Float!) {
  allTutorClasses(tutorId: $tutorId) {
    id
    name
    description
    amountTimeTaught
    level
    active
    price {
      id
      price
      time
    }
    createdAt
    updatedAt
  }
}
    `;

export function useAllTutorClassesQuery(options: Omit<Urql.UseQueryArgs<AllTutorClassesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllTutorClassesQuery>({ query: AllTutorClassesDocument, ...options });
};
export const CategoriesDocument = gql`
    query Categories {
  allCategories {
    id
    name
    icon
  }
}
    `;

export function useCategoriesQuery(options: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CategoriesQuery>({ query: CategoriesDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    description
    email
    dateBirth
    sex
    country
    city
    avatar
    followersAmount
    classes {
      id
      name
      amountTimeTaught
      level
      price {
        id
        time
        price
      }
    }
    tutor {
      id
      description
      classes {
        id
        name
        amountTimeTaught
        level
        price {
          id
          time
          price
        }
      }
    }
    userPlatformAccount {
      account
      platform {
        id
        name
      }
    }
    createdAt
    updatedAt
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const MeSimplifiedDocument = gql`
    query MeSimplified {
  me {
    id
    name
    description
    email
    dateBirth
    sex
    country
    city
    avatar
    followersAmount
    userPlatformAccount {
      account
      platform {
        id
        name
      }
    }
    createdAt
    updatedAt
  }
}
    `;

export function useMeSimplifiedQuery(options: Omit<Urql.UseQueryArgs<MeSimplifiedQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeSimplifiedQuery>({ query: MeSimplifiedDocument, ...options });
};
export const OrderDetailDocument = gql`
    query OrderDetail($id: String!) {
  orderDetail(id: $id) {
    id
    user {
      id
      name
    }
    date
    platformId
    classDuration
    userAccount
    classPrice
    isOrderAproved
    classes {
      id
      name
      description
      active
      level
      price {
        id
        time
        price
      }
      tutor {
        id
        description
        user {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
    hasTutorConfirmedClassDone
    hasUserConfirmedClassDone
    isPaid
    paymentDetails
    createdAt
    updatedAt
  }
}
    `;

export function useOrderDetailQuery(options: Omit<Urql.UseQueryArgs<OrderDetailQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrderDetailQuery>({ query: OrderDetailDocument, ...options });
};
export const SingleClassDocument = gql`
    query SingleClass($id: Float!) {
  singleClass(id: $id) {
    id
    name
    description
    amountTimeTaught
    level
    price {
      id
      price
      time
    }
    tutor {
      id
      user {
        name
        avatar
        email
      }
    }
  }
}
    `;

export function useSingleClassQuery(options: Omit<Urql.UseQueryArgs<SingleClassQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SingleClassQuery>({ query: SingleClassDocument, ...options });
};
export const SingleTutorDocument = gql`
    query SingleTutor($id: Float!) {
  singleTutor(id: $id) {
    errors {
      message
    }
    tutor {
      id
      description
      rating
      categories {
        id
        name
        icon
      }
      user {
        id
        name
        email
        sex
        country
        city
        avatar
        userPlatformAccount {
          platform {
            id
            name
            account
            icon
          }
        }
      }
      type {
        id
        name
      }
      classes {
        id
        name
        description
        amountTimeTaught
        level
        active
        price {
          id
          price
          time
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
}
    `;

export function useSingleTutorQuery(options: Omit<Urql.UseQueryArgs<SingleTutorQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SingleTutorQuery>({ query: SingleTutorDocument, ...options });
};
export const TutorFeedbackDocument = gql`
    query TutorFeedback($id: Float!) {
  getTutorFeedbacks(id: $id) {
    id
    rating
    content
    createdAt
    user {
      id
      name
      avatar
    }
  }
}
    `;

export function useTutorFeedbackQuery(options: Omit<Urql.UseQueryArgs<TutorFeedbackQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TutorFeedbackQuery>({ query: TutorFeedbackDocument, ...options });
};
export const TutorOrdersAwaitingApprovalDocument = gql`
    query TutorOrdersAwaitingApproval($id: Float!) {
  ordersTutorAwaitingApproval(tutorId: $id) {
    id
    user {
      id
      name
    }
    classes {
      id
      name
      description
      active
      level
      price {
        id
        time
        price
      }
      tutor {
        id
        description
        user {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
    date
    platformId
    classDuration
    userAccount
    classPrice
    isOrderAproved
    hasTutorConfirmedClassDone
    hasUserConfirmedClassDone
    isPaid
    paymentDetails
    createdAt
    updatedAt
  }
}
    `;

export function useTutorOrdersAwaitingApprovalQuery(options: Omit<Urql.UseQueryArgs<TutorOrdersAwaitingApprovalQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TutorOrdersAwaitingApprovalQuery>({ query: TutorOrdersAwaitingApprovalDocument, ...options });
};
export const TutorsDocument = gql`
    query Tutors($limit: Int!, $page: Int!, $order: String, $category: [String!], $type: [String!], $country: [String!]) {
  allTutors(
    limit: $limit
    page: $page
    order: $order
    type: $type
    category: $category
    country: $country
  ) {
    id
    description
    type {
      id
      name
    }
    rating
    amountClasses
    amountStudents
    user {
      id
      name
      email
      sex
      country
      city
      avatar
      userPlatformAccount {
        platform {
          id
          name
          account
        }
      }
    }
    classes {
      id
      name
      description
      active
      amountTimeTaught
      price {
        id
        price
        time
      }
    }
    categories {
      id
      name
      icon
    }
  }
}
    `;

export function useTutorsQuery(options: Omit<Urql.UseQueryArgs<TutorsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TutorsQuery>({ query: TutorsDocument, ...options });
};
export const AllTypesDocument = gql`
    query AllTypes {
  allTypes {
    id
    name
    rules
  }
}
    `;

export function useAllTypesQuery(options: Omit<Urql.UseQueryArgs<AllTypesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllTypesQuery>({ query: AllTypesDocument, ...options });
};
export const UserOrdersDocument = gql`
    query UserOrders($id: Float!, $page: Int!) {
  getUserOrders(userID: $id, page: $page) {
    amount
    order {
      id
      user {
        id
        name
      }
      classes {
        id
        name
        description
        active
        level
        price {
          id
          time
          price
        }
        tutor {
          id
          description
          user {
            id
            name
          }
        }
        createdAt
        updatedAt
      }
      date
      platformId
      classDuration
      userAccount
      classPrice
      isOrderAproved
      hasTutorConfirmedClassDone
      hasUserConfirmedClassDone
      isPaid
      paymentDetails
      createdAt
      updatedAt
    }
  }
}
    `;

export function useUserOrdersQuery(options: Omit<Urql.UseQueryArgs<UserOrdersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserOrdersQuery>({ query: UserOrdersDocument, ...options });
};