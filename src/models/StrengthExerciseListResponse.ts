/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
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
import type { StrengthExerciseListResponseMeta } from './StrengthExerciseListResponseMeta';
import {
    StrengthExerciseListResponseMetaFromJSON,
    StrengthExerciseListResponseMetaFromJSONTyped,
    StrengthExerciseListResponseMetaToJSON,
} from './StrengthExerciseListResponseMeta';

/**
 * 
 * @export
 * @interface StrengthExerciseListResponse
 */
export interface StrengthExerciseListResponse {
    /**
     * 
     * @type {Array<StrengthExerciseData>}
     * @memberof StrengthExerciseListResponse
     */
    strengthExercises: Array<StrengthExerciseData>;
    /**
     * 
     * @type {StrengthExerciseListResponseMeta}
     * @memberof StrengthExerciseListResponse
     */
    strengthExercisesMeta: StrengthExerciseListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthExerciseListResponse interface.
 */
export function instanceOfStrengthExerciseListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthExercises" in value;
    isInstance = isInstance && "strengthExercisesMeta" in value;

    return isInstance;
}

export function StrengthExerciseListResponseFromJSON(json: any): StrengthExerciseListResponse {
    return StrengthExerciseListResponseFromJSONTyped(json, false);
}

export function StrengthExerciseListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExercises': ((json['strengthExercises'] as Array<any>).map(StrengthExerciseDataFromJSON)),
        'strengthExercisesMeta': StrengthExerciseListResponseMetaFromJSON(json['strengthExercisesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthExerciseListResponseToJSON(value?: StrengthExerciseListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExercises': ((value.strengthExercises as Array<any>).map(StrengthExerciseDataToJSON)),
        'strengthExercisesMeta': StrengthExerciseListResponseMetaToJSON(value.strengthExercisesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

