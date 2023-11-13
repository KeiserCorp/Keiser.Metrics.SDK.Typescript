/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { A500MachineStateData } from './A500MachineStateData';
import {
    A500MachineStateDataFromJSON,
    A500MachineStateDataFromJSONTyped,
    A500MachineStateDataToJSON,
} from './A500MachineStateData';

/**
 * 
 * @export
 * @interface A500MachineStateResponse
 */
export interface A500MachineStateResponse {
    /**
     * 
     * @type {A500MachineStateData}
     * @memberof A500MachineStateResponse
     */
    a500MachineState: A500MachineStateData;
    /**
     * 
     * @type {string}
     * @memberof A500MachineStateResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof A500MachineStateResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the A500MachineStateResponse interface.
 */
export function instanceOfA500MachineStateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "a500MachineState" in value;

    return isInstance;
}

export function A500MachineStateResponseFromJSON(json: any): A500MachineStateResponse {
    return A500MachineStateResponseFromJSONTyped(json, false);
}

export function A500MachineStateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500MachineStateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a500MachineState': A500MachineStateDataFromJSON(json['a500MachineState']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function A500MachineStateResponseToJSON(value?: A500MachineStateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a500MachineState': A500MachineStateDataToJSON(value.a500MachineState),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

