/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesDataSetSegmentData } from './MSeriesDataSetSegmentData';
import {
    MSeriesDataSetSegmentDataFromJSON,
    MSeriesDataSetSegmentDataFromJSONTyped,
    MSeriesDataSetSegmentDataToJSON,
} from './MSeriesDataSetSegmentData';

/**
 * 
 * @export
 * @interface MSeriesDataSetSegmentResponse
 */
export interface MSeriesDataSetSegmentResponse {
    /**
     * 
     * @type {MSeriesDataSetSegmentData}
     * @memberof MSeriesDataSetSegmentResponse
     */
    mSeriesDataSetSegment: MSeriesDataSetSegmentData;
}

/**
 * Check if a given object implements the MSeriesDataSetSegmentResponse interface.
 */
export function instanceOfMSeriesDataSetSegmentResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesDataSetSegment" in value;

    return isInstance;
}

export function MSeriesDataSetSegmentResponseFromJSON(json: any): MSeriesDataSetSegmentResponse {
    return MSeriesDataSetSegmentResponseFromJSONTyped(json, false);
}

export function MSeriesDataSetSegmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataSetSegmentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesDataSetSegment': MSeriesDataSetSegmentDataFromJSON(json['mSeriesDataSetSegment']),
    };
}

export function MSeriesDataSetSegmentResponseToJSON(value?: MSeriesDataSetSegmentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesDataSetSegment': MSeriesDataSetSegmentDataToJSON(value.mSeriesDataSetSegment),
    };
}

