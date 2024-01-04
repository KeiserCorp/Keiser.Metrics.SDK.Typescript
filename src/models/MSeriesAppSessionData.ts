/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.16
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
import type { HeartRateDataSetSessionData } from './HeartRateDataSetSessionData';
import {
    HeartRateDataSetSessionDataFromJSON,
    HeartRateDataSetSessionDataFromJSONTyped,
    HeartRateDataSetSessionDataToJSON,
} from './HeartRateDataSetSessionData';
import type { HeightMeasurementData } from './HeightMeasurementData';
import {
    HeightMeasurementDataFromJSON,
    HeightMeasurementDataFromJSONTyped,
    HeightMeasurementDataToJSON,
} from './HeightMeasurementData';
import type { MSeriesDataSetData } from './MSeriesDataSetData';
import {
    MSeriesDataSetDataFromJSON,
    MSeriesDataSetDataFromJSONTyped,
    MSeriesDataSetDataToJSON,
} from './MSeriesDataSetData';
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
import type { WeightMeasurementData } from './WeightMeasurementData';
import {
    WeightMeasurementDataFromJSON,
    WeightMeasurementDataFromJSONTyped,
    WeightMeasurementDataToJSON,
} from './WeightMeasurementData';
import type { Zones } from './Zones';
import {
    ZonesFromJSON,
    ZonesFromJSONTyped,
    ZonesToJSON,
} from './Zones';

/**
 * 
 * @export
 * @interface MSeriesAppSessionData
 */
export interface MSeriesAppSessionData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesAppSessionData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionData
     */
    source?: string;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesAppSessionData
     */
    startedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesAppSessionData
     */
    endedAt?: Date;
    /**
     * 
     * @type {CardioMachineData}
     * @memberof MSeriesAppSessionData
     */
    cardioMachine?: CardioMachineData;
    /**
     * 
     * @type {number}
     * @memberof MSeriesAppSessionData
     */
    ordinalId?: number;
    /**
     * 
     * @type {MSeriesDataSetData}
     * @memberof MSeriesAppSessionData
     */
    mSeriesDataSet?: MSeriesDataSetData;
    /**
     * 
     * @type {string}
     * @memberof MSeriesAppSessionData
     */
    machineType?: string;
    /**
     * 
     * @type {Array<MSeriesDataSetSegmentData>}
     * @memberof MSeriesAppSessionData
     */
    mSeriesDataSetSegment?: Array<MSeriesDataSetSegmentData>;
    /**
     * 
     * @type {MSeriesFtpMeasurementData}
     * @memberof MSeriesAppSessionData
     */
    mSeriesFtpMeasurement?: MSeriesFtpMeasurementData;
    /**
     * 
     * @type {Zones}
     * @memberof MSeriesAppSessionData
     */
    durationInZones?: Zones;
    /**
     * 
     * @type {HeartRateDataSetSessionData}
     * @memberof MSeriesAppSessionData
     */
    heartRateDataSet?: HeartRateDataSetSessionData;
    /**
     * 
     * @type {WeightMeasurementData}
     * @memberof MSeriesAppSessionData
     */
    weightMeasurement?: WeightMeasurementData;
    /**
     * 
     * @type {HeightMeasurementData}
     * @memberof MSeriesAppSessionData
     */
    heightMeasurement?: HeightMeasurementData;
}

/**
 * Check if a given object implements the MSeriesAppSessionData interface.
 */
export function instanceOfMSeriesAppSessionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function MSeriesAppSessionDataFromJSON(json: any): MSeriesAppSessionData {
    return MSeriesAppSessionDataFromJSONTyped(json, false);
}

export function MSeriesAppSessionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesAppSessionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'startedAt': !exists(json, 'startedAt') ? undefined : (new Date(json['startedAt'])),
        'endedAt': !exists(json, 'endedAt') ? undefined : (new Date(json['endedAt'])),
        'cardioMachine': !exists(json, 'cardioMachine') ? undefined : CardioMachineDataFromJSON(json['cardioMachine']),
        'ordinalId': !exists(json, 'ordinalId') ? undefined : json['ordinalId'],
        'mSeriesDataSet': !exists(json, 'mSeriesDataSet') ? undefined : MSeriesDataSetDataFromJSON(json['mSeriesDataSet']),
        'machineType': !exists(json, 'machineType') ? undefined : json['machineType'],
        'mSeriesDataSetSegment': !exists(json, 'mSeriesDataSetSegment') ? undefined : ((json['mSeriesDataSetSegment'] as Array<any>).map(MSeriesDataSetSegmentDataFromJSON)),
        'mSeriesFtpMeasurement': !exists(json, 'mSeriesFtpMeasurement') ? undefined : MSeriesFtpMeasurementDataFromJSON(json['mSeriesFtpMeasurement']),
        'durationInZones': !exists(json, 'durationInZones') ? undefined : ZonesFromJSON(json['durationInZones']),
        'heartRateDataSet': !exists(json, 'heartRateDataSet') ? undefined : HeartRateDataSetSessionDataFromJSON(json['heartRateDataSet']),
        'weightMeasurement': !exists(json, 'weightMeasurement') ? undefined : WeightMeasurementDataFromJSON(json['weightMeasurement']),
        'heightMeasurement': !exists(json, 'heightMeasurement') ? undefined : HeightMeasurementDataFromJSON(json['heightMeasurement']),
    };
}

export function MSeriesAppSessionDataToJSON(value?: MSeriesAppSessionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'source': value.source,
        'startedAt': value.startedAt === undefined ? undefined : (value.startedAt.toISOString()),
        'endedAt': value.endedAt === undefined ? undefined : (value.endedAt.toISOString()),
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
        'ordinalId': value.ordinalId,
        'mSeriesDataSet': MSeriesDataSetDataToJSON(value.mSeriesDataSet),
        'machineType': value.machineType,
        'mSeriesDataSetSegment': value.mSeriesDataSetSegment === undefined ? undefined : ((value.mSeriesDataSetSegment as Array<any>).map(MSeriesDataSetSegmentDataToJSON)),
        'mSeriesFtpMeasurement': MSeriesFtpMeasurementDataToJSON(value.mSeriesFtpMeasurement),
        'durationInZones': ZonesToJSON(value.durationInZones),
        'heartRateDataSet': HeartRateDataSetSessionDataToJSON(value.heartRateDataSet),
        'weightMeasurement': WeightMeasurementDataToJSON(value.weightMeasurement),
        'heightMeasurement': HeightMeasurementDataToJSON(value.heightMeasurement),
    };
}

