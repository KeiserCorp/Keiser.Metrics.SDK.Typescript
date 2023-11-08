/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
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

/**
 * 
 * @export
 * @interface StrengthExerciseVariantResponse
 */
export interface StrengthExerciseVariantResponse {
    /**
     * 
     * @type {StrengthExerciseVariantData}
     * @memberof StrengthExerciseVariantResponse
     */
    strengthExerciseVariant: StrengthExerciseVariantData;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseVariantResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthExerciseVariantResponse interface.
 */
export function instanceOfStrengthExerciseVariantResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthExerciseVariant" in value;

    return isInstance;
}

export function StrengthExerciseVariantResponseFromJSON(json: any): StrengthExerciseVariantResponse {
    return StrengthExerciseVariantResponseFromJSONTyped(json, false);
}

export function StrengthExerciseVariantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseVariantResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthExerciseVariant': StrengthExerciseVariantDataFromJSON(json['strengthExerciseVariant']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthExerciseVariantResponseToJSON(value?: StrengthExerciseVariantResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthExerciseVariant': StrengthExerciseVariantDataToJSON(value.strengthExerciseVariant),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

