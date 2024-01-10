/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {UserData}
     * @memberof UserResponse
     */
    user: UserData;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the UserResponse interface.
 */
export function instanceOfUserResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function UserResponseFromJSON(json: any): UserResponse {
    return UserResponseFromJSONTyped(json, false);
}

export function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserDataFromJSON(json['user']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function UserResponseToJSON(value?: UserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserDataToJSON(value.user),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

