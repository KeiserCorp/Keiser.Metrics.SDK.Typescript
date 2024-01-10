/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SessionPlanSetTemplateData } from './SessionPlanSetTemplateData';
import {
    SessionPlanSetTemplateDataFromJSON,
    SessionPlanSetTemplateDataFromJSONTyped,
    SessionPlanSetTemplateDataToJSON,
} from './SessionPlanSetTemplateData';
import type { SessionPlanSetTemplateMeta } from './SessionPlanSetTemplateMeta';
import {
    SessionPlanSetTemplateMetaFromJSON,
    SessionPlanSetTemplateMetaFromJSONTyped,
    SessionPlanSetTemplateMetaToJSON,
} from './SessionPlanSetTemplateMeta';

/**
 * 
 * @export
 * @interface SessionPlanSetTemplateListResponse
 */
export interface SessionPlanSetTemplateListResponse {
    /**
     * 
     * @type {Array<SessionPlanSetTemplateData>}
     * @memberof SessionPlanSetTemplateListResponse
     */
    sessionPlanSetTemplates: Array<SessionPlanSetTemplateData>;
    /**
     * 
     * @type {SessionPlanSetTemplateMeta}
     * @memberof SessionPlanSetTemplateListResponse
     */
    sessionPlanSetTemplatesMeta: SessionPlanSetTemplateMeta;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the SessionPlanSetTemplateListResponse interface.
 */
export function instanceOfSessionPlanSetTemplateListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionPlanSetTemplates" in value;
    isInstance = isInstance && "sessionPlanSetTemplatesMeta" in value;

    return isInstance;
}

export function SessionPlanSetTemplateListResponseFromJSON(json: any): SessionPlanSetTemplateListResponse {
    return SessionPlanSetTemplateListResponseFromJSONTyped(json, false);
}

export function SessionPlanSetTemplateListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetTemplateListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionPlanSetTemplates': ((json['sessionPlanSetTemplates'] as Array<any>).map(SessionPlanSetTemplateDataFromJSON)),
        'sessionPlanSetTemplatesMeta': SessionPlanSetTemplateMetaFromJSON(json['sessionPlanSetTemplatesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function SessionPlanSetTemplateListResponseToJSON(value?: SessionPlanSetTemplateListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionPlanSetTemplates': ((value.sessionPlanSetTemplates as Array<any>).map(SessionPlanSetTemplateDataToJSON)),
        'sessionPlanSetTemplatesMeta': SessionPlanSetTemplateMetaToJSON(value.sessionPlanSetTemplatesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

