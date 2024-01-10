/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MSeriesAppSessionExportResponse
 */
export interface MSeriesAppSessionExportResponse {
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionExportResponse
     */
    format: MSeriesAppSessionExportResponseFormatEnum;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionExportResponse
     */
    data: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionExportResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionExportResponse
     */
    refreshToken?: string;
}


/**
 * @export
 */
export const MSeriesAppSessionExportResponseFormatEnum = {
    Tcx: 'tcx'
} as const;
export type MSeriesAppSessionExportResponseFormatEnum = typeof MSeriesAppSessionExportResponseFormatEnum[keyof typeof MSeriesAppSessionExportResponseFormatEnum];


/**
 * Check if a given object implements the MSeriesAppSessionExportResponse interface.
 */
export function instanceOfMSeriesAppSessionExportResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "format" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function MSeriesAppSessionExportResponseFromJSON(json: any): MSeriesAppSessionExportResponse {
    return MSeriesAppSessionExportResponseFromJSONTyped(json, false);
}

export function MSeriesAppSessionExportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesAppSessionExportResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': json['format'],
        'data': json['data'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesAppSessionExportResponseToJSON(value?: MSeriesAppSessionExportResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format': value.format,
        'data': value.data,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

