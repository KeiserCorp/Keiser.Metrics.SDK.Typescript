/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanActivitySetData } from './SessionPlanActivitySetData';
import {
    SessionPlanActivitySetDataFromJSON,
    SessionPlanActivitySetDataFromJSONTyped,
    SessionPlanActivitySetDataToJSON,
} from './SessionPlanActivitySetData';
import type { SessionPlanCardioSetData } from './SessionPlanCardioSetData';
import {
    SessionPlanCardioSetDataFromJSON,
    SessionPlanCardioSetDataFromJSONTyped,
    SessionPlanCardioSetDataToJSON,
} from './SessionPlanCardioSetData';
import type { SessionPlanStrengthSetData } from './SessionPlanStrengthSetData';
import {
    SessionPlanStrengthSetDataFromJSON,
    SessionPlanStrengthSetDataFromJSONTyped,
    SessionPlanStrengthSetDataToJSON,
} from './SessionPlanStrengthSetData';
import type { SessionPlanStretchSetData } from './SessionPlanStretchSetData';
import {
    SessionPlanStretchSetDataFromJSON,
    SessionPlanStretchSetDataFromJSONTyped,
    SessionPlanStretchSetDataToJSON,
} from './SessionPlanStretchSetData';

/**
 * 
 * @export
 * @interface SessionPlanSetData
 */
export interface SessionPlanSetData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetData
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetData
     */
    type?: SessionPlanSetDataTypeEnum;
    /**
     * 
     * @type {SessionPlanCardioSetData}
     * @memberof SessionPlanSetData
     */
    sessionPlanCardioSet?: SessionPlanCardioSetData;
    /**
     * 
     * @type {SessionPlanStrengthSetData}
     * @memberof SessionPlanSetData
     */
    sessionPlanStrengthSet?: SessionPlanStrengthSetData;
    /**
     * 
     * @type {SessionPlanStretchSetData}
     * @memberof SessionPlanSetData
     */
    sessionPlanStretchSet?: SessionPlanStretchSetData;
    /**
     * 
     * @type {SessionPlanActivitySetData}
     * @memberof SessionPlanSetData
     */
    sessionPlanAcvivitySet?: SessionPlanActivitySetData;
}


/**
 * @export
 */
export const SessionPlanSetDataTypeEnum = {
    Strength: 'strength',
    Stretch: 'stretch',
    Cardio: 'cardio',
    Activity: 'activity'
} as const;
export type SessionPlanSetDataTypeEnum = typeof SessionPlanSetDataTypeEnum[keyof typeof SessionPlanSetDataTypeEnum];


/**
 * Check if a given object implements the SessionPlanSetData interface.
 */
export function instanceOfSessionPlanSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "notes" in value;

    return isInstance;
}

export function SessionPlanSetDataFromJSON(json: any): SessionPlanSetData {
    return SessionPlanSetDataFromJSONTyped(json, false);
}

export function SessionPlanSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'notes': json['notes'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'sessionPlanCardioSet': !exists(json, 'sessionPlanCardioSet') ? undefined : SessionPlanCardioSetDataFromJSON(json['sessionPlanCardioSet']),
        'sessionPlanStrengthSet': !exists(json, 'sessionPlanStrengthSet') ? undefined : SessionPlanStrengthSetDataFromJSON(json['sessionPlanStrengthSet']),
        'sessionPlanStretchSet': !exists(json, 'sessionPlanStretchSet') ? undefined : SessionPlanStretchSetDataFromJSON(json['sessionPlanStretchSet']),
        'sessionPlanAcvivitySet': !exists(json, 'sessionPlanAcvivitySet') ? undefined : SessionPlanActivitySetDataFromJSON(json['sessionPlanAcvivitySet']),
    };
}

export function SessionPlanSetDataToJSON(value?: SessionPlanSetData | null): any {
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
        'sessionPlanCardioSet': SessionPlanCardioSetDataToJSON(value.sessionPlanCardioSet),
        'sessionPlanStrengthSet': SessionPlanStrengthSetDataToJSON(value.sessionPlanStrengthSet),
        'sessionPlanStretchSet': SessionPlanStretchSetDataToJSON(value.sessionPlanStretchSet),
        'sessionPlanAcvivitySet': SessionPlanActivitySetDataToJSON(value.sessionPlanAcvivitySet),
    };
}

