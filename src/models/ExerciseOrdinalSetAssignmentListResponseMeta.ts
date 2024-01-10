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
import type { ExerciseOrdinalSetAssignmentSorting } from './ExerciseOrdinalSetAssignmentSorting';
import {
    ExerciseOrdinalSetAssignmentSortingFromJSON,
    ExerciseOrdinalSetAssignmentSortingFromJSONTyped,
    ExerciseOrdinalSetAssignmentSortingToJSON,
} from './ExerciseOrdinalSetAssignmentSorting';

/**
 * 
 * @export
 * @interface ExerciseOrdinalSetAssignmentListResponseMeta
 */
export interface ExerciseOrdinalSetAssignmentListResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetAssignmentListResponseMeta
     */
    exerciseOrdinalSetId?: number;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetAssignmentListResponseMeta
     */
    ordinalIdentifier?: string;
    /**
     * 
     * @type {ExerciseOrdinalSetAssignmentSorting}
     * @memberof ExerciseOrdinalSetAssignmentListResponseMeta
     */
    sort: ExerciseOrdinalSetAssignmentSorting;
    /**
     * 
     * @type {boolean}
     * @memberof ExerciseOrdinalSetAssignmentListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetAssignmentListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetAssignmentListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetAssignmentListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the ExerciseOrdinalSetAssignmentListResponseMeta interface.
 */
export function instanceOfExerciseOrdinalSetAssignmentListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function ExerciseOrdinalSetAssignmentListResponseMetaFromJSON(json: any): ExerciseOrdinalSetAssignmentListResponseMeta {
    return ExerciseOrdinalSetAssignmentListResponseMetaFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetAssignmentListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetAssignmentListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exerciseOrdinalSetId': !exists(json, 'exerciseOrdinalSetId') ? undefined : json['exerciseOrdinalSetId'],
        'ordinalIdentifier': !exists(json, 'ordinalIdentifier') ? undefined : json['ordinalIdentifier'],
        'sort': ExerciseOrdinalSetAssignmentSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function ExerciseOrdinalSetAssignmentListResponseMetaToJSON(value?: ExerciseOrdinalSetAssignmentListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exerciseOrdinalSetId': value.exerciseOrdinalSetId,
        'ordinalIdentifier': value.ordinalIdentifier,
        'sort': ExerciseOrdinalSetAssignmentSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

