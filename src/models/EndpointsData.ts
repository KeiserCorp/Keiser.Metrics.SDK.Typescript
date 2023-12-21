/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.15
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
 * @interface EndpointsData
 */
export interface EndpointsData {
    /**
     * 
     * @type {string}
     * @memberof EndpointsData
     */
    sso: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointsData
     */
    metricsApp: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointsData
     */
    facility: string;
}

/**
 * Check if a given object implements the EndpointsData interface.
 */
export function instanceOfEndpointsData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sso" in value;
    isInstance = isInstance && "metricsApp" in value;
    isInstance = isInstance && "facility" in value;

    return isInstance;
}

export function EndpointsDataFromJSON(json: any): EndpointsData {
    return EndpointsDataFromJSONTyped(json, false);
}

export function EndpointsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointsData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sso': json['sso'],
        'metricsApp': json['metricsApp'],
        'facility': json['facility'],
    };
}

export function EndpointsDataToJSON(value?: EndpointsData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sso': value.sso,
        'metricsApp': value.metricsApp,
        'facility': value.facility,
    };
}

