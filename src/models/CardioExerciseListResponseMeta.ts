/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseSorting } from './CardioExerciseSorting';
import {
    CardioExerciseSortingFromJSON,
    CardioExerciseSortingFromJSONTyped,
    CardioExerciseSortingToJSON,
} from './CardioExerciseSorting';

/**
 * 
 * @export
 * @interface CardioExerciseListResponseMeta
 */
export interface CardioExerciseListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseListResponseMeta
     */
    defaultAlias?: string;
    /**
     * 
     * @type {CardioExerciseSorting}
     * @memberof CardioExerciseListResponseMeta
     */
    sort: CardioExerciseSorting;
    /**
     * 
     * @type {boolean}
     * @memberof CardioExerciseListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the CardioExerciseListResponseMeta interface.
 */
export function instanceOfCardioExerciseListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function CardioExerciseListResponseMetaFromJSON(json: any): CardioExerciseListResponseMeta {
    return CardioExerciseListResponseMetaFromJSONTyped(json, false);
}

export function CardioExerciseListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultAlias': !exists(json, 'defaultAlias') ? undefined : json['defaultAlias'],
        'sort': CardioExerciseSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function CardioExerciseListResponseMetaToJSON(value?: CardioExerciseListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultAlias': value.defaultAlias,
        'sort': CardioExerciseSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

