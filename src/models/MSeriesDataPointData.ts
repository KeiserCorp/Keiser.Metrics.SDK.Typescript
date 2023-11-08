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
/**
 * 
 * @export
 * @interface MSeriesDataPointData
 */
export interface MSeriesDataPointData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    mSeriesDataSetId?: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataPointData
     */
    takenAt: string;
    /**
     * 
     * @type {boolean}
     * @memberof MSeriesDataPointData
     */
    realTime: boolean;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    interval?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    cadence: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    power: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    caloricBurn: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    duration: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    heartRate?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    gear?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    metabolicEquivalent?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataPointData
     */
    stepCount?: number;
}

/**
 * Check if a given object implements the MSeriesDataPointData interface.
 */
export function instanceOfMSeriesDataPointData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "takenAt" in value;
    isInstance = isInstance && "realTime" in value;
    isInstance = isInstance && "cadence" in value;
    isInstance = isInstance && "power" in value;
    isInstance = isInstance && "caloricBurn" in value;
    isInstance = isInstance && "duration" in value;

    return isInstance;
}

export function MSeriesDataPointDataFromJSON(json: any): MSeriesDataPointData {
    return MSeriesDataPointDataFromJSONTyped(json, false);
}

export function MSeriesDataPointDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataPointData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesDataSetId': !exists(json, 'mSeriesDataSetId') ? undefined : json['mSeriesDataSetId'],
        'takenAt': json['takenAt'],
        'realTime': json['realTime'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'cadence': json['cadence'],
        'power': json['power'],
        'caloricBurn': json['caloricBurn'],
        'duration': json['duration'],
        'heartRate': !exists(json, 'heartRate') ? undefined : json['heartRate'],
        'distance': !exists(json, 'distance') ? undefined : json['distance'],
        'gear': !exists(json, 'gear') ? undefined : json['gear'],
        'metabolicEquivalent': !exists(json, 'metabolicEquivalent') ? undefined : json['metabolicEquivalent'],
        'stepCount': !exists(json, 'stepCount') ? undefined : json['stepCount'],
    };
}

export function MSeriesDataPointDataToJSON(value?: MSeriesDataPointData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesDataSetId': value.mSeriesDataSetId,
        'takenAt': value.takenAt,
        'realTime': value.realTime,
        'interval': value.interval,
        'cadence': value.cadence,
        'power': value.power,
        'caloricBurn': value.caloricBurn,
        'duration': value.duration,
        'heartRate': value.heartRate,
        'distance': value.distance,
        'gear': value.gear,
        'metabolicEquivalent': value.metabolicEquivalent,
        'stepCount': value.stepCount,
    };
}

