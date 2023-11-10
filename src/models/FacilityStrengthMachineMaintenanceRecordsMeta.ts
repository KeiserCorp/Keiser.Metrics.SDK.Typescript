/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FacilityStrengthMachineMaintenanceRecordsMeta
 */
export interface FacilityStrengthMachineMaintenanceRecordsMeta {
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    facilityStrengthMachineId?: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    log?: string;
    /**
     * 
     * @type {Date}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    from?: Date;
    /**
     * 
     * @type {Date}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    to?: Date;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineMaintenanceRecordsMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityStrengthMachineMaintenanceRecordsMeta interface.
 */
export function instanceOfFacilityStrengthMachineMaintenanceRecordsMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityStrengthMachineMaintenanceRecordsMetaFromJSON(json: any): FacilityStrengthMachineMaintenanceRecordsMeta {
    return FacilityStrengthMachineMaintenanceRecordsMetaFromJSONTyped(json, false);
}

export function FacilityStrengthMachineMaintenanceRecordsMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineMaintenanceRecordsMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityStrengthMachineId': !exists(json, 'facilityStrengthMachineId') ? undefined : json['facilityStrengthMachineId'],
        'log': !exists(json, 'log') ? undefined : json['log'],
        'from': !exists(json, 'from') ? undefined : (new Date(json['from'])),
        'to': !exists(json, 'to') ? undefined : (new Date(json['to'])),
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityStrengthMachineMaintenanceRecordsMetaToJSON(value?: FacilityStrengthMachineMaintenanceRecordsMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityStrengthMachineId': value.facilityStrengthMachineId,
        'log': value.log,
        'from': value.from === undefined ? undefined : (value.from.toISOString()),
        'to': value.to === undefined ? undefined : (value.to.toISOString()),
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

