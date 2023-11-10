/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PrivilegedFacilityRelationshipRequestSorting } from './PrivilegedFacilityRelationshipRequestSorting';
import {
    PrivilegedFacilityRelationshipRequestSortingFromJSON,
    PrivilegedFacilityRelationshipRequestSortingFromJSONTyped,
    PrivilegedFacilityRelationshipRequestSortingToJSON,
} from './PrivilegedFacilityRelationshipRequestSorting';

/**
 * 
 * @export
 * @interface PrivilegedFacilityRelationshipRequestListResponseMeta
 */
export interface PrivilegedFacilityRelationshipRequestListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof PrivilegedFacilityRelationshipRequestListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {PrivilegedFacilityRelationshipRequestSorting}
     * @memberof PrivilegedFacilityRelationshipRequestListResponseMeta
     */
    sort: PrivilegedFacilityRelationshipRequestSorting;
    /**
     * 
     * @type {number}
     * @memberof PrivilegedFacilityRelationshipRequestListResponseMeta
     */
    facilityId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PrivilegedFacilityRelationshipRequestListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PrivilegedFacilityRelationshipRequestListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof PrivilegedFacilityRelationshipRequestListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof PrivilegedFacilityRelationshipRequestListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the PrivilegedFacilityRelationshipRequestListResponseMeta interface.
 */
export function instanceOfPrivilegedFacilityRelationshipRequestListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function PrivilegedFacilityRelationshipRequestListResponseMetaFromJSON(json: any): PrivilegedFacilityRelationshipRequestListResponseMeta {
    return PrivilegedFacilityRelationshipRequestListResponseMetaFromJSONTyped(json, false);
}

export function PrivilegedFacilityRelationshipRequestListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivilegedFacilityRelationshipRequestListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'sort': PrivilegedFacilityRelationshipRequestSortingFromJSON(json['sort']),
        'facilityId': !exists(json, 'facilityId') ? undefined : json['facilityId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function PrivilegedFacilityRelationshipRequestListResponseMetaToJSON(value?: PrivilegedFacilityRelationshipRequestListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'sort': PrivilegedFacilityRelationshipRequestSortingToJSON(value.sort),
        'facilityId': value.facilityId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

