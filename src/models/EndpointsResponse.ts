/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EndpointsData } from './EndpointsData';
import {
    EndpointsDataFromJSON,
    EndpointsDataFromJSONTyped,
    EndpointsDataToJSON,
} from './EndpointsData';

/**
 * 
 * @export
 * @interface EndpointsResponse
 */
export interface EndpointsResponse {
    /**
     * 
     * @type {EndpointsData}
     * @memberof EndpointsResponse
     */
    endpoints: EndpointsData;
}

/**
 * Check if a given object implements the EndpointsResponse interface.
 */
export function instanceOfEndpointsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "endpoints" in value;

    return isInstance;
}

export function EndpointsResponseFromJSON(json: any): EndpointsResponse {
    return EndpointsResponseFromJSONTyped(json, false);
}

export function EndpointsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endpoints': EndpointsDataFromJSON(json['endpoints']),
    };
}

export function EndpointsResponseToJSON(value?: EndpointsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endpoints': EndpointsDataToJSON(value.endpoints),
    };
}

