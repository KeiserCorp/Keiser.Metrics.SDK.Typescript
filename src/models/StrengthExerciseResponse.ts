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
import type { StrengthExerciseData } from './StrengthExerciseData';
import {
    StrengthExerciseDataFromJSON,
    StrengthExerciseDataFromJSONTyped,
    StrengthExerciseDataToJSON,
} from './StrengthExerciseData';

/**
 * 
 * @export
 * @interface StrengthExerciseResponse
 */
export interface StrengthExerciseResponse {
    /**
     * 
     * @type {StrengthExerciseData}
     * @memberof StrengthExerciseResponse
     */
    strengthExercise: StrengthExerciseData;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthExerciseResponse interface.
 */
export function instanceOfStrengthExerciseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthExercise" in value;

    return isInstance;
}

export function StrengthExerciseResponseFromJSON(json: any): StrengthExerciseResponse {
    return StrengthExerciseResponseFromJSONTyped(json, false);
}

export function StrengthExerciseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExercise': StrengthExerciseDataFromJSON(json['strengthExercise']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthExerciseResponseToJSON(value?: StrengthExerciseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExercise': StrengthExerciseDataToJSON(value.strengthExercise),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

