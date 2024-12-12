/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.35
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { A500GetUserData } from './A500GetUserData';
import {
    A500GetUserDataFromJSON,
    A500GetUserDataFromJSONTyped,
    A500GetUserDataToJSON,
} from './A500GetUserData';

/**
 * 
 * @export
 * @interface A500GetUserResponse
 */
export interface A500GetUserResponse {
    /**
     * 
     * @type {A500GetUserData}
     * @memberof A500GetUserResponse
     */
    user: A500GetUserData;
    /**
     * 
     * @type {string}
     * @memberof A500GetUserResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof A500GetUserResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the A500GetUserResponse interface.
 */
export function instanceOfA500GetUserResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function A500GetUserResponseFromJSON(json: any): A500GetUserResponse {
    return A500GetUserResponseFromJSONTyped(json, false);
}

export function A500GetUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500GetUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': A500GetUserDataFromJSON(json['user']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function A500GetUserResponseToJSON(value?: A500GetUserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': A500GetUserDataToJSON(value.user),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

