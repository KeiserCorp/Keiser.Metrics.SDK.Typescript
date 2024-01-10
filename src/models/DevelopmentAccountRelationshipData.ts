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
 * @interface DevelopmentAccountRelationshipData
 */
export interface DevelopmentAccountRelationshipData {
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipData
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountRelationshipData
     */
    developmentAccountId: number;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountRelationshipData
     */
    role: DevelopmentAccountRelationshipDataRoleEnum;
    /**
     * 
     * @type {UserData}
     * @memberof DevelopmentAccountRelationshipData
     */
    user?: UserData;
    /**
     * 
     * @type {DevelopmentAccountData}
     * @memberof DevelopmentAccountRelationshipData
     */
    developmentAccount?: DevelopmentAccountData;
}


/**
 * @export
 */
export const DevelopmentAccountRelationshipDataRoleEnum = {
    Owner: 'owner',
    Developer: 'developer'
} as const;
export type DevelopmentAccountRelationshipDataRoleEnum = typeof DevelopmentAccountRelationshipDataRoleEnum[keyof typeof DevelopmentAccountRelationshipDataRoleEnum];


/**
 * Check if a given object implements the DevelopmentAccountRelationshipData interface.
 */
export function instanceOfDevelopmentAccountRelationshipData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "developmentAccountId" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function DevelopmentAccountRelationshipDataFromJSON(json: any): DevelopmentAccountRelationshipData {
    return DevelopmentAccountRelationshipDataFromJSONTyped(json, false);
}

export function DevelopmentAccountRelationshipDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountRelationshipData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'developmentAccountId': json['developmentAccountId'],
        'role': json['role'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'developmentAccount': !exists(json, 'developmentAccount') ? undefined : DevelopmentAccountDataFromJSON(json['developmentAccount']),
    };
}

export function DevelopmentAccountRelationshipDataToJSON(value?: DevelopmentAccountRelationshipData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'developmentAccountId': value.developmentAccountId,
        'role': value.role,
        'user': UserDataToJSON(value.user),
        'developmentAccount': DevelopmentAccountDataToJSON(value.developmentAccount),
    };
}

