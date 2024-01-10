/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
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
 * @interface MachineAdjustmentData
 */
export interface MachineAdjustmentData {
    /**
     * 
     * @type {number}
     * @memberof MachineAdjustmentData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof MachineAdjustmentData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentData
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentData
     */
    seat?: string;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentData
     */
    start?: string;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentData
     */
    stop?: string;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentData
     */
    leftPosition?: string;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentData
     */
    rightPosition?: string;
    /**
     * 
     * @type {StrengthMachineData}
     * @memberof MachineAdjustmentData
     */
    strengthMachine?: StrengthMachineData;
}

/**
 * Check if a given object implements the MachineAdjustmentData interface.
 */
export function instanceOfMachineAdjustmentData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "model" in value;

    return isInstance;
}

export function MachineAdjustmentDataFromJSON(json: any): MachineAdjustmentData {
    return MachineAdjustmentDataFromJSONTyped(json, false);
}

export function MachineAdjustmentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MachineAdjustmentData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'model': json['model'],
        'seat': !exists(json, 'seat') ? undefined : json['seat'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'stop': !exists(json, 'stop') ? undefined : json['stop'],
        'leftPosition': !exists(json, 'leftPosition') ? undefined : json['leftPosition'],
        'rightPosition': !exists(json, 'rightPosition') ? undefined : json['rightPosition'],
        'strengthMachine': !exists(json, 'strengthMachine') ? undefined : StrengthMachineDataFromJSON(json['strengthMachine']),
    };
}

export function MachineAdjustmentDataToJSON(value?: MachineAdjustmentData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'model': value.model,
        'seat': value.seat,
        'start': value.start,
        'stop': value.stop,
        'leftPosition': value.leftPosition,
        'rightPosition': value.rightPosition,
        'strengthMachine': StrengthMachineDataToJSON(value.strengthMachine),
    };
}

