/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
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
 * @interface SessionPlanSequenceTemplateResponse
 */
export interface SessionPlanSequenceTemplateResponse {
    /**
     * 
     * @type {SessionPlanSequenceTemplateData}
     * @memberof SessionPlanSequenceTemplateResponse
     */
    sessionPlanSequenceTemplate: SessionPlanSequenceTemplateData;
}

/**
 * Check if a given object implements the SessionPlanSequenceTemplateResponse interface.
 */
export function instanceOfSessionPlanSequenceTemplateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSequenceTemplate" in value;

    return isInstance;
}

export function SessionPlanSequenceTemplateResponseFromJSON(json: any): SessionPlanSequenceTemplateResponse {
    return SessionPlanSequenceTemplateResponseFromJSONTyped(json, false);
}

export function SessionPlanSequenceTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceTemplateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSequenceTemplate': SessionPlanSequenceTemplateDataFromJSON(json['sessionPlanSequenceTemplate']),
    };
}

export function SessionPlanSequenceTemplateResponseToJSON(value?: SessionPlanSequenceTemplateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSequenceTemplate': SessionPlanSequenceTemplateDataToJSON(value.sessionPlanSequenceTemplate),
    };
}

