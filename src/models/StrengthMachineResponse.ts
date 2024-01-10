/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthMachineData } from './StrengthMachineData';
import {
    StrengthMachineDataFromJSON,
    StrengthMachineDataFromJSONTyped,
    StrengthMachineDataToJSON,
} from './StrengthMachineData';

/**
 * 
 * @export
 * @interface StrengthMachineResponse
 */
export interface StrengthMachineResponse {
    /**
     * 
     * @type {StrengthMachineData}
     * @memberof StrengthMachineResponse
     */
    strengthMachine: StrengthMachineData;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthMachineResponse interface.
 */
export function instanceOfStrengthMachineResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthMachine" in value;

    return isInstance;
}

export function StrengthMachineResponseFromJSON(json: any): StrengthMachineResponse {
    return StrengthMachineResponseFromJSONTyped(json, false);
}

export function StrengthMachineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthMachine': StrengthMachineDataFromJSON(json['strengthMachine']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineResponseToJSON(value?: StrengthMachineResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthMachine': StrengthMachineDataToJSON(value.strengthMachine),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

