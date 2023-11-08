/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesDataSetSorting } from './MSeriesDataSetSorting';
import {
    MSeriesDataSetSortingFromJSON,
    MSeriesDataSetSortingFromJSONTyped,
    MSeriesDataSetSortingToJSON,
} from './MSeriesDataSetSorting';

/**
 * 
 * @export
 * @interface MSeriesDataSetListResponseMeta
 */
export interface MSeriesDataSetListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetListResponseMeta
     */
    source?: string;
    /**
     * 
     * @type {MSeriesDataSetSorting}
     * @memberof MSeriesDataSetListResponseMeta
     */
    sort: MSeriesDataSetSorting;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesDataSetListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the MSeriesDataSetListResponseMeta interface.
 */
export function instanceOfMSeriesDataSetListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function MSeriesDataSetListResponseMetaFromJSON(json: any): MSeriesDataSetListResponseMeta {
    return MSeriesDataSetListResponseMetaFromJSONTyped(json, false);
}

export function MSeriesDataSetListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataSetListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'sort': MSeriesDataSetSortingFromJSON(json['sort']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function MSeriesDataSetListResponseMetaToJSON(value?: MSeriesDataSetListResponseMeta | null): any {
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
        'sort': MSeriesDataSetSortingToJSON(value.sort),
        'userId': value.userId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

