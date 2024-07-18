/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseAliasData } from './ExerciseAliasData';
import {
    ExerciseAliasDataFromJSON,
    ExerciseAliasDataFromJSONTyped,
    ExerciseAliasDataToJSON,
} from './ExerciseAliasData';

/**
 * 
 * @export
 * @interface ExerciseAliasResponse
 */
export interface ExerciseAliasResponse {
    /**
     * 
     * @type {ExerciseAliasData}
     * @memberof ExerciseAliasResponse
     */
    exerciseAlias: ExerciseAliasData;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ExerciseAliasResponse interface.
 */
export function instanceOfExerciseAliasResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exerciseAlias" in value;

    return isInstance;
}

export function ExerciseAliasResponseFromJSON(json: any): ExerciseAliasResponse {
    return ExerciseAliasResponseFromJSONTyped(json, false);
}

export function ExerciseAliasResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseAliasResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exerciseAlias': ExerciseAliasDataFromJSON(json['exerciseAlias']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ExerciseAliasResponseToJSON(value?: ExerciseAliasResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exerciseAlias': ExerciseAliasDataToJSON(value.exerciseAlias),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

