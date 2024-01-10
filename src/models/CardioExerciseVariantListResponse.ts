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
import type { CardioExerciseVariantListResponseMeta } from './CardioExerciseVariantListResponseMeta';
import {
    CardioExerciseVariantListResponseMetaFromJSON,
    CardioExerciseVariantListResponseMetaFromJSONTyped,
    CardioExerciseVariantListResponseMetaToJSON,
} from './CardioExerciseVariantListResponseMeta';

/**
 * 
 * @export
 * @interface CardioExerciseVariantListResponse
 */
export interface CardioExerciseVariantListResponse {
    /**
     * 
     * @type {Array<CardioExerciseVariantData>}
     * @memberof CardioExerciseVariantListResponse
     */
    cardioExerciseVariants: Array<CardioExerciseVariantData>;
    /**
     * 
     * @type {CardioExerciseVariantListResponseMeta}
     * @memberof CardioExerciseVariantListResponse
     */
    cardioExerciseVariantsMeta: CardioExerciseVariantListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioExerciseVariantListResponse interface.
 */
export function instanceOfCardioExerciseVariantListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioExerciseVariants" in value;
    isInstance = isInstance && "cardioExerciseVariantsMeta" in value;

    return isInstance;
}

export function CardioExerciseVariantListResponseFromJSON(json: any): CardioExerciseVariantListResponse {
    return CardioExerciseVariantListResponseFromJSONTyped(json, false);
}

export function CardioExerciseVariantListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseVariantListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExerciseVariants': ((json['cardioExerciseVariants'] as Array<any>).map(CardioExerciseVariantDataFromJSON)),
        'cardioExerciseVariantsMeta': CardioExerciseVariantListResponseMetaFromJSON(json['cardioExerciseVariantsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioExerciseVariantListResponseToJSON(value?: CardioExerciseVariantListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExerciseVariants': ((value.cardioExerciseVariants as Array<any>).map(CardioExerciseVariantDataToJSON)),
        'cardioExerciseVariantsMeta': CardioExerciseVariantListResponseMetaToJSON(value.cardioExerciseVariantsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

