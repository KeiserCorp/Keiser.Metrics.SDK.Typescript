/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseMuscleListResponseMeta } from './CardioExerciseMuscleListResponseMeta';
import {
    CardioExerciseMuscleListResponseMetaFromJSON,
    CardioExerciseMuscleListResponseMetaFromJSONTyped,
    CardioExerciseMuscleListResponseMetaToJSON,
} from './CardioExerciseMuscleListResponseMeta';
import type { MuscleData } from './MuscleData';
import {
    MuscleDataFromJSON,
    MuscleDataFromJSONTyped,
    MuscleDataToJSON,
} from './MuscleData';

/**
 * 
 * @export
 * @interface CardioExerciseMuscleListResponse
 */
export interface CardioExerciseMuscleListResponse {
    /**
     * 
     * @type {Array<MuscleData>}
     * @memberof CardioExerciseMuscleListResponse
     */
    cardioExerciseMuscles: Array<MuscleData>;
    /**
     * 
     * @type {CardioExerciseMuscleListResponseMeta}
     * @memberof CardioExerciseMuscleListResponse
     */
    cardioExerciseMusclesMeta: CardioExerciseMuscleListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseMuscleListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseMuscleListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CardioExerciseMuscleListResponse interface.
 */
export function instanceOfCardioExerciseMuscleListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardioExerciseMuscles" in value;
    isInstance = isInstance && "cardioExerciseMusclesMeta" in value;

    return isInstance;
}

export function CardioExerciseMuscleListResponseFromJSON(json: any): CardioExerciseMuscleListResponse {
    return CardioExerciseMuscleListResponseFromJSONTyped(json, false);
}

export function CardioExerciseMuscleListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseMuscleListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardioExerciseMuscles': ((json['cardioExerciseMuscles'] as Array<any>).map(MuscleDataFromJSON)),
        'cardioExerciseMusclesMeta': CardioExerciseMuscleListResponseMetaFromJSON(json['cardioExerciseMusclesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CardioExerciseMuscleListResponseToJSON(value?: CardioExerciseMuscleListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardioExerciseMuscles': ((value.cardioExerciseMuscles as Array<any>).map(MuscleDataToJSON)),
        'cardioExerciseMusclesMeta': CardioExerciseMuscleListResponseMetaToJSON(value.cardioExerciseMusclesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

