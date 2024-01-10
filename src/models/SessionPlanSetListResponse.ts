/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.21
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
import type { SessionPlanSetMeta } from './SessionPlanSetMeta';
import {
    SessionPlanSetMetaFromJSON,
    SessionPlanSetMetaFromJSONTyped,
    SessionPlanSetMetaToJSON,
} from './SessionPlanSetMeta';

/**
 * 
 * @export
 * @interface SessionPlanSetListResponse
 */
export interface SessionPlanSetListResponse {
    /**
     * 
     * @type {Array<SessionPlanSetData>}
     * @memberof SessionPlanSetListResponse
     */
    sessionPlanSets: Array<SessionPlanSetData>;
    /**
     * 
     * @type {SessionPlanSetMeta}
     * @memberof SessionPlanSetListResponse
     */
    sessionPlanSetsMeta: SessionPlanSetMeta;
}

/**
 * Check if a given object implements the SessionPlanSetListResponse interface.
 */
export function instanceOfSessionPlanSetListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSets" in value;
    isInstance = isInstance && "sessionPlanSetsMeta" in value;

    return isInstance;
}

export function SessionPlanSetListResponseFromJSON(json: any): SessionPlanSetListResponse {
    return SessionPlanSetListResponseFromJSONTyped(json, false);
}

export function SessionPlanSetListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSets': ((json['sessionPlanSets'] as Array<any>).map(SessionPlanSetDataFromJSON)),
        'sessionPlanSetsMeta': SessionPlanSetMetaFromJSON(json['sessionPlanSetsMeta']),
    };
}

export function SessionPlanSetListResponseToJSON(value?: SessionPlanSetListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSets': ((value.sessionPlanSets as Array<any>).map(SessionPlanSetDataToJSON)),
        'sessionPlanSetsMeta': SessionPlanSetMetaToJSON(value.sessionPlanSetsMeta),
    };
}

