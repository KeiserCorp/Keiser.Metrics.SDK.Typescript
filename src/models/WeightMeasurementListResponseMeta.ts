/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.14
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { WeightMeasurementSorting } from './WeightMeasurementSorting';
import {
    WeightMeasurementSortingFromJSON,
    WeightMeasurementSortingFromJSONTyped,
    WeightMeasurementSortingToJSON,
} from './WeightMeasurementSorting';

/**
 * 
 * @export
 * @interface WeightMeasurementListResponseMeta
 */
export interface WeightMeasurementListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementListResponseMeta
     */
    userId?: number;
    /**
     * 
     * @type {Date}
     * @memberof WeightMeasurementListResponseMeta
     */
    from?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WeightMeasurementListResponseMeta
     */
    to?: Date;
    /**
     * 
     * @type {WeightMeasurementSorting}
     * @memberof WeightMeasurementListResponseMeta
     */
    sort: WeightMeasurementSorting;
    /**
     * 
     * @type {boolean}
     * @memberof WeightMeasurementListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the WeightMeasurementListResponseMeta interface.
 */
export function instanceOfWeightMeasurementListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function WeightMeasurementListResponseMetaFromJSON(json: any): WeightMeasurementListResponseMeta {
    return WeightMeasurementListResponseMetaFromJSONTyped(json, false);
}

export function WeightMeasurementListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeightMeasurementListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'from': !exists(json, 'from') ? undefined : (new Date(json['from'])),
        'to': !exists(json, 'to') ? undefined : (new Date(json['to'])),
        'sort': WeightMeasurementSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function WeightMeasurementListResponseMetaToJSON(value?: WeightMeasurementListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'from': value.from === undefined ? undefined : (value.from.toISOString()),
        'to': value.to === undefined ? undefined : (value.to.toISOString()),
        'sort': WeightMeasurementSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

