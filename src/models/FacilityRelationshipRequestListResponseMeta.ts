/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityRelationshipRequestSorting } from './FacilityRelationshipRequestSorting';
import {
    FacilityRelationshipRequestSortingFromJSON,
    FacilityRelationshipRequestSortingFromJSONTyped,
    FacilityRelationshipRequestSortingToJSON,
} from './FacilityRelationshipRequestSorting';

/**
 * 
 * @export
 * @interface FacilityRelationshipRequestListResponseMeta
 */
export interface FacilityRelationshipRequestListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    memberIdentifier?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {FacilityRelationshipRequestSorting}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    sort: FacilityRelationshipRequestSorting;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipRequestListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityRelationshipRequestListResponseMeta interface.
 */
export function instanceOfFacilityRelationshipRequestListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function FacilityRelationshipRequestListResponseMetaFromJSON(json: any): FacilityRelationshipRequestListResponseMeta {
    return FacilityRelationshipRequestListResponseMetaFromJSONTyped(json, false);
}

export function FacilityRelationshipRequestListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityRelationshipRequestListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memberIdentifier': !exists(json, 'memberIdentifier') ? undefined : json['memberIdentifier'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'sort': FacilityRelationshipRequestSortingFromJSON(json['sort']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityRelationshipRequestListResponseMetaToJSON(value?: FacilityRelationshipRequestListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'memberIdentifier': value.memberIdentifier,
        'name': value.name,
        'sort': FacilityRelationshipRequestSortingToJSON(value.sort),
        'userId': value.userId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

