/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthMachineDataSetTestSubsetData } from './StrengthMachineDataSetTestSubsetData';
import {
    StrengthMachineDataSetTestSubsetDataFromJSON,
    StrengthMachineDataSetTestSubsetDataFromJSONTyped,
    StrengthMachineDataSetTestSubsetDataToJSON,
} from './StrengthMachineDataSetTestSubsetData';

/**
 * 
 * @export
 * @interface StrengthMachineDataSetTestData
 */
export interface StrengthMachineDataSetTestData {
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetTestData
     */
    type: StrengthMachineDataSetTestDataTypeEnum;
    /**
     * 
     * @type {StrengthMachineDataSetTestSubsetData}
     * @memberof StrengthMachineDataSetTestData
     */
    high: StrengthMachineDataSetTestSubsetData;
    /**
     * 
     * @type {StrengthMachineDataSetTestSubsetData}
     * @memberof StrengthMachineDataSetTestData
     */
    low: StrengthMachineDataSetTestSubsetData;
}


/**
 * @export
 */
export const StrengthMachineDataSetTestDataTypeEnum = {
    Power6r: 'power6r',
    A4206r: 'a4206r',
    A42010r: 'a42010r',
    A50010r: 'a50010r'
} as const;
export type StrengthMachineDataSetTestDataTypeEnum = typeof StrengthMachineDataSetTestDataTypeEnum[keyof typeof StrengthMachineDataSetTestDataTypeEnum];


/**
 * Check if a given object implements the StrengthMachineDataSetTestData interface.
 */
export function instanceOfStrengthMachineDataSetTestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "high" in value;
    isInstance = isInstance && "low" in value;

    return isInstance;
}

export function StrengthMachineDataSetTestDataFromJSON(json: any): StrengthMachineDataSetTestData {
    return StrengthMachineDataSetTestDataFromJSONTyped(json, false);
}

export function StrengthMachineDataSetTestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetTestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'high': StrengthMachineDataSetTestSubsetDataFromJSON(json['high']),
        'low': StrengthMachineDataSetTestSubsetDataFromJSON(json['low']),
    };
}

export function StrengthMachineDataSetTestDataToJSON(value?: StrengthMachineDataSetTestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'high': StrengthMachineDataSetTestSubsetDataToJSON(value.high),
        'low': StrengthMachineDataSetTestSubsetDataToJSON(value.low),
    };
}

