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
/**
 * 
 * @export
 * @interface HealthResponse
 */
export interface HealthResponse {
    /**
     * 
     * @type {boolean}
     * @memberof HealthResponse
     */
    healthy: boolean;
}

/**
 * Check if a given object implements the HealthResponse interface.
 */
export function instanceOfHealthResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "healthy" in value;

    return isInstance;
}

export function HealthResponseFromJSON(json: any): HealthResponse {
    return HealthResponseFromJSONTyped(json, false);
}

export function HealthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'healthy': json['healthy'],
    };
}

export function HealthResponseToJSON(value?: HealthResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'healthy': value.healthy,
    };
}

