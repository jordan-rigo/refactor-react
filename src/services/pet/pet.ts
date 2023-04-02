/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.17
 */
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  Pet,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  UpdatePetWithFormParams,
  ApiResponse,
  UploadFileParams
} from '.././model'
import { customInstance } from '../../../axios.config';
import type { ErrorType } from '../../../axios.config';


/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const updatePet = (
    pet: Pet,
 ) => {
      return customInstance<Pet>(
      {url: `/pet`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: pet
    },
      );
    }
  


    export type UpdatePetMutationResult = NonNullable<Awaited<ReturnType<typeof updatePet>>>
    export type UpdatePetMutationBody = Pet
    export type UpdatePetMutationError = ErrorType<void>

    export const useUpdatePet = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePet>>, TError,{data: Pet}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updatePet>>, {data: Pet}> = (props) => {
          const {data} = props ?? {};

          return  updatePet(data,)
        }

        

      return useMutation<Awaited<ReturnType<typeof updatePet>>, TError, {data: Pet}, TContext>(mutationFn, mutationOptions);
    }
    /**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const addPet = (
    pet: Pet,
 ) => {
      return customInstance<Pet>(
      {url: `/pet`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: pet
    },
      );
    }
  


    export type AddPetMutationResult = NonNullable<Awaited<ReturnType<typeof addPet>>>
    export type AddPetMutationBody = Pet
    export type AddPetMutationError = ErrorType<void>

    export const useAddPet = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof addPet>>, TError,{data: Pet}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof addPet>>, {data: Pet}> = (props) => {
          const {data} = props ?? {};

          return  addPet(data,)
        }

        

      return useMutation<Awaited<ReturnType<typeof addPet>>, TError, {data: Pet}, TContext>(mutationFn, mutationOptions);
    }
    /**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (
    params?: FindPetsByStatusParams,
 signal?: AbortSignal
) => {
      return customInstance<Pet[]>(
      {url: `/pet/findByStatus`, method: 'get',
        params, signal
    },
      );
    }
  

export const getFindPetsByStatusQueryKey = (params?: FindPetsByStatusParams,) => [`/pet/findByStatus`, ...(params ? [params]: [])];

    
export type FindPetsByStatusQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByStatus>>>
export type FindPetsByStatusQueryError = ErrorType<void>

export const useFindPetsByStatus = <TData = Awaited<ReturnType<typeof findPetsByStatus>>, TError = ErrorType<void>>(
 params?: FindPetsByStatusParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getFindPetsByStatusQueryKey(params);

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof findPetsByStatus>>> = ({ signal }) => findPetsByStatus(params, signal);


  

  const query = useQuery<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>({ queryKey, queryFn, ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (
    params?: FindPetsByTagsParams,
 signal?: AbortSignal
) => {
      return customInstance<Pet[]>(
      {url: `/pet/findByTags`, method: 'get',
        params, signal
    },
      );
    }
  

export const getFindPetsByTagsQueryKey = (params?: FindPetsByTagsParams,) => [`/pet/findByTags`, ...(params ? [params]: [])];

    
export type FindPetsByTagsQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByTags>>>
export type FindPetsByTagsQueryError = ErrorType<void>

export const useFindPetsByTags = <TData = Awaited<ReturnType<typeof findPetsByTags>>, TError = ErrorType<void>>(
 params?: FindPetsByTagsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getFindPetsByTagsQueryKey(params);

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof findPetsByTags>>> = ({ signal }) => findPetsByTags(params, signal);


  

  const query = useQuery<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>({ queryKey, queryFn, ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = (
    petId: number,
 signal?: AbortSignal
) => {
      return customInstance<Pet>(
      {url: `/pet/${petId}`, method: 'get', signal
    },
      );
    }
  

export const getGetPetByIdQueryKey = (petId: number,) => [`/pet/${petId}`];

    
export type GetPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getPetById>>>
export type GetPetByIdQueryError = ErrorType<void>

export const useGetPetById = <TData = Awaited<ReturnType<typeof getPetById>>, TError = ErrorType<void>>(
 petId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPetByIdQueryKey(petId);

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPetById>>> = ({ signal }) => getPetById(petId, signal);


  

  const query = useQuery<Awaited<ReturnType<typeof getPetById>>, TError, TData>({ queryKey, queryFn, enabled: !!(petId), ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
    petId: number,
    params?: UpdatePetWithFormParams,
 ) => {
      return customInstance<unknown>(
      {url: `/pet/${petId}`, method: 'post',
        params
    },
      );
    }
  


    export type UpdatePetWithFormMutationResult = NonNullable<Awaited<ReturnType<typeof updatePetWithForm>>>
    
    export type UpdatePetWithFormMutationError = ErrorType<void>

    export const useUpdatePetWithForm = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePetWithForm>>, TError,{petId: number;params?: UpdatePetWithFormParams}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updatePetWithForm>>, {petId: number;params?: UpdatePetWithFormParams}> = (props) => {
          const {petId,params} = props ?? {};

          return  updatePetWithForm(petId,params,)
        }

        

      return useMutation<Awaited<ReturnType<typeof updatePetWithForm>>, TError, {petId: number;params?: UpdatePetWithFormParams}, TContext>(mutationFn, mutationOptions);
    }
    /**
 * @summary Deletes a pet
 */
export const deletePet = (
    petId: number,
 ) => {
      return customInstance<unknown>(
      {url: `/pet/${petId}`, method: 'delete'
    },
      );
    }
  


    export type DeletePetMutationResult = NonNullable<Awaited<ReturnType<typeof deletePet>>>
    
    export type DeletePetMutationError = ErrorType<void>

    export const useDeletePet = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deletePet>>, TError,{petId: number}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deletePet>>, {petId: number}> = (props) => {
          const {petId} = props ?? {};

          return  deletePet(petId,)
        }

        

      return useMutation<Awaited<ReturnType<typeof deletePet>>, TError, {petId: number}, TContext>(mutationFn, mutationOptions);
    }
    /**
 * @summary uploads an image
 */
export const uploadFile = (
    petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams,
 ) => {
      return customInstance<ApiResponse>(
      {url: `/pet/${petId}/uploadImage`, method: 'post',
      headers: {'Content-Type': 'application/octet-stream', },
      data: uploadFileBody,
        params
    },
      );
    }
  


    export type UploadFileMutationResult = NonNullable<Awaited<ReturnType<typeof uploadFile>>>
    export type UploadFileMutationBody = Blob
    export type UploadFileMutationError = ErrorType<unknown>

    export const useUploadFile = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof uploadFile>>, TError,{petId: number;data: Blob;params?: UploadFileParams}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof uploadFile>>, {petId: number;data: Blob;params?: UploadFileParams}> = (props) => {
          const {petId,data,params} = props ?? {};

          return  uploadFile(petId,data,params,)
        }

        

      return useMutation<Awaited<ReturnType<typeof uploadFile>>, TError, {petId: number;data: Blob;params?: UploadFileParams}, TContext>(mutationFn, mutationOptions);
    }
    