/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseData } from './CardioExerciseData';
import {
    CardioExerciseDataFromJSON,
    CardioExerciseDataFromJSONTyped,
    CardioExerciseDataToJSON,
} from './CardioExerciseData';

/**
 * 
 * @export
 * @interface CardioExerciseResponse
 */
export interface CardioExerciseResponse {
    /**
     * 
     * @type {CardioExerciseData}
     * @memberof CardioExerciseResponse
     */
    cardioExercise: CardioExerciseData;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioExerciseResponse interface.
 */
export function instanceOfCardioExerciseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioExercise" in value;

    return isInstance;
}

export function CardioExerciseResponseFromJSON(json: any): CardioExerciseResponse {
    return CardioExerciseResponseFromJSONTyped(json, false);
}

export function CardioExerciseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExercise': CardioExerciseDataFromJSON(json['cardioExercise']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioExerciseResponseToJSON(value?: CardioExerciseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExercise': CardioExerciseDataToJSON(value.cardioExercise),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

