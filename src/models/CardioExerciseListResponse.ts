/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseData } from './CardioExerciseData';
import {
    CardioExerciseDataFromJSON,
    CardioExerciseDataFromJSONTyped,
    CardioExerciseDataToJSON,
} from './CardioExerciseData';
import type { CardioExerciseListResponseMeta } from './CardioExerciseListResponseMeta';
import {
    CardioExerciseListResponseMetaFromJSON,
    CardioExerciseListResponseMetaFromJSONTyped,
    CardioExerciseListResponseMetaToJSON,
} from './CardioExerciseListResponseMeta';

/**
 * 
 * @export
 * @interface CardioExerciseListResponse
 */
export interface CardioExerciseListResponse {
    /**
     * 
     * @type {Array<CardioExerciseData>}
     * @memberof CardioExerciseListResponse
     */
    cardioExercises: Array<CardioExerciseData>;
    /**
     * 
     * @type {CardioExerciseListResponseMeta}
     * @memberof CardioExerciseListResponse
     */
    cardioExercisesMeta: CardioExerciseListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioExerciseListResponse interface.
 */
export function instanceOfCardioExerciseListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioExercises" in value;
    isInstance = isInstance && "cardioExercisesMeta" in value;

    return isInstance;
}

export function CardioExerciseListResponseFromJSON(json: any): CardioExerciseListResponse {
    return CardioExerciseListResponseFromJSONTyped(json, false);
}

export function CardioExerciseListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExercises': ((json['cardioExercises'] as Array<any>).map(CardioExerciseDataFromJSON)),
        'cardioExercisesMeta': CardioExerciseListResponseMetaFromJSON(json['cardioExercisesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioExerciseListResponseToJSON(value?: CardioExerciseListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExercises': ((value.cardioExercises as Array<any>).map(CardioExerciseDataToJSON)),
        'cardioExercisesMeta': CardioExerciseListResponseMetaToJSON(value.cardioExercisesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

