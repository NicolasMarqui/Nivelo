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
  allTutors: Array<Tutor>;
  allTutorsByCategory: Array<Category>;
  singleTutor: TutorResponse;
  allTypes: Array<TutorType>;
  allClasses: Array<Classes>;
  singleClass: Classes;
  allPrices: Array<Price>;
  allCategories: Array<Category>;
  allPlatforms: Array<Platforms>;
  allPlatformAccount: Array<UserPlatformAccount>;
  getSingleAccount: Array<UserPlatformAccount>;
  getTutorFeedbacks: Array<Feedback>;
};


export type QuerySingleUserArgs = {
  id: Scalars['Float'];
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


export type QueryGetSingleAccountArgs = {
  id: Scalars['Float'];
};


export type QueryGetTutorFeedbacksArgs = {
  id: Scalars['Float'];
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

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  signup: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  addMoreInfo: UserResponse;
  newTutor: TutorResponse;
  deleteTutor: Scalars['Boolean'];
  updateTutor: TutorResponse;
  deleteAccount: Scalars['Boolean'];
  typeToTutor: TutorResponse;
  addAvailableDate: TutorResponse;
  addType: TypeResponse;
  newClass: ClassesResponse;
  updateClass: ClassesResponse;
  deleteClass: Scalars['Boolean'];
  priceToClasses: Classes;
  userToClass: ClassesResponse;
  newPrice: Price;
  updatePrice: PriceResponse;
  deletePrice: Scalars['Boolean'];
  newCategory: CategoryResponse;
  categoryToTutor: Category;
  updateCategory: Category;
  deleteCategory: Scalars['Boolean'];
  newPlatform: PlatformsResponse;
  addPlatformUser: Scalars['Boolean'];
  updatePlatformUser: UserPlatformAccount;
  newFeedback: FeedbackResponse;
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
  dateBirth?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
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

export type PriceInput = {
  time?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  isPromotionalCode: Scalars['Boolean'];
  discountAmount?: Maybe<Scalars['Int']>;
};

export type PriceResponse = {
  __typename?: 'PriceResponse';
  errors?: Maybe<Array<FieldError>>;
  price?: Maybe<Price>;
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

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email'>
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

export type MoreInfoUserMutationVariables = Exact<{
  id: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
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
        & Pick<Classes, 'id' | 'name' | 'description' | 'amountTimeTaught'>
        & { price?: Maybe<Array<(
          { __typename?: 'Price' }
          & Pick<Price, 'id' | 'price' | 'time'>
        )>> }
      )>>, categories?: Maybe<Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name' | 'icon'>
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
      & Pick<Classes, 'id' | 'name' | 'description' | 'amountTimeTaught'>
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

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
}
    `;
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
export const MoreInfoUserDocument = gql`
    mutation MoreInfoUser($id: Float!, $description: String, $avatar: String, $country: String) {
  addMoreInfo(
    id: $id
    options: {description: $description, avatar: $avatar, country: $country}
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
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
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