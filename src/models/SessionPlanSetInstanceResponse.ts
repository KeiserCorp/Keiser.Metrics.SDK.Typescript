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
import type { SessionPlanSetInstanceData } from './SessionPlanSetInstanceData';
import {
    SessionPlanSetInstanceDataFromJSON,
    SessionPlanSetInstanceDataFromJSONTyped,
    SessionPlanSetInstanceDataToJSON,
} from './SessionPlanSetInstanceData';

/**
 * 
 * @export
 * @interface SessionPlanSetInstanceResponse
 */
export interface SessionPlanSetInstanceResponse {
    /**
     * 
     * @type {SessionPlanSetInstanceData}
     * @memberof SessionPlanSetInstanceResponse
     */
    sessionPlanSetInstance: SessionPlanSetInstanceData;
}

/**
 * Check if a given object implements the SessionPlanSetInstanceResponse interface.
 */
export function instanceOfSessionPlanSetInstanceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSetInstance" in value;

    return isInstance;
}

export function SessionPlanSetInstanceResponseFromJSON(json: any): SessionPlanSetInstanceResponse {
    return SessionPlanSetInstanceResponseFromJSONTyped(json, false);
}

export function SessionPlanSetInstanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetInstanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSetInstance': SessionPlanSetInstanceDataFromJSON(json['sessionPlanSetInstance']),
    };
}

export function SessionPlanSetInstanceResponseToJSON(value?: SessionPlanSetInstanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSetInstance': SessionPlanSetInstanceDataToJSON(value.sessionPlanSetInstance),
    };
}

