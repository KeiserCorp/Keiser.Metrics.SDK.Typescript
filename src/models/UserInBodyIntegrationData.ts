/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.16
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
 * @interface UserInBodyIntegrationData
 */
export interface UserInBodyIntegrationData {
    /**
     * 
     * @type {number}
     * @memberof UserInBodyIntegrationData
     */
    facilityRelationshipId: number;
    /**
     * 
     * @type {string}
     * @memberof UserInBodyIntegrationData
     */
    inBodyId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInBodyIntegrationData
     */
    userToken: string;
}

/**
 * Check if a given object implements the UserInBodyIntegrationData interface.
 */
export function instanceOfUserInBodyIntegrationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationshipId" in value;
    isInstance = isInstance && "userToken" in value;

    return isInstance;
}

export function UserInBodyIntegrationDataFromJSON(json: any): UserInBodyIntegrationData {
    return UserInBodyIntegrationDataFromJSONTyped(json, false);
}

export function UserInBodyIntegrationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInBodyIntegrationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationshipId': json['facilityRelationshipId'],
        'inBodyId': !exists(json, 'inBodyId') ? undefined : json['inBodyId'],
        'userToken': json['userToken'],
    };
}

export function UserInBodyIntegrationDataToJSON(value?: UserInBodyIntegrationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationshipId': value.facilityRelationshipId,
        'inBodyId': value.inBodyId,
        'userToken': value.userToken,
    };
}

