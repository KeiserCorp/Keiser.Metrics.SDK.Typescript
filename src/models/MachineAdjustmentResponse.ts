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
import type { MachineAdjustmentData } from './MachineAdjustmentData';
import {
    MachineAdjustmentDataFromJSON,
    MachineAdjustmentDataFromJSONTyped,
    MachineAdjustmentDataToJSON,
} from './MachineAdjustmentData';

/**
 * 
 * @export
 * @interface MachineAdjustmentResponse
 */
export interface MachineAdjustmentResponse {
    /**
     * 
     * @type {MachineAdjustmentData}
     * @memberof MachineAdjustmentResponse
     */
    machineAdjustment: MachineAdjustmentData;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MachineAdjustmentResponse interface.
 */
export function instanceOfMachineAdjustmentResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "machineAdjustment" in value;

    return isInstance;
}

export function MachineAdjustmentResponseFromJSON(json: any): MachineAdjustmentResponse {
    return MachineAdjustmentResponseFromJSONTyped(json, false);
}

export function MachineAdjustmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MachineAdjustmentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'machineAdjustment': MachineAdjustmentDataFromJSON(json['machineAdjustment']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MachineAdjustmentResponseToJSON(value?: MachineAdjustmentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'machineAdjustment': MachineAdjustmentDataToJSON(value.machineAdjustment),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

