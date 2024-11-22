/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.34
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesProfileStatsData } from './MSeriesProfileStatsData';
import {
    MSeriesProfileStatsDataFromJSON,
    MSeriesProfileStatsDataFromJSONTyped,
    MSeriesProfileStatsDataToJSON,
} from './MSeriesProfileStatsData';

/**
 * 
 * @export
 * @interface MSeriesProfileStatsResponse
 */
export interface MSeriesProfileStatsResponse {
    /**
     * 
     * @type {MSeriesProfileStatsData}
     * @memberof MSeriesProfileStatsResponse
     */
    mSeriesProfileStats: MSeriesProfileStatsData;
    /**
     * 
     * @type {string}
     * @memberof MSeriesProfileStatsResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesProfileStatsResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesProfileStatsResponse interface.
 */
export function instanceOfMSeriesProfileStatsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesProfileStats" in value;

    return isInstance;
}

export function MSeriesProfileStatsResponseFromJSON(json: any): MSeriesProfileStatsResponse {
    return MSeriesProfileStatsResponseFromJSONTyped(json, false);
}

export function MSeriesProfileStatsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesProfileStatsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesProfileStats': MSeriesProfileStatsDataFromJSON(json['mSeriesProfileStats']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesProfileStatsResponseToJSON(value?: MSeriesProfileStatsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesProfileStats': MSeriesProfileStatsDataToJSON(value.mSeriesProfileStats),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

