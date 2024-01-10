/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
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

/**
 * 
 * @export
 * @interface SessionPlanSetResponse
 */
export interface SessionPlanSetResponse {
    /**
     * 
     * @type {SessionPlanSetData}
     * @memberof SessionPlanSetResponse
     */
    sessionPlanSet: SessionPlanSetData;
}

/**
 * Check if a given object implements the SessionPlanSetResponse interface.
 */
export function instanceOfSessionPlanSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSet" in value;

    return isInstance;
}

export function SessionPlanSetResponseFromJSON(json: any): SessionPlanSetResponse {
    return SessionPlanSetResponseFromJSONTyped(json, false);
}

export function SessionPlanSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSet': SessionPlanSetDataFromJSON(json['sessionPlanSet']),
    };
}

export function SessionPlanSetResponseToJSON(value?: SessionPlanSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSet': SessionPlanSetDataToJSON(value.sessionPlanSet),
    };
}

