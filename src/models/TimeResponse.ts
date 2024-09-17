/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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
 * @interface TimeResponse
 */
export interface TimeResponse {
    /**
     * 
     * @type {string}
     * @memberof TimeResponse
     */
    isoDate: string;
    /**
     * 
     * @type {number}
     * @memberof TimeResponse
     */
    unixOffset: number;
}

/**
 * Check if a given object implements the TimeResponse interface.
 */
export function instanceOfTimeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isoDate" in value;
    isInstance = isInstance && "unixOffset" in value;

    return isInstance;
}

export function TimeResponseFromJSON(json: any): TimeResponse {
    return TimeResponseFromJSONTyped(json, false);
}

export function TimeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isoDate': json['isoDate'],
        'unixOffset': json['unixOffset'],
    };
}

export function TimeResponseToJSON(value?: TimeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isoDate': value.isoDate,
        'unixOffset': value.unixOffset,
    };
}

