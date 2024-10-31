// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { HelloGetResponse } from './types.gen';

/**
 * Hello
 * @returns string Successful Response
 * @throws ApiError
 */
export const helloGet = (): CancelablePromise<HelloGetResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/'
}); };