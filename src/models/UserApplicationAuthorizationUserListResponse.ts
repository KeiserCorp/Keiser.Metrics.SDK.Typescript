/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ListMeta } from './ListMeta';
import {
    ListMetaFromJSON,
    ListMetaFromJSONTyped,
    ListMetaToJSON,
} from './ListMeta';
import type { UserApplicationAuthorizationData } from './UserApplicationAuthorizationData';
import {
    UserApplicationAuthorizationDataFromJSON,
    UserApplicationAuthorizationDataFromJSONTyped,
    UserApplicationAuthorizationDataToJSON,
} from './UserApplicationAuthorizationData';

/**
 * 
 * @export
 * @interface UserApplicationAuthorizationUserListResponse
 */
export interface UserApplicationAuthorizationUserListResponse {
    /**
     * 
     * @type {Array<UserApplicationAuthorizationData>}
     * @memberof UserApplicationAuthorizationUserListResponse
     */
    userApplicationAuthorizations: Array<UserApplicationAuthorizationData>;
    /**
     * 
     * @type {ListMeta}
     * @memberof UserApplicationAuthorizationUserListResponse
     */
    userApplicationAuthorizationsMeta: ListMeta;
    /**
     * 
     * @type {string}
     * @memberof UserApplicationAuthorizationUserListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserApplicationAuthorizationUserListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the UserApplicationAuthorizationUserListResponse interface.
 */
export function instanceOfUserApplicationAuthorizationUserListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userApplicationAuthorizations" in value;
    isInstance = isInstance && "userApplicationAuthorizationsMeta" in value;

    return isInstance;
}

export function UserApplicationAuthorizationUserListResponseFromJSON(json: any): UserApplicationAuthorizationUserListResponse {
    return UserApplicationAuthorizationUserListResponseFromJSONTyped(json, false);
}

export function UserApplicationAuthorizationUserListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApplicationAuthorizationUserListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userApplicationAuthorizations': ((json['userApplicationAuthorizations'] as Array<any>).map(UserApplicationAuthorizationDataFromJSON)),
        'userApplicationAuthorizationsMeta': ListMetaFromJSON(json['userApplicationAuthorizationsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function UserApplicationAuthorizationUserListResponseToJSON(value?: UserApplicationAuthorizationUserListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userApplicationAuthorizations': ((value.userApplicationAuthorizations as Array<any>).map(UserApplicationAuthorizationDataToJSON)),
        'userApplicationAuthorizationsMeta': ListMetaToJSON(value.userApplicationAuthorizationsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

