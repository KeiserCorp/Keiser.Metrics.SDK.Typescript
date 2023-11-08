/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
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
import type { SessionPlanSequenceMeta } from './SessionPlanSequenceMeta';
import {
    SessionPlanSequenceMetaFromJSON,
    SessionPlanSequenceMetaFromJSONTyped,
    SessionPlanSequenceMetaToJSON,
} from './SessionPlanSequenceMeta';

/**
 * 
 * @export
 * @interface SessionPlanSequenceListResponse
 */
export interface SessionPlanSequenceListResponse {
    /**
     * 
     * @type {Array<SessionPlanSequenceData>}
     * @memberof SessionPlanSequenceListResponse
     */
    sessionPlanSequences: Array<SessionPlanSequenceData>;
    /**
     * 
     * @type {SessionPlanSequenceMeta}
     * @memberof SessionPlanSequenceListResponse
     */
    sessionPlanSequencesMeta: SessionPlanSequenceMeta;
}

/**
 * Check if a given object implements the SessionPlanSequenceListResponse interface.
 */
export function instanceOfSessionPlanSequenceListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSequences" in value;
    isInstance = isInstance && "sessionPlanSequencesMeta" in value;

    return isInstance;
}

export function SessionPlanSequenceListResponseFromJSON(json: any): SessionPlanSequenceListResponse {
    return SessionPlanSequenceListResponseFromJSONTyped(json, false);
}

export function SessionPlanSequenceListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSequences': ((json['sessionPlanSequences'] as Array<any>).map(SessionPlanSequenceDataFromJSON)),
        'sessionPlanSequencesMeta': SessionPlanSequenceMetaFromJSON(json['sessionPlanSequencesMeta']),
    };
}

export function SessionPlanSequenceListResponseToJSON(value?: SessionPlanSequenceListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSequences': ((value.sessionPlanSequences as Array<any>).map(SessionPlanSequenceDataToJSON)),
        'sessionPlanSequencesMeta': SessionPlanSequenceMetaToJSON(value.sessionPlanSequencesMeta),
    };
}

