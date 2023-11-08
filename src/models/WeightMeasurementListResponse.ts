/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { WeightMeasurementData } from './WeightMeasurementData';
import {
    WeightMeasurementDataFromJSON,
    WeightMeasurementDataFromJSONTyped,
    WeightMeasurementDataToJSON,
} from './WeightMeasurementData';
import type { WeightMeasurementListResponseMeta } from './WeightMeasurementListResponseMeta';
import {
    WeightMeasurementListResponseMetaFromJSON,
    WeightMeasurementListResponseMetaFromJSONTyped,
    WeightMeasurementListResponseMetaToJSON,
} from './WeightMeasurementListResponseMeta';

/**
 * 
 * @export
 * @interface WeightMeasurementListResponse
 */
export interface WeightMeasurementListResponse {
    /**
     * 
     * @type {Array<WeightMeasurementData>}
     * @memberof WeightMeasurementListResponse
     */
    weightMeasurements: Array<WeightMeasurementData>;
    /**
     * 
     * @type {WeightMeasurementListResponseMeta}
     * @memberof WeightMeasurementListResponse
     */
    weightMeasurementsMeta: WeightMeasurementListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof WeightMeasurementListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof WeightMeasurementListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the WeightMeasurementListResponse interface.
 */
export function instanceOfWeightMeasurementListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "weightMeasurements" in value;
    isInstance = isInstance && "weightMeasurementsMeta" in value;

    return isInstance;
}

export function WeightMeasurementListResponseFromJSON(json: any): WeightMeasurementListResponse {
    return WeightMeasurementListResponseFromJSONTyped(json, false);
}

export function WeightMeasurementListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeightMeasurementListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'weightMeasurements': ((json['weightMeasurements'] as Array<any>).map(WeightMeasurementDataFromJSON)),
        'weightMeasurementsMeta': WeightMeasurementListResponseMetaFromJSON(json['weightMeasurementsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function WeightMeasurementListResponseToJSON(value?: WeightMeasurementListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'weightMeasurements': ((value.weightMeasurements as Array<any>).map(WeightMeasurementDataToJSON)),
        'weightMeasurementsMeta': WeightMeasurementListResponseMetaToJSON(value.weightMeasurementsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

