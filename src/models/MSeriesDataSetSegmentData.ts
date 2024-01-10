/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HeartRateDataSetSessionData } from './HeartRateDataSetSessionData';
import {
    HeartRateDataSetSessionDataFromJSON,
    HeartRateDataSetSessionDataFromJSONTyped,
    HeartRateDataSetSessionDataToJSON,
} from './HeartRateDataSetSessionData';
import type { MSeriesDataPointData } from './MSeriesDataPointData';
import {
    MSeriesDataPointDataFromJSON,
    MSeriesDataPointDataFromJSONTyped,
    MSeriesDataPointDataToJSON,
} from './MSeriesDataPointData';

/**
 * 
 * @export
 * @interface MSeriesDataSetSegmentData
 */
export interface MSeriesDataSetSegmentData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    mSeriesDataSetId: number;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesDataSetSegmentData
     */
    startedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesDataSetSegmentData
     */
    endedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    maxCadence: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    averageCadence: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    maxPower: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    averagePower: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    maxWattsPerKilogram: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    averageWattsPerKilogram: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    energyOutput: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    caloricBurn: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    distance: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    averageMetabolicEquivalent?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetSegmentData
     */
    stepCount?: number;
    /**
     * 
     * @type {HeartRateDataSetSessionData}
     * @memberof MSeriesDataSetSegmentData
     */
    heartRateDataSet?: HeartRateDataSetSessionData;
    /**
     * 
     * @type {Array<MSeriesDataPointData>}
     * @memberof MSeriesDataSetSegmentData
     */
    graphData?: Array<MSeriesDataPointData>;
}

/**
 * Check if a given object implements the MSeriesDataSetSegmentData interface.
 */
export function instanceOfMSeriesDataSetSegmentData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mSeriesDataSetId" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "endedAt" in value;
    isInstance = isInstance && "maxCadence" in value;
    isInstance = isInstance && "averageCadence" in value;
    isInstance = isInstance && "maxPower" in value;
    isInstance = isInstance && "averagePower" in value;
    isInstance = isInstance && "maxWattsPerKilogram" in value;
    isInstance = isInstance && "averageWattsPerKilogram" in value;
    isInstance = isInstance && "energyOutput" in value;
    isInstance = isInstance && "caloricBurn" in value;
    isInstance = isInstance && "distance" in value;

    return isInstance;
}

export function MSeriesDataSetSegmentDataFromJSON(json: any): MSeriesDataSetSegmentData {
    return MSeriesDataSetSegmentDataFromJSONTyped(json, false);
}

export function MSeriesDataSetSegmentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataSetSegmentData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'mSeriesDataSetId': json['mSeriesDataSetId'],
        'startedAt': (new Date(json['startedAt'])),
        'endedAt': (new Date(json['endedAt'])),
        'maxCadence': json['maxCadence'],
        'averageCadence': json['averageCadence'],
        'maxPower': json['maxPower'],
        'averagePower': json['averagePower'],
        'maxWattsPerKilogram': json['maxWattsPerKilogram'],
        'averageWattsPerKilogram': json['averageWattsPerKilogram'],
        'energyOutput': json['energyOutput'],
        'caloricBurn': json['caloricBurn'],
        'distance': json['distance'],
        'averageMetabolicEquivalent': !exists(json, 'averageMetabolicEquivalent') ? undefined : json['averageMetabolicEquivalent'],
        'stepCount': !exists(json, 'stepCount') ? undefined : json['stepCount'],
        'heartRateDataSet': !exists(json, 'heartRateDataSet') ? undefined : HeartRateDataSetSessionDataFromJSON(json['heartRateDataSet']),
        'graphData': !exists(json, 'graphData') ? undefined : ((json['graphData'] as Array<any>).map(MSeriesDataPointDataFromJSON)),
    };
}

export function MSeriesDataSetSegmentDataToJSON(value?: MSeriesDataSetSegmentData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'mSeriesDataSetId': value.mSeriesDataSetId,
        'startedAt': (value.startedAt.toISOString()),
        'endedAt': (value.endedAt.toISOString()),
        'maxCadence': value.maxCadence,
        'averageCadence': value.averageCadence,
        'maxPower': value.maxPower,
        'averagePower': value.averagePower,
        'maxWattsPerKilogram': value.maxWattsPerKilogram,
        'averageWattsPerKilogram': value.averageWattsPerKilogram,
        'energyOutput': value.energyOutput,
        'caloricBurn': value.caloricBurn,
        'distance': value.distance,
        'averageMetabolicEquivalent': value.averageMetabolicEquivalent,
        'stepCount': value.stepCount,
        'heartRateDataSet': HeartRateDataSetSessionDataToJSON(value.heartRateDataSet),
        'graphData': value.graphData === undefined ? undefined : ((value.graphData as Array<any>).map(MSeriesDataPointDataToJSON)),
    };
}

