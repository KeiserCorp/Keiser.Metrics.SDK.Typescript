/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityCardioMachineData } from './FacilityCardioMachineData';
import {
    FacilityCardioMachineDataFromJSON,
    FacilityCardioMachineDataFromJSONTyped,
    FacilityCardioMachineDataToJSON,
} from './FacilityCardioMachineData';
import type { FacilityCardioMachineListResponseMeta } from './FacilityCardioMachineListResponseMeta';
import {
    FacilityCardioMachineListResponseMetaFromJSON,
    FacilityCardioMachineListResponseMetaFromJSONTyped,
    FacilityCardioMachineListResponseMetaToJSON,
} from './FacilityCardioMachineListResponseMeta';

/**
 * 
 * @export
 * @interface FacilityCardioMachineListResponse
 */
export interface FacilityCardioMachineListResponse {
    /**
     * 
     * @type {Array<FacilityCardioMachineData>}
     * @memberof FacilityCardioMachineListResponse
     */
    facilityCardioMachines: Array<FacilityCardioMachineData>;
    /**
     * 
     * @type {FacilityCardioMachineListResponseMeta}
     * @memberof FacilityCardioMachineListResponse
     */
    facilityCardioMachinesMeta: FacilityCardioMachineListResponseMeta;
}

/**
 * Check if a given object implements the FacilityCardioMachineListResponse interface.
 */
export function instanceOfFacilityCardioMachineListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityCardioMachines" in value;
    isInstance = isInstance && "facilityCardioMachinesMeta" in value;

    return isInstance;
}

export function FacilityCardioMachineListResponseFromJSON(json: any): FacilityCardioMachineListResponse {
    return FacilityCardioMachineListResponseFromJSONTyped(json, false);
}

export function FacilityCardioMachineListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityCardioMachineListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityCardioMachines': ((json['facilityCardioMachines'] as Array<any>).map(FacilityCardioMachineDataFromJSON)),
        'facilityCardioMachinesMeta': FacilityCardioMachineListResponseMetaFromJSON(json['facilityCardioMachinesMeta']),
    };
}

export function FacilityCardioMachineListResponseToJSON(value?: FacilityCardioMachineListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityCardioMachines': ((value.facilityCardioMachines as Array<any>).map(FacilityCardioMachineDataToJSON)),
        'facilityCardioMachinesMeta': FacilityCardioMachineListResponseMetaToJSON(value.facilityCardioMachinesMeta),
    };
}

