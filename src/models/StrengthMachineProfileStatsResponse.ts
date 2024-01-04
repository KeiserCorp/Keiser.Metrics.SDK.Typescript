/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthMachineProfileStatsData } from './StrengthMachineProfileStatsData';
import {
    StrengthMachineProfileStatsDataFromJSON,
    StrengthMachineProfileStatsDataFromJSONTyped,
    StrengthMachineProfileStatsDataToJSON,
} from './StrengthMachineProfileStatsData';

/**
 * 
 * @export
 * @interface StrengthMachineProfileStatsResponse
 */
export interface StrengthMachineProfileStatsResponse {
    /**
     * 
     * @type {StrengthMachineProfileStatsData}
     * @memberof StrengthMachineProfileStatsResponse
     */
    strengthMachineProfileStats: StrengthMachineProfileStatsData;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineProfileStatsResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineProfileStatsResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthMachineProfileStatsResponse interface.
 */
export function instanceOfStrengthMachineProfileStatsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthMachineProfileStats" in value;

    return isInstance;
}

export function StrengthMachineProfileStatsResponseFromJSON(json: any): StrengthMachineProfileStatsResponse {
    return StrengthMachineProfileStatsResponseFromJSONTyped(json, false);
}

export function StrengthMachineProfileStatsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineProfileStatsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthMachineProfileStats': StrengthMachineProfileStatsDataFromJSON(json['strengthMachineProfileStats']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineProfileStatsResponseToJSON(value?: StrengthMachineProfileStatsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthMachineProfileStats': StrengthMachineProfileStatsDataToJSON(value.strengthMachineProfileStats),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

