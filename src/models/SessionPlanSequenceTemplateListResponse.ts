/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanSequenceTemplateData } from './SessionPlanSequenceTemplateData';
import {
    SessionPlanSequenceTemplateDataFromJSON,
    SessionPlanSequenceTemplateDataFromJSONTyped,
    SessionPlanSequenceTemplateDataToJSON,
} from './SessionPlanSequenceTemplateData';
import type { SessionPlansequenceTemplateMeta } from './SessionPlansequenceTemplateMeta';
import {
    SessionPlansequenceTemplateMetaFromJSON,
    SessionPlansequenceTemplateMetaFromJSONTyped,
    SessionPlansequenceTemplateMetaToJSON,
} from './SessionPlansequenceTemplateMeta';

/**
 * 
 * @export
 * @interface SessionPlanSequenceTemplateListResponse
 */
export interface SessionPlanSequenceTemplateListResponse {
    /**
     * 
     * @type {Array<SessionPlanSequenceTemplateData>}
     * @memberof SessionPlanSequenceTemplateListResponse
     */
    sessionPlanSequenceTemplates: Array<SessionPlanSequenceTemplateData>;
    /**
     * 
     * @type {SessionPlansequenceTemplateMeta}
     * @memberof SessionPlanSequenceTemplateListResponse
     */
    sessionPlanSequenceTemplatesMeta: SessionPlansequenceTemplateMeta;
}

/**
 * Check if a given object implements the SessionPlanSequenceTemplateListResponse interface.
 */
export function instanceOfSessionPlanSequenceTemplateListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSequenceTemplates" in value;
    isInstance = isInstance && "sessionPlanSequenceTemplatesMeta" in value;

    return isInstance;
}

export function SessionPlanSequenceTemplateListResponseFromJSON(json: any): SessionPlanSequenceTemplateListResponse {
    return SessionPlanSequenceTemplateListResponseFromJSONTyped(json, false);
}

export function SessionPlanSequenceTemplateListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceTemplateListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSequenceTemplates': ((json['sessionPlanSequenceTemplates'] as Array<any>).map(SessionPlanSequenceTemplateDataFromJSON)),
        'sessionPlanSequenceTemplatesMeta': SessionPlansequenceTemplateMetaFromJSON(json['sessionPlanSequenceTemplatesMeta']),
    };
}

export function SessionPlanSequenceTemplateListResponseToJSON(value?: SessionPlanSequenceTemplateListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSequenceTemplates': ((value.sessionPlanSequenceTemplates as Array<any>).map(SessionPlanSequenceTemplateDataToJSON)),
        'sessionPlanSequenceTemplatesMeta': SessionPlansequenceTemplateMetaToJSON(value.sessionPlanSequenceTemplatesMeta),
    };
}

