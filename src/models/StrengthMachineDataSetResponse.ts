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
import type { StrengthMachineDataSetData } from './StrengthMachineDataSetData';
import {
    StrengthMachineDataSetDataFromJSON,
    StrengthMachineDataSetDataFromJSONTyped,
    StrengthMachineDataSetDataToJSON,
} from './StrengthMachineDataSetData';

/**
 * 
 * @export
 * @interface StrengthMachineDataSetResponse
 */
export interface StrengthMachineDataSetResponse {
    /**
     * 
     * @type {StrengthMachineDataSetData}
     * @memberof StrengthMachineDataSetResponse
     */
    strengthMachineDataSet: StrengthMachineDataSetData;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthMachineDataSetResponse interface.
 */
export function instanceOfStrengthMachineDataSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthMachineDataSet" in value;

    return isInstance;
}

export function StrengthMachineDataSetResponseFromJSON(json: any): StrengthMachineDataSetResponse {
    return StrengthMachineDataSetResponseFromJSONTyped(json, false);
}

export function StrengthMachineDataSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthMachineDataSet': StrengthMachineDataSetDataFromJSON(json['strengthMachineDataSet']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineDataSetResponseToJSON(value?: StrengthMachineDataSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthMachineDataSet': StrengthMachineDataSetDataToJSON(value.strengthMachineDataSet),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

