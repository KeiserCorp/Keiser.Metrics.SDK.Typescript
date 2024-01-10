/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
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
import type { MachineAdjustmentListResponseMeta } from './MachineAdjustmentListResponseMeta';
import {
    MachineAdjustmentListResponseMetaFromJSON,
    MachineAdjustmentListResponseMetaFromJSONTyped,
    MachineAdjustmentListResponseMetaToJSON,
} from './MachineAdjustmentListResponseMeta';

/**
 * 
 * @export
 * @interface MachineAdjustmentListResponse
 */
export interface MachineAdjustmentListResponse {
    /**
     * 
     * @type {Array<MachineAdjustmentData>}
     * @memberof MachineAdjustmentListResponse
     */
    machineAdjustments: Array<MachineAdjustmentData>;
    /**
     * 
     * @type {MachineAdjustmentListResponseMeta}
     * @memberof MachineAdjustmentListResponse
     */
    machineAdjustmentsMeta: MachineAdjustmentListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MachineAdjustmentListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MachineAdjustmentListResponse interface.
 */
export function instanceOfMachineAdjustmentListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "machineAdjustments" in value;
    isInstance = isInstance && "machineAdjustmentsMeta" in value;

    return isInstance;
}

export function MachineAdjustmentListResponseFromJSON(json: any): MachineAdjustmentListResponse {
    return MachineAdjustmentListResponseFromJSONTyped(json, false);
}

export function MachineAdjustmentListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MachineAdjustmentListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'machineAdjustments': ((json['machineAdjustments'] as Array<any>).map(MachineAdjustmentDataFromJSON)),
        'machineAdjustmentsMeta': MachineAdjustmentListResponseMetaFromJSON(json['machineAdjustmentsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MachineAdjustmentListResponseToJSON(value?: MachineAdjustmentListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'machineAdjustments': ((value.machineAdjustments as Array<any>).map(MachineAdjustmentDataToJSON)),
        'machineAdjustmentsMeta': MachineAdjustmentListResponseMetaToJSON(value.machineAdjustmentsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

