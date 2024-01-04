/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.16
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
 * @interface StatusResponse
 */
export interface StatusResponse {
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    nodeStatus: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StatusResponse
     */
    problems: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof StatusResponse
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    actionheroVersion: string;
    /**
     * 
     * @type {number}
     * @memberof StatusResponse
     */
    uptime: number;
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    version: string;
    /**
     * 
     * @type {number}
     * @memberof StatusResponse
     */
    consumedMemoryMB?: number;
    /**
     * 
     * @type {number}
     * @memberof StatusResponse
     */
    eventLoopDelay?: number;
    /**
     * 
     * @type {number}
     * @memberof StatusResponse
     */
    resqueTotalQueueLength?: number;
}

/**
 * Check if a given object implements the StatusResponse interface.
 */
export function instanceOfStatusResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nodeStatus" in value;
    isInstance = isInstance && "problems" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "actionheroVersion" in value;
    isInstance = isInstance && "uptime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function StatusResponseFromJSON(json: any): StatusResponse {
    return StatusResponseFromJSONTyped(json, false);
}

export function StatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nodeStatus': json['nodeStatus'],
        'problems': json['problems'],
        'id': json['id'],
        'actionheroVersion': json['actionheroVersion'],
        'uptime': json['uptime'],
        'name': json['name'],
        'description': json['description'],
        'version': json['version'],
        'consumedMemoryMB': !exists(json, 'consumedMemoryMB') ? undefined : json['consumedMemoryMB'],
        'eventLoopDelay': !exists(json, 'eventLoopDelay') ? undefined : json['eventLoopDelay'],
        'resqueTotalQueueLength': !exists(json, 'resqueTotalQueueLength') ? undefined : json['resqueTotalQueueLength'],
    };
}

export function StatusResponseToJSON(value?: StatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nodeStatus': value.nodeStatus,
        'problems': value.problems,
        'id': value.id,
        'actionheroVersion': value.actionheroVersion,
        'uptime': value.uptime,
        'name': value.name,
        'description': value.description,
        'version': value.version,
        'consumedMemoryMB': value.consumedMemoryMB,
        'eventLoopDelay': value.eventLoopDelay,
        'resqueTotalQueueLength': value.resqueTotalQueueLength,
    };
}

