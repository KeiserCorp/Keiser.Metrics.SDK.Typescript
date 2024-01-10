/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HeightMeasurementSorting } from './HeightMeasurementSorting';
import {
    HeightMeasurementSortingFromJSON,
    HeightMeasurementSortingFromJSONTyped,
    HeightMeasurementSortingToJSON,
} from './HeightMeasurementSorting';

/**
 * 
 * @export
 * @interface HeightMeasurementListResponseMeta
 */
export interface HeightMeasurementListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof HeightMeasurementListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof HeightMeasurementListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {HeightMeasurementSorting}
     * @memberof HeightMeasurementListResponseMeta
     */
    sort: HeightMeasurementSorting;
    /**
     * 
     * @type {number}
     * @memberof HeightMeasurementListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof HeightMeasurementListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof HeightMeasurementListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof HeightMeasurementListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof HeightMeasurementListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the HeightMeasurementListResponseMeta interface.
 */
export function instanceOfHeightMeasurementListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function HeightMeasurementListResponseMetaFromJSON(json: any): HeightMeasurementListResponseMeta {
    return HeightMeasurementListResponseMetaFromJSONTyped(json, false);
}

export function HeightMeasurementListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeightMeasurementListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'sort': HeightMeasurementSortingFromJSON(json['sort']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function HeightMeasurementListResponseMetaToJSON(value?: HeightMeasurementListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'sort': HeightMeasurementSortingToJSON(value.sort),
        'userId': value.userId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

