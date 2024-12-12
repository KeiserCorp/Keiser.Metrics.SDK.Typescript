/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.35
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanSequenceTemplateData } from './SessionPlanSequenceTemplateData';
import {
    SessionPlanSequenceTemplateDataFromJSON,
    SessionPlanSequenceTemplateDataFromJSONTyped,
    SessionPlanSequenceTemplateDataToJSON,
} from './SessionPlanSequenceTemplateData';

/**
 * 
 * @export
 * @interface SessionPlanSequenceAssignmentTemplateData
 */
export interface SessionPlanSequenceAssignmentTemplateData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceAssignmentTemplateData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceAssignmentTemplateData
     */
    scheduleIndex: number;
    /**
     * 
     * @type {SessionPlanSequenceTemplateData}
     * @memberof SessionPlanSequenceAssignmentTemplateData
     */
    sessionPlanSequenceTemplate?: SessionPlanSequenceTemplateData;
}

/**
 * Check if a given object implements the SessionPlanSequenceAssignmentTemplateData interface.
 */
export function instanceOfSessionPlanSequenceAssignmentTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "scheduleIndex" in value;

    return isInstance;
}

export function SessionPlanSequenceAssignmentTemplateDataFromJSON(json: any): SessionPlanSequenceAssignmentTemplateData {
    return SessionPlanSequenceAssignmentTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanSequenceAssignmentTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceAssignmentTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'scheduleIndex': json['scheduleIndex'],
        'sessionPlanSequenceTemplate': !exists(json, 'sessionPlanSequenceTemplate') ? undefined : SessionPlanSequenceTemplateDataFromJSON(json['sessionPlanSequenceTemplate']),
    };
}

export function SessionPlanSequenceAssignmentTemplateDataToJSON(value?: SessionPlanSequenceAssignmentTemplateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'scheduleIndex': value.scheduleIndex,
        'sessionPlanSequenceTemplate': SessionPlanSequenceTemplateDataToJSON(value.sessionPlanSequenceTemplate),
    };
}

