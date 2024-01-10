/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanSetTemplateData } from './SessionPlanSetTemplateData';
import {
    SessionPlanSetTemplateDataFromJSON,
    SessionPlanSetTemplateDataFromJSONTyped,
    SessionPlanSetTemplateDataToJSON,
} from './SessionPlanSetTemplateData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface SessionPlanSequenceTemplateData
 */
export interface SessionPlanSequenceTemplateData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceTemplateData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceTemplateData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceTemplateData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceTemplateData
     */
    notes: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanSequenceTemplateData
     */
    searchable: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanSequenceTemplateData
     */
    _public: boolean;
    /**
     * 
     * @type {UserData}
     * @memberof SessionPlanSequenceTemplateData
     */
    user?: UserData;
    /**
     * 
     * @type {Array<SessionPlanSetTemplateData>}
     * @memberof SessionPlanSequenceTemplateData
     */
    sessionPlanSetTemplates?: Array<SessionPlanSetTemplateData>;
}

/**
 * Check if a given object implements the SessionPlanSequenceTemplateData interface.
 */
export function instanceOfSessionPlanSequenceTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "searchable" in value;
    isInstance = isInstance && "_public" in value;

    return isInstance;
}

export function SessionPlanSequenceTemplateDataFromJSON(json: any): SessionPlanSequenceTemplateData {
    return SessionPlanSequenceTemplateDataFromJSONTyped(json, false);
}

export function SessionPlanSequenceTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'notes': json['notes'],
        'searchable': json['searchable'],
        '_public': json['public'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'sessionPlanSetTemplates': !exists(json, 'sessionPlanSetTemplates') ? undefined : ((json['sessionPlanSetTemplates'] as Array<any>).map(SessionPlanSetTemplateDataFromJSON)),
    };
}

export function SessionPlanSequenceTemplateDataToJSON(value?: SessionPlanSequenceTemplateData | null): any {
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
        'searchable': value.searchable,
        'public': value._public,
        'user': UserDataToJSON(value.user),
        'sessionPlanSetTemplates': value.sessionPlanSetTemplates === undefined ? undefined : ((value.sessionPlanSetTemplates as Array<any>).map(SessionPlanSetTemplateDataToJSON)),
    };
}

