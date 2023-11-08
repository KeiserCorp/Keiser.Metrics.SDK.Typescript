/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
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
import type { FacilityStrengthMachineListResponseMeta } from './FacilityStrengthMachineListResponseMeta';
import {
    FacilityStrengthMachineListResponseMetaFromJSON,
    FacilityStrengthMachineListResponseMetaFromJSONTyped,
    FacilityStrengthMachineListResponseMetaToJSON,
} from './FacilityStrengthMachineListResponseMeta';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineListResponse
 */
export interface FacilityStrengthMachineListResponse {
    /**
     * 
     * @type {Array<FacilityStrengthMachineData>}
     * @memberof FacilityStrengthMachineListResponse
     */
    facilityStrengthMachines: Array<FacilityStrengthMachineData>;
    /**
     * 
     * @type {FacilityStrengthMachineListResponseMeta}
     * @memberof FacilityStrengthMachineListResponse
     */
    facilityStrengthMachinesMeta: FacilityStrengthMachineListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineListResponse interface.
 */
export function instanceOfFacilityStrengthMachineListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachines" in value;
    isInstance = isInstance && "facilityStrengthMachinesMeta" in value;

    return isInstance;
}

export function FacilityStrengthMachineListResponseFromJSON(json: any): FacilityStrengthMachineListResponse {
    return FacilityStrengthMachineListResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachines': ((json['facilityStrengthMachines'] as Array<any>).map(FacilityStrengthMachineDataFromJSON)),
        'facilityStrengthMachinesMeta': FacilityStrengthMachineListResponseMetaFromJSON(json['facilityStrengthMachinesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineListResponseToJSON(value?: FacilityStrengthMachineListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachines': ((value.facilityStrengthMachines as Array<any>).map(FacilityStrengthMachineDataToJSON)),
        'facilityStrengthMachinesMeta': FacilityStrengthMachineListResponseMetaToJSON(value.facilityStrengthMachinesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

