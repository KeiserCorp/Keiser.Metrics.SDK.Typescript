/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesFtpMeasurementSorting } from './MSeriesFtpMeasurementSorting';
import {
    MSeriesFtpMeasurementSortingFromJSON,
    MSeriesFtpMeasurementSortingFromJSONTyped,
    MSeriesFtpMeasurementSortingToJSON,
} from './MSeriesFtpMeasurementSorting';

/**
 * 
 * @export
 * @interface MSeriesFtpMeasurementListResponseMeta
 */
export interface MSeriesFtpMeasurementListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    source?: string;
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    cardioMachineId?: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    machineType?: string;
    /**
     * 
     * @type {MSeriesFtpMeasurementSorting}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    sort: MSeriesFtpMeasurementSorting;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesFtpMeasurementListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the MSeriesFtpMeasurementListResponseMeta interface.
 */
export function instanceOfMSeriesFtpMeasurementListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function MSeriesFtpMeasurementListResponseMetaFromJSON(json: any): MSeriesFtpMeasurementListResponseMeta {
    return MSeriesFtpMeasurementListResponseMetaFromJSONTyped(json, false);
}

export function MSeriesFtpMeasurementListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesFtpMeasurementListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'cardioMachineId': !exists(json, 'cardioMachineId') ? undefined : json['cardioMachineId'],
        'machineType': !exists(json, 'machineType') ? undefined : json['machineType'],
        'sort': MSeriesFtpMeasurementSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function MSeriesFtpMeasurementListResponseMetaToJSON(value?: MSeriesFtpMeasurementListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'source': value.source,
        'cardioMachineId': value.cardioMachineId,
        'machineType': value.machineType,
        'sort': MSeriesFtpMeasurementSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

