/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SessionPlanSetTemplateMeta
 */
export interface SessionPlanSetTemplateMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateMeta
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateMeta
     */
    type: string;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanSetTemplateMeta
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanSetTemplateMeta
     */
    to: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetTemplateMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanSetTemplateMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetTemplateMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetTemplateMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetTemplateMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the SessionPlanSetTemplateMeta interface.
 */
export function instanceOfSessionPlanSetTemplateMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SessionPlanSetTemplateMetaFromJSON(json: any): SessionPlanSetTemplateMeta {
    return SessionPlanSetTemplateMetaFromJSONTyped(json, false);
}

export function SessionPlanSetTemplateMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetTemplateMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'from': (new Date(json['from'])),
        'to': (new Date(json['to'])),
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function SessionPlanSetTemplateMetaToJSON(value?: SessionPlanSetTemplateMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'from': (value.from.toISOString()),
        'to': (value.to.toISOString()),
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

