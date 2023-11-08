/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.6
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
 * @interface FacilityCardioMachineListResponseMeta
 */
export interface FacilityCardioMachineListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    serial: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    location: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityCardioMachineListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the FacilityCardioMachineListResponseMeta interface.
 */
export function instanceOfFacilityCardioMachineListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "serial" in value;
    isInstance = isInstance && "location" in value;

    return isInstance;
}

export function FacilityCardioMachineListResponseMetaFromJSON(json: any): FacilityCardioMachineListResponseMeta {
    return FacilityCardioMachineListResponseMetaFromJSONTyped(json, false);
}

export function FacilityCardioMachineListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityCardioMachineListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': json['model'],
        'serial': json['serial'],
        'location': json['location'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityCardioMachineListResponseMetaToJSON(value?: FacilityCardioMachineListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model,
        'serial': value.serial,
        'location': value.location,
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

