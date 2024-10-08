/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanSequenceAssignmentTemplateData } from './SessionPlanSequenceAssignmentTemplateData';
import {
    SessionPlanSequenceAssignmentTemplateDataFromJSON,
    SessionPlanSequenceAssignmentTemplateDataFromJSONTyped,
    SessionPlanSequenceAssignmentTemplateDataToJSON,
} from './SessionPlanSequenceAssignmentTemplateData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface SessionPlanTemplateData
 */
export interface SessionPlanTemplateData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanTemplateData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanTemplateData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanTemplateData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanTemplateData
     */
    notes: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanTemplateData
     */
    _public: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanTemplateData
     */
    repeating: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanTemplateData
     */
    flexible: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanTemplateData
     */
    scheduleLength: number;
    /**
     * 
     * @type {UserData}
     * @memberof SessionPlanTemplateData
     */
    user?: UserData;
    /**
     * 
     * @type {Array<SessionPlanSequenceAssignmentTemplateData>}
     * @memberof SessionPlanTemplateData
     */
    sessionPlanSequenceAssignmentTemplates?: Array<SessionPlanSequenceAssignmentTemplateData>;
}

/**
 * Check if a given object implements the SessionPlanTemplateData interface.
 */
export function instanceOfSessionPlanTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "_public" in value;
    isInstance = isInstance && "repeating" in value;
    isInstance = isInstance && "flexible" in value;
    isInstance = isInstance && "scheduleLength" in value;

    return isInstance;
}

export function SessionPlanTemplateDataFromJSON(json: any): SessionPlanTemplateData {
    return SessionPlanTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'notes': json['notes'],
        '_public': json['public'],
        'repeating': json['repeating'],
        'flexible': json['flexible'],
        'scheduleLength': json['scheduleLength'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'sessionPlanSequenceAssignmentTemplates': !exists(json, 'sessionPlanSequenceAssignmentTemplates') ? undefined : ((json['sessionPlanSequenceAssignmentTemplates'] as Array<any>).map(SessionPlanSequenceAssignmentTemplateDataFromJSON)),
    };
}

export function SessionPlanTemplateDataToJSON(value?: SessionPlanTemplateData | null): any {
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
        'public': value._public,
        'repeating': value.repeating,
        'flexible': value.flexible,
        'scheduleLength': value.scheduleLength,
        'user': UserDataToJSON(value.user),
        'sessionPlanSequenceAssignmentTemplates': value.sessionPlanSequenceAssignmentTemplates === undefined ? undefined : ((value.sessionPlanSequenceAssignmentTemplates as Array<any>).map(SessionPlanSequenceAssignmentTemplateDataToJSON)),
    };
}

