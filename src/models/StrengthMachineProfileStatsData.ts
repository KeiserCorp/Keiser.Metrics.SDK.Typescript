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
/**
 * 
 * @export
 * @interface StrengthMachineProfileStatsData
 */
export interface StrengthMachineProfileStatsData {
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineProfileStatsData
     */
    strengthMachineId: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineProfileStatsData
     */
    peakPower: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineProfileStatsData
     */
    peakVelocity: number;
}

/**
 * Check if a given object implements the StrengthMachineProfileStatsData interface.
 */
export function instanceOfStrengthMachineProfileStatsData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthMachineId" in value;
    isInstance = isInstance && "peakPower" in value;
    isInstance = isInstance && "peakVelocity" in value;

    return isInstance;
}

export function StrengthMachineProfileStatsDataFromJSON(json: any): StrengthMachineProfileStatsData {
    return StrengthMachineProfileStatsDataFromJSONTyped(json, false);
}

export function StrengthMachineProfileStatsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineProfileStatsData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthMachineId': json['strengthMachineId'],
        'peakPower': json['peakPower'],
        'peakVelocity': json['peakVelocity'],
    };
}

export function StrengthMachineProfileStatsDataToJSON(value?: StrengthMachineProfileStatsData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthMachineId': value.strengthMachineId,
        'peakPower': value.peakPower,
        'peakVelocity': value.peakVelocity,
    };
}

