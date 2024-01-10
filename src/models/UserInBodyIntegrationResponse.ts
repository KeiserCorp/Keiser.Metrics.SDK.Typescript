/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserInBodyIntegrationData } from './UserInBodyIntegrationData';
import {
    UserInBodyIntegrationDataFromJSON,
    UserInBodyIntegrationDataFromJSONTyped,
    UserInBodyIntegrationDataToJSON,
} from './UserInBodyIntegrationData';

/**
 * 
 * @export
 * @interface UserInBodyIntegrationResponse
 */
export interface UserInBodyIntegrationResponse {
    /**
     * 
     * @type {UserInBodyIntegrationData}
     * @memberof UserInBodyIntegrationResponse
     */
    userInBodyIntegration: UserInBodyIntegrationData;
    /**
     * 
     * @type {string}
     * @memberof UserInBodyIntegrationResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInBodyIntegrationResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the UserInBodyIntegrationResponse interface.
 */
export function instanceOfUserInBodyIntegrationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userInBodyIntegration" in value;

    return isInstance;
}

export function UserInBodyIntegrationResponseFromJSON(json: any): UserInBodyIntegrationResponse {
    return UserInBodyIntegrationResponseFromJSONTyped(json, false);
}

export function UserInBodyIntegrationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInBodyIntegrationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userInBodyIntegration': UserInBodyIntegrationDataFromJSON(json['userInBodyIntegration']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function UserInBodyIntegrationResponseToJSON(value?: UserInBodyIntegrationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userInBodyIntegration': UserInBodyIntegrationDataToJSON(value.userInBodyIntegration),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

