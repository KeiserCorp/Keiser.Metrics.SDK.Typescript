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
 * @interface Zones
 */
export interface Zones {
    /**
     * 
     * @type {number}
     * @memberof Zones
     */
    zone1: number;
    /**
     * 
     * @type {number}
     * @memberof Zones
     */
    zone2: number;
    /**
     * 
     * @type {number}
     * @memberof Zones
     */
    zone3: number;
    /**
     * 
     * @type {number}
     * @memberof Zones
     */
    zone4: number;
    /**
     * 
     * @type {number}
     * @memberof Zones
     */
    zone5: number;
    /**
     * 
     * @type {number}
     * @memberof Zones
     */
    zone6: number;
    /**
     * 
     * @type {number}
     * @memberof Zones
     */
    zone7: number;
}

/**
 * Check if a given object implements the Zones interface.
 */
export function instanceOfZones(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "zone1" in value;
    isInstance = isInstance && "zone2" in value;
    isInstance = isInstance && "zone3" in value;
    isInstance = isInstance && "zone4" in value;
    isInstance = isInstance && "zone5" in value;
    isInstance = isInstance && "zone6" in value;
    isInstance = isInstance && "zone7" in value;

    return isInstance;
}

export function ZonesFromJSON(json: any): Zones {
    return ZonesFromJSONTyped(json, false);
}

export function ZonesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Zones {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'zone1': json['zone1'],
        'zone2': json['zone2'],
        'zone3': json['zone3'],
        'zone4': json['zone4'],
        'zone5': json['zone5'],
        'zone6': json['zone6'],
        'zone7': json['zone7'],
    };
}

export function ZonesToJSON(value?: Zones | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'zone1': value.zone1,
        'zone2': value.zone2,
        'zone3': value.zone3,
        'zone4': value.zone4,
        'zone5': value.zone5,
        'zone6': value.zone6,
        'zone7': value.zone7,
    };
}

