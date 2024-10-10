/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
import type { StrengthExerciseMuscleListResponseMeta } from './StrengthExerciseMuscleListResponseMeta';
import {
    StrengthExerciseMuscleListResponseMetaFromJSON,
    StrengthExerciseMuscleListResponseMetaFromJSONTyped,
    StrengthExerciseMuscleListResponseMetaToJSON,
} from './StrengthExerciseMuscleListResponseMeta';

/**
 * 
 * @export
 * @interface StrengthExerciseMuscleListResponse
 */
export interface StrengthExerciseMuscleListResponse {
    /**
     * 
     * @type {Array<MuscleData>}
     * @memberof StrengthExerciseMuscleListResponse
     */
    strengthExerciseMuscles: Array<MuscleData>;
    /**
     * 
     * @type {StrengthExerciseMuscleListResponseMeta}
     * @memberof StrengthExerciseMuscleListResponse
     */
    strengthExerciseMusclesMeta: StrengthExerciseMuscleListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseMuscleListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseMuscleListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthExerciseMuscleListResponse interface.
 */
export function instanceOfStrengthExerciseMuscleListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthExerciseMuscles" in value;
    isInstance = isInstance && "strengthExerciseMusclesMeta" in value;

    return isInstance;
}

export function StrengthExerciseMuscleListResponseFromJSON(json: any): StrengthExerciseMuscleListResponse {
    return StrengthExerciseMuscleListResponseFromJSONTyped(json, false);
}

export function StrengthExerciseMuscleListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseMuscleListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExerciseMuscles': ((json['strengthExerciseMuscles'] as Array<any>).map(MuscleDataFromJSON)),
        'strengthExerciseMusclesMeta': StrengthExerciseMuscleListResponseMetaFromJSON(json['strengthExerciseMusclesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthExerciseMuscleListResponseToJSON(value?: StrengthExerciseMuscleListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExerciseMuscles': ((value.strengthExerciseMuscles as Array<any>).map(MuscleDataToJSON)),
        'strengthExerciseMusclesMeta': StrengthExerciseMuscleListResponseMetaToJSON(value.strengthExerciseMusclesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

