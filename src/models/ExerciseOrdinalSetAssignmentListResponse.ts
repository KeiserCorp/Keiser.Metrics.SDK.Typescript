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
import type { ExerciseOrdinalSetAssignmentData } from './ExerciseOrdinalSetAssignmentData';
import {
    ExerciseOrdinalSetAssignmentDataFromJSON,
    ExerciseOrdinalSetAssignmentDataFromJSONTyped,
    ExerciseOrdinalSetAssignmentDataToJSON,
} from './ExerciseOrdinalSetAssignmentData';
import type { ExerciseOrdinalSetAssignmentListResponseMeta } from './ExerciseOrdinalSetAssignmentListResponseMeta';
import {
    ExerciseOrdinalSetAssignmentListResponseMetaFromJSON,
    ExerciseOrdinalSetAssignmentListResponseMetaFromJSONTyped,
    ExerciseOrdinalSetAssignmentListResponseMetaToJSON,
} from './ExerciseOrdinalSetAssignmentListResponseMeta';

/**
 * 
 * @export
 * @interface ExerciseOrdinalSetAssignmentListResponse
 */
export interface ExerciseOrdinalSetAssignmentListResponse {
    /**
     * 
     * @type {Array<ExerciseOrdinalSetAssignmentData>}
     * @memberof ExerciseOrdinalSetAssignmentListResponse
     */
    exerciseOrdinalSetAssignments: Array<ExerciseOrdinalSetAssignmentData>;
    /**
     * 
     * @type {ExerciseOrdinalSetAssignmentListResponseMeta}
     * @memberof ExerciseOrdinalSetAssignmentListResponse
     */
    exerciseOrdinalSetAssignmentsMeta: ExerciseOrdinalSetAssignmentListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetAssignmentListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetAssignmentListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ExerciseOrdinalSetAssignmentListResponse interface.
 */
export function instanceOfExerciseOrdinalSetAssignmentListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exerciseOrdinalSetAssignments" in value;
    isInstance = isInstance && "exerciseOrdinalSetAssignmentsMeta" in value;

    return isInstance;
}

export function ExerciseOrdinalSetAssignmentListResponseFromJSON(json: any): ExerciseOrdinalSetAssignmentListResponse {
    return ExerciseOrdinalSetAssignmentListResponseFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetAssignmentListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetAssignmentListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exerciseOrdinalSetAssignments': ((json['exerciseOrdinalSetAssignments'] as Array<any>).map(ExerciseOrdinalSetAssignmentDataFromJSON)),
        'exerciseOrdinalSetAssignmentsMeta': ExerciseOrdinalSetAssignmentListResponseMetaFromJSON(json['exerciseOrdinalSetAssignmentsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ExerciseOrdinalSetAssignmentListResponseToJSON(value?: ExerciseOrdinalSetAssignmentListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exerciseOrdinalSetAssignments': ((value.exerciseOrdinalSetAssignments as Array<any>).map(ExerciseOrdinalSetAssignmentDataToJSON)),
        'exerciseOrdinalSetAssignmentsMeta': ExerciseOrdinalSetAssignmentListResponseMetaToJSON(value.exerciseOrdinalSetAssignmentsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

