/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
import type { StrengthMachineListResponseMeta } from './StrengthMachineListResponseMeta';
import {
    StrengthMachineListResponseMetaFromJSON,
    StrengthMachineListResponseMetaFromJSONTyped,
    StrengthMachineListResponseMetaToJSON,
} from './StrengthMachineListResponseMeta';

/**
 * 
 * @export
 * @interface StrengthMachineListResponse
 */
export interface StrengthMachineListResponse {
    /**
     * 
     * @type {Array<StrengthMachineData>}
     * @memberof StrengthMachineListResponse
     */
    strengthMachines: Array<StrengthMachineData>;
    /**
     * 
     * @type {StrengthMachineListResponseMeta}
     * @memberof StrengthMachineListResponse
     */
    strengthMachinesMeta: StrengthMachineListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthMachineListResponse interface.
 */
export function instanceOfStrengthMachineListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthMachines" in value;
    isInstance = isInstance && "strengthMachinesMeta" in value;

    return isInstance;
}

export function StrengthMachineListResponseFromJSON(json: any): StrengthMachineListResponse {
    return StrengthMachineListResponseFromJSONTyped(json, false);
}

export function StrengthMachineListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthMachines': ((json['strengthMachines'] as Array<any>).map(StrengthMachineDataFromJSON)),
        'strengthMachinesMeta': StrengthMachineListResponseMetaFromJSON(json['strengthMachinesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineListResponseToJSON(value?: StrengthMachineListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthMachines': ((value.strengthMachines as Array<any>).map(StrengthMachineDataToJSON)),
        'strengthMachinesMeta': StrengthMachineListResponseMetaToJSON(value.strengthMachinesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

