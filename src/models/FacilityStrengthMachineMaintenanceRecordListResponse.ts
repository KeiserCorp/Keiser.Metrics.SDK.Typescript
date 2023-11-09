/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityStrengthMachineMaintenanceRecordData } from './FacilityStrengthMachineMaintenanceRecordData';
import {
    FacilityStrengthMachineMaintenanceRecordDataFromJSON,
    FacilityStrengthMachineMaintenanceRecordDataFromJSONTyped,
    FacilityStrengthMachineMaintenanceRecordDataToJSON,
} from './FacilityStrengthMachineMaintenanceRecordData';
import type { FacilityStrengthMachineMaintenanceRecordsMeta } from './FacilityStrengthMachineMaintenanceRecordsMeta';
import {
    FacilityStrengthMachineMaintenanceRecordsMetaFromJSON,
    FacilityStrengthMachineMaintenanceRecordsMetaFromJSONTyped,
    FacilityStrengthMachineMaintenanceRecordsMetaToJSON,
} from './FacilityStrengthMachineMaintenanceRecordsMeta';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineMaintenanceRecordListResponse
 */
export interface FacilityStrengthMachineMaintenanceRecordListResponse {
    /**
     * 
     * @type {FacilityStrengthMachineMaintenanceRecordsMeta}
     * @memberof FacilityStrengthMachineMaintenanceRecordListResponse
     */
    facilityStrengthMachineMaintenanceRecordsMeta: FacilityStrengthMachineMaintenanceRecordsMeta;
    /**
     * 
     * @type {Array<FacilityStrengthMachineMaintenanceRecordData>}
     * @memberof FacilityStrengthMachineMaintenanceRecordListResponse
     */
    facilityStrengthMachineMaintenanceRecords: Array<FacilityStrengthMachineMaintenanceRecordData>;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineMaintenanceRecordListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineMaintenanceRecordListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the FacilityStrengthMachineMaintenanceRecordListResponse interface.
 */
export function instanceOfFacilityStrengthMachineMaintenanceRecordListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityStrengthMachineMaintenanceRecordsMeta" in value;
    isInstance = isInstance && "facilityStrengthMachineMaintenanceRecords" in value;

    return isInstance;
}

export function FacilityStrengthMachineMaintenanceRecordListResponseFromJSON(json: any): FacilityStrengthMachineMaintenanceRecordListResponse {
    return FacilityStrengthMachineMaintenanceRecordListResponseFromJSONTyped(json, false);
}

export function FacilityStrengthMachineMaintenanceRecordListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineMaintenanceRecordListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachineMaintenanceRecordsMeta': FacilityStrengthMachineMaintenanceRecordsMetaFromJSON(json['facilityStrengthMachineMaintenanceRecordsMeta']),
        'facilityStrengthMachineMaintenanceRecords': ((json['facilityStrengthMachineMaintenanceRecords'] as Array<any>).map(FacilityStrengthMachineMaintenanceRecordDataFromJSON)),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function FacilityStrengthMachineMaintenanceRecordListResponseToJSON(value?: FacilityStrengthMachineMaintenanceRecordListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachineMaintenanceRecordsMeta': FacilityStrengthMachineMaintenanceRecordsMetaToJSON(value.facilityStrengthMachineMaintenanceRecordsMeta),
        'facilityStrengthMachineMaintenanceRecords': ((value.facilityStrengthMachineMaintenanceRecords as Array<any>).map(FacilityStrengthMachineMaintenanceRecordDataToJSON)),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

