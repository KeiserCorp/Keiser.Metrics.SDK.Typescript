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
 * @interface SessionPlanSequenceMeta
 */
export interface SessionPlanSequenceMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceMeta
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceMeta
     */
    description: string;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanSequenceMeta
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanSequenceMeta
     */
    to: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSequenceMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanSequenceMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSequenceMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the SessionPlanSequenceMeta interface.
 */
export function instanceOfSessionPlanSequenceMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SessionPlanSequenceMetaFromJSON(json: any): SessionPlanSequenceMeta {
    return SessionPlanSequenceMetaFromJSONTyped(json, false);
}

export function SessionPlanSequenceMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSequenceMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'from': (new Date(json['from'])),
        'to': (new Date(json['to'])),
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function SessionPlanSequenceMetaToJSON(value?: SessionPlanSequenceMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'from': (value.from.toISOString()),
        'to': (value.to.toISOString()),
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

