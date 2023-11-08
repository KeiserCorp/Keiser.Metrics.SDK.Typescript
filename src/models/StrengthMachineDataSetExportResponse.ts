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
/**
 * 
 * @export
 * @interface StrengthMachineDataSetExportResponse
 */
export interface StrengthMachineDataSetExportResponse {
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetExportResponse
     */
    format: StrengthMachineDataSetExportResponseFormatEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetExportResponse
     */
    encoding: StrengthMachineDataSetExportResponseEncodingEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetExportResponse
     */
    data: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetExportResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetExportResponse
     */
    refreshToken?: string;
}


/**
 * @export
 */
export const StrengthMachineDataSetExportResponseFormatEnum = {
    Ka5: 'ka5'
} as const;
export type StrengthMachineDataSetExportResponseFormatEnum = typeof StrengthMachineDataSetExportResponseFormatEnum[keyof typeof StrengthMachineDataSetExportResponseFormatEnum];

/**
 * @export
 */
export const StrengthMachineDataSetExportResponseEncodingEnum = {
    B64: 'b64'
} as const;
export type StrengthMachineDataSetExportResponseEncodingEnum = typeof StrengthMachineDataSetExportResponseEncodingEnum[keyof typeof StrengthMachineDataSetExportResponseEncodingEnum];


/**
 * Check if a given object implements the StrengthMachineDataSetExportResponse interface.
 */
export function instanceOfStrengthMachineDataSetExportResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "format" in value;
    isInstance = isInstance && "encoding" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function StrengthMachineDataSetExportResponseFromJSON(json: any): StrengthMachineDataSetExportResponse {
    return StrengthMachineDataSetExportResponseFromJSONTyped(json, false);
}

export function StrengthMachineDataSetExportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetExportResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': json['format'],
        'encoding': json['encoding'],
        'data': json['data'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineDataSetExportResponseToJSON(value?: StrengthMachineDataSetExportResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format': value.format,
        'encoding': value.encoding,
        'data': value.data,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

