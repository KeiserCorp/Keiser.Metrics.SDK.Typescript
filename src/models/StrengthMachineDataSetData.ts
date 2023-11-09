/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { A500DataSetData } from './A500DataSetData';
import {
    A500DataSetDataFromJSON,
    A500DataSetDataFromJSONTyped,
    A500DataSetDataToJSON,
} from './A500DataSetData';
import type { FacilityStrengthMachineData } from './FacilityStrengthMachineData';
import {
    FacilityStrengthMachineDataFromJSON,
    FacilityStrengthMachineDataFromJSONTyped,
    FacilityStrengthMachineDataToJSON,
} from './FacilityStrengthMachineData';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';
import type { StrengthExerciseData } from './StrengthExerciseData';
import {
    StrengthExerciseDataFromJSON,
    StrengthExerciseDataFromJSONTyped,
    StrengthExerciseDataToJSON,
} from './StrengthExerciseData';
import type { StrengthMachineData } from './StrengthMachineData';
import {
    StrengthMachineDataFromJSON,
    StrengthMachineDataFromJSONTyped,
    StrengthMachineDataToJSON,
} from './StrengthMachineData';
import type { StrengthMachineDataSetTestData } from './StrengthMachineDataSetTestData';
import {
    StrengthMachineDataSetTestDataFromJSON,
    StrengthMachineDataSetTestDataFromJSONTyped,
    StrengthMachineDataSetTestDataToJSON,
} from './StrengthMachineDataSetTestData';

/**
 * 
 * @export
 * @interface StrengthMachineDataSetData
 */
export interface StrengthMachineDataSetData {
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    userId: number;
    /**
     * 
     * @type {Date}
     * @memberof StrengthMachineDataSetData
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetData
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetData
     */
    serial: string;
    /**
     * 
     * @type {Date}
     * @memberof StrengthMachineDataSetData
     */
    completedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    chest: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    rom1: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    rom2: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    seat: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    resistance: number;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetData
     */
    resistancePrecision: StrengthMachineDataSetDataResistancePrecisionEnum;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    repetitionCount: number;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineDataSetData
     */
    forceUnit: StrengthMachineDataSetDataForceUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    peakPower?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    peakVelocity?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    work: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineDataSetData
     */
    addedWeight?: number;
    /**
     * 
     * @type {StrengthMachineDataSetTestData}
     * @memberof StrengthMachineDataSetData
     */
    test?: StrengthMachineDataSetTestData;
    /**
     * 
     * @type {StrengthMachineData}
     * @memberof StrengthMachineDataSetData
     */
    strengthMachine?: StrengthMachineData;
    /**
     * 
     * @type {StrengthExerciseData}
     * @memberof StrengthMachineDataSetData
     */
    strengthExercise?: StrengthExerciseData;
    /**
     * 
     * @type {A500DataSetData}
     * @memberof StrengthMachineDataSetData
     */
    a500DataSet?: A500DataSetData;
    /**
     * 
     * @type {SessionData}
     * @memberof StrengthMachineDataSetData
     */
    session?: SessionData;
    /**
     * 
     * @type {FacilityStrengthMachineData}
     * @memberof StrengthMachineDataSetData
     */
    facilityStrengthMachine?: FacilityStrengthMachineData;
}


/**
 * @export
 */
export const StrengthMachineDataSetDataResistancePrecisionEnum = {
    Int: 'int',
    Dec: 'dec'
} as const;
export type StrengthMachineDataSetDataResistancePrecisionEnum = typeof StrengthMachineDataSetDataResistancePrecisionEnum[keyof typeof StrengthMachineDataSetDataResistancePrecisionEnum];

/**
 * @export
 */
export const StrengthMachineDataSetDataForceUnitEnum = {
    Lb: 'lb',
    Kg: 'kg',
    Ne: 'ne',
    Er: 'er'
} as const;
export type StrengthMachineDataSetDataForceUnitEnum = typeof StrengthMachineDataSetDataForceUnitEnum[keyof typeof StrengthMachineDataSetDataForceUnitEnum];


