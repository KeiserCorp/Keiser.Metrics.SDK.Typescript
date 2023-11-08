/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserApplicationAuthorizationData } from './UserApplicationAuthorizationData';
import {
    UserApplicationAuthorizationDataFromJSON,
    UserApplicationAuthorizationDataFromJSONTyped,
    UserApplicationAuthorizationDataToJSON,
} from './UserApplicationAuthorizationData';

/**
 * 
 * @export
 * @interface UserApplicationAuthorizationResponse
 */
export interface UserApplicationAuthorizationResponse {
    /**
     * 
     * @type {UserApplicationAuthorizationData}
     * @memberof UserApplicationAuthorizationResponse
     */
    userApplicationAuthorization: UserApplicationAuthorizationData;
    /**
     * 
     * @type {string}
     * @memberof UserApplicationAuthorizationResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserApplicationAuthorizationResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the UserApplicationAuthorizationResponse interface.
 */
export function instanceOfUserApplicationAuthorizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userApplicationAuthorization" in value;

    return isInstance;
}

export function UserApplicationAuthorizationResponseFromJSON(json: any): UserApplicationAuthorizationResponse {
    return UserApplicationAuthorizationResponseFromJSONTyped(json, false);
}

export function UserApplicationAuthorizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApplicationAuthorizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userApplicationAuthorization': UserApplicationAuthorizationDataFromJSON(json['userApplicationAuthorization']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function UserApplicationAuthorizationResponseToJSON(value?: UserApplicationAuthorizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userApplicationAuthorization': UserApplicationAuthorizationDataToJSON(value.userApplicationAuthorization),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

