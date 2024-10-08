/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
import type { FacilityUserRelationshipSorting } from './FacilityUserRelationshipSorting';
import {
    FacilityUserRelationshipSortingFromJSON,
    FacilityUserRelationshipSortingFromJSONTyped,
    FacilityUserRelationshipSortingToJSON,
} from './FacilityUserRelationshipSorting';

/**
 * 
 * @export
 * @interface FacilityUserRelationshipListResponseMeta
 */
export interface FacilityUserRelationshipListResponseMeta {
    /**
     * 
     * @type {boolean}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    member?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    employee?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    memberIdentifier?: string;
    /**
     * 
     * @type {FacilityEmployeeRole}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    employeeRole?: FacilityEmployeeRole;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    includeSession?: boolean;
    /**
     * 
     * @type {FacilityUserRelationshipSorting}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    sort: FacilityUserRelationshipSorting;
    /**
     * 
     * @type {number}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    facilityId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityUserRelationshipListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityUserRelationshipListResponseMeta interface.
 */
export function instanceOfFacilityUserRelationshipListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function FacilityUserRelationshipListResponseMetaFromJSON(json: any): FacilityUserRelationshipListResponseMeta {
    return FacilityUserRelationshipListResponseMetaFromJSONTyped(json, false);
}

export function FacilityUserRelationshipListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityUserRelationshipListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'member': !exists(json, 'member') ? undefined : json['member'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'memberIdentifier': !exists(json, 'memberIdentifier') ? undefined : json['memberIdentifier'],
        'employeeRole': !exists(json, 'employeeRole') ? undefined : FacilityEmployeeRoleFromJSON(json['employeeRole']),
        'includeSession': !exists(json, 'includeSession') ? undefined : json['includeSession'],
        'sort': FacilityUserRelationshipSortingFromJSON(json['sort']),
        'facilityId': !exists(json, 'facilityId') ? undefined : json['facilityId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityUserRelationshipListResponseMetaToJSON(value?: FacilityUserRelationshipListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'member': value.member,
        'employee': value.employee,
        'name': value.name,
        'memberIdentifier': value.memberIdentifier,
        'employeeRole': FacilityEmployeeRoleToJSON(value.employeeRole),
        'includeSession': value.includeSession,
        'sort': FacilityUserRelationshipSortingToJSON(value.sort),
        'facilityId': value.facilityId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

