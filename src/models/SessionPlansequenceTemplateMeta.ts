/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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
 * @interface SessionPlansequenceTemplateMeta
 */
export interface SessionPlansequenceTemplateMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionPlansequenceTemplateMeta
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlansequenceTemplateMeta
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlansequenceTemplateMeta
     */
    searchable: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlansequenceTemplateMeta
     */
    _public: boolean;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlansequenceTemplateMeta
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlansequenceTemplateMeta
     */
    to: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionPlansequenceTemplateMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlansequenceTemplateMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlansequenceTemplateMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlansequenceTemplateMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlansequenceTemplateMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the SessionPlansequenceTemplateMeta interface.
 */
export function instanceOfSessionPlansequenceTemplateMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "searchable" in value;
    isInstance = isInstance && "_public" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SessionPlansequenceTemplateMetaFromJSON(json: any): SessionPlansequenceTemplateMeta {
    return SessionPlansequenceTemplateMetaFromJSONTyped(json, false);
}

export function SessionPlansequenceTemplateMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlansequenceTemplateMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'searchable': json['searchable'],
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

export function SessionPlansequenceTemplateMetaToJSON(value?: SessionPlansequenceTemplateMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'searchable': value.searchable,
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

