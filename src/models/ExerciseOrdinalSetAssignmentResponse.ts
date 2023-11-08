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
import type { ExerciseOrdinalSetAssignmentData } from './ExerciseOrdinalSetAssignmentData';
import {
    ExerciseOrdinalSetAssignmentDataFromJSON,
    ExerciseOrdinalSetAssignmentDataFromJSONTyped,
    ExerciseOrdinalSetAssignmentDataToJSON,
} from './ExerciseOrdinalSetAssignmentData';

/**
 * 
 * @export
 * @interface ExerciseOrdinalSetAssignmentResponse
 */
export interface ExerciseOrdinalSetAssignmentResponse {
    /**
     * 
     * @type {ExerciseOrdinalSetAssignmentData}
     * @memberof ExerciseOrdinalSetAssignmentResponse
     */
    exerciseOrdinalSetAssignment: ExerciseOrdinalSetAssignmentData;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetAssignmentResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetAssignmentResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ExerciseOrdinalSetAssignmentResponse interface.
 */
export function instanceOfExerciseOrdinalSetAssignmentResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exerciseOrdinalSetAssignment" in value;

    return isInstance;
}

export function ExerciseOrdinalSetAssignmentResponseFromJSON(json: any): ExerciseOrdinalSetAssignmentResponse {
    return ExerciseOrdinalSetAssignmentResponseFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetAssignmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetAssignmentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exerciseOrdinalSetAssignment': ExerciseOrdinalSetAssignmentDataFromJSON(json['exerciseOrdinalSetAssignment']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ExerciseOrdinalSetAssignmentResponseToJSON(value?: ExerciseOrdinalSetAssignmentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exerciseOrdinalSetAssignment': ExerciseOrdinalSetAssignmentDataToJSON(value.exerciseOrdinalSetAssignment),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

