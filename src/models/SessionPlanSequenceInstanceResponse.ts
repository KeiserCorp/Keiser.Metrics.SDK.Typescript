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
import type { SessionPlanSequenceInstanceData } from './SessionPlanSequenceInstanceData';
import {
    SessionPlanSequenceInstanceDataFromJSON,
    SessionPlanSequenceInstanceDataFromJSONTyped,
    SessionPlanSequenceInstanceDataToJSON,
} from './SessionPlanSequenceInstanceData';

/**
 * 
 * @export
 * @interface SessionPlanSequenceInstanceResponse
 */
export interface SessionPlanSequenceInstanceResponse {
    /**
     * 
     * @type {SessionPlanSequenceInstanceData}
     * @memberof SessionPlanSequenceInstanceResponse
     */
    sessionPlanSequenceInstance: SessionPlanSequenceInstanceData;
}

/**
 * Check if a given object implements the SessionPlanSequenceInstanceResponse interface.
 */
export function instanceOfSessionPlanSequenceInstanceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSequenceInstance" in value;

    return isInstance;
}

export function SessionPlanSequenceInstanceResponseFromJSON(json: any): SessionPlanSequenceInstanceResponse {
    return SessionPlanSequenceInstanceResponseFromJSONTyped(json, false);
}

export function SessionPlanSequenceInstanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceInstanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSequenceInstance': SessionPlanSequenceInstanceDataFromJSON(json['sessionPlanSequenceInstance']),
    };
}

export function SessionPlanSequenceInstanceResponseToJSON(value?: SessionPlanSequenceInstanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSequenceInstance': SessionPlanSequenceInstanceDataToJSON(value.sessionPlanSequenceInstance),
    };
}

