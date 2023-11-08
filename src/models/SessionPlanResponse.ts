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
import type { SessionPlanData } from './SessionPlanData';
import {
    SessionPlanDataFromJSON,
    SessionPlanDataFromJSONTyped,
    SessionPlanDataToJSON,
} from './SessionPlanData';

/**
 * 
 * @export
 * @interface SessionPlanResponse
 */
export interface SessionPlanResponse {
    /**
     * 
     * @type {SessionPlanData}
     * @memberof SessionPlanResponse
     */
    sessionPlan: SessionPlanData;
}

/**
 * Check if a given object implements the SessionPlanResponse interface.
 */
export function instanceOfSessionPlanResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlan" in value;

    return isInstance;
}

export function SessionPlanResponseFromJSON(json: any): SessionPlanResponse {
    return SessionPlanResponseFromJSONTyped(json, false);
}

export function SessionPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlan': SessionPlanDataFromJSON(json['sessionPlan']),
    };
}

export function SessionPlanResponseToJSON(value?: SessionPlanResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlan': SessionPlanDataToJSON(value.sessionPlan),
    };
}

