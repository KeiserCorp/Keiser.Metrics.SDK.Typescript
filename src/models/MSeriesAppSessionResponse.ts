/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesAppSessionData } from './MSeriesAppSessionData';
import {
    MSeriesAppSessionDataFromJSON,
    MSeriesAppSessionDataFromJSONTyped,
    MSeriesAppSessionDataToJSON,
} from './MSeriesAppSessionData';

/**
 * 
 * @export
 * @interface MSeriesAppSessionResponse
 */
export interface MSeriesAppSessionResponse {
    /**
     * 
     * @type {MSeriesAppSessionData}
     * @memberof MSeriesAppSessionResponse
     */
    mSeriesAppSession: MSeriesAppSessionData;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesAppSessionResponse interface.
 */
export function instanceOfMSeriesAppSessionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesAppSession" in value;

    return isInstance;
}

export function MSeriesAppSessionResponseFromJSON(json: any): MSeriesAppSessionResponse {
    return MSeriesAppSessionResponseFromJSONTyped(json, false);
}

export function MSeriesAppSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesAppSessionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesAppSession': MSeriesAppSessionDataFromJSON(json['mSeriesAppSession']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesAppSessionResponseToJSON(value?: MSeriesAppSessionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesAppSession': MSeriesAppSessionDataToJSON(value.mSeriesAppSession),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

