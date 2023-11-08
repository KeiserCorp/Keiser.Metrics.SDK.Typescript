/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.4
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
import type { SessionPlanSequenceInstanceMeta } from './SessionPlanSequenceInstanceMeta';
import {
    SessionPlanSequenceInstanceMetaFromJSON,
    SessionPlanSequenceInstanceMetaFromJSONTyped,
    SessionPlanSequenceInstanceMetaToJSON,
} from './SessionPlanSequenceInstanceMeta';

/**
 * 
 * @export
 * @interface SessionPlanSequenceInstanceListResponse
 */
export interface SessionPlanSequenceInstanceListResponse {
    /**
     * 
     * @type {Array<SessionPlanSequenceInstanceData>}
     * @memberof SessionPlanSequenceInstanceListResponse
     */
    sessionPlanSequenceInstances: Array<SessionPlanSequenceInstanceData>;
    /**
     * 
     * @type {SessionPlanSequenceInstanceMeta}
     * @memberof SessionPlanSequenceInstanceListResponse
     */
    sessionPlanSequenceInstancesMeta: SessionPlanSequenceInstanceMeta;
}

/**
 * Check if a given object implements the SessionPlanSequenceInstanceListResponse interface.
 */
export function instanceOfSessionPlanSequenceInstanceListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSequenceInstances" in value;
    isInstance = isInstance && "sessionPlanSequenceInstancesMeta" in value;

    return isInstance;
}

export function SessionPlanSequenceInstanceListResponseFromJSON(json: any): SessionPlanSequenceInstanceListResponse {
    return SessionPlanSequenceInstanceListResponseFromJSONTyped(json, false);
}

export function SessionPlanSequenceInstanceListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceInstanceListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSequenceInstances': ((json['sessionPlanSequenceInstances'] as Array<any>).map(SessionPlanSequenceInstanceDataFromJSON)),
        'sessionPlanSequenceInstancesMeta': SessionPlanSequenceInstanceMetaFromJSON(json['sessionPlanSequenceInstancesMeta']),
    };
}

export function SessionPlanSequenceInstanceListResponseToJSON(value?: SessionPlanSequenceInstanceListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSequenceInstances': ((value.sessionPlanSequenceInstances as Array<any>).map(SessionPlanSequenceInstanceDataToJSON)),
        'sessionPlanSequenceInstancesMeta': SessionPlanSequenceInstanceMetaToJSON(value.sessionPlanSequenceInstancesMeta),
    };
}

