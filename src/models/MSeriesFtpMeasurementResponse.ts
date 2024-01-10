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
import type { MSeriesFtpMeasurementData } from './MSeriesFtpMeasurementData';
import {
    MSeriesFtpMeasurementDataFromJSON,
    MSeriesFtpMeasurementDataFromJSONTyped,
    MSeriesFtpMeasurementDataToJSON,
} from './MSeriesFtpMeasurementData';

/**
 * 
 * @export
 * @interface MSeriesFtpMeasurementResponse
 */
export interface MSeriesFtpMeasurementResponse {
    /**
     * 
     * @type {MSeriesFtpMeasurementData}
     * @memberof MSeriesFtpMeasurementResponse
     */
    mSeriesFtpMeasurement: MSeriesFtpMeasurementData;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesFtpMeasurementResponse interface.
 */
export function instanceOfMSeriesFtpMeasurementResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesFtpMeasurement" in value;

    return isInstance;
}

export function MSeriesFtpMeasurementResponseFromJSON(json: any): MSeriesFtpMeasurementResponse {
    return MSeriesFtpMeasurementResponseFromJSONTyped(json, false);
}

export function MSeriesFtpMeasurementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesFtpMeasurementResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesFtpMeasurement': MSeriesFtpMeasurementDataFromJSON(json['mSeriesFtpMeasurement']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesFtpMeasurementResponseToJSON(value?: MSeriesFtpMeasurementResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesFtpMeasurement': MSeriesFtpMeasurementDataToJSON(value.mSeriesFtpMeasurement),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

