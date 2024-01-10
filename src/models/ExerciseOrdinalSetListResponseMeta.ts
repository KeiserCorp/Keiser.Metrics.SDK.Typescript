/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseOrdinalSetSorting } from './ExerciseOrdinalSetSorting';
import {
    ExerciseOrdinalSetSortingFromJSON,
    ExerciseOrdinalSetSortingFromJSONTyped,
    ExerciseOrdinalSetSortingToJSON,
} from './ExerciseOrdinalSetSorting';

/**
 * 
 * @export
 * @interface ExerciseOrdinalSetListResponseMeta
 */
export interface ExerciseOrdinalSetListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetListResponseMeta
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {ExerciseOrdinalSetSorting}
     * @memberof ExerciseOrdinalSetListResponseMeta
     */
    sort: ExerciseOrdinalSetSorting;
    /**
     * 
     * @type {boolean}
     * @memberof ExerciseOrdinalSetListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the ExerciseOrdinalSetListResponseMeta interface.
 */
export function instanceOfExerciseOrdinalSetListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function ExerciseOrdinalSetListResponseMetaFromJSON(json: any): ExerciseOrdinalSetListResponseMeta {
    return ExerciseOrdinalSetListResponseMetaFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'sort': ExerciseOrdinalSetSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function ExerciseOrdinalSetListResponseMetaToJSON(value?: ExerciseOrdinalSetListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
        'sort': ExerciseOrdinalSetSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

