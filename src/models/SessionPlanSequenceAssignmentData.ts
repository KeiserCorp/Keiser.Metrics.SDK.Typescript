/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.26
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanSequenceData } from './SessionPlanSequenceData';
import {
    SessionPlanSequenceDataFromJSON,
    SessionPlanSequenceDataFromJSONTyped,
    SessionPlanSequenceDataToJSON,
} from './SessionPlanSequenceData';

/**
 * 
 * @export
 * @interface SessionPlanSequenceAssignmentData
 */
export interface SessionPlanSequenceAssignmentData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceAssignmentData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceAssignmentData
     */
    scheduleIndex: number;
    /**
     * 
     * @type {SessionPlanSequenceData}
     * @memberof SessionPlanSequenceAssignmentData
     */
    sessionPlanSequence?: SessionPlanSequenceData;
}

/**
 * Check if a given object implements the SessionPlanSequenceAssignmentData interface.
 */
export function instanceOfSessionPlanSequenceAssignmentData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "scheduleIndex" in value;

    return isInstance;
}

export function SessionPlanSequenceAssignmentDataFromJSON(json: any): SessionPlanSequenceAssignmentData {
    return SessionPlanSequenceAssignmentDataFromJSONTyped(json, false);
}

export function SessionPlanSequenceAssignmentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceAssignmentData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'scheduleIndex': json['scheduleIndex'],
        'sessionPlanSequence': !exists(json, 'sessionPlanSequence') ? undefined : SessionPlanSequenceDataFromJSON(json['sessionPlanSequence']),
    };
}

export function SessionPlanSequenceAssignmentDataToJSON(value?: SessionPlanSequenceAssignmentData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'scheduleIndex': value.scheduleIndex,
        'sessionPlanSequence': SessionPlanSequenceDataToJSON(value.sessionPlanSequence),
    };
}

