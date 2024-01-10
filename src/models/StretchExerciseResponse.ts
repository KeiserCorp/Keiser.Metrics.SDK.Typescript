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
import type { StretchExerciseData } from './StretchExerciseData';
import {
    StretchExerciseDataFromJSON,
    StretchExerciseDataFromJSONTyped,
    StretchExerciseDataToJSON,
} from './StretchExerciseData';

/**
 * 
 * @export
 * @interface StretchExerciseResponse
 */
export interface StretchExerciseResponse {
    /**
     * 
     * @type {StretchExerciseData}
     * @memberof StretchExerciseResponse
     */
    stretchExercise: StretchExerciseData;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StretchExerciseResponse interface.
 */
export function instanceOfStretchExerciseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stretchExercise" in value;

    return isInstance;
}

export function StretchExerciseResponseFromJSON(json: any): StretchExerciseResponse {
    return StretchExerciseResponseFromJSONTyped(json, false);
}

export function StretchExerciseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExercise': StretchExerciseDataFromJSON(json['stretchExercise']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StretchExerciseResponseToJSON(value?: StretchExerciseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExercise': StretchExerciseDataToJSON(value.stretchExercise),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

