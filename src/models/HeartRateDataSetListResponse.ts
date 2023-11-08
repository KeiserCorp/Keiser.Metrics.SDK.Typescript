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
import type { HeartRateDataSetData } from './HeartRateDataSetData';
import {
    HeartRateDataSetDataFromJSON,
    HeartRateDataSetDataFromJSONTyped,
    HeartRateDataSetDataToJSON,
} from './HeartRateDataSetData';
import type { HeartRateDataSetListResponseMeta } from './HeartRateDataSetListResponseMeta';
import {
    HeartRateDataSetListResponseMetaFromJSON,
    HeartRateDataSetListResponseMetaFromJSONTyped,
    HeartRateDataSetListResponseMetaToJSON,
} from './HeartRateDataSetListResponseMeta';

/**
 * 
 * @export
 * @interface HeartRateDataSetListResponse
 */
export interface HeartRateDataSetListResponse {
    /**
     * 
     * @type {Array<HeartRateDataSetData>}
     * @memberof HeartRateDataSetListResponse
     */
    heartRateDataSets: Array<HeartRateDataSetData>;
    /**
     * 
     * @type {HeartRateDataSetListResponseMeta}
     * @memberof HeartRateDataSetListResponse
     */
    heartRateDataSetsMeta: HeartRateDataSetListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the HeartRateDataSetListResponse interface.
 */
export function instanceOfHeartRateDataSetListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "heartRateDataSets" in value;
    isInstance = isInstance && "heartRateDataSetsMeta" in value;

    return isInstance;
}

export function HeartRateDataSetListResponseFromJSON(json: any): HeartRateDataSetListResponse {
    return HeartRateDataSetListResponseFromJSONTyped(json, false);
}

export function HeartRateDataSetListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartRateDataSetListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'heartRateDataSets': ((json['heartRateDataSets'] as Array<any>).map(HeartRateDataSetDataFromJSON)),
        'heartRateDataSetsMeta': HeartRateDataSetListResponseMetaFromJSON(json['heartRateDataSetsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function HeartRateDataSetListResponseToJSON(value?: HeartRateDataSetListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'heartRateDataSets': ((value.heartRateDataSets as Array<any>).map(HeartRateDataSetDataToJSON)),
        'heartRateDataSetsMeta': HeartRateDataSetListResponseMetaToJSON(value.heartRateDataSetsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

