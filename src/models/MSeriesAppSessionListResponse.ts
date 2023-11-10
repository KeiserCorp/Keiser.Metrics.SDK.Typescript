/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
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
import type { MSeriesAppSessionListResponseMeta } from './MSeriesAppSessionListResponseMeta';
import {
    MSeriesAppSessionListResponseMetaFromJSON,
    MSeriesAppSessionListResponseMetaFromJSONTyped,
    MSeriesAppSessionListResponseMetaToJSON,
} from './MSeriesAppSessionListResponseMeta';

/**
 * 
 * @export
 * @interface MSeriesAppSessionListResponse
 */
export interface MSeriesAppSessionListResponse {
    /**
     * 
     * @type {Array<MSeriesAppSessionData>}
     * @memberof MSeriesAppSessionListResponse
     */
    mSeriesAppSessions: Array<MSeriesAppSessionData>;
    /**
     * 
     * @type {MSeriesAppSessionListResponseMeta}
     * @memberof MSeriesAppSessionListResponse
     */
    mSeriesAppSessionsMeta: MSeriesAppSessionListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesAppSessionListResponse interface.
 */
export function instanceOfMSeriesAppSessionListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesAppSessions" in value;
    isInstance = isInstance && "mSeriesAppSessionsMeta" in value;

    return isInstance;
}

export function MSeriesAppSessionListResponseFromJSON(json: any): MSeriesAppSessionListResponse {
    return MSeriesAppSessionListResponseFromJSONTyped(json, false);
}

export function MSeriesAppSessionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesAppSessionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesAppSessions': ((json['mSeriesAppSessions'] as Array<any>).map(MSeriesAppSessionDataFromJSON)),
        'mSeriesAppSessionsMeta': MSeriesAppSessionListResponseMetaFromJSON(json['mSeriesAppSessionsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesAppSessionListResponseToJSON(value?: MSeriesAppSessionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesAppSessions': ((value.mSeriesAppSessions as Array<any>).map(MSeriesAppSessionDataToJSON)),
        'mSeriesAppSessionsMeta': MSeriesAppSessionListResponseMetaToJSON(value.mSeriesAppSessionsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

