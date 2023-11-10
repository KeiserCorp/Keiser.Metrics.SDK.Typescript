/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EmailAddressSorting } from './EmailAddressSorting';
import {
    EmailAddressSortingFromJSON,
    EmailAddressSortingFromJSONTyped,
    EmailAddressSortingToJSON,
} from './EmailAddressSorting';

/**
 * 
 * @export
 * @interface EmailAddressListResponseMeta
 */
export interface EmailAddressListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof EmailAddressListResponseMeta
     */
    email?: string;
    /**
     * 
     * @type {EmailAddressSorting}
     * @memberof EmailAddressListResponseMeta
     */
    sort: EmailAddressSorting;
    /**
     * 
     * @type {boolean}
     * @memberof EmailAddressListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EmailAddressListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailAddressListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailAddressListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the EmailAddressListResponseMeta interface.
 */
export function instanceOfEmailAddressListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function EmailAddressListResponseMetaFromJSON(json: any): EmailAddressListResponseMeta {
    return EmailAddressListResponseMetaFromJSONTyped(json, false);
}

export function EmailAddressListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAddressListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'sort': EmailAddressSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function EmailAddressListResponseMetaToJSON(value?: EmailAddressListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'sort': EmailAddressSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

