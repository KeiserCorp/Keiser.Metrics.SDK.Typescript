/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MuscleData } from './MuscleData';
import {
    MuscleDataFromJSON,
    MuscleDataFromJSONTyped,
    MuscleDataToJSON,
} from './MuscleData';

/**
 * 
 * @export
 * @interface StretchExerciseMuscleResponse
 */
export interface StretchExerciseMuscleResponse {
    /**
     * 
     * @type {MuscleData}
     * @memberof StretchExerciseMuscleResponse
     */
    stretchExerciseMuscle: MuscleData;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseMuscleResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseMuscleResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StretchExerciseMuscleResponse interface.
 */
export function instanceOfStretchExerciseMuscleResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stretchExerciseMuscle" in value;

    return isInstance;
}

export function StretchExerciseMuscleResponseFromJSON(json: any): StretchExerciseMuscleResponse {
    return StretchExerciseMuscleResponseFromJSONTyped(json, false);
}

export function StretchExerciseMuscleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseMuscleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExerciseMuscle': MuscleDataFromJSON(json['stretchExerciseMuscle']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StretchExerciseMuscleResponseToJSON(value?: StretchExerciseMuscleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExerciseMuscle': MuscleDataToJSON(value.stretchExerciseMuscle),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

