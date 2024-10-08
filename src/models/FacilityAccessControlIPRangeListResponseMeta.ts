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
import type { FacilityAccessControlIPRangeSorting } from './FacilityAccessControlIPRangeSorting';
import {
    FacilityAccessControlIPRangeSortingFromJSON,
    FacilityAccessControlIPRangeSortingFromJSONTyped,
    FacilityAccessControlIPRangeSortingToJSON,
} from './FacilityAccessControlIPRangeSorting';

/**
 * 
 * @export
 * @interface FacilityAccessControlIPRangeListResponseMeta
 */
export interface FacilityAccessControlIPRangeListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    cidr?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    source?: string;
    /**
     * 
     * @type {FacilityAccessControlIPRangeSorting}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    sort: FacilityAccessControlIPRangeSorting;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityAccessControlIPRangeListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityAccessControlIPRangeListResponseMeta interface.
 */
export function instanceOfFacilityAccessControlIPRangeListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function FacilityAccessControlIPRangeListResponseMetaFromJSON(json: any): FacilityAccessControlIPRangeListResponseMeta {
    return FacilityAccessControlIPRangeListResponseMetaFromJSONTyped(json, false);
}

export function FacilityAccessControlIPRangeListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlIPRangeListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cidr': !exists(json, 'cidr') ? undefined : json['cidr'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'sort': FacilityAccessControlIPRangeSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityAccessControlIPRangeListResponseMetaToJSON(value?: FacilityAccessControlIPRangeListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cidr': value.cidr,
        'from': value.from,
        'to': value.to,
        'source': value.source,
        'sort': FacilityAccessControlIPRangeSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

