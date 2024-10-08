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
import type { SessionPlanSequenceData } from './SessionPlanSequenceData';
import {
    SessionPlanSequenceDataFromJSON,
    SessionPlanSequenceDataFromJSONTyped,
    SessionPlanSequenceDataToJSON,
} from './SessionPlanSequenceData';

/**
 * 
 * @export
 * @interface SessionPlanSequenceResponse
 */
export interface SessionPlanSequenceResponse {
    /**
     * 
     * @type {SessionPlanSequenceData}
     * @memberof SessionPlanSequenceResponse
     */
    sessionPlanSequence: SessionPlanSequenceData;
}

/**
 * Check if a given object implements the SessionPlanSequenceResponse interface.
 */
export function instanceOfSessionPlanSequenceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSequence" in value;

    return isInstance;
}

export function SessionPlanSequenceResponseFromJSON(json: any): SessionPlanSequenceResponse {
    return SessionPlanSequenceResponseFromJSONTyped(json, false);
}

export function SessionPlanSequenceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSequence': SessionPlanSequenceDataFromJSON(json['sessionPlanSequence']),
    };
}

export function SessionPlanSequenceResponseToJSON(value?: SessionPlanSequenceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSequence': SessionPlanSequenceDataToJSON(value.sessionPlanSequence),
    };
}

