/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserApplicationAuthorizationMeta
 */
export interface UserApplicationAuthorizationMeta {
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationMeta
     */
    developmentAccountId: number;
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationMeta
     */
    applicationId: number;
    /**
     * 
     * @type {string}
     * @memberof UserApplicationAuthorizationMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserApplicationAuthorizationMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the UserApplicationAuthorizationMeta interface.
 */
export function instanceOfUserApplicationAuthorizationMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "developmentAccountId" in value;
    isInstance = isInstance && "applicationId" in value;

    return isInstance;
}

export function UserApplicationAuthorizationMetaFromJSON(json: any): UserApplicationAuthorizationMeta {
    return UserApplicationAuthorizationMetaFromJSONTyped(json, false);
}

export function UserApplicationAuthorizationMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApplicationAuthorizationMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'developmentAccountId': json['developmentAccountId'],
        'applicationId': json['applicationId'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function UserApplicationAuthorizationMetaToJSON(value?: UserApplicationAuthorizationMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'developmentAccountId': value.developmentAccountId,
        'applicationId': value.applicationId,
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

