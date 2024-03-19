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
import type { FacilityData } from './FacilityData';
import {
    FacilityDataFromJSON,
    FacilityDataFromJSONTyped,
    FacilityDataToJSON,
} from './FacilityData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface FacilityRelationshipRequestData
 */
export interface FacilityRelationshipRequestData {
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipRequestData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipRequestData
     */
    userId: number;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityRelationshipRequestData
     */
    userApproval: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipRequestData
     */
    facilityId: number;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityRelationshipRequestData
     */
    facilityApproval: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityRelationshipRequestData
     */
    member: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestData
     */
    memberIdentifier?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestData
     */
    employeeRole?: FacilityRelationshipRequestDataEmployeeRoleEnum;
    /**
     * 
     * @type {FacilityData}
     * @memberof FacilityRelationshipRequestData
     */
    facility?: FacilityData;
    /**
     * 
     * @type {UserData}
     * @memberof FacilityRelationshipRequestData
     */
    user?: UserData;
}


/**
 * @export
 */
export const FacilityRelationshipRequestDataEmployeeRoleEnum = {
    Admin: 'admin',
    CustomerSupport: 'customerSupport',
    Trainer: 'trainer',
    FrontDesk: 'frontDesk',
    Maintenance: 'maintenance'
} as const;
export type FacilityRelationshipRequestDataEmployeeRoleEnum = typeof FacilityRelationshipRequestDataEmployeeRoleEnum[keyof typeof FacilityRelationshipRequestDataEmployeeRoleEnum];


/**
 * Check if a given object implements the FacilityRelationshipRequestData interface.
 */
export function instanceOfFacilityRelationshipRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "userApproval" in value;
    isInstance = isInstance && "facilityId" in value;
    isInstance = isInstance && "facilityApproval" in value;
    isInstance = isInstance && "member" in value;

    return isInstance;
}

export function FacilityRelationshipRequestDataFromJSON(json: any): FacilityRelationshipRequestData {
    return FacilityRelationshipRequestDataFromJSONTyped(json, false);
}

export function FacilityRelationshipRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityRelationshipRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'userApproval': json['userApproval'],
        'facilityId': json['facilityId'],
        'facilityApproval': json['facilityApproval'],
        'member': json['member'],
        'memberIdentifier': !exists(json, 'memberIdentifier') ? undefined : json['memberIdentifier'],
        'employeeRole': !exists(json, 'employeeRole') ? undefined : json['employeeRole'],
        'facility': !exists(json, 'facility') ? undefined : FacilityDataFromJSON(json['facility']),
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
    };
}

export function FacilityRelationshipRequestDataToJSON(value?: FacilityRelationshipRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'userApproval': value.userApproval,
        'facilityId': value.facilityId,
        'facilityApproval': value.facilityApproval,
        'member': value.member,
        'memberIdentifier': value.memberIdentifier,
        'employeeRole': value.employeeRole,
        'facility': FacilityDataToJSON(value.facility),
        'user': UserDataToJSON(value.user),
    };
}

