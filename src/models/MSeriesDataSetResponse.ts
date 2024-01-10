/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesDataSetData } from './MSeriesDataSetData';
import {
    MSeriesDataSetDataFromJSON,
    MSeriesDataSetDataFromJSONTyped,
    MSeriesDataSetDataToJSON,
} from './MSeriesDataSetData';

/**
 * 
 * @export
 * @interface MSeriesDataSetResponse
 */
export interface MSeriesDataSetResponse {
    /**
     * 
     * @type {MSeriesDataSetData}
     * @memberof MSeriesDataSetResponse
     */
    mSeriesDataSet: MSeriesDataSetData;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesDataSetResponse interface.
 */
export function instanceOfMSeriesDataSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesDataSet" in value;

    return isInstance;
}

export function MSeriesDataSetResponseFromJSON(json: any): MSeriesDataSetResponse {
    return MSeriesDataSetResponseFromJSONTyped(json, false);
}

export function MSeriesDataSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesDataSet': MSeriesDataSetDataFromJSON(json['mSeriesDataSet']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesDataSetResponseToJSON(value?: MSeriesDataSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesDataSet': MSeriesDataSetDataToJSON(value.mSeriesDataSet),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

