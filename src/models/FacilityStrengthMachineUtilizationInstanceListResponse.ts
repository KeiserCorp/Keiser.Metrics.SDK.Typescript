/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityStrengthMachineUtilizationInstanceData } from './FacilityStrengthMachineUtilizationInstanceData';
import {
    FacilityStrengthMachineUtilizationInstanceDataFromJSON,
    FacilityStrengthMachineUtilizationInstanceDataFromJSONTyped,
    FacilityStrengthMachineUtilizationInstanceDataToJSON,
} from './FacilityStrengthMachineUtilizationInstanceData';
import type { FacilityStrengthMachineUtilizationInstancesMeta } from './FacilityStrengthMachineUtilizationInstancesMeta';
import {
    FacilityStrengthMachineUtilizationInstancesMetaFromJSON,
    FacilityStrengthMachineUtilizationInstancesMetaFromJSONTyped,
    FacilityStrengthMachineUtilizationInstancesMetaToJSON,
} from './FacilityStrengthMachineUtilizationInstancesMeta';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineUtilizationInstanceListResponse
 */
export interface FacilityStrengthMachineUtilizationInstanceListResponse {
    /**
     * 
     * @type {Array<FacilityStrengthMachineUtilizationInstanceData>}
     * @memberof FacilityStrengthMachineUtilizationInstanceListResponse
     */
    facilityStrengthMachineUtilizationInstances: Array<FacilityStrengthMachineUtilizationInstanceData>;
    /**
     * 
     * @type {FacilityStrengthMachineUtilizationInstancesMeta}
     * @memberof FacilityStrengthMachineUtilizationInstanceListResponse
     */
    facilityStrengthMachineUtilizationInstancesMeta: FacilityStrengthMachineUtilizationInstancesMeta;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineUtilizationInstanceListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineUtilizationInstanceListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineUtilizationInstanceListResponse interface.
 */
export function instanceOfFacilityStrengthMachineUtilizationInstanceListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachineUtilizationInstances" in value;
    isInstance = isInstance && "facilityStrengthMachineUtilizationInstancesMeta" in value;

    return isInstance;
}

export function FacilityStrengthMachineUtilizationInstanceListResponseFromJSON(json: any): FacilityStrengthMachineUtilizationInstanceListResponse {
    return FacilityStrengthMachineUtilizationInstanceListResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineUtilizationInstanceListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineUtilizationInstanceListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachineUtilizationInstances': ((json['facilityStrengthMachineUtilizationInstances'] as Array<any>).map(FacilityStrengthMachineUtilizationInstanceDataFromJSON)),
        'facilityStrengthMachineUtilizationInstancesMeta': FacilityStrengthMachineUtilizationInstancesMetaFromJSON(json['facilityStrengthMachineUtilizationInstancesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineUtilizationInstanceListResponseToJSON(value?: FacilityStrengthMachineUtilizationInstanceListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachineUtilizationInstances': ((value.facilityStrengthMachineUtilizationInstances as Array<any>).map(FacilityStrengthMachineUtilizationInstanceDataToJSON)),
        'facilityStrengthMachineUtilizationInstancesMeta': FacilityStrengthMachineUtilizationInstancesMetaToJSON(value.facilityStrengthMachineUtilizationInstancesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

