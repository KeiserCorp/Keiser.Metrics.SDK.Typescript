/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityStrengthMachineData } from './FacilityStrengthMachineData';
import {
    FacilityStrengthMachineDataFromJSON,
    FacilityStrengthMachineDataFromJSONTyped,
    FacilityStrengthMachineDataToJSON,
} from './FacilityStrengthMachineData';

/**
 * 
 * @export
 * @interface A500MachineStateData
 */
export interface A500MachineStateData {
    /**
     * 
     * @type {number}
     * @memberof A500MachineStateData
     */
    facilityStrengthMachineId: number;
    /**
     * 
     * @type {boolean}
     * @memberof A500MachineStateData
     */
    isFacilityConfigurationOverridden: boolean;
    /**
     * 
     * @type {string}
     * @memberof A500MachineStateData
     */
    appType: A500MachineStateDataAppTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof A500MachineStateData
     */
    forceUnit: A500MachineStateDataForceUnitEnum;
    /**
     * 
     * @type {string}
     * @memberof A500MachineStateData
     */
    primaryFocus: string;
    /**
     * 
     * @type {string}
     * @memberof A500MachineStateData
     */
    secondaryFocus: string;
    /**
     * 
     * @type {FacilityStrengthMachineData}
     * @memberof A500MachineStateData
     */
    facilityStrengthMachine?: FacilityStrengthMachineData;
}


/**
 * @export
 */
export const A500MachineStateDataAppTypeEnum = {
    Performance: 'performance',
    Elder: 'elder',
    Medical: 'medical',
    Commercial: 'commercial'
} as const;
export type A500MachineStateDataAppTypeEnum = typeof A500MachineStateDataAppTypeEnum[keyof typeof A500MachineStateDataAppTypeEnum];

/**
 * @export
 */
export const A500MachineStateDataForceUnitEnum = {
    Lb: 'lb',
    Kg: 'kg',
    Ne: 'ne',
    Er: 'er'
} as const;
export type A500MachineStateDataForceUnitEnum = typeof A500MachineStateDataForceUnitEnum[keyof typeof A500MachineStateDataForceUnitEnum];


/**
 * Check if a given object implements the A500MachineStateData interface.
 */
export function instanceOfA500MachineStateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachineId" in value;
    isInstance = isInstance && "isFacilityConfigurationOverridden" in value;
    isInstance = isInstance && "appType" in value;
    isInstance = isInstance && "forceUnit" in value;
    isInstance = isInstance && "primaryFocus" in value;
    isInstance = isInstance && "secondaryFocus" in value;

    return isInstance;
}

export function A500MachineStateDataFromJSON(json: any): A500MachineStateData {
    return A500MachineStateDataFromJSONTyped(json, false);
}

export function A500MachineStateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500MachineStateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachineId': json['facilityStrengthMachineId'],
        'isFacilityConfigurationOverridden': json['isFacilityConfigurationOverridden'],
        'appType': json['appType'],
        'forceUnit': json['forceUnit'],
        'primaryFocus': json['primaryFocus'],
        'secondaryFocus': json['secondaryFocus'],
        'facilityStrengthMachine': !exists(json, 'facilityStrengthMachine') ? undefined : FacilityStrengthMachineDataFromJSON(json['facilityStrengthMachine']),
    };
}

export function A500MachineStateDataToJSON(value?: A500MachineStateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachineId': value.facilityStrengthMachineId,
        'isFacilityConfigurationOverridden': value.isFacilityConfigurationOverridden,
        'appType': value.appType,
        'forceUnit': value.forceUnit,
        'primaryFocus': value.primaryFocus,
        'secondaryFocus': value.secondaryFocus,
        'facilityStrengthMachine': FacilityStrengthMachineDataToJSON(value.facilityStrengthMachine),
    };
}

