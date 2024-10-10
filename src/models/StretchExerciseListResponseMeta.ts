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
import type { StretchExerciseSorting } from './StretchExerciseSorting';
import {
    StretchExerciseSortingFromJSON,
    StretchExerciseSortingFromJSONTyped,
    StretchExerciseSortingToJSON,
} from './StretchExerciseSorting';

/**
 * 
 * @export
 * @interface StretchExerciseListResponseMeta
 */
export interface StretchExerciseListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseListResponseMeta
     */
    defaultAlias?: string;
    /**
     * 
     * @type {StretchExerciseSorting}
     * @memberof StretchExerciseListResponseMeta
     */
    sort: StretchExerciseSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StretchExerciseListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StretchExerciseListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StretchExerciseListResponseMeta interface.
 */
export function instanceOfStretchExerciseListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StretchExerciseListResponseMetaFromJSON(json: any): StretchExerciseListResponseMeta {
    return StretchExerciseListResponseMetaFromJSONTyped(json, false);
}

export function StretchExerciseListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultAlias': !exists(json, 'defaultAlias') ? undefined : json['defaultAlias'],
        'sort': StretchExerciseSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StretchExerciseListResponseMetaToJSON(value?: StretchExerciseListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultAlias': value.defaultAlias,
        'sort': StretchExerciseSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

