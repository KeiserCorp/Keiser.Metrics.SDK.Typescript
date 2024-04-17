/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.29
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
import type { StretchExerciseListResponseMeta } from './StretchExerciseListResponseMeta';
import {
    StretchExerciseListResponseMetaFromJSON,
    StretchExerciseListResponseMetaFromJSONTyped,
    StretchExerciseListResponseMetaToJSON,
} from './StretchExerciseListResponseMeta';

/**
 * 
 * @export
 * @interface StretchExerciseListResponse
 */
export interface StretchExerciseListResponse {
    /**
     * 
     * @type {Array<StretchExerciseData>}
     * @memberof StretchExerciseListResponse
     */
    stretchExercises: Array<StretchExerciseData>;
    /**
     * 
     * @type {StretchExerciseListResponseMeta}
     * @memberof StretchExerciseListResponse
     */
    stretchExercisesMeta: StretchExerciseListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StretchExerciseListResponse interface.
 */
export function instanceOfStretchExerciseListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stretchExercises" in value;
    isInstance = isInstance && "stretchExercisesMeta" in value;

    return isInstance;
}

export function StretchExerciseListResponseFromJSON(json: any): StretchExerciseListResponse {
    return StretchExerciseListResponseFromJSONTyped(json, false);
}

export function StretchExerciseListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExercises': ((json['stretchExercises'] as Array<any>).map(StretchExerciseDataFromJSON)),
        'stretchExercisesMeta': StretchExerciseListResponseMetaFromJSON(json['stretchExercisesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StretchExerciseListResponseToJSON(value?: StretchExerciseListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExercises': ((value.stretchExercises as Array<any>).map(StretchExerciseDataToJSON)),
        'stretchExercisesMeta': StretchExerciseListResponseMetaToJSON(value.stretchExercisesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

