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
import type { MSeriesFtpMeasurementData } from './MSeriesFtpMeasurementData';
import {
    MSeriesFtpMeasurementDataFromJSON,
    MSeriesFtpMeasurementDataFromJSONTyped,
    MSeriesFtpMeasurementDataToJSON,
} from './MSeriesFtpMeasurementData';
import type { MSeriesFtpMeasurementListResponseMeta } from './MSeriesFtpMeasurementListResponseMeta';
import {
    MSeriesFtpMeasurementListResponseMetaFromJSON,
    MSeriesFtpMeasurementListResponseMetaFromJSONTyped,
    MSeriesFtpMeasurementListResponseMetaToJSON,
} from './MSeriesFtpMeasurementListResponseMeta';

/**
 * 
 * @export
 * @interface MSeriesFtpMeasurementListResponse
 */
export interface MSeriesFtpMeasurementListResponse {
    /**
     * 
     * @type {Array<MSeriesFtpMeasurementData>}
     * @memberof MSeriesFtpMeasurementListResponse
     */
    mSeriesFtpMeasurements: Array<MSeriesFtpMeasurementData>;
    /**
     * 
     * @type {MSeriesFtpMeasurementListResponseMeta}
     * @memberof MSeriesFtpMeasurementListResponse
     */
    mSeriesFtpMeasurementsMeta: MSeriesFtpMeasurementListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesFtpMeasurementListResponse interface.
 */
export function instanceOfMSeriesFtpMeasurementListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesFtpMeasurements" in value;
    isInstance = isInstance && "mSeriesFtpMeasurementsMeta" in value;

    return isInstance;
}

export function MSeriesFtpMeasurementListResponseFromJSON(json: any): MSeriesFtpMeasurementListResponse {
    return MSeriesFtpMeasurementListResponseFromJSONTyped(json, false);
}

export function MSeriesFtpMeasurementListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesFtpMeasurementListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesFtpMeasurements': ((json['mSeriesFtpMeasurements'] as Array<any>).map(MSeriesFtpMeasurementDataFromJSON)),
        'mSeriesFtpMeasurementsMeta': MSeriesFtpMeasurementListResponseMetaFromJSON(json['mSeriesFtpMeasurementsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesFtpMeasurementListResponseToJSON(value?: MSeriesFtpMeasurementListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesFtpMeasurements': ((value.mSeriesFtpMeasurements as Array<any>).map(MSeriesFtpMeasurementDataToJSON)),
        'mSeriesFtpMeasurementsMeta': MSeriesFtpMeasurementListResponseMetaToJSON(value.mSeriesFtpMeasurementsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

