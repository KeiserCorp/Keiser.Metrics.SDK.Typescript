/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanTemplateData } from './SessionPlanTemplateData';
import {
    SessionPlanTemplateDataFromJSON,
    SessionPlanTemplateDataFromJSONTyped,
    SessionPlanTemplateDataToJSON,
} from './SessionPlanTemplateData';
import type { SessionPlanTemplateMeta } from './SessionPlanTemplateMeta';
import {
    SessionPlanTemplateMetaFromJSON,
    SessionPlanTemplateMetaFromJSONTyped,
    SessionPlanTemplateMetaToJSON,
} from './SessionPlanTemplateMeta';

/**
 * 
 * @export
 * @interface SessionPlanTemplateListResponse
 */
export interface SessionPlanTemplateListResponse {
    /**
     * 
     * @type {Array<SessionPlanTemplateData>}
     * @memberof SessionPlanTemplateListResponse
     */
    sessionPlanTemplates: Array<SessionPlanTemplateData>;
    /**
     * 
     * @type {SessionPlanTemplateMeta}
     * @memberof SessionPlanTemplateListResponse
     */
    sessionPlanTemplatesMeta: SessionPlanTemplateMeta;
}

/**
 * Check if a given object implements the SessionPlanTemplateListResponse interface.
 */
export function instanceOfSessionPlanTemplateListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanTemplates" in value;
    isInstance = isInstance && "sessionPlanTemplatesMeta" in value;

    return isInstance;
}

export function SessionPlanTemplateListResponseFromJSON(json: any): SessionPlanTemplateListResponse {
    return SessionPlanTemplateListResponseFromJSONTyped(json, false);
}

export function SessionPlanTemplateListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanTemplateListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanTemplates': ((json['sessionPlanTemplates'] as Array<any>).map(SessionPlanTemplateDataFromJSON)),
        'sessionPlanTemplatesMeta': SessionPlanTemplateMetaFromJSON(json['sessionPlanTemplatesMeta']),
    };
}

export function SessionPlanTemplateListResponseToJSON(value?: SessionPlanTemplateListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanTemplates': ((value.sessionPlanTemplates as Array<any>).map(SessionPlanTemplateDataToJSON)),
        'sessionPlanTemplatesMeta': SessionPlanTemplateMetaToJSON(value.sessionPlanTemplatesMeta),
    };
}

