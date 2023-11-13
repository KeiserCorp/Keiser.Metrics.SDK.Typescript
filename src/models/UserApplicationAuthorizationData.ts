/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
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
 * @interface UserApplicationAuthorizationData
 */
export interface UserApplicationAuthorizationData {
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationData
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof UserApplicationAuthorizationData
     */
    applicationId: number;
}

/**
 * Check if a given object implements the UserApplicationAuthorizationData interface.
 */
export function instanceOfUserApplicationAuthorizationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "applicationId" in value;

    return isInstance;
}

export function UserApplicationAuthorizationDataFromJSON(json: any): UserApplicationAuthorizationData {
    return UserApplicationAuthorizationDataFromJSONTyped(json, false);
}

export function UserApplicationAuthorizationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApplicationAuthorizationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'applicationId': json['applicationId'],
    };
}

export function UserApplicationAuthorizationDataToJSON(value?: UserApplicationAuthorizationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'applicationId': value.applicationId,
    };
}

