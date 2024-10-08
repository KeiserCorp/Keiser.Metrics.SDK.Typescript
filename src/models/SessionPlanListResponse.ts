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
import type { SessionPlanData } from './SessionPlanData';
import {
    SessionPlanDataFromJSON,
    SessionPlanDataFromJSONTyped,
    SessionPlanDataToJSON,
} from './SessionPlanData';
import type { SessionPlanMeta } from './SessionPlanMeta';
import {
    SessionPlanMetaFromJSON,
    SessionPlanMetaFromJSONTyped,
    SessionPlanMetaToJSON,
} from './SessionPlanMeta';

/**
 * 
 * @export
 * @interface SessionPlanListResponse
 */
export interface SessionPlanListResponse {
    /**
     * 
     * @type {Array<SessionPlanData>}
     * @memberof SessionPlanListResponse
     */
    sessionPlans: Array<SessionPlanData>;
    /**
     * 
     * @type {SessionPlanMeta}
     * @memberof SessionPlanListResponse
     */
    sessionPlansMeta: SessionPlanMeta;
}

/**
 * Check if a given object implements the SessionPlanListResponse interface.
 */
export function instanceOfSessionPlanListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlans" in value;
    isInstance = isInstance && "sessionPlansMeta" in value;

    return isInstance;
}

export function SessionPlanListResponseFromJSON(json: any): SessionPlanListResponse {
    return SessionPlanListResponseFromJSONTyped(json, false);
}

export function SessionPlanListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlans': ((json['sessionPlans'] as Array<any>).map(SessionPlanDataFromJSON)),
        'sessionPlansMeta': SessionPlanMetaFromJSON(json['sessionPlansMeta']),
    };
}

export function SessionPlanListResponseToJSON(value?: SessionPlanListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlans': ((value.sessionPlans as Array<any>).map(SessionPlanDataToJSON)),
        'sessionPlansMeta': SessionPlanMetaToJSON(value.sessionPlansMeta),
    };
}

