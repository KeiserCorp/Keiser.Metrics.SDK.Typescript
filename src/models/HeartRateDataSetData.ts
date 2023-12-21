/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HeartRateDataPointData } from './HeartRateDataPointData';
import {
    HeartRateDataPointDataFromJSON,
    HeartRateDataPointDataFromJSONTyped,
    HeartRateDataPointDataToJSON,
} from './HeartRateDataPointData';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';

/**
 * 
 * @export
 * @interface HeartRateDataSetData
 */
export interface HeartRateDataSetData {
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof HeartRateDataSetData
     */
    source?: string;
    /**
     * 
     * @type {Date}
     * @memberof HeartRateDataSetData
     */
    startedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof HeartRateDataSetData
     */
    endedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetData
     */
    maxHeartRate: number;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetData
     */
    averageHeartRate: number;
    /**
     * 
     * @type {Array<HeartRateDataPointData>}
     * @memberof HeartRateDataSetData
     */
    graphData?: Array<HeartRateDataPointData>;
    /**
     * 
     * @type {SessionData}
     * @memberof HeartRateDataSetData
     */
    session?: SessionData;
}

/**
 * Check if a given object implements the HeartRateDataSetData interface.
 */
export function instanceOfHeartRateDataSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "endedAt" in value;
    isInstance = isInstance && "maxHeartRate" in value;
    isInstance = isInstance && "averageHeartRate" in value;

    return isInstance;
}

export function HeartRateDataSetDataFromJSON(json: any): HeartRateDataSetData {
    return HeartRateDataSetDataFromJSONTyped(json, false);
}

export function HeartRateDataSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartRateDataSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'startedAt': (new Date(json['startedAt'])),
        'endedAt': (new Date(json['endedAt'])),
        'maxHeartRate': json['maxHeartRate'],
        'averageHeartRate': json['averageHeartRate'],
        'graphData': !exists(json, 'graphData') ? undefined : ((json['graphData'] as Array<any>).map(HeartRateDataPointDataFromJSON)),
        'session': !exists(json, 'session') ? undefined : SessionDataFromJSON(json['session']),
    };
}

export function HeartRateDataSetDataToJSON(value?: HeartRateDataSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'source': value.source,
        'startedAt': (value.startedAt.toISOString()),
        'endedAt': (value.endedAt.toISOString()),
        'maxHeartRate': value.maxHeartRate,
        'averageHeartRate': value.averageHeartRate,
        'graphData': value.graphData === undefined ? undefined : ((value.graphData as Array<any>).map(HeartRateDataPointDataToJSON)),
        'session': SessionDataToJSON(value.session),
    };
}

