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
import type { ExerciseOrdinalSetData } from './ExerciseOrdinalSetData';
import {
    ExerciseOrdinalSetDataFromJSON,
    ExerciseOrdinalSetDataFromJSONTyped,
    ExerciseOrdinalSetDataToJSON,
} from './ExerciseOrdinalSetData';

/**
 * 
 * @export
 * @interface ExerciseOrdinalSetResponse
 */
export interface ExerciseOrdinalSetResponse {
    /**
     * 
     * @type {ExerciseOrdinalSetData}
     * @memberof ExerciseOrdinalSetResponse
     */
    exerciseOrdinalSet: ExerciseOrdinalSetData;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ExerciseOrdinalSetResponse interface.
 */
export function instanceOfExerciseOrdinalSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exerciseOrdinalSet" in value;

    return isInstance;
}

export function ExerciseOrdinalSetResponseFromJSON(json: any): ExerciseOrdinalSetResponse {
    return ExerciseOrdinalSetResponseFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exerciseOrdinalSet': ExerciseOrdinalSetDataFromJSON(json['exerciseOrdinalSet']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ExerciseOrdinalSetResponseToJSON(value?: ExerciseOrdinalSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exerciseOrdinalSet': ExerciseOrdinalSetDataToJSON(value.exerciseOrdinalSet),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

