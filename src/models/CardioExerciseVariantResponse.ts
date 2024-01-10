/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseVariantData } from './CardioExerciseVariantData';
import {
    CardioExerciseVariantDataFromJSON,
    CardioExerciseVariantDataFromJSONTyped,
    CardioExerciseVariantDataToJSON,
} from './CardioExerciseVariantData';

/**
 * 
 * @export
 * @interface CardioExerciseVariantResponse
 */
export interface CardioExerciseVariantResponse {
    /**
     * 
     * @type {CardioExerciseVariantData}
     * @memberof CardioExerciseVariantResponse
     */
    cardioExerciseVariant: CardioExerciseVariantData;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioExerciseVariantResponse interface.
 */
export function instanceOfCardioExerciseVariantResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioExerciseVariant" in value;

    return isInstance;
}

export function CardioExerciseVariantResponseFromJSON(json: any): CardioExerciseVariantResponse {
    return CardioExerciseVariantResponseFromJSONTyped(json, false);
}

export function CardioExerciseVariantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseVariantResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExerciseVariant': CardioExerciseVariantDataFromJSON(json['cardioExerciseVariant']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioExerciseVariantResponseToJSON(value?: CardioExerciseVariantResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExerciseVariant': CardioExerciseVariantDataToJSON(value.cardioExerciseVariant),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

