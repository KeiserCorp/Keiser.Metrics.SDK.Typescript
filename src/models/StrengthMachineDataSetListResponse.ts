/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.2
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
import type { StrengthMachineDataSetListResponseMeta } from './StrengthMachineDataSetListResponseMeta';
import {
    StrengthMachineDataSetListResponseMetaFromJSON,
    StrengthMachineDataSetListResponseMetaFromJSONTyped,
    StrengthMachineDataSetListResponseMetaToJSON,
} from './StrengthMachineDataSetListResponseMeta';

/**
 * 
 * @export
 * @interface StrengthMachineDataSetListResponse
 */
export interface StrengthMachineDataSetListResponse {
    /**
     * 
     * @type {Array<StrengthMachineDataSetData>}
     * @memberof StrengthMachineDataSetListResponse
     */
    strengthMachineDataSets: Array<StrengthMachineDataSetData>;
    /**
     * 
     * @type {StrengthMachineDataSetListResponseMeta}
     * @memberof StrengthMachineDataSetListResponse
     */
    strengthMachineDataSetsMeta: StrengthMachineDataSetListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StrengthMachineDataSetListResponse interface.
 */
export function instanceOfStrengthMachineDataSetListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "strengthMachineDataSets" in value;
    isInstance = isInstance && "strengthMachineDataSetsMeta" in value;

    return isInstance;
}

export function StrengthMachineDataSetListResponseFromJSON(json: any): StrengthMachineDataSetListResponse {
    return StrengthMachineDataSetListResponseFromJSONTyped(json, false);
}

export function StrengthMachineDataSetListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strengthMachineDataSets': ((json['strengthMachineDataSets'] as Array<any>).map(StrengthMachineDataSetDataFromJSON)),
        'strengthMachineDataSetsMeta': StrengthMachineDataSetListResponseMetaFromJSON(json['strengthMachineDataSetsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StrengthMachineDataSetListResponseToJSON(value?: StrengthMachineDataSetListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strengthMachineDataSets': ((value.strengthMachineDataSets as Array<any>).map(StrengthMachineDataSetDataToJSON)),
        'strengthMachineDataSetsMeta': StrengthMachineDataSetListResponseMetaToJSON(value.strengthMachineDataSetsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

