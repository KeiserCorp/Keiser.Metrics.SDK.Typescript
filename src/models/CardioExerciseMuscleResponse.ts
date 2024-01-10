/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.24
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
 * @interface CardioExerciseMuscleResponse
 */
export interface CardioExerciseMuscleResponse {
    /**
     * 
     * @type {MuscleData}
     * @memberof CardioExerciseMuscleResponse
     */
    cardioExerciseMuscle: MuscleData;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseMuscleResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseMuscleResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioExerciseMuscleResponse interface.
 */
export function instanceOfCardioExerciseMuscleResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioExerciseMuscle" in value;

    return isInstance;
}

export function CardioExerciseMuscleResponseFromJSON(json: any): CardioExerciseMuscleResponse {
    return CardioExerciseMuscleResponseFromJSONTyped(json, false);
}

export function CardioExerciseMuscleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseMuscleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExerciseMuscle': MuscleDataFromJSON(json['cardioExerciseMuscle']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioExerciseMuscleResponseToJSON(value?: CardioExerciseMuscleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExerciseMuscle': MuscleDataToJSON(value.cardioExerciseMuscle),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

