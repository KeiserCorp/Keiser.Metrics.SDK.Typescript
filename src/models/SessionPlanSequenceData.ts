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
import type { SessionPlanSetData } from './SessionPlanSetData';
import {
    SessionPlanSetDataFromJSON,
    SessionPlanSetDataFromJSONTyped,
    SessionPlanSetDataToJSON,
} from './SessionPlanSetData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface SessionPlanSequenceData
 */
export interface SessionPlanSequenceData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceData
     */
    notes: string;
    /**
     * 
     * @type {UserData}
     * @memberof SessionPlanSequenceData
     */
    user?: UserData;
    /**
     * 
     * @type {Array<SessionPlanSetData>}
     * @memberof SessionPlanSequenceData
     */
    sessionPlanSets?: Array<SessionPlanSetData>;
}

/**
 * Check if a given object implements the SessionPlanSequenceData interface.
 */
export function instanceOfSessionPlanSequenceData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "notes" in value;

    return isInstance;
}

export function SessionPlanSequenceDataFromJSON(json: any): SessionPlanSequenceData {
    return SessionPlanSequenceDataFromJSONTyped(json, false);
}

export function SessionPlanSequenceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'notes': json['notes'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'sessionPlanSets': !exists(json, 'sessionPlanSets') ? undefined : ((json['sessionPlanSets'] as Array<any>).map(SessionPlanSetDataFromJSON)),
    };
}

export function SessionPlanSequenceDataToJSON(value?: SessionPlanSequenceData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'notes': value.notes,
        'user': UserDataToJSON(value.user),
        'sessionPlanSets': value.sessionPlanSets === undefined ? undefined : ((value.sessionPlanSets as Array<any>).map(SessionPlanSetDataToJSON)),
    };
}

