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
import type { FacilitySorting } from './FacilitySorting';
import {
    FacilitySortingFromJSON,
    FacilitySortingFromJSONTyped,
    FacilitySortingToJSON,
} from './FacilitySorting';

/**
 * 
 * @export
 * @interface FacilityListResponseMeta
 */
export interface FacilityListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponseMeta
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponseMeta
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponseMeta
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponseMeta
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponseMeta
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityListResponseMeta
     */
    country?: string;
    /**
     * 
     * @type {FacilitySorting}
     * @memberof FacilityListResponseMeta
     */
    sort: FacilitySorting;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityListResponseMeta interface.
 */
export function instanceOfFacilityListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function FacilityListResponseMetaFromJSON(json: any): FacilityListResponseMeta {
    return FacilityListResponseMetaFromJSONTyped(json, false);
}

export function FacilityListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'sort': FacilitySortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityListResponseMetaToJSON(value?: FacilityListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'phone': value.phone,
        'address': value.address,
        'city': value.city,
        'postcode': value.postcode,
        'state': value.state,
        'country': value.country,
        'sort': FacilitySortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

