/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationData } from './ApplicationData';
import {
    ApplicationDataFromJSON,
    ApplicationDataFromJSONTyped,
    ApplicationDataToJSON,
} from './ApplicationData';
import type { DevelopmentAccountRelationshipData } from './DevelopmentAccountRelationshipData';
import {
    DevelopmentAccountRelationshipDataFromJSON,
    DevelopmentAccountRelationshipDataFromJSONTyped,
    DevelopmentAccountRelationshipDataToJSON,
} from './DevelopmentAccountRelationshipData';
import type { DevelopmentAccountRelationshipRequestData } from './DevelopmentAccountRelationshipRequestData';
import {
    DevelopmentAccountRelationshipRequestDataFromJSON,
    DevelopmentAccountRelationshipRequestDataFromJSONTyped,
    DevelopmentAccountRelationshipRequestDataToJSON,
} from './DevelopmentAccountRelationshipRequestData';

/**
 * 
 * @export
 * @interface DevelopmentAccountData
 */
export interface DevelopmentAccountData {
    /**
     * 
     * @type {number}
     * @memberof DevelopmentAccountData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountData
     */
    company: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountData
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountData
     */
    websiteUrl: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountData
     */
    privacyUrl: string;
    /**
     * 
     * @type {string}
     * @memberof DevelopmentAccountData
     */
    termsUrl: string;
    /**
     * 
     * @type {Array<ApplicationData>}
     * @memberof DevelopmentAccountData
     */
    applications?: Array<ApplicationData>;
    /**
     * 
     * @type {Array<DevelopmentAccountRelationshipData>}
     * @memberof DevelopmentAccountData
     */
    developmentAccountRelationships?: Array<DevelopmentAccountRelationshipData>;
    /**
     * 
     * @type {Array<DevelopmentAccountRelationshipRequestData>}
     * @memberof DevelopmentAccountData
     */
    developmentAccountRelationshipRequests?: Array<DevelopmentAccountRelationshipRequestData>;
}

/**
 * Check if a given object implements the DevelopmentAccountData interface.
 */
export function instanceOfDevelopmentAccountData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "company" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "websiteUrl" in value;
    isInstance = isInstance && "privacyUrl" in value;
    isInstance = isInstance && "termsUrl" in value;

    return isInstance;
}

export function DevelopmentAccountDataFromJSON(json: any): DevelopmentAccountData {
    return DevelopmentAccountDataFromJSONTyped(json, false);
}

export function DevelopmentAccountDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'company': json['company'],
        'address': json['address'],
        'websiteUrl': json['websiteUrl'],
        'privacyUrl': json['privacyUrl'],
        'termsUrl': json['termsUrl'],
        'applications': !exists(json, 'applications') ? undefined : ((json['applications'] as Array<any>).map(ApplicationDataFromJSON)),
        'developmentAccountRelationships': !exists(json, 'developmentAccountRelationships') ? undefined : ((json['developmentAccountRelationships'] as Array<any>).map(DevelopmentAccountRelationshipDataFromJSON)),
        'developmentAccountRelationshipRequests': !exists(json, 'developmentAccountRelationshipRequests') ? undefined : ((json['developmentAccountRelationshipRequests'] as Array<any>).map(DevelopmentAccountRelationshipRequestDataFromJSON)),
    };
}

export function DevelopmentAccountDataToJSON(value?: DevelopmentAccountData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'company': value.company,
        'address': value.address,
        'websiteUrl': value.websiteUrl,
        'privacyUrl': value.privacyUrl,
        'termsUrl': value.termsUrl,
        'applications': value.applications === undefined ? undefined : ((value.applications as Array<any>).map(ApplicationDataToJSON)),
        'developmentAccountRelationships': value.developmentAccountRelationships === undefined ? undefined : ((value.developmentAccountRelationships as Array<any>).map(DevelopmentAccountRelationshipDataToJSON)),
        'developmentAccountRelationshipRequests': value.developmentAccountRelationshipRequests === undefined ? undefined : ((value.developmentAccountRelationshipRequests as Array<any>).map(DevelopmentAccountRelationshipRequestDataToJSON)),
    };
}

