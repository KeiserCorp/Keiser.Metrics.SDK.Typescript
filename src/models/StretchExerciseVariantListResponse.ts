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
import type { StretchExerciseVariantData } from './StretchExerciseVariantData';
import {
    StretchExerciseVariantDataFromJSON,
    StretchExerciseVariantDataFromJSONTyped,
    StretchExerciseVariantDataToJSON,
} from './StretchExerciseVariantData';
import type { StretchExerciseVariantListResponseMeta } from './StretchExerciseVariantListResponseMeta';
import {
    StretchExerciseVariantListResponseMetaFromJSON,
    StretchExerciseVariantListResponseMetaFromJSONTyped,
    StretchExerciseVariantListResponseMetaToJSON,
} from './StretchExerciseVariantListResponseMeta';

/**
 * 
 * @export
 * @interface StretchExerciseVariantListResponse
 */
export interface StretchExerciseVariantListResponse {
    /**
     * 
     * @type {Array<StretchExerciseVariantData>}
     * @memberof StretchExerciseVariantListResponse
     */
    stretchExerciseVariants: Array<StretchExerciseVariantData>;
    /**
     * 
     * @type {StretchExerciseVariantListResponseMeta}
     * @memberof StretchExerciseVariantListResponse
     */
    stretchExerciseVariantsMeta: StretchExerciseVariantListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StretchExerciseVariantListResponse interface.
 */
export function instanceOfStretchExerciseVariantListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stretchExerciseVariants" in value;
    isInstance = isInstance && "stretchExerciseVariantsMeta" in value;

    return isInstance;
}

export function StretchExerciseVariantListResponseFromJSON(json: any): StretchExerciseVariantListResponse {
    return StretchExerciseVariantListResponseFromJSONTyped(json, false);
}

export function StretchExerciseVariantListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseVariantListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExerciseVariants': ((json['stretchExerciseVariants'] as Array<any>).map(StretchExerciseVariantDataFromJSON)),
        'stretchExerciseVariantsMeta': StretchExerciseVariantListResponseMetaFromJSON(json['stretchExerciseVariantsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StretchExerciseVariantListResponseToJSON(value?: StretchExerciseVariantListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExerciseVariants': ((value.stretchExerciseVariants as Array<any>).map(StretchExerciseVariantDataToJSON)),
        'stretchExerciseVariantsMeta': StretchExerciseVariantListResponseMetaToJSON(value.stretchExerciseVariantsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

