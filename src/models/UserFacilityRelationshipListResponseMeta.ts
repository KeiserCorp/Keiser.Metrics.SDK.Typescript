/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityEmployeeRole } from './FacilityEmployeeRole';
import {
    FacilityEmployeeRoleFromJSON,
    FacilityEmployeeRoleFromJSONTyped,
    FacilityEmployeeRoleToJSON,
} from './FacilityEmployeeRole';
import type { UserFacilityRelationshipSorting } from './UserFacilityRelationshipSorting';
import {
    UserFacilityRelationshipSortingFromJSON,
    UserFacilityRelationshipSortingFromJSONTyped,
    UserFacilityRelationshipSortingToJSON,
} from './UserFacilityRelationshipSorting';

/**
 * 
 * @export
 * @interface UserFacilityRelationshipListResponseMeta
 */
export interface UserFacilityRelationshipListResponseMeta {
    /**
     * 
     * @type {boolean}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    member?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    employee?: boolean;
    /**
     * 
     * @type {FacilityEmployeeRole}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    employeeRole?: FacilityEmployeeRole;
    /**
     * 
     * @type {UserFacilityRelationshipSorting}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    sort: UserFacilityRelationshipSorting;
    /**
     * 
     * @type {number}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof UserFacilityRelationshipListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the UserFacilityRelationshipListResponseMeta interface.
 */
export function instanceOfUserFacilityRelationshipListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function UserFacilityRelationshipListResponseMetaFromJSON(json: any): UserFacilityRelationshipListResponseMeta {
    return UserFacilityRelationshipListResponseMetaFromJSONTyped(json, false);
}

export function UserFacilityRelationshipListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFacilityRelationshipListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'member': !exists(json, 'member') ? undefined : json['member'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'employeeRole': !exists(json, 'employeeRole') ? undefined : FacilityEmployeeRoleFromJSON(json['employeeRole']),
        'sort': UserFacilityRelationshipSortingFromJSON(json['sort']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function UserFacilityRelationshipListResponseMetaToJSON(value?: UserFacilityRelationshipListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'member': value.member,
        'employee': value.employee,
        'employeeRole': FacilityEmployeeRoleToJSON(value.employeeRole),
        'sort': UserFacilityRelationshipSortingToJSON(value.sort),
        'userId': value.userId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

