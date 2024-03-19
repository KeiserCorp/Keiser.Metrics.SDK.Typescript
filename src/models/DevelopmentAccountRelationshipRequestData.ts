/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DevelopmentAccountData } from './DevelopmentAccountData';
import {
    DevelopmentAccountDataFromJSON,
    DevelopmentAccountDataFromJSONTyped,
    DevelopmentAccountDataToJSON,
} from './DevelopmentAccountData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface DevelopmentAccountRelationshipRequestData
 */
export interface DevelopmentAccountRelationshipRequestData {
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    developmentAccountId: number;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    displayEmail: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    role: DevelopmentAccountRelationshipRequestDataRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    code?: string;
    /**
     * 
     * @type {UserData}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    user?: UserData;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    userId?: number;
    /**
     * 
     * @type {DevelopmentAccountData}
     * @memberof DevelopmentAccountRelationshipRequestData
     */
    developmentAccount?: DevelopmentAccountData;
}


/**
 * @export
 */
export const DevelopmentAccountRelationshipRequestDataRoleEnum = {
    Owner: 'owner',
    Developer: 'developer'
} as const;
export type DevelopmentAccountRelationshipRequestDataRoleEnum = typeof DevelopmentAccountRelationshipRequestDataRoleEnum[keyof typeof DevelopmentAccountRelationshipRequestDataRoleEnum];


/**
 * Check if a given object implements the DevelopmentAccountRelationshipRequestData interface.
 */
export function instanceOfDevelopmentAccountRelationshipRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "developmentAccountId" in value;
    isInstance = isInstance && "displayEmail" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipRequestDataFromJSON(json: any): DevelopmentAccountRelationshipRequestData {
    return DevelopmentAccountRelationshipRequestDataFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'developmentAccountId': json['developmentAccountId'],
        'displayEmail': json['displayEmail'],
        'role': json['role'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'developmentAccount': !exists(json, 'developmentAccount') ? undefined : DevelopmentAccountDataFromJSON(json['developmentAccount']),
    };
}

export function DevelopmentAccountRelationshipRequestDataToJSON(value?: DevelopmentAccountRelationshipRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'developmentAccountId': value.developmentAccountId,
        'displayEmail': value.displayEmail,
        'role': value.role,
        'code': value.code,
        'user': UserDataToJSON(value.user),
        'userId': value.userId,
        'developmentAccount': DevelopmentAccountDataToJSON(value.developmentAccount),
    };
}

