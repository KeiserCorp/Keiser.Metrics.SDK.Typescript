/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanTemplateData } from './SessionPlanTemplateData';
import {
    SessionPlanTemplateDataFromJSON,
    SessionPlanTemplateDataFromJSONTyped,
    SessionPlanTemplateDataToJSON,
} from './SessionPlanTemplateData';

/**
 * 
 * @export
 * @interface SessionPlanTemplateResponse
 */
export interface SessionPlanTemplateResponse {
    /**
     * 
     * @type {SessionPlanTemplateData}
     * @memberof SessionPlanTemplateResponse
     */
    sessionPlanTemplate: SessionPlanTemplateData;
}

/**
 * Check if a given object implements the SessionPlanTemplateResponse interface.
 */
export function instanceOfSessionPlanTemplateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanTemplate" in value;

    return isInstance;
}

export function SessionPlanTemplateResponseFromJSON(json: any): SessionPlanTemplateResponse {
    return SessionPlanTemplateResponseFromJSONTyped(json, false);
}

export function SessionPlanTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanTemplateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanTemplate': SessionPlanTemplateDataFromJSON(json['sessionPlanTemplate']),
    };
}

export function SessionPlanTemplateResponseToJSON(value?: SessionPlanTemplateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanTemplate': SessionPlanTemplateDataToJSON(value.sessionPlanTemplate),
    };
}

