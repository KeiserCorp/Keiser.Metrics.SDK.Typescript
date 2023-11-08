## @keiser/metrics-sdk-typescript@5.0.3

## Project
This SDK facilitates communication between a client system (_ie: phone app, website, server_) and [Keiser Metrics](https://metrics.keiser.com). The SDK is written in [TypeScript](https://www.typescriptlang.org) and supports both [browser](https://caniuse.com/#feat=es6) and [NodeJS](https://nodejs.org) platforms.


### Installation

Navigate to the folder of your consuming project and install with [npm](https://www.npmjs.com/):

```
npm install @keiser/metrics-sdk-typescript@5.0.3 --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { MetricsApi } from '@keiser/metrics-sdk-typescript';

var api = new MetricsApi()

let body:MetricsApiA500CreateSetRequest = {
  // string
  displaySerial: displaySerial_example,
  // string
  displaySoftwareVersion: displaySoftwareVersion_example,
  // number
  facilityId: 8.14,
  // string
  memberIdentifier: memberIdentifier_example,
  // string
  model: model_example,
  // string | Allowed values: int, dec
  resistancePrecision: resistancePrecision_example,
  // string
  setData: setData_example,
  // string (optional)
  lz4SampleData: lz4SampleData_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500CreateSet(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}

```

## Documentation for API Endpoints

All URIs are relative to *https://metrics-api.keiser.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**a500CreateSet**](MetricsApi.md#a500CreateSet) | **POST** /a500/create-set | Create a user\&#39;s set on A500 equipment
[**a500CreateUtilizationInstance**](MetricsApi.md#a500CreateUtilizationInstance) | **POST** /a500/utilization-instance | Create a utilization instance for an A500 machine
[**a500GetUser**](MetricsApi.md#a500GetUser) | **GET** /a500/user | Get a user\&#39;s info on A500 equipment
[**a500Initialize**](MetricsApi.md#a500Initialize) | **POST** /a500/initialize | Initializes a facility strength machine
[**a500ShowMachineState**](MetricsApi.md#a500ShowMachineState) | **GET** /a500/{facilityStrengthMachineId}/machine-state | Show an A500 Facility Strength Machine State
[**a500SubscribeMachineState**](MetricsApi.md#a500SubscribeMachineState) | **GET** /a500/subscribeMachineState | Subscribe to A500 Facility Strength Machine State
[**a500UpdateMachine**](MetricsApi.md#a500UpdateMachine) | **PUT** /a500/machine | Create or update a facility strength machine
[**a500UpdateMachineState**](MetricsApi.md#a500UpdateMachineState) | **PUT** /a500/{facilityStrengthMachineId}/machine-state | Updates a facility strength machine state
[**a500UserLogin**](MetricsApi.md#a500UserLogin) | **POST** /a500/user-login | Login a user from an A500 Machine
[**applicationCreate**](MetricsApi.md#applicationCreate) | **POST** /development-account/{developmentAccountId}/application | Create an application
[**applicationDelete**](MetricsApi.md#applicationDelete) | **DELETE** /development-account/{developmentAccountId}/application/{id} | Delete an application
[**applicationList**](MetricsApi.md#applicationList) | **GET** /development-account/{developmentAccountId}/application | List applications for a Developer Account
[**applicationShow**](MetricsApi.md#applicationShow) | **GET** /development-account/{developmentAccountId}/application/{id} | Show an application
[**applicationUpdate**](MetricsApi.md#applicationUpdate) | **PUT** /development-account/{developmentAccountId}/application/{id} | Update an application
[**authExchangeFulfillment**](MetricsApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**cardioExerciseCreate**](MetricsApi.md#cardioExerciseCreate) | **POST** /cardio-exercise | Create a cardio exercise
[**cardioExerciseDelete**](MetricsApi.md#cardioExerciseDelete) | **DELETE** /cardio-exercise/{id} | Delete a cardio exercise
[**cardioExerciseList**](MetricsApi.md#cardioExerciseList) | **GET** /cardio-exercise | List cardio exercises
[**cardioExerciseMuscleCreate**](MetricsApi.md#cardioExerciseMuscleCreate) | **POST** /cardio-exercise/{cardioExerciseId}/muscle | Create a cardio exercise muscle
[**cardioExerciseMuscleDelete**](MetricsApi.md#cardioExerciseMuscleDelete) | **DELETE** /cardio-exercise/muscle/{id} | Delete a cardio exercise muscle
[**cardioExerciseMuscleList**](MetricsApi.md#cardioExerciseMuscleList) | **GET** /cardio-exercise/{cardioExerciseId}/muscle | List cardio exercise muscles
[**cardioExerciseMuscleShow**](MetricsApi.md#cardioExerciseMuscleShow) | **GET** /cardio-exercise/muscle/{id} | Show a cardio exercise muscle
[**cardioExerciseMuscleUpdate**](MetricsApi.md#cardioExerciseMuscleUpdate) | **PUT** /cardio-exercise/muscle/{id} | Update a cardio exercise muscle
[**cardioExerciseShow**](MetricsApi.md#cardioExerciseShow) | **GET** /cardio-exercise/{id} | Show a cardio exercise
[**cardioExerciseUpdate**](MetricsApi.md#cardioExerciseUpdate) | **PUT** /cardio-exercise/{id} | Update a cardio exercise
[**cardioExerciseVariantCreate**](MetricsApi.md#cardioExerciseVariantCreate) | **POST** /cardio-exercise/{cardioExerciseId}/variant | Create a cardio exercise variant
[**cardioExerciseVariantDelete**](MetricsApi.md#cardioExerciseVariantDelete) | **DELETE** /cardio-exercise/variant/{id} | Delete a cardio exercise variant
[**cardioExerciseVariantList**](MetricsApi.md#cardioExerciseVariantList) | **GET** /cardio-exercise/variant | List cardio exercise variants
[**cardioExerciseVariantShow**](MetricsApi.md#cardioExerciseVariantShow) | **GET** /cardio-exercise/variant/{id} | Show a cardio exercise variant
[**cardioExerciseVariantUpdate**](MetricsApi.md#cardioExerciseVariantUpdate) | **PUT** /cardio-exercise/variant/{id} | Update a cardio exercise variant
[**cardioMachineList**](MetricsApi.md#cardioMachineList) | **GET** /cardio-machine | List cardio machines
[**cardioMachineShow**](MetricsApi.md#cardioMachineShow) | **GET** /cardio-machine/{id} | Show a cardio machine
[**coreEndpoints**](MetricsApi.md#coreEndpoints) | **GET** /endpoints | Lists all endpoints for reference
[**coreErrors**](MetricsApi.md#coreErrors) | **GET** /errors | Lists all errors for reference
[**coreHealth**](MetricsApi.md#coreHealth) | **GET** /health | Returns 200 if healthy, 400 if unhealthy
[**coreStatus**](MetricsApi.md#coreStatus) | **GET** /status | Show basic API information
[**coreTime**](MetricsApi.md#coreTime) | **GET** /time | Returns current system time
[**coreUnsubscribe**](MetricsApi.md#coreUnsubscribe) | **GET** /unsubscribe | Unsubscribe from model updates
[**developmentAccountCreate**](MetricsApi.md#developmentAccountCreate) | **POST** /development | Create a Development Account
[**developmentAccountDelete**](MetricsApi.md#developmentAccountDelete) | **DELETE** /development-account/{id} | Delete a Development Account
[**developmentAccountList**](MetricsApi.md#developmentAccountList) | **GET** /development | List Development Accounts
[**developmentAccountRelationshipList**](MetricsApi.md#developmentAccountRelationshipList) | **GET** /development-account/{developmentAccountId}/relationship | List User Development Account Relationships
[**developmentAccountRelationshipRequestDelete**](MetricsApi.md#developmentAccountRelationshipRequestDelete) | **DELETE** /development-account/{developmentAccountId}/relationship-request/{id} | Deletes a Development Account Relationship Request
[**developmentAccountRelationshipRequestFulfillment**](MetricsApi.md#developmentAccountRelationshipRequestFulfillment) | **PUT** /development-account/relationship-request/fulfillment | Fulfills a Development Account Relationship Request
[**developmentAccountRelationshipRequestInit**](MetricsApi.md#developmentAccountRelationshipRequestInit) | **POST** /development-account/{developmentAccountId}/relationship-request/init | Initialize a Development Account Relationship Request
[**developmentAccountRelationshipRequestList**](MetricsApi.md#developmentAccountRelationshipRequestList) | **GET** /development-account/relationship-request/list | List Development Account Relationship Requests
[**developmentAccountRelationshipRequestShow**](MetricsApi.md#developmentAccountRelationshipRequestShow) | **GET** /development-account/relationship-request | Show a Development Account Relationship Request
[**developmentAccountRelationshipShow**](MetricsApi.md#developmentAccountRelationshipShow) | **GET** /development-account/{developmentAccountId}/relationship/{id} | Show a User Development Account Relationship
[**developmentAccountRelationshipUpdate**](MetricsApi.md#developmentAccountRelationshipUpdate) | **PUT** /development-account/{developmentAccountId}/relationship/{id} | Updates a Development Account Relationship
[**developmentAccountShow**](MetricsApi.md#developmentAccountShow) | **GET** /development-account/{id} | Show a Development Account
[**developmentAccountUpdate**](MetricsApi.md#developmentAccountUpdate) | **PUT** /development-account/{id} | Update a Development Account
[**emailAddressCreate**](MetricsApi.md#emailAddressCreate) | **POST** /user/email-address | Create a user email
[**emailAddressDelete**](MetricsApi.md#emailAddressDelete) | **DELETE** /user/email-address/{id} | Delete a user\&#39;s email address
[**emailAddressList**](MetricsApi.md#emailAddressList) | **GET** /user/email-address | List a user\&#39;s email addresses
[**emailAddressShow**](MetricsApi.md#emailAddressShow) | **GET** /user/email-address/{id} | Show a user\&#39;s email address
[**emailAddressValidationFulfillment**](MetricsApi.md#emailAddressValidationFulfillment) | **POST** /user/email-address/validation-fulfillment/{validationToken} | Fulfills a user\&#39;s email validation process
[**emailAddressValidationRequest**](MetricsApi.md#emailAddressValidationRequest) | **POST** /user/email-address/validation-request/{id} | Request an email validation email be sent
[**exerciseAliasCreate**](MetricsApi.md#exerciseAliasCreate) | **POST** /exercise-alias | Create an exercise alias
[**exerciseAliasDelete**](MetricsApi.md#exerciseAliasDelete) | **DELETE** /exercise-alias/{id} | Delete an exercise alias
[**exerciseAliasList**](MetricsApi.md#exerciseAliasList) | **GET** /exercise-alias | List exercise aliases
[**exerciseAliasShow**](MetricsApi.md#exerciseAliasShow) | **GET** /exercise-alias/{id} | Show an exercise alias
[**exerciseAliasUpdate**](MetricsApi.md#exerciseAliasUpdate) | **PUT** /exercise-alias/{id} | Update an exercise alias
[**exerciseOrdinalSetAssignmentCreate**](MetricsApi.md#exerciseOrdinalSetAssignmentCreate) | **POST** /exercise-ordinal-set/{exerciseOrdinalSetId}/assignment | Create an exercise ordinal set assignment
[**exerciseOrdinalSetAssignmentDelete**](MetricsApi.md#exerciseOrdinalSetAssignmentDelete) | **DELETE** /exercise-ordinal-set/assignment/{id} | Delete an exercise ordinal set assignment
[**exerciseOrdinalSetAssignmentList**](MetricsApi.md#exerciseOrdinalSetAssignmentList) | **GET** /exercise-ordinal-set/assignment | List exercise ordinal set assignments
[**exerciseOrdinalSetAssignmentShow**](MetricsApi.md#exerciseOrdinalSetAssignmentShow) | **GET** /exercise-ordinal-set/assignment/{id} | Show an exercise ordinal set assignment
[**exerciseOrdinalSetCreate**](MetricsApi.md#exerciseOrdinalSetCreate) | **POST** /exercise-ordinal-set | Create an exercise ordinal set
[**exerciseOrdinalSetDelete**](MetricsApi.md#exerciseOrdinalSetDelete) | **DELETE** /exercise-ordinal-set/{id} | Delete an exercise ordinal set
[**exerciseOrdinalSetList**](MetricsApi.md#exerciseOrdinalSetList) | **GET** /exercise-ordinal-set | List exercise ordinal sets
[**exerciseOrdinalSetShow**](MetricsApi.md#exerciseOrdinalSetShow) | **GET** /exercise-ordinal-set/{id} | Show an exercise ordinal set
[**exerciseOrdinalSetUpdate**](MetricsApi.md#exerciseOrdinalSetUpdate) | **PUT** /exercise-ordinal-set/{id} | Update an exercise ordinal set
[**facilityAccessControlIPRangeCreate**](MetricsApi.md#facilityAccessControlIPRangeCreate) | **POST** /facility/access-control/ip-range | Create a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeDelete**](MetricsApi.md#facilityAccessControlIPRangeDelete) | **DELETE** /facility/access-control/ip-range/{id} | Delete a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeList**](MetricsApi.md#facilityAccessControlIPRangeList) | **GET** /facility/access-control/ip-range | List a facility\&#39;s access control IP Range whitelist entities
[**facilityAccessControlIPRangeShow**](MetricsApi.md#facilityAccessControlIPRangeShow) | **GET** /facility/access-control/ip-range/{id} | Show a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeUpdate**](MetricsApi.md#facilityAccessControlIPRangeUpdate) | **PUT** /facility/access-control/ip-range/{id} | Update a facility access control IP Range whitelist entity
[**facilityAccessControlKioskShow**](MetricsApi.md#facilityAccessControlKioskShow) | **GET** /facility/access-control/kiosk | Show the facility access control kiosk entity
[**facilityAccessControlKioskUpdate**](MetricsApi.md#facilityAccessControlKioskUpdate) | **PUT** /facility/access-control/kiosk | Update the facility access control kiosk entity
[**facilityAccessControlShow**](MetricsApi.md#facilityAccessControlShow) | **GET** /facility/access-control | Show a facility access control
[**facilityApplyLicense**](MetricsApi.md#facilityApplyLicense) | **POST** /facility/apply-license | Updates a facility license
[**facilityCardioMachineDelete**](MetricsApi.md#facilityCardioMachineDelete) | **DELETE** /facility/cardio-machine/{id} | Delete a facility cardio machine
[**facilityCardioMachineList**](MetricsApi.md#facilityCardioMachineList) | **POST** /facility/cardio-machine | List facility cardio machines
[**facilityCardioMachineShow**](MetricsApi.md#facilityCardioMachineShow) | **POST** /facility/cardio-machine/{id} | Show a facility cardio machine
[**facilityCardioMachineUpdate**](MetricsApi.md#facilityCardioMachineUpdate) | **PUT** /facility/cardio-machine/{id} | Update a facility cardio machine
[**facilityConfigurationShow**](MetricsApi.md#facilityConfigurationShow) | **GET** /facility/configuration | Show a facility configuration
[**facilityConfigurationSubscribe**](MetricsApi.md#facilityConfigurationSubscribe) | **GET** /facilityConfiguration/subscribe | Subscribe to facility configuration
[**facilityConfigurationUpdate**](MetricsApi.md#facilityConfigurationUpdate) | **PUT** /facility/configuration | Update a facility configuration
[**facilityCreate**](MetricsApi.md#facilityCreate) | **POST** /facility  | Create a facility
[**facilityInBodyIntegrationCreate**](MetricsApi.md#facilityInBodyIntegrationCreate) | **POST** /facility/inbody-integration | Create a facility InBody integration
[**facilityInBodyIntegrationDelete**](MetricsApi.md#facilityInBodyIntegrationDelete) | **DELETE** /facility/inbody-integration | Delete a facility InBody integration
[**facilityInBodyIntegrationShow**](MetricsApi.md#facilityInBodyIntegrationShow) | **GET** /facility/inbody-integration | Show a facility InBody integration settings
[**facilityKioskSessionEndEchip**](MetricsApi.md#facilityKioskSessionEndEchip) | **PUT** /facility/kiosk/session/end-echip/{echipId} | End a user session from a facility kiosk using an eChip Id
[**facilityKioskSessionUpdateEchip**](MetricsApi.md#facilityKioskSessionUpdateEchip) | **PUT** /facility/kiosk/session/update-echip/{echipId} | Update a user session from a facility kiosk using an eChip Id
[**facilityKioskTokenCheck**](MetricsApi.md#facilityKioskTokenCheck) | **GET** /facility/kiosk/token/check | Check validity of a kiosk token
[**facilityKioskTokenCreate**](MetricsApi.md#facilityKioskTokenCreate) | **POST** /facility/kiosk/token | Create a kiosk token for a facility
[**facilityKioskTokenDelete**](MetricsApi.md#facilityKioskTokenDelete) | **DELETE** /facility/kiosk/token | Delete a kiosk token for a facility
[**facilityKioskUserLogin**](MetricsApi.md#facilityKioskUserLogin) | **POST** /facility/kiosk/user-login | Use a kiosk token to log in a facility user
[**facilityLicenseList**](MetricsApi.md#facilityLicenseList) | **GET** /facility/license | List facility licenses
[**facilityLicenseShow**](MetricsApi.md#facilityLicenseShow) | **GET** /facility/license/{id} | Show a facility license
[**facilityList**](MetricsApi.md#facilityList) | **GET** /facility/list | List facilities
[**facilityProfileShow**](MetricsApi.md#facilityProfileShow) | **GET** /facility/profile | Show facility profile
[**facilityProfileUpdate**](MetricsApi.md#facilityProfileUpdate) | **PUT** /facility/profile | Update a facility profile
[**facilityRelationshipFacilityCreate**](MetricsApi.md#facilityRelationshipFacilityCreate) | **POST** /facility/relationship | Create a user with a facility relationship
[**facilityRelationshipFacilityDelete**](MetricsApi.md#facilityRelationshipFacilityDelete) | **DELETE** /facility/relationship/{id} | Delete a facility\&#39;s user relationship
[**facilityRelationshipFacilityList**](MetricsApi.md#facilityRelationshipFacilityList) | **GET** /facility/relationship/ | List a facility\&#39;s user relationships
[**facilityRelationshipFacilityShow**](MetricsApi.md#facilityRelationshipFacilityShow) | **GET** /facility/relationship/{id} | Show a facility\&#39;s user relationship
[**facilityRelationshipFacilitySubscribe**](MetricsApi.md#facilityRelationshipFacilitySubscribe) | **GET** /facilityRelationship/facilitySubscribe | Subscribe to changes to facility relationship
[**facilityRelationshipFacilityUpdate**](MetricsApi.md#facilityRelationshipFacilityUpdate) | **PUT** /facility/relationship/{id} | Update a facility\&#39;s user relationship
[**facilityRelationshipRequestFacilityCreate**](MetricsApi.md#facilityRelationshipRequestFacilityCreate) | **POST** /facility/relationship-request | Create a facility relationship request (Facility to User)
[**facilityRelationshipRequestFacilityList**](MetricsApi.md#facilityRelationshipRequestFacilityList) | **GET** /facility/relationship-request | List facility relationship requests (User to Facility)
[**facilityRelationshipRequestFacilityShow**](MetricsApi.md#facilityRelationshipRequestFacilityShow) | **GET** /facility/relationship-request/{id} | Show a facility relationship request (User to Facility)
[**facilityRelationshipRequestFacilitySubscribe**](MetricsApi.md#facilityRelationshipRequestFacilitySubscribe) | **GET** /facilityRelationshipRequest/facilitySubscribe | Subscribe to changes to facility relationship request
[**facilityRelationshipRequestFacilityUpdate**](MetricsApi.md#facilityRelationshipRequestFacilityUpdate) | **PUT** /facility/relationship-request/{id} | Update a facility relationship request (User to Facility)
[**facilityRelationshipRequestUserCreate**](MetricsApi.md#facilityRelationshipRequestUserCreate) | **POST** /user/facility/relationship-request | Create a facility relationship request (User to Facility)
[**facilityRelationshipRequestUserList**](MetricsApi.md#facilityRelationshipRequestUserList) | **GET** /user/facility/relationship-request | List facility relationship requests (Facility to User)
[**facilityRelationshipRequestUserShow**](MetricsApi.md#facilityRelationshipRequestUserShow) | **GET** /user/facility/relationship-request/{id} | Show a facility relationship request (Facility to User)
[**facilityRelationshipRequestUserSubscribe**](MetricsApi.md#facilityRelationshipRequestUserSubscribe) | **GET** /facilityRelationshipRequest/userSubscribe | Subscribe to changes to facility relationship request
[**facilityRelationshipRequestUserUpdate**](MetricsApi.md#facilityRelationshipRequestUserUpdate) | **PUT** /user/facility/relationship-request/{id} | Update a facility relationship request (Facility to User)
[**facilityRelationshipUserDelete**](MetricsApi.md#facilityRelationshipUserDelete) | **DELETE** /user/facility/relationship/{id} | Delete a user\&#39;s facility relationship
[**facilityRelationshipUserList**](MetricsApi.md#facilityRelationshipUserList) | **GET** /user/facility/relationship | List a user\&#39;s facility relationships
[**facilityRelationshipUserShow**](MetricsApi.md#facilityRelationshipUserShow) | **GET** /user/facility/relationship/{id} | Show a user\&#39;s facility relationship
[**facilityRelationshipUserSubscribe**](MetricsApi.md#facilityRelationshipUserSubscribe) | **GET** /facilityRelationship/userSubscribe | Subscribe to changes to facility relationship
[**facilityRelationshipUserUpdate**](MetricsApi.md#facilityRelationshipUserUpdate) | **PUT** /user/facility/relationship/{id} | Update a user\&#39;s facility relationship
[**facilityReportCheckIn**](MetricsApi.md#facilityReportCheckIn) | **GET** /facility/report/check-in | Counts the number of days a member recorded one strength machine data set.
[**facilitySessionCheckEchip**](MetricsApi.md#facilitySessionCheckEchip) | **GET** /facility/session/check-echip | Check if eChip ID already assigned to active session
[**facilitySessionDelete**](MetricsApi.md#facilitySessionDelete) | **DELETE** /facility/session/{id} | Delete a facility user\&#39;s session
[**facilitySessionEnd**](MetricsApi.md#facilitySessionEnd) | **PUT** /facility/session/end | End a user session from a facility
[**facilitySessionList**](MetricsApi.md#facilitySessionList) | **GET** /facility/session/list | List a facility\&#39;s user sessions
[**facilitySessionShow**](MetricsApi.md#facilitySessionShow) | **GET** /facility/session | Show a facility user\&#39;s session
[**facilitySessionStart**](MetricsApi.md#facilitySessionStart) | **POST** /facility/session/{userId} | Start a user session from a facility
[**facilitySessionStatus**](MetricsApi.md#facilitySessionStatus) | **GET** /facility/session/{userId}/status | Retrieves a user\&#39;s session status for a facility
[**facilitySessionSubscribe**](MetricsApi.md#facilitySessionSubscribe) | **GET** /facilitySession/subscribe | Subscribe to changes to a facilities\&#39;s session
[**facilitySessionUpdate**](MetricsApi.md#facilitySessionUpdate) | **PUT** /facility/session/{echipId} | Update a user session from a facility using an eChip Id
[**facilityShow**](MetricsApi.md#facilityShow) | **GET** /facility | Show a facility
[**facilityStrengthMachineConfigurationShow**](MetricsApi.md#facilityStrengthMachineConfigurationShow) | **GET** /facility/strength-machine/configuration | Show a facility strength machine default configuration
[**facilityStrengthMachineConfigurationSubscribe**](MetricsApi.md#facilityStrengthMachineConfigurationSubscribe) | **GET** /facilityStrengthMachineConfiguration/subscribe | Subscribe to changes to facility strength machine configuration
[**facilityStrengthMachineConfigurationUpdate**](MetricsApi.md#facilityStrengthMachineConfigurationUpdate) | **PUT** /facility/strength-machine/configuration | Update a facility strength machine configuration
[**facilityStrengthMachineCreateEchip**](MetricsApi.md#facilityStrengthMachineCreateEchip) | **POST** /facility/strength-machine/echip | Creates facility strength machines using eChip data
[**facilityStrengthMachineDelete**](MetricsApi.md#facilityStrengthMachineDelete) | **DELETE** /facility/strength-machine/{id} | Delete a facility strength machine
[**facilityStrengthMachineInitializerOTP**](MetricsApi.md#facilityStrengthMachineInitializerOTP) | **GET** /facility/strength-machine/initializer-otp | Show facility strength machine initializer token
[**facilityStrengthMachineInitializerToken**](MetricsApi.md#facilityStrengthMachineInitializerToken) | **GET** /facility/strength-machine/initializer-token | Show facility strength machine initializer token
[**facilityStrengthMachineList**](MetricsApi.md#facilityStrengthMachineList) | **GET** /facility/strength-machine | List facility strength machines
[**facilityStrengthMachineMaintenanceRecordCreate**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordCreate) | **POST** /facility/strength-machine/maintenance-record | Create a maintenance record for facility strength machine
[**facilityStrengthMachineMaintenanceRecordDelete**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordDelete) | **DELETE** /facility/strength-machine/maintenance-record/{id} | Delete a maintenance record for facility strength machine
[**facilityStrengthMachineMaintenanceRecordList**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordList) | **GET** /facility/strength-machine/maintenance-record | List maintenance records for facility strength machines
[**facilityStrengthMachineMaintenanceRecordShow**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordShow) | **GET** /facility/strength-machine/maintenance-record/{id} | Show a maintenance record by for facility strength machine
[**facilityStrengthMachineShow**](MetricsApi.md#facilityStrengthMachineShow) | **GET** /facility/strength-machine/{id} | Show a facility strength machine
[**facilityStrengthMachineSubscribe**](MetricsApi.md#facilityStrengthMachineSubscribe) | **GET** /facilityStrengthMachine/subscribe | Subscribe to changes to facility strength machine
[**facilityStrengthMachineUpdate**](MetricsApi.md#facilityStrengthMachineUpdate) | **PUT** /facility/strength-machine/{id} | Update a facility strength machine
[**facilityStrengthMachineUtilizationInstanceList**](MetricsApi.md#facilityStrengthMachineUtilizationInstanceList) | **GET** /facility/strength-machine/utilization-instance | List facility strength machine utilization instances
[**facilityStrengthMachineUtilizationInstanceShow**](MetricsApi.md#facilityStrengthMachineUtilizationInstanceShow) | **GET** /facility/strength-machine/utilization-instance/{id} | Show facility strength machine utilization instance
[**facilitySubscribe**](MetricsApi.md#facilitySubscribe) | **GET** /facility/subscribe | Subscribe to changes to a facility
[**heartRateDataSetCreate**](MetricsApi.md#heartRateDataSetCreate) | **POST** /user/heart-rate-data-set | Create a user heart rate data set
[**heartRateDataSetDelete**](MetricsApi.md#heartRateDataSetDelete) | **DELETE** /user/heart-rate-data-set/{id} | Delete a user\&#39;s heart rate data set
[**heartRateDataSetList**](MetricsApi.md#heartRateDataSetList) | **GET** /user/heart-rate-data-set | List a user\&#39;s heart rate data sets
[**heartRateDataSetShow**](MetricsApi.md#heartRateDataSetShow) | **GET** /user/heart-rate-data-set/{id} | Show a user\&#39;s heart rate data set
[**heartRateDataSetSubscribe**](MetricsApi.md#heartRateDataSetSubscribe) | **GET** /heartRateDataSet/subscribe | Subscribe to heart rate data set changes
[**heartRateDataSetUpdate**](MetricsApi.md#heartRateDataSetUpdate) | **PUT** /user/heart-rate-data-set/{id} | Update a user\&#39;s heart rate data set
[**heightMeasurementCreate**](MetricsApi.md#heightMeasurementCreate) | **POST** /user/height-measurement | Create a user height measurement
[**heightMeasurementDelete**](MetricsApi.md#heightMeasurementDelete) | **DELETE** /user/height-measurement/{id} | Delete a user\&#39;s height measurement
[**heightMeasurementList**](MetricsApi.md#heightMeasurementList) | **GET** /user/height-measurement/list | List a user\&#39;s height measurements
[**heightMeasurementShow**](MetricsApi.md#heightMeasurementShow) | **GET** /user/height-measurement | Show a user\&#39;s height measurement
[**heightMeasurementSubscribe**](MetricsApi.md#heightMeasurementSubscribe) | **GET** /heightMeasurement/subscribe | Subscribe to changes to user\&#39;s height measurements
[**mSeriesAppSessionCreate**](MetricsApi.md#mSeriesAppSessionCreate) | **POST** /m-series/app-session | Create a user session using M Series app data
[**mSeriesAppSessionDelete**](MetricsApi.md#mSeriesAppSessionDelete) | **DELETE** /m-series/app-session/{id} | Delete a user\&#39;s session
[**mSeriesAppSessionExport**](MetricsApi.md#mSeriesAppSessionExport) | **GET** /m-series/app-session/export/{id}/{format} | Export a user\&#39;s session as a file
[**mSeriesAppSessionExportFlat**](MetricsApi.md#mSeriesAppSessionExportFlat) | **GET** /m-series/app-session/export/{filename} | Export a user\&#39;s session as a flat file
[**mSeriesAppSessionList**](MetricsApi.md#mSeriesAppSessionList) | **GET** /m-series/app-session/list | List a user\&#39;s sessions generated using M Series app data
[**mSeriesAppSessionShow**](MetricsApi.md#mSeriesAppSessionShow) | **GET** /m-series/app-session | Show a user\&#39;s session generated using M Series app data
[**mSeriesChallengeCreate**](MetricsApi.md#mSeriesChallengeCreate) | **POST** /m-series/challenge | Create a user mSeries Challenge
[**mSeriesChallengeDelete**](MetricsApi.md#mSeriesChallengeDelete) | **DELETE** /m-series/challenge/{id} | Delete a user\&#39;s owned mSeries Challenge
[**mSeriesChallengeList**](MetricsApi.md#mSeriesChallengeList) | **GET** /m-series/challenge/list | List a user\&#39;s owned or joined mSeries Challenges
[**mSeriesChallengeParticipantCreate**](MetricsApi.md#mSeriesChallengeParticipantCreate) | **POST** /m-series/challenge/participant | Join Challenge
[**mSeriesChallengeParticipantDelete**](MetricsApi.md#mSeriesChallengeParticipantDelete) | **DELETE** /m-series/challenge/{mSeriesChallengeId}/participant | Leave Challenge
[**mSeriesChallengeParticipantList**](MetricsApi.md#mSeriesChallengeParticipantList) | **GET** /m-series/challenge/participant/list | Search for mSeries Challenge Participants
[**mSeriesChallengeParticipantShow**](MetricsApi.md#mSeriesChallengeParticipantShow) | **GET** /m-series/challenge/participant | Show a user\&#39;s mSeries User Challenge Participant Record
[**mSeriesChallengeShow**](MetricsApi.md#mSeriesChallengeShow) | **GET** /m-series/challenge | Show a user mSeries Challenge
[**mSeriesChallengeUpdate**](MetricsApi.md#mSeriesChallengeUpdate) | **PUT** /m-series/challenge/{id} | Update a user mSeries Challenge
[**mSeriesDataSetCreate**](MetricsApi.md#mSeriesDataSetCreate) | **POST** /m-series/data-set | Create a user M Series data set
[**mSeriesDataSetDelete**](MetricsApi.md#mSeriesDataSetDelete) | **DELETE** /m-series/data-set/{id} | Delete a user\&#39;s M Series data set
[**mSeriesDataSetList**](MetricsApi.md#mSeriesDataSetList) | **GET** /m-series/data-set/list | List a user\&#39;s M Series data sets
[**mSeriesDataSetReenqueue**](MetricsApi.md#mSeriesDataSetReenqueue) | **POST** /m-series/data-set/reenqueue | Reenqueue a user\&#39;s M Series data set
[**mSeriesDataSetSegmentShow**](MetricsApi.md#mSeriesDataSetSegmentShow) | **GET** /m-series/data-set/segment | Show a user\&#39;s M Series data set segment
[**mSeriesDataSetShow**](MetricsApi.md#mSeriesDataSetShow) | **GET** /m-series/data-set | Show a user\&#39;s M Series data set
[**mSeriesDataSetSubscribe**](MetricsApi.md#mSeriesDataSetSubscribe) | **GET** /mSeriesDataset/subscribe | Subscribe to M Series data set changes
[**mSeriesDataSetUpdate**](MetricsApi.md#mSeriesDataSetUpdate) | **PUT** /m-series/data-set/{id} | Update a user\&#39;s M Series data set
[**mSeriesFtpMeasurementCreate**](MetricsApi.md#mSeriesFtpMeasurementCreate) | **POST** /m-series/ftp-measurement | Create a user M Series FTP measurement
[**mSeriesFtpMeasurementDelete**](MetricsApi.md#mSeriesFtpMeasurementDelete) | **DELETE** /m-series/ftp-measurement/{id} | Delete a user\&#39;s M Series FTP measurement
[**mSeriesFtpMeasurementList**](MetricsApi.md#mSeriesFtpMeasurementList) | **GET** /m-series/ftp-measurement/list | List a user\&#39;s M Series FTP measurements
[**mSeriesFtpMeasurementShow**](MetricsApi.md#mSeriesFtpMeasurementShow) | **GET** /m-series/ftp-measurement | Show a user\&#39;s M Series FTP measurement
[**mSeriesProfileStatsShow**](MetricsApi.md#mSeriesProfileStatsShow) | **GET** /m-series/profile-stats/{cardioMachineId} | Show a user\&#39;s M Series data set
[**machineAdjustmentCreate**](MetricsApi.md#machineAdjustmentCreate) | **POST** /user/machine-adjustment | Create a user machine adjustment
[**machineAdjustmentDelete**](MetricsApi.md#machineAdjustmentDelete) | **DELETE** /user/machine-adjustment/{id} | Delete a users machine adjustment
[**machineAdjustmentList**](MetricsApi.md#machineAdjustmentList) | **GET** /user/machine-adjustment | List user machine adjustments
[**machineAdjustmentShow**](MetricsApi.md#machineAdjustmentShow) | **GET** /user/machine-adjustment/{id} | Shows a users machine adjustments
[**machineAdjustmentUpdate**](MetricsApi.md#machineAdjustmentUpdate) | **PUT** /user/machine-adjustment/{id} | Update a users machine adjustments
[**oauthAuthorize**](MetricsApi.md#oauthAuthorize) | **POST** /oauth/authorize | Authorizes a third party application
[**oauthDeauthorize**](MetricsApi.md#oauthDeauthorize) | **DELETE** /oauth/deauthorize | Deauthorizes an oauth user
[**oauthInitiate**](MetricsApi.md#oauthInitiate) | **POST** /oauth/initiate/{service} | Initiates OAuth access request and return parameters
[**oauthServiceDelete**](MetricsApi.md#oauthServiceDelete) | **DELETE** /oauth/service/{id} | Delete a user\&#39;s oauth service connection
[**oauthServiceList**](MetricsApi.md#oauthServiceList) | **GET** /oauth/service | List a user\&#39;s oauth service connections
[**oauthServiceShow**](MetricsApi.md#oauthServiceShow) | **GET** /oauth/service/{id} | Show a user\&#39;s oauth service connection
[**oauthToken**](MetricsApi.md#oauthToken) | **GET** /oauth/token | Returns tokens for third party oauth
[**primaryEmailAddressShow**](MetricsApi.md#primaryEmailAddressShow) | **GET** /user/primary-email-address | Show a user\&#39;s primary email address id
[**primaryEmailAddressUpdate**](MetricsApi.md#primaryEmailAddressUpdate) | **PUT** /user/primary-email-address/{emailAddressId} | Update a user\&#39;s primary email address id
[**profileShow**](MetricsApi.md#profileShow) | **GET** /user/profile | Show a user profile
[**profileSubscribe**](MetricsApi.md#profileSubscribe) | **GET** /profile/subscribe | Subscribe to changes on a user profile
[**profileUpdate**](MetricsApi.md#profileUpdate) | **PUT** /user/profile | Update a user profile
[**sessionDelete**](MetricsApi.md#sessionDelete) | **DELETE** /session/{id} | Delete a user\&#39;s session
[**sessionEnd**](MetricsApi.md#sessionEnd) | **PUT** /session/{id}/end | End a user session
[**sessionList**](MetricsApi.md#sessionList) | **GET** /session/list | List a user\&#39;s sessions
[**sessionPlanAttachSequence**](MetricsApi.md#sessionPlanAttachSequence) | **POST** /session-plan/{id}/sequence/{sequenceId} | Attach a sequence to an session plan
[**sessionPlanAttachSequenceTemplate**](MetricsApi.md#sessionPlanAttachSequenceTemplate) | **POST** /session-plan/{id}/sequence-template/{sequenceTemplateId} | Attach a sequence template to an session plan
[**sessionPlanCloneTemplate**](MetricsApi.md#sessionPlanCloneTemplate) | **POST** /session-plan/clone-template/{templateId} | Clone session plan from session plan template
[**sessionPlanCreate**](MetricsApi.md#sessionPlanCreate) | **POST** /session-plan | Create session plan
[**sessionPlanDelete**](MetricsApi.md#sessionPlanDelete) | **DELETE** /session-plan/{id} | Delete session plan
[**sessionPlanDetachSequence**](MetricsApi.md#sessionPlanDetachSequence) | **DELETE** /session-plan/{id}/sequence/{sequenceId} | Detach a sequence to an session plan
[**sessionPlanList**](MetricsApi.md#sessionPlanList) | **GET** /session-plan | List session plan
[**sessionPlanSequenceCreate**](MetricsApi.md#sessionPlanSequenceCreate) | **POST** /session-plan-sequence | Create session plan sequence
[**sessionPlanSequenceDelete**](MetricsApi.md#sessionPlanSequenceDelete) | **DELETE** /session-plan-sequence/{id} | Delete session plan sequence
[**sessionPlanSequenceInstanceDelete**](MetricsApi.md#sessionPlanSequenceInstanceDelete) | **DELETE** /session-plan-sequence-instance/{id} | Delete session plan sequence instance
[**sessionPlanSequenceInstanceList**](MetricsApi.md#sessionPlanSequenceInstanceList) | **GET** /session-plan-sequence-instance | List session plan sequence instance
[**sessionPlanSequenceInstanceShow**](MetricsApi.md#sessionPlanSequenceInstanceShow) | **GET** /session-plan-sequence-instance/{id} | Show a session plan sequence instance
[**sessionPlanSequenceList**](MetricsApi.md#sessionPlanSequenceList) | **GET** /session-plan-sequence | List session plan sequence
[**sessionPlanSequenceShow**](MetricsApi.md#sessionPlanSequenceShow) | **GET** /session-plan-sequence/{id} | Show a session plan sequence
[**sessionPlanSequenceTemplateCreate**](MetricsApi.md#sessionPlanSequenceTemplateCreate) | **POST** /session-plan-sequence-template | Create session plan sequence template
[**sessionPlanSequenceTemplateDelete**](MetricsApi.md#sessionPlanSequenceTemplateDelete) | **DELETE** /session-plan-sequence-template/{id} | Delete session plan sequence template
[**sessionPlanSequenceTemplateList**](MetricsApi.md#sessionPlanSequenceTemplateList) | **GET** /session-plan-sequence-template | List session plan sequence template
[**sessionPlanSequenceTemplateShow**](MetricsApi.md#sessionPlanSequenceTemplateShow) | **GET** /session-plan-sequence-template/{id} | Show a session plan sequence template
[**sessionPlanSequenceTemplateUpdate**](MetricsApi.md#sessionPlanSequenceTemplateUpdate) | **PUT** /session-plan-sequence-template/{id} | Update session plan sequence template
[**sessionPlanSequenceUpdate**](MetricsApi.md#sessionPlanSequenceUpdate) | **PUT** /session-plan-sequence/{id} | Update session plan sequence
[**sessionPlanSetCreateActivity**](MetricsApi.md#sessionPlanSetCreateActivity) | **POST** /session-plan-set/{sequenceId}/activity-set | Create session plan activity set
[**sessionPlanSetCreateCardio**](MetricsApi.md#sessionPlanSetCreateCardio) | **POST** /session-plan-set/{sequenceId}/cardio-set | Create session plan cardio set
[**sessionPlanSetCreateStrength**](MetricsApi.md#sessionPlanSetCreateStrength) | **POST** /session-plan-set/{sequenceId}/strength-set | Create session plan strength set
[**sessionPlanSetCreateStretch**](MetricsApi.md#sessionPlanSetCreateStretch) | **POST** /session-plan-set/{sequenceId}/stretch-set | Create session plan stretch set
[**sessionPlanSetDelete**](MetricsApi.md#sessionPlanSetDelete) | **DELETE** /session-plan-set/{id} | Delete session plan set
[**sessionPlanSetInstanceShow**](MetricsApi.md#sessionPlanSetInstanceShow) | **GET** /session-plan-set-instance/{id} | Show a session plan set intance
[**sessionPlanSetInstanceUpdateActivity**](MetricsApi.md#sessionPlanSetInstanceUpdateActivity) | **PUT** /session-plan-set-instance/{id}/activity-set | Update session plan activity set instance
[**sessionPlanSetInstanceUpdateCardio**](MetricsApi.md#sessionPlanSetInstanceUpdateCardio) | **PUT** /session-plan-set-instance/{id}/cardio-set | Update session plan cardio set instance
[**sessionPlanSetInstanceUpdateStrength**](MetricsApi.md#sessionPlanSetInstanceUpdateStrength) | **PUT** /session-plan-set-instance/{id}/strength-set | Update session plan strength set instance
[**sessionPlanSetInstanceUpdateStretch**](MetricsApi.md#sessionPlanSetInstanceUpdateStretch) | **PUT** /session-plan-set-instance/{id}/stretch-set | Update session plan stretch set instance
[**sessionPlanSetList**](MetricsApi.md#sessionPlanSetList) | **GET** /session-plan-set | List session plan sets
[**sessionPlanSetShow**](MetricsApi.md#sessionPlanSetShow) | **GET** /session-plan-set/{id} | Show a session plan set
[**sessionPlanSetTemplateCreateActivity**](MetricsApi.md#sessionPlanSetTemplateCreateActivity) | **POST** /session-plan-set-template/{sequenceId}/activity-set | Create session plan activity set template
[**sessionPlanSetTemplateCreateCardio**](MetricsApi.md#sessionPlanSetTemplateCreateCardio) | **POST** /session-plan-set-template/{sequenceId}/cardio-set | Create session plan cardio set template
[**sessionPlanSetTemplateCreateStrength**](MetricsApi.md#sessionPlanSetTemplateCreateStrength) | **POST** /session-plan-set-template/{sequenceId}/strength-set | Create session plan strength set template
[**sessionPlanSetTemplateCreateStretch**](MetricsApi.md#sessionPlanSetTemplateCreateStretch) | **POST** /session-plan-set-template/{sequenceId}/stretch-set | Create session plan stretch set template
[**sessionPlanSetTemplateDelete**](MetricsApi.md#sessionPlanSetTemplateDelete) | **DELETE** /session-plan-set-template/{id} | Delete session plan set template
[**sessionPlanSetTemplateList**](MetricsApi.md#sessionPlanSetTemplateList) | **GET** /session-plan-set-template | List session plan set templates
[**sessionPlanSetTemplateShow**](MetricsApi.md#sessionPlanSetTemplateShow) | **GET** /session-plan-set-template/{id} | Show a session plan set template
[**sessionPlanSetTemplateUpdateActivity**](MetricsApi.md#sessionPlanSetTemplateUpdateActivity) | **PUT** /session-plan-set-template/activity-set/{id} | Update session plan activity set template
[**sessionPlanSetTemplateUpdateCardio**](MetricsApi.md#sessionPlanSetTemplateUpdateCardio) | **PUT** /session-plan-set-template/cardio-set/{id} | Update session plan cardio set template
[**sessionPlanSetTemplateUpdateStrength**](MetricsApi.md#sessionPlanSetTemplateUpdateStrength) | **PUT** /session-plan-set-template/strength-set/{id} | Update session plan strength set template
[**sessionPlanSetTemplateUpdateStretch**](MetricsApi.md#sessionPlanSetTemplateUpdateStretch) | **PUT** /session-plan-set-template/stretch-set/{id} | Update session plan stretch set template
[**sessionPlanSetUpdateActivity**](MetricsApi.md#sessionPlanSetUpdateActivity) | **PUT** /session-plan-set/{id}/activity-set | Update session plan activity set
[**sessionPlanSetUpdateCardio**](MetricsApi.md#sessionPlanSetUpdateCardio) | **PUT** /session-plan-set/{id}/cardio-set | Update session plan cardio set
[**sessionPlanSetUpdateStrength**](MetricsApi.md#sessionPlanSetUpdateStrength) | **PUT** /session-plan-set/{id}/strength-set | Update session plan strength set
[**sessionPlanSetUpdateStretch**](MetricsApi.md#sessionPlanSetUpdateStretch) | **PUT** /session-plan-set/{id}/stretch-set | Update session plan stretch set
[**sessionPlanShow**](MetricsApi.md#sessionPlanShow) | **GET** /session-plan/{id} | Show a session plan
[**sessionPlanTemplateAttachSequence**](MetricsApi.md#sessionPlanTemplateAttachSequence) | **POST** /session-plan-template/{id}/sequence/{sequenceId} | Attach a sequence to an session plan template
[**sessionPlanTemplateCreate**](MetricsApi.md#sessionPlanTemplateCreate) | **POST** /session-plan-template | Create session plan template
[**sessionPlanTemplateDelete**](MetricsApi.md#sessionPlanTemplateDelete) | **DELETE** /session-plan-template/{id} | Delete session plan template
[**sessionPlanTemplateDetachSequence**](MetricsApi.md#sessionPlanTemplateDetachSequence) | **PUT** /session-plan-template/{id}/sequence/{sequenceId} | Detach a sequence to an session plan template
[**sessionPlanTemplateList**](MetricsApi.md#sessionPlanTemplateList) | **GET** /session-plan-template | List session plan templates
[**sessionPlanTemplateShow**](MetricsApi.md#sessionPlanTemplateShow) | **GET** /session-plan-template/{id} | Show a session plan template
[**sessionPlanTemplateUpdate**](MetricsApi.md#sessionPlanTemplateUpdate) | **PUT** /session-plan-template/{id} | Update session plan template
[**sessionPlanUpdate**](MetricsApi.md#sessionPlanUpdate) | **PUT** /session-plan/{id} | Update session plan
[**sessionShow**](MetricsApi.md#sessionShow) | **GET** /session | Show a user\&#39;s session
[**sessionStart**](MetricsApi.md#sessionStart) | **POST** /session | Start a user session
[**sessionSubscribe**](MetricsApi.md#sessionSubscribe) | **GET** /session:subscribe | Subscribe to changes to a user\&#39;s session
[**strengthExerciseCreate**](MetricsApi.md#strengthExerciseCreate) | **POST** /strength-exercise | Create a strength exercise
[**strengthExerciseDelete**](MetricsApi.md#strengthExerciseDelete) | **DELETE** /strength-exercise/{id} | Delete a strength exercise
[**strengthExerciseList**](MetricsApi.md#strengthExerciseList) | **GET** /strength-exercise | List strength exercises
[**strengthExerciseMuscleCreate**](MetricsApi.md#strengthExerciseMuscleCreate) | **POST** /strength-exercise/{strengthExerciseId}/muscle | Create a strength exercise muscle
[**strengthExerciseMuscleDelete**](MetricsApi.md#strengthExerciseMuscleDelete) | **DELETE** /strength-exercise/muscle/{id} | Delete a strength exercise muscle
[**strengthExerciseMuscleList**](MetricsApi.md#strengthExerciseMuscleList) | **GET** /strength-exercise/{strengthExerciseId}/muscle | List strength exercise muscles
[**strengthExerciseMuscleShow**](MetricsApi.md#strengthExerciseMuscleShow) | **GET** /strength-exercise/muscle/{id} | Show a strength exercise muscle
[**strengthExerciseMuscleUpdate**](MetricsApi.md#strengthExerciseMuscleUpdate) | **PUT** /strength-exercise/muscle/{id} | Update a strength exercise muscle
[**strengthExerciseShow**](MetricsApi.md#strengthExerciseShow) | **GET** /strength-exercise/{id} | Show a strength exercise
[**strengthExerciseUpdate**](MetricsApi.md#strengthExerciseUpdate) | **PUT** /strength-exercise/{id} | Update a strength exercise
[**strengthExerciseVariantCreate**](MetricsApi.md#strengthExerciseVariantCreate) | **POST** /strength-exercise/{strengthExerciseId}/variant | Create a strength exercise variant
[**strengthExerciseVariantDelete**](MetricsApi.md#strengthExerciseVariantDelete) | **DELETE** /strength-exercise/variant/{id} | Delete a strength exercise variant
[**strengthExerciseVariantList**](MetricsApi.md#strengthExerciseVariantList) | **GET** /strength-exercise/variant | List strength exercise variants
[**strengthExerciseVariantShow**](MetricsApi.md#strengthExerciseVariantShow) | **GET** /strength-exercise/variant/{id} | Show a strength exercise variant
[**strengthExerciseVariantUpdate**](MetricsApi.md#strengthExerciseVariantUpdate) | **PUT** /strength-exercise/variant/{id} | Update a strength exercise variant
[**strengthMachineDataSetCreate**](MetricsApi.md#strengthMachineDataSetCreate) | **POST** /strength-machine-data-set | Create a strength machine data set
[**strengthMachineDataSetCreateA500**](MetricsApi.md#strengthMachineDataSetCreateA500) | **POST** /strength-machine-data-set/a500 | Create a strength machine data set from an A500 machine
[**strengthMachineDataSetDelete**](MetricsApi.md#strengthMachineDataSetDelete) | **DELETE** /strength-machine-data-set/{id} | Delete a strength machine data set
[**strengthMachineDataSetExport**](MetricsApi.md#strengthMachineDataSetExport) | **GET** /strength-machine-data-set/{id}/export/{format} | Export an A500 strength machine data set
[**strengthMachineDataSetExportFlat**](MetricsApi.md#strengthMachineDataSetExportFlat) | **GET** /user/{userId}/strength-machine-data-set/export/{filename} | Export an A500 strength machine data set as a flat file
[**strengthMachineDataSetList**](MetricsApi.md#strengthMachineDataSetList) | **GET** /strength-machine-data-set | List strength machine data sets
[**strengthMachineDataSetShow**](MetricsApi.md#strengthMachineDataSetShow) | **GET** /strength-machine-data-set/{id} | Show a strength machine data set
[**strengthMachineDataSetSubscribe**](MetricsApi.md#strengthMachineDataSetSubscribe) | **GET** /strengthMachineDataSet/subscribe | Subscribe to strength machine data set changes
[**strengthMachineDataSetUpdate**](MetricsApi.md#strengthMachineDataSetUpdate) | **PUT** /strength-machine-data-set/{id}/{sessionId} | Update a strength machine data set
[**strengthMachineHistoryList**](MetricsApi.md#strengthMachineHistoryList) | **GET** /strength-machine-history | List strength machines used by user
[**strengthMachineList**](MetricsApi.md#strengthMachineList) | **GET** /strength-machine | List strength machines
[**strengthMachineProfileStatsShow**](MetricsApi.md#strengthMachineProfileStatsShow) | **GET** /strength-machine/{strengthMachineId}/profile-stats | Show a user\&#39;s strength machine profile stats
[**strengthMachineShow**](MetricsApi.md#strengthMachineShow) | **GET** /strength-machine/{id} | Show a strength machine
[**stretchExerciseCreate**](MetricsApi.md#stretchExerciseCreate) | **POST** /stretch-exercise | Create a stretch exercise
[**stretchExerciseDelete**](MetricsApi.md#stretchExerciseDelete) | **DELETE** /stretch-exercise/{id} | Delete a stretch exercise
[**stretchExerciseList**](MetricsApi.md#stretchExerciseList) | **GET** /stretch-exercise | List stretch exercises
[**stretchExerciseMuscleCreate**](MetricsApi.md#stretchExerciseMuscleCreate) | **POST** /stretch-exercise/{stretchExerciseId}/muscle | Create a stretch exercise muscle
[**stretchExerciseMuscleDelete**](MetricsApi.md#stretchExerciseMuscleDelete) | **DELETE** /stretch-exercise/muscle/{id} | Delete a stretch exercise muscle
[**stretchExerciseMuscleList**](MetricsApi.md#stretchExerciseMuscleList) | **GET** /stretch-exercise/{stretchExerciseId}/muscle | List stretch exercise muscles
[**stretchExerciseMuscleShow**](MetricsApi.md#stretchExerciseMuscleShow) | **GET** /stretch-exercise/muscle/{id} | Show a stretch exercise muscle
[**stretchExerciseMuscleUpdate**](MetricsApi.md#stretchExerciseMuscleUpdate) | **PUT** /stretch-exercise/muscle/{id} | Update a stretch exercise muscle
[**stretchExerciseShow**](MetricsApi.md#stretchExerciseShow) | **GET** /stretch-exercise/{id} | Show a stretch exercise
[**stretchExerciseUpdate**](MetricsApi.md#stretchExerciseUpdate) | **PUT** /stretch-exercise/{id} | Update a stretch exercise
[**stretchExerciseVariantCreate**](MetricsApi.md#stretchExerciseVariantCreate) | **POST** /stretch-exercise/{stretchExerciseId}/variant | Create a stretch exercise variant
[**stretchExerciseVariantDelete**](MetricsApi.md#stretchExerciseVariantDelete) | **DELETE** /stretch-exercise/variant/{id} | Delete a stretch exercise variant
[**stretchExerciseVariantList**](MetricsApi.md#stretchExerciseVariantList) | **GET** /stretch-exercise/variant | List stretch exercise variants
[**stretchExerciseVariantShow**](MetricsApi.md#stretchExerciseVariantShow) | **GET** /stretch-exercise/variant/{id} | Show a stretch exercise variant
[**stretchExerciseVariantUpdate**](MetricsApi.md#stretchExerciseVariantUpdate) | **PUT** /stretch-exercise/variant/{id} | Update a stretch exercise variant
[**userApplicationAuthorizationDeveloperDelete**](MetricsApi.md#userApplicationAuthorizationDeveloperDelete) | **DELETE** /development-account/{developmentAccountId}/user-application-authorization/{id} | Deletes a user application authorization as a developer
[**userApplicationAuthorizationDeveloperList**](MetricsApi.md#userApplicationAuthorizationDeveloperList) | **GET** /development-account/{developmentAccountId}/user-application-authorization/{} applicationId/list | Lists user application authorizations as a developer
[**userApplicationAuthorizationDeveloperShow**](MetricsApi.md#userApplicationAuthorizationDeveloperShow) | **GET** /development-account/{developmentAccountId}/user-application-authorization/{id} | Shows a user application authorization as a developer
[**userApplicationAuthorizationUserDelete**](MetricsApi.md#userApplicationAuthorizationUserDelete) | **DELETE** /user/application-authorization/{id} | Deletes a user application authorization
[**userApplicationAuthorizationUserList**](MetricsApi.md#userApplicationAuthorizationUserList) | **GET** /user/application-authorization | Lists user application authorizations
[**userApplicationAuthorizationUserShow**](MetricsApi.md#userApplicationAuthorizationUserShow) | **GET** /user/application-authorization/{id} | Shows a user application authorization
[**userCreate**](MetricsApi.md#userCreate) | **POST** /user | Create a user with basic authentication
[**userCreateBasic**](MetricsApi.md#userCreateBasic) | **POST** /user/create-basic | Create a user with basic authentication [DEP]
[**userDelete**](MetricsApi.md#userDelete) | **DELETE** /user | Delete a user
[**userInBodyIntegrationCreate**](MetricsApi.md#userInBodyIntegrationCreate) | **POST** /user/{userId}/inbody-integration | Create a user InBody integration
[**userInBodyIntegrationDelete**](MetricsApi.md#userInBodyIntegrationDelete) | **DELETE** /user/{userId}/inbody-integration | Delete a user InBody integration
[**userInBodyIntegrationShow**](MetricsApi.md#userInBodyIntegrationShow) | **GET** /user/{userId}/inbody-integration | Show a user InBody integration settings
[**userInBodyIntegrationSync**](MetricsApi.md#userInBodyIntegrationSync) | **GET** /user/{userId}/inbody-integration/sync | Request a sync of user InBody data
[**userShow**](MetricsApi.md#userShow) | **GET** /user | Show a user
[**userSubscribe**](MetricsApi.md#userSubscribe) | **GET** /user/subscribe | Subscribe to changes to a user
[**weightMeasurementCreate**](MetricsApi.md#weightMeasurementCreate) | **POST** /user/weight-measurement | Create a user weight measurement
[**weightMeasurementDelete**](MetricsApi.md#weightMeasurementDelete) | **DELETE** /user/weight-measurement/{id} | Delete a user\&#39;s weight measurement
[**weightMeasurementImportInBody**](MetricsApi.md#weightMeasurementImportInBody) | **POST** /user/{userId}/weight-measurement/import-inbody | Creates body composition record from InBody machine
[**weightMeasurementImportInBodyCSV**](MetricsApi.md#weightMeasurementImportInBodyCSV) | **POST** /user/weight-measurement/import-inbody-csv | Creates body composition record from csv and converts to json
[**weightMeasurementList**](MetricsApi.md#weightMeasurementList) | **GET** /user/weight-measurement/list | List a user\&#39;s weight measurements
[**weightMeasurementShow**](MetricsApi.md#weightMeasurementShow) | **GET** /user/weight-measurement | Show a user\&#39;s weight measurement
[**weightMeasurementSubscribe**](MetricsApi.md#weightMeasurementSubscribe) | **GET** /weightMeasurement/subscribe | Subscribe to changes to user\&#39;s weight measurements


## Documentation for Models

 - [A500DataSetData](A500DataSetData.md)
 - [A500GetUserData](A500GetUserData.md)
 - [A500GetUserResponse](A500GetUserResponse.md)
 - [A500MachineStateData](A500MachineStateData.md)
 - [A500MachineStateResponse](A500MachineStateResponse.md)
 - [A500RepDataPointData](A500RepDataPointData.md)
 - [A500TestResultData](A500TestResultData.md)
 - [A500TimeSeriesPointData](A500TimeSeriesPointData.md)
 - [AcceptedTermsVersionData](AcceptedTermsVersionData.md)
 - [ApplicationData](ApplicationData.md)
 - [ApplicationListResponse](ApplicationListResponse.md)
 - [ApplicationListResponseMeta](ApplicationListResponseMeta.md)
 - [ApplicationResponse](ApplicationResponse.md)
 - [ApplicationSorting](ApplicationSorting.md)
 - [BodyCompositionMeasurementData](BodyCompositionMeasurementData.md)
 - [CardioExerciseData](CardioExerciseData.md)
 - [CardioExerciseListResponse](CardioExerciseListResponse.md)
 - [CardioExerciseListResponseMeta](CardioExerciseListResponseMeta.md)
 - [CardioExerciseMuscleListResponse](CardioExerciseMuscleListResponse.md)
 - [CardioExerciseMuscleListResponseMeta](CardioExerciseMuscleListResponseMeta.md)
 - [CardioExerciseMuscleResponse](CardioExerciseMuscleResponse.md)
 - [CardioExerciseResponse](CardioExerciseResponse.md)
 - [CardioExerciseSorting](CardioExerciseSorting.md)
 - [CardioExerciseVariantData](CardioExerciseVariantData.md)
 - [CardioExerciseVariantListResponse](CardioExerciseVariantListResponse.md)
 - [CardioExerciseVariantListResponseMeta](CardioExerciseVariantListResponseMeta.md)
 - [CardioExerciseVariantResponse](CardioExerciseVariantResponse.md)
 - [CardioExerciseVariantSorting](CardioExerciseVariantSorting.md)
 - [CardioMachineData](CardioMachineData.md)
 - [CardioMachineListResponse](CardioMachineListResponse.md)
 - [CardioMachineListResponseMeta](CardioMachineListResponseMeta.md)
 - [CardioMachineResponse](CardioMachineResponse.md)
 - [CardioMachineSorting](CardioMachineSorting.md)
 - [DevelopmentAccountData](DevelopmentAccountData.md)
 - [DevelopmentAccountListResponse](DevelopmentAccountListResponse.md)
 - [DevelopmentAccountListResponseMeta](DevelopmentAccountListResponseMeta.md)
 - [DevelopmentAccountRelationshipData](DevelopmentAccountRelationshipData.md)
 - [DevelopmentAccountRelationshipListResponse](DevelopmentAccountRelationshipListResponse.md)
 - [DevelopmentAccountRelationshipListResponseMeta](DevelopmentAccountRelationshipListResponseMeta.md)
 - [DevelopmentAccountRelationshipRequestData](DevelopmentAccountRelationshipRequestData.md)
 - [DevelopmentAccountRelationshipRequestListResponse](DevelopmentAccountRelationshipRequestListResponse.md)
 - [DevelopmentAccountRelationshipRequestListResponseMeta](DevelopmentAccountRelationshipRequestListResponseMeta.md)
 - [DevelopmentAccountRelationshipRequestResponse](DevelopmentAccountRelationshipRequestResponse.md)
 - [DevelopmentAccountRelationshipRequestSorting](DevelopmentAccountRelationshipRequestSorting.md)
 - [DevelopmentAccountRelationshipResponse](DevelopmentAccountRelationshipResponse.md)
 - [DevelopmentAccountRelationshipSorting](DevelopmentAccountRelationshipSorting.md)
 - [DevelopmentAccountResponse](DevelopmentAccountResponse.md)
 - [DevelopmentAccountSorting](DevelopmentAccountSorting.md)
 - [EmailAddressData](EmailAddressData.md)
 - [EmailAddressListResponse](EmailAddressListResponse.md)
 - [EmailAddressListResponseMeta](EmailAddressListResponseMeta.md)
 - [EmailAddressResponse](EmailAddressResponse.md)
 - [EmailAddressSorting](EmailAddressSorting.md)
 - [EndpointsData](EndpointsData.md)
 - [EndpointsResponse](EndpointsResponse.md)
 - [ErrorData](ErrorData.md)
 - [ErrorResponse](ErrorResponse.md)
 - [ExerciseAliasData](ExerciseAliasData.md)
 - [ExerciseAliasListResponse](ExerciseAliasListResponse.md)
 - [ExerciseAliasListResponseMeta](ExerciseAliasListResponseMeta.md)
 - [ExerciseAliasResponse](ExerciseAliasResponse.md)
 - [ExerciseAliasSorting](ExerciseAliasSorting.md)
 - [ExerciseOrdinalSetAssignmentData](ExerciseOrdinalSetAssignmentData.md)
 - [ExerciseOrdinalSetAssignmentListResponse](ExerciseOrdinalSetAssignmentListResponse.md)
 - [ExerciseOrdinalSetAssignmentListResponseMeta](ExerciseOrdinalSetAssignmentListResponseMeta.md)
 - [ExerciseOrdinalSetAssignmentResponse](ExerciseOrdinalSetAssignmentResponse.md)
 - [ExerciseOrdinalSetAssignmentSorting](ExerciseOrdinalSetAssignmentSorting.md)
 - [ExerciseOrdinalSetData](ExerciseOrdinalSetData.md)
 - [ExerciseOrdinalSetListResponse](ExerciseOrdinalSetListResponse.md)
 - [ExerciseOrdinalSetListResponseMeta](ExerciseOrdinalSetListResponseMeta.md)
 - [ExerciseOrdinalSetResponse](ExerciseOrdinalSetResponse.md)
 - [ExerciseOrdinalSetSorting](ExerciseOrdinalSetSorting.md)
 - [FacilityAccessControlData](FacilityAccessControlData.md)
 - [FacilityAccessControlIPRangeData](FacilityAccessControlIPRangeData.md)
 - [FacilityAccessControlIPRangeListResponse](FacilityAccessControlIPRangeListResponse.md)
 - [FacilityAccessControlIPRangeListResponseMeta](FacilityAccessControlIPRangeListResponseMeta.md)
 - [FacilityAccessControlIPRangeResponse](FacilityAccessControlIPRangeResponse.md)
 - [FacilityAccessControlIPRangeSorting](FacilityAccessControlIPRangeSorting.md)
 - [FacilityAccessControlKioskData](FacilityAccessControlKioskData.md)
 - [FacilityAccessControlKioskResponse](FacilityAccessControlKioskResponse.md)
 - [FacilityAccessControlResponse](FacilityAccessControlResponse.md)
 - [FacilityCardioMachineData](FacilityCardioMachineData.md)
 - [FacilityCardioMachineListResponse](FacilityCardioMachineListResponse.md)
 - [FacilityCardioMachineListResponseMeta](FacilityCardioMachineListResponseMeta.md)
 - [FacilityCardioMachineResponse](FacilityCardioMachineResponse.md)
 - [FacilityConfigurationData](FacilityConfigurationData.md)
 - [FacilityConfigurationResponse](FacilityConfigurationResponse.md)
 - [FacilityData](FacilityData.md)
 - [FacilityEmployeeRole](FacilityEmployeeRole.md)
 - [FacilityInBodyIntegrationData](FacilityInBodyIntegrationData.md)
 - [FacilityInBodyIntegrationResponse](FacilityInBodyIntegrationResponse.md)
 - [FacilityKioskTokenResponse](FacilityKioskTokenResponse.md)
 - [FacilityLicenseData](FacilityLicenseData.md)
 - [FacilityLicenseListResponse](FacilityLicenseListResponse.md)
 - [FacilityLicenseListResponseMeta](FacilityLicenseListResponseMeta.md)
 - [FacilityLicenseResponse](FacilityLicenseResponse.md)
 - [FacilityLicenseSorting](FacilityLicenseSorting.md)
 - [FacilityListResponse](FacilityListResponse.md)
 - [FacilityListResponseMeta](FacilityListResponseMeta.md)
 - [FacilityProfileData](FacilityProfileData.md)
 - [FacilityProfileResponse](FacilityProfileResponse.md)
 - [FacilityRelationshipData](FacilityRelationshipData.md)
 - [FacilityRelationshipRequestData](FacilityRelationshipRequestData.md)
 - [FacilityRelationshipRequestListResponse](FacilityRelationshipRequestListResponse.md)
 - [FacilityRelationshipRequestListResponseMeta](FacilityRelationshipRequestListResponseMeta.md)
 - [FacilityRelationshipRequestResponse](FacilityRelationshipRequestResponse.md)
 - [FacilityRelationshipRequestSorting](FacilityRelationshipRequestSorting.md)
 - [FacilityRelationshipResponse](FacilityRelationshipResponse.md)
 - [FacilityResponse](FacilityResponse.md)
 - [FacilitySessionListResponse](FacilitySessionListResponse.md)
 - [FacilitySessionListResponseMeta](FacilitySessionListResponseMeta.md)
 - [FacilitySessionUserData](FacilitySessionUserData.md)
 - [FacilitySorting](FacilitySorting.md)
 - [FacilityStrengthMachineBulkCreateResponse](FacilityStrengthMachineBulkCreateResponse.md)
 - [FacilityStrengthMachineConfigurationData](FacilityStrengthMachineConfigurationData.md)
 - [FacilityStrengthMachineConfigurationResponse](FacilityStrengthMachineConfigurationResponse.md)
 - [FacilityStrengthMachineData](FacilityStrengthMachineData.md)
 - [FacilityStrengthMachineInitializerOTPTokenResponse](FacilityStrengthMachineInitializerOTPTokenResponse.md)
 - [FacilityStrengthMachineInitializerTokenResponse](FacilityStrengthMachineInitializerTokenResponse.md)
 - [FacilityStrengthMachineListResponse](FacilityStrengthMachineListResponse.md)
 - [FacilityStrengthMachineListResponseMeta](FacilityStrengthMachineListResponseMeta.md)
 - [FacilityStrengthMachineMaintenanceRecordData](FacilityStrengthMachineMaintenanceRecordData.md)
 - [FacilityStrengthMachineMaintenanceRecordListResponse](FacilityStrengthMachineMaintenanceRecordListResponse.md)
 - [FacilityStrengthMachineMaintenanceRecordResponse](FacilityStrengthMachineMaintenanceRecordResponse.md)
 - [FacilityStrengthMachineMaintenanceRecordsMeta](FacilityStrengthMachineMaintenanceRecordsMeta.md)
 - [FacilityStrengthMachineResponse](FacilityStrengthMachineResponse.md)
 - [FacilityStrengthMachineSorting](FacilityStrengthMachineSorting.md)
 - [FacilityStrengthMachineUtilizationInstanceData](FacilityStrengthMachineUtilizationInstanceData.md)
 - [FacilityStrengthMachineUtilizationInstanceListResponse](FacilityStrengthMachineUtilizationInstanceListResponse.md)
 - [FacilityStrengthMachineUtilizationInstanceResponse](FacilityStrengthMachineUtilizationInstanceResponse.md)
 - [FacilityStrengthMachineUtilizationInstancesMeta](FacilityStrengthMachineUtilizationInstancesMeta.md)
 - [FacilityUserRelationshipListResponse](FacilityUserRelationshipListResponse.md)
 - [FacilityUserRelationshipListResponseMeta](FacilityUserRelationshipListResponseMeta.md)
 - [FacilityUserRelationshipSorting](FacilityUserRelationshipSorting.md)
 - [FacilityUserResponse](FacilityUserResponse.md)
 - [FingerprintData](FingerprintData.md)
 - [HealthResponse](HealthResponse.md)
 - [HeartRateDataPointData](HeartRateDataPointData.md)
 - [HeartRateDataSetData](HeartRateDataSetData.md)
 - [HeartRateDataSetListResponse](HeartRateDataSetListResponse.md)
 - [HeartRateDataSetListResponseMeta](HeartRateDataSetListResponseMeta.md)
 - [HeartRateDataSetResponse](HeartRateDataSetResponse.md)
 - [HeartRateDataSetSessionData](HeartRateDataSetSessionData.md)
 - [HeartRateDataSetSorting](HeartRateDataSetSorting.md)
 - [HeightMeasurementData](HeightMeasurementData.md)
 - [HeightMeasurementListResponse](HeightMeasurementListResponse.md)
 - [HeightMeasurementListResponseMeta](HeightMeasurementListResponseMeta.md)
 - [HeightMeasurementResponse](HeightMeasurementResponse.md)
 - [HeightMeasurementSorting](HeightMeasurementSorting.md)
 - [KioskSessionResponse](KioskSessionResponse.md)
 - [ListMeta](ListMeta.md)
 - [MSeriesAppSessionData](MSeriesAppSessionData.md)
 - [MSeriesAppSessionExportResponse](MSeriesAppSessionExportResponse.md)
 - [MSeriesAppSessionListResponse](MSeriesAppSessionListResponse.md)
 - [MSeriesAppSessionListResponseMeta](MSeriesAppSessionListResponseMeta.md)
 - [MSeriesAppSessionResponse](MSeriesAppSessionResponse.md)
 - [MSeriesChallengeData](MSeriesChallengeData.md)
 - [MSeriesChallengeListResponse](MSeriesChallengeListResponse.md)
 - [MSeriesChallengeListResponseMeta](MSeriesChallengeListResponseMeta.md)
 - [MSeriesChallengeParticipantData](MSeriesChallengeParticipantData.md)
 - [MSeriesChallengeParticipantListResponse](MSeriesChallengeParticipantListResponse.md)
 - [MSeriesChallengeParticipantListResponseMeta](MSeriesChallengeParticipantListResponseMeta.md)
 - [MSeriesChallengeParticipantResponse](MSeriesChallengeParticipantResponse.md)
 - [MSeriesChallengeParticipantSorting](MSeriesChallengeParticipantSorting.md)
 - [MSeriesChallengeRelationship](MSeriesChallengeRelationship.md)
 - [MSeriesChallengeResponse](MSeriesChallengeResponse.md)
 - [MSeriesChallengeSorting](MSeriesChallengeSorting.md)
 - [MSeriesDataPointData](MSeriesDataPointData.md)
 - [MSeriesDataSetData](MSeriesDataSetData.md)
 - [MSeriesDataSetListResponse](MSeriesDataSetListResponse.md)
 - [MSeriesDataSetListResponseMeta](MSeriesDataSetListResponseMeta.md)
 - [MSeriesDataSetResponse](MSeriesDataSetResponse.md)
 - [MSeriesDataSetSegmentData](MSeriesDataSetSegmentData.md)
 - [MSeriesDataSetSegmentResponse](MSeriesDataSetSegmentResponse.md)
 - [MSeriesDataSetSorting](MSeriesDataSetSorting.md)
 - [MSeriesFtpMeasurementData](MSeriesFtpMeasurementData.md)
 - [MSeriesFtpMeasurementListResponse](MSeriesFtpMeasurementListResponse.md)
 - [MSeriesFtpMeasurementListResponseMeta](MSeriesFtpMeasurementListResponseMeta.md)
 - [MSeriesFtpMeasurementResponse](MSeriesFtpMeasurementResponse.md)
 - [MSeriesFtpMeasurementSorting](MSeriesFtpMeasurementSorting.md)
 - [MSeriesProfileStatsData](MSeriesProfileStatsData.md)
 - [MSeriesProfileStatsResponse](MSeriesProfileStatsResponse.md)
 - [MachineAdjustmentData](MachineAdjustmentData.md)
 - [MachineAdjustmentListResponse](MachineAdjustmentListResponse.md)
 - [MachineAdjustmentListResponseMeta](MachineAdjustmentListResponseMeta.md)
 - [MachineAdjustmentResponse](MachineAdjustmentResponse.md)
 - [MuscleArea](MuscleArea.md)
 - [MuscleData](MuscleData.md)
 - [MuscleGroup](MuscleGroup.md)
 - [MuscleIdentifier](MuscleIdentifier.md)
 - [MuscleSorting](MuscleSorting.md)
 - [MuscleTargetLevel](MuscleTargetLevel.md)
 - [OAuthServiceData](OAuthServiceData.md)
 - [OAuthServiceListResponse](OAuthServiceListResponse.md)
 - [OAuthServiceListResponseMeta](OAuthServiceListResponseMeta.md)
 - [OAuthServiceResponse](OAuthServiceResponse.md)
 - [OAuthServiceSorting](OAuthServiceSorting.md)
 - [OauthResponse](OauthResponse.md)
 - [PrimaryEmailAddressData](PrimaryEmailAddressData.md)
 - [PrimaryEmailAddressResponse](PrimaryEmailAddressResponse.md)
 - [PrivilegedFacilityRelationshipRequestListResponse](PrivilegedFacilityRelationshipRequestListResponse.md)
 - [PrivilegedFacilityRelationshipRequestListResponseMeta](PrivilegedFacilityRelationshipRequestListResponseMeta.md)
 - [PrivilegedFacilityRelationshipRequestSorting](PrivilegedFacilityRelationshipRequestSorting.md)
 - [ProfileData](ProfileData.md)
 - [ProfileResponse](ProfileResponse.md)
 - [RedirectResponse](RedirectResponse.md)
 - [SessionData](SessionData.md)
 - [SessionListResponse](SessionListResponse.md)
 - [SessionListResponseMeta](SessionListResponseMeta.md)
 - [SessionPlanActivitySetData](SessionPlanActivitySetData.md)
 - [SessionPlanActivitySetTemplateData](SessionPlanActivitySetTemplateData.md)
 - [SessionPlanCardioSetData](SessionPlanCardioSetData.md)
 - [SessionPlanCardioSetTemplateData](SessionPlanCardioSetTemplateData.md)
 - [SessionPlanData](SessionPlanData.md)
 - [SessionPlanListResponse](SessionPlanListResponse.md)
 - [SessionPlanMeta](SessionPlanMeta.md)
 - [SessionPlanResponse](SessionPlanResponse.md)
 - [SessionPlanSequenceAssignmentData](SessionPlanSequenceAssignmentData.md)
 - [SessionPlanSequenceAssignmentTemplateData](SessionPlanSequenceAssignmentTemplateData.md)
 - [SessionPlanSequenceData](SessionPlanSequenceData.md)
 - [SessionPlanSequenceInstanceData](SessionPlanSequenceInstanceData.md)
 - [SessionPlanSequenceInstanceListResponse](SessionPlanSequenceInstanceListResponse.md)
 - [SessionPlanSequenceInstanceMeta](SessionPlanSequenceInstanceMeta.md)
 - [SessionPlanSequenceInstanceResponse](SessionPlanSequenceInstanceResponse.md)
 - [SessionPlanSequenceListResponse](SessionPlanSequenceListResponse.md)
 - [SessionPlanSequenceMeta](SessionPlanSequenceMeta.md)
 - [SessionPlanSequenceResponse](SessionPlanSequenceResponse.md)
 - [SessionPlanSequenceTemplateData](SessionPlanSequenceTemplateData.md)
 - [SessionPlanSequenceTemplateListResponse](SessionPlanSequenceTemplateListResponse.md)
 - [SessionPlanSequenceTemplateResponse](SessionPlanSequenceTemplateResponse.md)
 - [SessionPlanSetData](SessionPlanSetData.md)
 - [SessionPlanSetInstanceData](SessionPlanSetInstanceData.md)
 - [SessionPlanSetInstanceResponse](SessionPlanSetInstanceResponse.md)
 - [SessionPlanSetListResponse](SessionPlanSetListResponse.md)
 - [SessionPlanSetMeta](SessionPlanSetMeta.md)
 - [SessionPlanSetResponse](SessionPlanSetResponse.md)
 - [SessionPlanSetTemplateData](SessionPlanSetTemplateData.md)
 - [SessionPlanSetTemplateListResponse](SessionPlanSetTemplateListResponse.md)
 - [SessionPlanSetTemplateMeta](SessionPlanSetTemplateMeta.md)
 - [SessionPlanSetTemplateResponse](SessionPlanSetTemplateResponse.md)
 - [SessionPlanStrengthSetData](SessionPlanStrengthSetData.md)
 - [SessionPlanStrengthSetTemplateData](SessionPlanStrengthSetTemplateData.md)
 - [SessionPlanStretchSetData](SessionPlanStretchSetData.md)
 - [SessionPlanStretchSetTemplateData](SessionPlanStretchSetTemplateData.md)
 - [SessionPlanTemplateData](SessionPlanTemplateData.md)
 - [SessionPlanTemplateListResponse](SessionPlanTemplateListResponse.md)
 - [SessionPlanTemplateMeta](SessionPlanTemplateMeta.md)
 - [SessionPlanTemplateResponse](SessionPlanTemplateResponse.md)
 - [SessionPlansequenceTemplateMeta](SessionPlansequenceTemplateMeta.md)
 - [SessionResponse](SessionResponse.md)
 - [SessionSorting](SessionSorting.md)
 - [SessionStartResponse](SessionStartResponse.md)
 - [StatusResponse](StatusResponse.md)
 - [StrengthExerciseCategory](StrengthExerciseCategory.md)
 - [StrengthExerciseData](StrengthExerciseData.md)
 - [StrengthExerciseListResponse](StrengthExerciseListResponse.md)
 - [StrengthExerciseListResponseMeta](StrengthExerciseListResponseMeta.md)
 - [StrengthExerciseMovement](StrengthExerciseMovement.md)
 - [StrengthExerciseMovementDEP](StrengthExerciseMovementDEP.md)
 - [StrengthExerciseMuscleListResponse](StrengthExerciseMuscleListResponse.md)
 - [StrengthExerciseMuscleListResponseMeta](StrengthExerciseMuscleListResponseMeta.md)
 - [StrengthExerciseMuscleResponse](StrengthExerciseMuscleResponse.md)
 - [StrengthExercisePlane](StrengthExercisePlane.md)
 - [StrengthExerciseResponse](StrengthExerciseResponse.md)
 - [StrengthExerciseSorting](StrengthExerciseSorting.md)
 - [StrengthExerciseVariantData](StrengthExerciseVariantData.md)
 - [StrengthExerciseVariantListResponse](StrengthExerciseVariantListResponse.md)
 - [StrengthExerciseVariantListResponseMeta](StrengthExerciseVariantListResponseMeta.md)
 - [StrengthExerciseVariantResponse](StrengthExerciseVariantResponse.md)
 - [StrengthExerciseVariantSorting](StrengthExerciseVariantSorting.md)
 - [StrengthMachineData](StrengthMachineData.md)
 - [StrengthMachineDataSetData](StrengthMachineDataSetData.md)
 - [StrengthMachineDataSetExportResponse](StrengthMachineDataSetExportResponse.md)
 - [StrengthMachineDataSetListResponse](StrengthMachineDataSetListResponse.md)
 - [StrengthMachineDataSetListResponseMeta](StrengthMachineDataSetListResponseMeta.md)
 - [StrengthMachineDataSetResponse](StrengthMachineDataSetResponse.md)
 - [StrengthMachineDataSetSorting](StrengthMachineDataSetSorting.md)
 - [StrengthMachineDataSetTestData](StrengthMachineDataSetTestData.md)
 - [StrengthMachineDataSetTestSubsetData](StrengthMachineDataSetTestSubsetData.md)
 - [StrengthMachineHistoryListResponse](StrengthMachineHistoryListResponse.md)
 - [StrengthMachineHistoryMeta](StrengthMachineHistoryMeta.md)
 - [StrengthMachineInitializeResponse](StrengthMachineInitializeResponse.md)
 - [StrengthMachineListResponse](StrengthMachineListResponse.md)
 - [StrengthMachineListResponseMeta](StrengthMachineListResponseMeta.md)
 - [StrengthMachineModelData](StrengthMachineModelData.md)
 - [StrengthMachineProfileStatsData](StrengthMachineProfileStatsData.md)
 - [StrengthMachineProfileStatsResponse](StrengthMachineProfileStatsResponse.md)
 - [StrengthMachineResponse](StrengthMachineResponse.md)
 - [StrengthMachineSorting](StrengthMachineSorting.md)
 - [StretchExerciseData](StretchExerciseData.md)
 - [StretchExerciseListResponse](StretchExerciseListResponse.md)
 - [StretchExerciseListResponseMeta](StretchExerciseListResponseMeta.md)
 - [StretchExerciseMuscleListResponse](StretchExerciseMuscleListResponse.md)
 - [StretchExerciseMuscleListResponseMeta](StretchExerciseMuscleListResponseMeta.md)
 - [StretchExerciseMuscleResponse](StretchExerciseMuscleResponse.md)
 - [StretchExerciseResponse](StretchExerciseResponse.md)
 - [StretchExerciseSorting](StretchExerciseSorting.md)
 - [StretchExerciseVariantData](StretchExerciseVariantData.md)
 - [StretchExerciseVariantListResponse](StretchExerciseVariantListResponse.md)
 - [StretchExerciseVariantListResponseMeta](StretchExerciseVariantListResponseMeta.md)
 - [StretchExerciseVariantResponse](StretchExerciseVariantResponse.md)
 - [StretchExerciseVariantSorting](StretchExerciseVariantSorting.md)
 - [SubscriptionResponse](SubscriptionResponse.md)
 - [TimeResponse](TimeResponse.md)
 - [UserApplicationAuthorizationData](UserApplicationAuthorizationData.md)
 - [UserApplicationAuthorizationDeveloperListResponse](UserApplicationAuthorizationDeveloperListResponse.md)
 - [UserApplicationAuthorizationMeta](UserApplicationAuthorizationMeta.md)
 - [UserApplicationAuthorizationResponse](UserApplicationAuthorizationResponse.md)
 - [UserApplicationAuthorizationUserListResponse](UserApplicationAuthorizationUserListResponse.md)
 - [UserData](UserData.md)
 - [UserFacilityRelationshipListResponse](UserFacilityRelationshipListResponse.md)
 - [UserFacilityRelationshipListResponseMeta](UserFacilityRelationshipListResponseMeta.md)
 - [UserFacilityRelationshipSorting](UserFacilityRelationshipSorting.md)
 - [UserInBodyIntegrationData](UserInBodyIntegrationData.md)
 - [UserInBodyIntegrationResponse](UserInBodyIntegrationResponse.md)
 - [UserResponse](UserResponse.md)
 - [WeightMeasurementData](WeightMeasurementData.md)
 - [WeightMeasurementListResponse](WeightMeasurementListResponse.md)
 - [WeightMeasurementListResponseMeta](WeightMeasurementListResponseMeta.md)
 - [WeightMeasurementResponse](WeightMeasurementResponse.md)
 - [WeightMeasurementSorting](WeightMeasurementSorting.md)
 - [Zones](Zones.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication (JWT)



## Copyright and License
Copyright © 2020 [Keiser Corporation](http://keiser.com/).

The Keiser Metrics SDK source code and distributed package are made available through the [MIT license](LICENSE.md).

Using any of the APIs made available through the Keiser Metrics SDK to communicate with [Keiser Metrics](https://metrics.keiser.com) make you subject to the following agreements. Please read all documents in their entirety as they govern your use of the APIs and Keiser Metrics servers.
- [API Agreement](https://dev.keiser.com/api-agreement/)
- [Brand Guidelines for Developers](https://dev.keiser.com/brand-guidelines/)