/**
 * Check if a given object implements the StrengthMachineDataSetData interface.
 */
export function instanceOfStrengthMachineDataSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "serial" in value;
    isInstance = isInstance && "completedAt" in value;
    isInstance = isInstance && "chest" in value;
    isInstance = isInstance && "rom1" in value;
    isInstance = isInstance && "rom2" in value;
    isInstance = isInstance && "seat" in value;
    isInstance = isInstance && "resistance" in value;
    isInstance = isInstance && "resistancePrecision" in value;
    isInstance = isInstance && "repetitionCount" in value;
    isInstance = isInstance && "forceUnit" in value;
    isInstance = isInstance && "work" in value;

    return isInstance;
}

export function StrengthMachineDataSetDataFromJSON(json: any): StrengthMachineDataSetData {
    return StrengthMachineDataSetDataFromJSONTyped(json, false);
}

export function StrengthMachineDataSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'updatedAt': (new Date(json['updatedAt'])),
        'version': json['version'],
        'serial': json['serial'],
        'completedAt': (new Date(json['completedAt'])),
        'chest': json['chest'],
        'rom1': json['rom1'],
        'rom2': json['rom2'],
        'seat': json['seat'],
        'resistance': json['resistance'],
        'resistancePrecision': json['resistancePrecision'],
        'repetitionCount': json['repetitionCount'],
        'forceUnit': json['forceUnit'],
        'peakPower': !exists(json, 'peakPower') ? undefined : json['peakPower'],
        'peakVelocity': !exists(json, 'peakVelocity') ? undefined : json['peakVelocity'],
        'work': json['work'],
        'distance': !exists(json, 'distance') ? undefined : json['distance'],
        'addedWeight': !exists(json, 'addedWeight') ? undefined : json['addedWeight'],
        'test': !exists(json, 'test') ? undefined : StrengthMachineDataSetTestDataFromJSON(json['test']),
        'strengthMachine': !exists(json, 'strengthMachine') ? undefined : StrengthMachineDataFromJSON(json['strengthMachine']),
        'strengthExercise': !exists(json, 'strengthExercise') ? undefined : StrengthExerciseDataFromJSON(json['strengthExercise']),
        'a500DataSet': !exists(json, 'a500DataSet') ? undefined : A500DataSetDataFromJSON(json['a500DataSet']),
        'session': !exists(json, 'session') ? undefined : SessionDataFromJSON(json['session']),
        'facilityStrengthMachine': !exists(json, 'facilityStrengthMachine') ? undefined : FacilityStrengthMachineDataFromJSON(json['facilityStrengthMachine']),
    };
}

export function StrengthMachineDataSetDataToJSON(value?: StrengthMachineDataSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'updatedAt': (value.updatedAt.toISOString()),
        'version': value.version,
        'serial': value.serial,
        'completedAt': (value.completedAt.toISOString()),
        'chest': value.chest,
        'rom1': value.rom1,
        'rom2': value.rom2,
        'seat': value.seat,
        'resistance': value.resistance,
        'resistancePrecision': value.resistancePrecision,
        'repetitionCount': value.repetitionCount,
        'forceUnit': value.forceUnit,
        'peakPower': value.peakPower,
        'peakVelocity': value.peakVelocity,
        'work': value.work,
        'distance': value.distance,
        'addedWeight': value.addedWeight,
        'test': StrengthMachineDataSetTestDataToJSON(value.test),
        'strengthMachine': StrengthMachineDataToJSON(value.strengthMachine),
        'strengthExercise': StrengthExerciseDataToJSON(value.strengthExercise),
        'a500DataSet': A500DataSetDataToJSON(value.a500DataSet),
        'session': SessionDataToJSON(value.session),
        'facilityStrengthMachine': FacilityStrengthMachineDataToJSON(value.facilityStrengthMachine),
    };
}

