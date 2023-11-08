/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
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
 * @interface SessionPlanSetMeta
 */
export interface SessionPlanSetMeta {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetMeta
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetMeta
     */
    type: SessionPlanSetMetaTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanSetMeta
     */
    from: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionPlanSetMeta
     */
    to: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetMeta
     */
    sort?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanSetMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetMeta
     */
    totalCount?: number;
}


/**
 * @export
 */
export const SessionPlanSetMetaTypeEnum = {
    Strength: 'strength',
    Stretch: 'stretch',
    Cardio: 'cardio',
    Activity: 'activity'
} as const;
export type SessionPlanSetMetaTypeEnum = typeof SessionPlanSetMetaTypeEnum[keyof typeof SessionPlanSetMetaTypeEnum];


/**
 * Check if a given object implements the SessionPlanSetMeta interface.
 */
export function instanceOfSessionPlanSetMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SessionPlanSetMetaFromJSON(json: any): SessionPlanSetMeta {
    return SessionPlanSetMetaFromJSONTyped(json, false);
}

export function SessionPlanSetMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetMeta {
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

export function SessionPlanSetMetaToJSON(value?: SessionPlanSetMeta | null): any {
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

