/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
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
 * @interface SessionPlanTemplateMeta
 */
export interface SessionPlanTemplateMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanTemplateMeta
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanTemplateMeta
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanTemplateMeta
     */
    scheduleLength: number;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanTemplateMeta
     */
    _public: boolean;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanTemplateMeta
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanTemplateMeta
     */
    to: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanTemplateMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanTemplateMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanTemplateMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanTemplateMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanTemplateMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the SessionPlanTemplateMeta interface.
 */
export function instanceOfSessionPlanTemplateMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "scheduleLength" in value;
    isInstance = isInstance && "_public" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SessionPlanTemplateMetaFromJSON(json: any): SessionPlanTemplateMeta {
    return SessionPlanTemplateMetaFromJSONTyped(json, false);
}

export function SessionPlanTemplateMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanTemplateMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'scheduleLength': json['scheduleLength'],
        '_public': json['public'],
        'from': (new Date(json['from'])),
        'to': (new Date(json['to'])),
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function SessionPlanTemplateMetaToJSON(value?: SessionPlanTemplateMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'scheduleLength': value.scheduleLength,
        'public': value._public,
        'from': (value.from.toISOString()),
        'to': (value.to.toISOString()),
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

