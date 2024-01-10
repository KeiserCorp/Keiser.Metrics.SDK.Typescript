/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
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
 * @interface MSeriesProfileStatsData
 */
export interface MSeriesProfileStatsData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    kCal?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    cyclingDuration?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    ridesCompleted?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    averagePower?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    averageCadence?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    averageWattsPerKilogram?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    peakPower?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    peakCadence?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesProfileStatsData
     */
    peakWattsPerKilogram?: number;
}

/**
 * Check if a given object implements the MSeriesProfileStatsData interface.
 */
export function instanceOfMSeriesProfileStatsData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MSeriesProfileStatsDataFromJSON(json: any): MSeriesProfileStatsData {
    return MSeriesProfileStatsDataFromJSONTyped(json, false);
}

export function MSeriesProfileStatsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesProfileStatsData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'distance': !exists(json, 'distance') ? undefined : json['distance'],
        'kCal': !exists(json, 'kCal') ? undefined : json['kCal'],
        'cyclingDuration': !exists(json, 'cyclingDuration') ? undefined : json['cyclingDuration'],
        'ridesCompleted': !exists(json, 'ridesCompleted') ? undefined : json['ridesCompleted'],
        'averagePower': !exists(json, 'averagePower') ? undefined : json['averagePower'],
        'averageCadence': !exists(json, 'averageCadence') ? undefined : json['averageCadence'],
        'averageWattsPerKilogram': !exists(json, 'averageWattsPerKilogram') ? undefined : json['averageWattsPerKilogram'],
        'peakPower': !exists(json, 'peakPower') ? undefined : json['peakPower'],
        'peakCadence': !exists(json, 'peakCadence') ? undefined : json['peakCadence'],
        'peakWattsPerKilogram': !exists(json, 'peakWattsPerKilogram') ? undefined : json['peakWattsPerKilogram'],
    };
}

export function MSeriesProfileStatsDataToJSON(value?: MSeriesProfileStatsData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'distance': value.distance,
        'kCal': value.kCal,
        'cyclingDuration': value.cyclingDuration,
        'ridesCompleted': value.ridesCompleted,
        'averagePower': value.averagePower,
        'averageCadence': value.averageCadence,
        'averageWattsPerKilogram': value.averageWattsPerKilogram,
        'peakPower': value.peakPower,
        'peakCadence': value.peakCadence,
        'peakWattsPerKilogram': value.peakWattsPerKilogram,
    };
}

