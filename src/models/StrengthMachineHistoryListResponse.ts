/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthMachineDataSetData } from './StrengthMachineDataSetData';
import {
    StrengthMachineDataSetDataFromJSON,
    StrengthMachineDataSetDataFromJSONTyped,
    StrengthMachineDataSetDataToJSON,
} from './StrengthMachineDataSetData';
import type { StrengthMachineHistoryMeta } from './StrengthMachineHistoryMeta';
import {
    StrengthMachineHistoryMetaFromJSON,
    StrengthMachineHistoryMetaFromJSONTyped,
    StrengthMachineHistoryMetaToJSON,
} from './StrengthMachineHistoryMeta';

/**
 * 
 * @export
 * @interface StrengthMachineHistoryListResponse
 */
export interface StrengthMachineHistoryListResponse {
    /**
     * 
     * @type {Array<StrengthMachineDataSetData>}
     * @memberof StrengthMachineHistoryListResponse
     */
    strengthMachinesUsed: Array<StrengthMachineDataSetData>;
    /**
     * 
     * @type {StrengthMachineHistoryMeta}
     * @memberof StrengthMachineHistoryListResponse
     */
    strengthMachinesUsedMeta: StrengthMachineHistoryMeta;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineHistoryListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineHistoryListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthMachineHistoryListResponse interface.
 */
export function instanceOfStrengthMachineHistoryListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthMachinesUsed" in value;
    isInstance = isInstance && "strengthMachinesUsedMeta" in value;

    return isInstance;
}

export function StrengthMachineHistoryListResponseFromJSON(json: any): StrengthMachineHistoryListResponse {
    return StrengthMachineHistoryListResponseFromJSONTyped(json, false);
}

export function StrengthMachineHistoryListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineHistoryListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthMachinesUsed': ((json['strengthMachinesUsed'] as Array<any>).map(StrengthMachineDataSetDataFromJSON)),
        'strengthMachinesUsedMeta': StrengthMachineHistoryMetaFromJSON(json['strengthMachinesUsedMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineHistoryListResponseToJSON(value?: StrengthMachineHistoryListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthMachinesUsed': ((value.strengthMachinesUsed as Array<any>).map(StrengthMachineDataSetDataToJSON)),
        'strengthMachinesUsedMeta': StrengthMachineHistoryMetaToJSON(value.strengthMachinesUsedMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

