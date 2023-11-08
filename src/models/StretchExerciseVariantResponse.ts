/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
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

/**
 * 
 * @export
 * @interface StretchExerciseVariantResponse
 */
export interface StretchExerciseVariantResponse {
    /**
     * 
     * @type {StretchExerciseVariantData}
     * @memberof StretchExerciseVariantResponse
     */
    stretchExerciseVariant: StretchExerciseVariantData;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StretchExerciseVariantResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StretchExerciseVariantResponse interface.
 */
export function instanceOfStretchExerciseVariantResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stretchExerciseVariant" in value;

    return isInstance;
}

export function StretchExerciseVariantResponseFromJSON(json: any): StretchExerciseVariantResponse {
    return StretchExerciseVariantResponseFromJSONTyped(json, false);
}

export function StretchExerciseVariantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseVariantResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stretchExerciseVariant': StretchExerciseVariantDataFromJSON(json['stretchExerciseVariant']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StretchExerciseVariantResponseToJSON(value?: StretchExerciseVariantResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stretchExerciseVariant': StretchExerciseVariantDataToJSON(value.stretchExerciseVariant),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

