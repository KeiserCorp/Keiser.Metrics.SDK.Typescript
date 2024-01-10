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
/**
 * 
 * @export
 * @interface SessionPlanMeta
 */
export interface SessionPlanMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanMeta
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanMeta
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanMeta
     */
    active: boolean;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanMeta
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanMeta
     */
    to: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the SessionPlanMeta interface.
 */
export function instanceOfSessionPlanMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "active" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SessionPlanMetaFromJSON(json: any): SessionPlanMeta {
    return SessionPlanMetaFromJSONTyped(json, false);
}

export function SessionPlanMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'active': json['active'],
        'from': (new Date(json['from'])),
        'to': (new Date(json['to'])),
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function SessionPlanMetaToJSON(value?: SessionPlanMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'active': value.active,
        'from': (value.from.toISOString()),
        'to': (value.to.toISOString()),
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

