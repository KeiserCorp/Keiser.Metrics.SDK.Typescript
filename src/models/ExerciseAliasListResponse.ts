/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.30
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
import type { ExerciseAliasListResponseMeta } from './ExerciseAliasListResponseMeta';
import {
    ExerciseAliasListResponseMetaFromJSON,
    ExerciseAliasListResponseMetaFromJSONTyped,
    ExerciseAliasListResponseMetaToJSON,
} from './ExerciseAliasListResponseMeta';

/**
 * 
 * @export
 * @interface ExerciseAliasListResponse
 */
export interface ExerciseAliasListResponse {
    /**
     * 
     * @type {Array<ExerciseAliasData>}
     * @memberof ExerciseAliasListResponse
     */
    exerciseAliases: Array<ExerciseAliasData>;
    /**
     * 
     * @type {ExerciseAliasListResponseMeta}
     * @memberof ExerciseAliasListResponse
     */
    exerciseAliasesMeta: ExerciseAliasListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseAliasListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ExerciseAliasListResponse interface.
 */
export function instanceOfExerciseAliasListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exerciseAliases" in value;
    isInstance = isInstance && "exerciseAliasesMeta" in value;

    return isInstance;
}

export function ExerciseAliasListResponseFromJSON(json: any): ExerciseAliasListResponse {
    return ExerciseAliasListResponseFromJSONTyped(json, false);
}

export function ExerciseAliasListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseAliasListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exerciseAliases': ((json['exerciseAliases'] as Array<any>).map(ExerciseAliasDataFromJSON)),
        'exerciseAliasesMeta': ExerciseAliasListResponseMetaFromJSON(json['exerciseAliasesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ExerciseAliasListResponseToJSON(value?: ExerciseAliasListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exerciseAliases': ((value.exerciseAliases as Array<any>).map(ExerciseAliasDataToJSON)),
        'exerciseAliasesMeta': ExerciseAliasListResponseMetaToJSON(value.exerciseAliasesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

