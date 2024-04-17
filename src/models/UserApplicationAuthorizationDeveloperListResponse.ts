/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.29
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
import type { UserApplicationAuthorizationMeta } from './UserApplicationAuthorizationMeta';
import {
    UserApplicationAuthorizationMetaFromJSON,
    UserApplicationAuthorizationMetaFromJSONTyped,
    UserApplicationAuthorizationMetaToJSON,
} from './UserApplicationAuthorizationMeta';

/**
 * 
 * @export
 * @interface UserApplicationAuthorizationDeveloperListResponse
 */
export interface UserApplicationAuthorizationDeveloperListResponse {
    /**
     * 
     * @type {Array<UserApplicationAuthorizationData>}
     * @memberof UserApplicationAuthorizationDeveloperListResponse
     */
    userApplicationAuthorizations: Array<UserApplicationAuthorizationData>;
    /**
     * 
     * @type {UserApplicationAuthorizationMeta}
     * @memberof UserApplicationAuthorizationDeveloperListResponse
     */
    userApplicationAuthorizationsMeta: UserApplicationAuthorizationMeta;
}

/**
 * Check if a given object implements the UserApplicationAuthorizationDeveloperListResponse interface.
 */
export function instanceOfUserApplicationAuthorizationDeveloperListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userApplicationAuthorizations" in value;
    isInstance = isInstance && "userApplicationAuthorizationsMeta" in value;

    return isInstance;
}

export function UserApplicationAuthorizationDeveloperListResponseFromJSON(json: any): UserApplicationAuthorizationDeveloperListResponse {
    return UserApplicationAuthorizationDeveloperListResponseFromJSONTyped(json, false);
}

export function UserApplicationAuthorizationDeveloperListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApplicationAuthorizationDeveloperListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userApplicationAuthorizations': ((json['userApplicationAuthorizations'] as Array<any>).map(UserApplicationAuthorizationDataFromJSON)),
        'userApplicationAuthorizationsMeta': UserApplicationAuthorizationMetaFromJSON(json['userApplicationAuthorizationsMeta']),
    };
}

export function UserApplicationAuthorizationDeveloperListResponseToJSON(value?: UserApplicationAuthorizationDeveloperListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userApplicationAuthorizations': ((value.userApplicationAuthorizations as Array<any>).map(UserApplicationAuthorizationDataToJSON)),
        'userApplicationAuthorizationsMeta': UserApplicationAuthorizationMetaToJSON(value.userApplicationAuthorizationsMeta),
    };
}

