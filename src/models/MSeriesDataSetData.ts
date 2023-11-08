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
import type { CardioMachineData } from './CardioMachineData';
import {
    CardioMachineDataFromJSON,
    CardioMachineDataFromJSONTyped,
    CardioMachineDataToJSON,
} from './CardioMachineData';
import type { MSeriesDataPointData } from './MSeriesDataPointData';
import {
    MSeriesDataPointDataFromJSON,
    MSeriesDataPointDataFromJSONTyped,
    MSeriesDataPointDataToJSON,
} from './MSeriesDataPointData';
import type { MSeriesDataSetSegmentData } from './MSeriesDataSetSegmentData';
import {
    MSeriesDataSetSegmentDataFromJSON,
    MSeriesDataSetSegmentDataFromJSONTyped,
    MSeriesDataSetSegmentDataToJSON,
} from './MSeriesDataSetSegmentData';
import type { MSeriesFtpMeasurementData } from './MSeriesFtpMeasurementData';
import {
    MSeriesFtpMeasurementDataFromJSON,
    MSeriesFtpMeasurementDataFromJSONTyped,
    MSeriesFtpMeasurementDataToJSON,
} from './MSeriesFtpMeasurementData';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';

/**
 * 
 * @export
 * @interface MSeriesDataSetData
 */
export interface MSeriesDataSetData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    cardioMachineId: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetData
     */
    source?: string;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesDataSetData
     */
    startedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesDataSetData
     */
    endedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    ordinalId: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    buildMajor: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    buildMinor: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    maxCadence: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    averageCadence: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    maxPower: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    averagePower: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    maxWattsPerKilogram: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    averageWattsPerKilogram: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    energyOutput: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    caloricBurn: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    distance: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    averageMetabolicEquivalent?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    stepCount?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    duration: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetData
     */
    initialOffset?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesDataSetData
     */
    machineType: string;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    averageFtp?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    maxFtp?: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesDataSetData
     */
    targetFtp?: number;
    /**
     * 
     * @type {MSeriesFtpMeasurementData}
     * @memberof MSeriesDataSetData
     */
    mSeriesFtpMeasurement?: MSeriesFtpMeasurementData;
    /**
     * 
     * @type {SessionData}
     * @memberof MSeriesDataSetData
     */
    session?: SessionData;
    /**
     * 
     * @type {CardioMachineData}
     * @memberof MSeriesDataSetData
     */
    cardioMachine?: CardioMachineData;
    /**
     * 
     * @type {Array<MSeriesDataSetSegmentData>}
     * @memberof MSeriesDataSetData
     */
    mSeriesDataSetSegments?: Array<MSeriesDataSetSegmentData>;
    /**
     * 
     * @type {Array<MSeriesDataPointData>}
     * @memberof MSeriesDataSetData
     */
    graphData?: Array<MSeriesDataPointData>;
}

/**
 * Check if a given object implements the MSeriesDataSetData interface.
 */
export function instanceOfMSeriesDataSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "cardioMachineId" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "endedAt" in value;
    isInstance = isInstance && "ordinalId" in value;
    isInstance = isInstance && "buildMajor" in value;
    isInstance = isInstance && "buildMinor" in value;
    isInstance = isInstance && "maxCadence" in value;
    isInstance = isInstance && "averageCadence" in value;
    isInstance = isInstance && "maxPower" in value;
    isInstance = isInstance && "averagePower" in value;
    isInstance = isInstance && "maxWattsPerKilogram" in value;
    isInstance = isInstance && "averageWattsPerKilogram" in value;
    isInstance = isInstance && "energyOutput" in value;
    isInstance = isInstance && "caloricBurn" in value;
    isInstance = isInstance && "distance" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "machineType" in value;

    return isInstance;
}

export function MSeriesDataSetDataFromJSON(json: any): MSeriesDataSetData {
    return MSeriesDataSetDataFromJSONTyped(json, false);
}

export function MSeriesDataSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'cardioMachineId': json['cardioMachineId'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'startedAt': (new Date(json['startedAt'])),
        'endedAt': (new Date(json['endedAt'])),
        'ordinalId': json['ordinalId'],
        'buildMajor': json['buildMajor'],
        'buildMinor': json['buildMinor'],
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
        'duration': json['duration'],
        'initialOffset': !exists(json, 'initialOffset') ? undefined : json['initialOffset'],
        'machineType': json['machineType'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'averageFtp': !exists(json, 'averageFtp') ? undefined : json['averageFtp'],
        'maxFtp': !exists(json, 'maxFtp') ? undefined : json['maxFtp'],
        'targetFtp': !exists(json, 'targetFtp') ? undefined : json['targetFtp'],
        'mSeriesFtpMeasurement': !exists(json, 'mSeriesFtpMeasurement') ? undefined : MSeriesFtpMeasurementDataFromJSON(json['mSeriesFtpMeasurement']),
        'session': !exists(json, 'session') ? undefined : SessionDataFromJSON(json['session']),
        'cardioMachine': !exists(json, 'cardioMachine') ? undefined : CardioMachineDataFromJSON(json['cardioMachine']),
        'mSeriesDataSetSegments': !exists(json, 'mSeriesDataSetSegments') ? undefined : ((json['mSeriesDataSetSegments'] as Array<any>).map(MSeriesDataSetSegmentDataFromJSON)),
        'graphData': !exists(json, 'graphData') ? undefined : ((json['graphData'] as Array<any>).map(MSeriesDataPointDataFromJSON)),
    };
}

export function MSeriesDataSetDataToJSON(value?: MSeriesDataSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'cardioMachineId': value.cardioMachineId,
        'source': value.source,
        'startedAt': (value.startedAt.toISOString()),
        'endedAt': (value.endedAt.toISOString()),
        'ordinalId': value.ordinalId,
        'buildMajor': value.buildMajor,
        'buildMinor': value.buildMinor,
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
        'duration': value.duration,
        'initialOffset': value.initialOffset,
        'machineType': value.machineType,
        'weight': value.weight,
        'averageFtp': value.averageFtp,
        'maxFtp': value.maxFtp,
        'targetFtp': value.targetFtp,
        'mSeriesFtpMeasurement': MSeriesFtpMeasurementDataToJSON(value.mSeriesFtpMeasurement),
        'session': SessionDataToJSON(value.session),
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
        'mSeriesDataSetSegments': value.mSeriesDataSetSegments === undefined ? undefined : ((value.mSeriesDataSetSegments as Array<any>).map(MSeriesDataSetSegmentDataToJSON)),
        'graphData': value.graphData === undefined ? undefined : ((value.graphData as Array<any>).map(MSeriesDataPointDataToJSON)),
    };
}

