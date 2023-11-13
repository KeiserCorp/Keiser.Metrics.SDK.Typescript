/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthExerciseVariantData } from './StrengthExerciseVariantData';
import {
    StrengthExerciseVariantDataFromJSON,
    StrengthExerciseVariantDataFromJSONTyped,
    StrengthExerciseVariantDataToJSON,
} from './StrengthExerciseVariantData';
import type { StrengthExerciseVariantListResponseMeta } from './StrengthExerciseVariantListResponseMeta';
import {
    StrengthExerciseVariantListResponseMetaFromJSON,
    StrengthExerciseVariantListResponseMetaFromJSONTyped,
    StrengthExerciseVariantListResponseMetaToJSON,
} from './StrengthExerciseVariantListResponseMeta';

/**
 * 
 * @export
 * @interface StrengthExerciseVariantListResponse
 */
export interface StrengthExerciseVariantListResponse {
    /**
     * 
     * @type {Array<StrengthExerciseVariantData>}
     * @memberof StrengthExerciseVariantListResponse
     */
    strengthExerciseVariants: Array<StrengthExerciseVariantData>;
    /**
     * 
     * @type {StrengthExerciseVariantListResponseMeta}
     * @memberof StrengthExerciseVariantListResponse
     */
    strengthExerciseVariantsMeta: StrengthExerciseVariantListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthExerciseVariantListResponse interface.
 */
export function instanceOfStrengthExerciseVariantListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthExerciseVariants" in value;
    isInstance = isInstance && "strengthExerciseVariantsMeta" in value;

    return isInstance;
}

export function StrengthExerciseVariantListResponseFromJSON(json: any): StrengthExerciseVariantListResponse {
    return StrengthExerciseVariantListResponseFromJSONTyped(json, false);
}

export function StrengthExerciseVariantListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseVariantListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExerciseVariants': ((json['strengthExerciseVariants'] as Array<any>).map(StrengthExerciseVariantDataFromJSON)),
        'strengthExerciseVariantsMeta': StrengthExerciseVariantListResponseMetaFromJSON(json['strengthExerciseVariantsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthExerciseVariantListResponseToJSON(value?: StrengthExerciseVariantListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExerciseVariants': ((value.strengthExerciseVariants as Array<any>).map(StrengthExerciseVariantDataToJSON)),
        'strengthExerciseVariantsMeta': StrengthExerciseVariantListResponseMetaToJSON(value.strengthExerciseVariantsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

