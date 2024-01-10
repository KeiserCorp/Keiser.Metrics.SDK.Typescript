/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HeartRateDataSetSorting } from './HeartRateDataSetSorting';
import {
    HeartRateDataSetSortingFromJSON,
    HeartRateDataSetSortingFromJSONTyped,
    HeartRateDataSetSortingToJSON,
} from './HeartRateDataSetSorting';

/**
 * 
 * @export
 * @interface HeartRateDataSetListResponseMeta
 */
export interface HeartRateDataSetListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetListResponseMeta
     */
    source?: string;
    /**
     * 
     * @type {HeartRateDataSetSorting}
     * @memberof HeartRateDataSetListResponseMeta
     */
    sort: HeartRateDataSetSorting;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof HeartRateDataSetListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the HeartRateDataSetListResponseMeta interface.
 */
export function instanceOfHeartRateDataSetListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function HeartRateDataSetListResponseMetaFromJSON(json: any): HeartRateDataSetListResponseMeta {
    return HeartRateDataSetListResponseMetaFromJSONTyped(json, false);
}

export function HeartRateDataSetListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartRateDataSetListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'sort': HeartRateDataSetSortingFromJSON(json['sort']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function HeartRateDataSetListResponseMetaToJSON(value?: HeartRateDataSetListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'source': value.source,
        'sort': HeartRateDataSetSortingToJSON(value.sort),
        'userId': value.userId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

