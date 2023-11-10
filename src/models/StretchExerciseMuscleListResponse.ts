/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
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
import type { StretchExerciseMuscleListResponseMeta } from './StretchExerciseMuscleListResponseMeta';
import {
    StretchExerciseMuscleListResponseMetaFromJSON,
    StretchExerciseMuscleListResponseMetaFromJSONTyped,
    StretchExerciseMuscleListResponseMetaToJSON,
} from './StretchExerciseMuscleListResponseMeta';

/**
 * 
 * @export
 * @interface StretchExerciseMuscleListResponse
 */
export interface StretchExerciseMuscleListResponse {
    /**
     * 
     * @type {Array<MuscleData>}
     * @memberof StretchExerciseMuscleListResponse
     */
    stretchExerciseMuscles: Array<MuscleData>;
    /**
     * 
     * @type {StretchExerciseMuscleListResponseMeta}
     * @memberof StretchExerciseMuscleListResponse
     */
    stretchExerciseMusclesMeta: StretchExerciseMuscleListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseMuscleListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseMuscleListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StretchExerciseMuscleListResponse interface.
 */
export function instanceOfStretchExerciseMuscleListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stretchExerciseMuscles" in value;
    isInstance = isInstance && "stretchExerciseMusclesMeta" in value;

    return isInstance;
}

export function StretchExerciseMuscleListResponseFromJSON(json: any): StretchExerciseMuscleListResponse {
    return StretchExerciseMuscleListResponseFromJSONTyped(json, false);
}

export function StretchExerciseMuscleListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseMuscleListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExerciseMuscles': ((json['stretchExerciseMuscles'] as Array<any>).map(MuscleDataFromJSON)),
        'stretchExerciseMusclesMeta': StretchExerciseMuscleListResponseMetaFromJSON(json['stretchExerciseMusclesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StretchExerciseMuscleListResponseToJSON(value?: StretchExerciseMuscleListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExerciseMuscles': ((value.stretchExerciseMuscles as Array<any>).map(MuscleDataToJSON)),
        'stretchExerciseMusclesMeta': StretchExerciseMuscleListResponseMetaToJSON(value.stretchExerciseMusclesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

