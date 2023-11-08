/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
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
 * @interface StrengthExerciseMuscleResponse
 */
export interface StrengthExerciseMuscleResponse {
    /**
     * 
     * @type {MuscleData}
     * @memberof StrengthExerciseMuscleResponse
     */
    strengthExerciseMuscle: MuscleData;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseMuscleResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseMuscleResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthExerciseMuscleResponse interface.
 */
export function instanceOfStrengthExerciseMuscleResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthExerciseMuscle" in value;

    return isInstance;
}

export function StrengthExerciseMuscleResponseFromJSON(json: any): StrengthExerciseMuscleResponse {
    return StrengthExerciseMuscleResponseFromJSONTyped(json, false);
}

export function StrengthExerciseMuscleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseMuscleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExerciseMuscle': MuscleDataFromJSON(json['strengthExerciseMuscle']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthExerciseMuscleResponseToJSON(value?: StrengthExerciseMuscleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExerciseMuscle': MuscleDataToJSON(value.strengthExerciseMuscle),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

