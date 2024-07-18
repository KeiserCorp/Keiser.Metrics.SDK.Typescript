/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
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

/**
 * 
 * @export
 * @interface HeartRateDataSetResponse
 */
export interface HeartRateDataSetResponse {
    /**
     * 
     * @type {HeartRateDataSetData}
     * @memberof HeartRateDataSetResponse
     */
    heartRateDataSet: HeartRateDataSetData;
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the HeartRateDataSetResponse interface.
 */
export function instanceOfHeartRateDataSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "heartRateDataSet" in value;

    return isInstance;
}

export function HeartRateDataSetResponseFromJSON(json: any): HeartRateDataSetResponse {
    return HeartRateDataSetResponseFromJSONTyped(json, false);
}

export function HeartRateDataSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartRateDataSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'heartRateDataSet': HeartRateDataSetDataFromJSON(json['heartRateDataSet']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function HeartRateDataSetResponseToJSON(value?: HeartRateDataSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'heartRateDataSet': HeartRateDataSetDataToJSON(value.heartRateDataSet),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

