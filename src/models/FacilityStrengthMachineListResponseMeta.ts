/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityStrengthMachineSorting } from './FacilityStrengthMachineSorting';
import {
    FacilityStrengthMachineSortingFromJSON,
    FacilityStrengthMachineSortingFromJSONTyped,
    FacilityStrengthMachineSortingToJSON,
} from './FacilityStrengthMachineSorting';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineListResponseMeta
 */
export interface FacilityStrengthMachineListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    source?: string;
    /**
     * 
     * @type {FacilityStrengthMachineSorting}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    sort: FacilityStrengthMachineSorting;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    facilityId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityStrengthMachineListResponseMeta interface.
 */
export function instanceOfFacilityStrengthMachineListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function FacilityStrengthMachineListResponseMetaFromJSON(json: any): FacilityStrengthMachineListResponseMeta {
    return FacilityStrengthMachineListResponseMetaFromJSONTyped(json, false);
}

export function FacilityStrengthMachineListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': json['model'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'sort': FacilityStrengthMachineSortingFromJSON(json['sort']),
        'facilityId': !exists(json, 'facilityId') ? undefined : json['facilityId'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityStrengthMachineListResponseMetaToJSON(value?: FacilityStrengthMachineListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model,
        'source': value.source,
        'sort': FacilityStrengthMachineSortingToJSON(value.sort),
        'facilityId': value.facilityId,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

