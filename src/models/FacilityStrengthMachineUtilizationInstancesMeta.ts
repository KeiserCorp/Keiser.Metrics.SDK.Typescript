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
/**
 * 
 * @export
 * @interface FacilityStrengthMachineUtilizationInstancesMeta
 */
export interface FacilityStrengthMachineUtilizationInstancesMeta {
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    machineId?: number;
    /**
     * 
     * @type {Date}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    from?: Date;
    /**
     * 
     * @type {Date}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    to?: Date;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineUtilizationInstancesMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityStrengthMachineUtilizationInstancesMeta interface.
 */
export function instanceOfFacilityStrengthMachineUtilizationInstancesMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityStrengthMachineUtilizationInstancesMetaFromJSON(json: any): FacilityStrengthMachineUtilizationInstancesMeta {
    return FacilityStrengthMachineUtilizationInstancesMetaFromJSONTyped(json, false);
}

export function FacilityStrengthMachineUtilizationInstancesMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineUtilizationInstancesMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'machineId': !exists(json, 'machineId') ? undefined : json['machineId'],
        'from': !exists(json, 'from') ? undefined : (new Date(json['from'])),
        'to': !exists(json, 'to') ? undefined : (new Date(json['to'])),
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityStrengthMachineUtilizationInstancesMetaToJSON(value?: FacilityStrengthMachineUtilizationInstancesMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'machineId': value.machineId,
        'from': value.from === undefined ? undefined : (value.from.toISOString()),
        'to': value.to === undefined ? undefined : (value.to.toISOString()),
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

