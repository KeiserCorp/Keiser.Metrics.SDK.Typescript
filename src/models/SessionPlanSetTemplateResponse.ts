/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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

/**
 * 
 * @export
 * @interface SessionPlanSetTemplateResponse
 */
export interface SessionPlanSetTemplateResponse {
    /**
     * 
     * @type {SessionPlanSetTemplateData}
     * @memberof SessionPlanSetTemplateResponse
     */
    sessionPlanSetTemplate: SessionPlanSetTemplateData;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the SessionPlanSetTemplateResponse interface.
 */
export function instanceOfSessionPlanSetTemplateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSetTemplate" in value;

    return isInstance;
}

export function SessionPlanSetTemplateResponseFromJSON(json: any): SessionPlanSetTemplateResponse {
    return SessionPlanSetTemplateResponseFromJSONTyped(json, false);
}

export function SessionPlanSetTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetTemplateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSetTemplate': SessionPlanSetTemplateDataFromJSON(json['sessionPlanSetTemplate']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function SessionPlanSetTemplateResponseToJSON(value?: SessionPlanSetTemplateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSetTemplate': SessionPlanSetTemplateDataToJSON(value.sessionPlanSetTemplate),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

