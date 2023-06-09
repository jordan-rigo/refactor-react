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
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'

export const getUpdatePetMock = () => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.random.word(), category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), photoUrls: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), tags: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])})), undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined])})

export const getAddPetMock = () => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.random.word(), category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), photoUrls: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), tags: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])})), undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined])})

export const getFindPetsByStatusMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.random.word(), category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), photoUrls: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), tags: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])})), undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined])})))

export const getFindPetsByTagsMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.random.word(), category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), photoUrls: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), tags: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])})), undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined])})))

export const getGetPetByIdMock = () => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.random.word(), category: faker.helpers.arrayElement([{id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), photoUrls: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), tags: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined])})), undefined]), status: faker.helpers.arrayElement([faker.helpers.arrayElement(['available','pending','sold']), undefined])})

export const getUploadFileMock = () => ({code: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), type: faker.helpers.arrayElement([faker.random.word(), undefined]), message: faker.helpers.arrayElement([faker.random.word(), undefined])})

export const getPetMSW = () => [
rest.put('*/pet', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUpdatePetMock()),
        )
      }),rest.post('*/pet', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAddPetMock()),
        )
      }),rest.get('*/pet/findByStatus', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getFindPetsByStatusMock()),
        )
      }),rest.get('*/pet/findByTags', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getFindPetsByTagsMock()),
        )
      }),rest.get('*/pet/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetPetByIdMock()),
        )
      }),rest.post('*/pet/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.delete('*/pet/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/pet/:petId/uploadImage', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUploadFileMock()),
        )
      }),]
