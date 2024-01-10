/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
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
 * @interface SessionPlanSequenceInstanceMeta
 */
export interface SessionPlanSequenceInstanceMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceInstanceMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the SessionPlanSequenceInstanceMeta interface.
 */
export function instanceOfSessionPlanSequenceInstanceMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SessionPlanSequenceInstanceMetaFromJSON(json: any): SessionPlanSequenceInstanceMeta {
    return SessionPlanSequenceInstanceMetaFromJSONTyped(json, false);
}

export function SessionPlanSequenceInstanceMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceInstanceMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'from': json['from'],
        'to': json['to'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function SessionPlanSequenceInstanceMetaToJSON(value?: SessionPlanSequenceInstanceMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'from': value.from,
        'to': value.to,
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

