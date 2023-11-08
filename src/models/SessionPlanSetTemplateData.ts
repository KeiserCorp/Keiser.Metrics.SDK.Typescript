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
import type { SessionPlanActivitySetTemplateData } from './SessionPlanActivitySetTemplateData';
import {
    SessionPlanActivitySetTemplateDataFromJSON,
    SessionPlanActivitySetTemplateDataFromJSONTyped,
    SessionPlanActivitySetTemplateDataToJSON,
} from './SessionPlanActivitySetTemplateData';
import type { SessionPlanCardioSetTemplateData } from './SessionPlanCardioSetTemplateData';
import {
    SessionPlanCardioSetTemplateDataFromJSON,
    SessionPlanCardioSetTemplateDataFromJSONTyped,
    SessionPlanCardioSetTemplateDataToJSON,
} from './SessionPlanCardioSetTemplateData';
import type { SessionPlanStrengthSetTemplateData } from './SessionPlanStrengthSetTemplateData';
import {
    SessionPlanStrengthSetTemplateDataFromJSON,
    SessionPlanStrengthSetTemplateDataFromJSONTyped,
    SessionPlanStrengthSetTemplateDataToJSON,
} from './SessionPlanStrengthSetTemplateData';
import type { SessionPlanStretchSetTemplateData } from './SessionPlanStretchSetTemplateData';
import {
    SessionPlanStretchSetTemplateDataFromJSON,
    SessionPlanStretchSetTemplateDataFromJSONTyped,
    SessionPlanStretchSetTemplateDataToJSON,
} from './SessionPlanStretchSetTemplateData';

/**
 * 
 * @export
 * @interface SessionPlanSetTemplateData
 */
export interface SessionPlanSetTemplateData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetTemplateData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateData
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateData
     */
    type?: string;
    /**
     * 
     * @type {SessionPlanCardioSetTemplateData}
     * @memberof SessionPlanSetTemplateData
     */
    sessionPlanCardioSetTemplate?: SessionPlanCardioSetTemplateData;
    /**
     * 
     * @type {SessionPlanStrengthSetTemplateData}
     * @memberof SessionPlanSetTemplateData
     */
    sessionPlanStrengthSetTemplate?: SessionPlanStrengthSetTemplateData;
    /**
     * 
     * @type {SessionPlanStretchSetTemplateData}
     * @memberof SessionPlanSetTemplateData
     */
    sessionPlanStretchSetTemplate?: SessionPlanStretchSetTemplateData;
    /**
     * 
     * @type {SessionPlanActivitySetTemplateData}
     * @memberof SessionPlanSetTemplateData
     */
    sessionPlanActivitySetTemplate?: SessionPlanActivitySetTemplateData;
}

/**
 * Check if a given object implements the SessionPlanSetTemplateData interface.
 */
export function instanceOfSessionPlanSetTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "notes" in value;

    return isInstance;
}

export function SessionPlanSetTemplateDataFromJSON(json: any): SessionPlanSetTemplateData {
    return SessionPlanSetTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanSetTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'notes': json['notes'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'sessionPlanCardioSetTemplate': !exists(json, 'sessionPlanCardioSetTemplate') ? undefined : SessionPlanCardioSetTemplateDataFromJSON(json['sessionPlanCardioSetTemplate']),
        'sessionPlanStrengthSetTemplate': !exists(json, 'sessionPlanStrengthSetTemplate') ? undefined : SessionPlanStrengthSetTemplateDataFromJSON(json['sessionPlanStrengthSetTemplate']),
        'sessionPlanStretchSetTemplate': !exists(json, 'sessionPlanStretchSetTemplate') ? undefined : SessionPlanStretchSetTemplateDataFromJSON(json['sessionPlanStretchSetTemplate']),
        'sessionPlanActivitySetTemplate': !exists(json, 'sessionPlanActivitySetTemplate') ? undefined : SessionPlanActivitySetTemplateDataFromJSON(json['sessionPlanActivitySetTemplate']),
    };
}

export function SessionPlanSetTemplateDataToJSON(value?: SessionPlanSetTemplateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'notes': value.notes,
        'type': value.type,
        'sessionPlanCardioSetTemplate': SessionPlanCardioSetTemplateDataToJSON(value.sessionPlanCardioSetTemplate),
        'sessionPlanStrengthSetTemplate': SessionPlanStrengthSetTemplateDataToJSON(value.sessionPlanStrengthSetTemplate),
        'sessionPlanStretchSetTemplate': SessionPlanStretchSetTemplateDataToJSON(value.sessionPlanStretchSetTemplate),
        'sessionPlanActivitySetTemplate': SessionPlanActivitySetTemplateDataToJSON(value.sessionPlanActivitySetTemplate),
    };
}

