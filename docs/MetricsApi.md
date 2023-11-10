# MetricsApi

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
[**applicationList**](MetricsApi.md#applicationList) | **GET** /development-account/{developmentAccountId}/application/list | List applications for a Developer Account
[**applicationShow**](MetricsApi.md#applicationShow) | **GET** /development-account/{developmentAccountId}/application | Show an application
[**applicationUpdate**](MetricsApi.md#applicationUpdate) | **PUT** /development-account/{developmentAccountId}/application/{id} | Update an application
[**authExchangeFulfillment**](MetricsApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**cardioExerciseCreate**](MetricsApi.md#cardioExerciseCreate) | **POST** /cardio-exercise | Create a cardio exercise
[**cardioExerciseDelete**](MetricsApi.md#cardioExerciseDelete) | **DELETE** /cardio-exercise/{id} | Delete a cardio exercise
[**cardioExerciseList**](MetricsApi.md#cardioExerciseList) | **GET** /cardio-exercise/list | List cardio exercises
[**cardioExerciseMuscleCreate**](MetricsApi.md#cardioExerciseMuscleCreate) | **POST** /cardio-exercise/{cardioExerciseId}/muscle | Create a cardio exercise muscle
[**cardioExerciseMuscleDelete**](MetricsApi.md#cardioExerciseMuscleDelete) | **DELETE** /cardio-exercise/muscle/{id} | Delete a cardio exercise muscle
[**cardioExerciseMuscleList**](MetricsApi.md#cardioExerciseMuscleList) | **GET** /cardio-exercise/{cardioExerciseId}/muscle | List cardio exercise muscles
[**cardioExerciseMuscleShow**](MetricsApi.md#cardioExerciseMuscleShow) | **GET** /cardio-exercise/muscle/ | Show a cardio exercise muscle
[**cardioExerciseMuscleUpdate**](MetricsApi.md#cardioExerciseMuscleUpdate) | **PUT** /cardio-exercise/muscle/{id} | Update a cardio exercise muscle
[**cardioExerciseShow**](MetricsApi.md#cardioExerciseShow) | **GET** /cardio-exercise | Show a cardio exercise
[**cardioExerciseUpdate**](MetricsApi.md#cardioExerciseUpdate) | **PUT** /cardio-exercise/{id} | Update a cardio exercise
[**cardioExerciseVariantCreate**](MetricsApi.md#cardioExerciseVariantCreate) | **POST** /cardio-exercise/{cardioExerciseId}/variant | Create a cardio exercise variant
[**cardioExerciseVariantDelete**](MetricsApi.md#cardioExerciseVariantDelete) | **DELETE** /cardio-exercise/variant/{id} | Delete a cardio exercise variant
[**cardioExerciseVariantList**](MetricsApi.md#cardioExerciseVariantList) | **GET** /cardio-exercise/variant/list | List cardio exercise variants
[**cardioExerciseVariantShow**](MetricsApi.md#cardioExerciseVariantShow) | **GET** /cardio-exercise/variant | Show a cardio exercise variant
[**cardioExerciseVariantUpdate**](MetricsApi.md#cardioExerciseVariantUpdate) | **PUT** /cardio-exercise/variant/{id} | Update a cardio exercise variant
[**cardioMachineList**](MetricsApi.md#cardioMachineList) | **GET** /cardio-machine/list | List cardio machines
[**cardioMachineShow**](MetricsApi.md#cardioMachineShow) | **GET** /cardio-machine | Show a cardio machine
[**coreEndpoints**](MetricsApi.md#coreEndpoints) | **GET** /endpoints | Lists all endpoints for reference
[**coreErrors**](MetricsApi.md#coreErrors) | **GET** /errors | Lists all errors for reference
[**coreHealth**](MetricsApi.md#coreHealth) | **GET** /health | Returns 200 if healthy, 400 if unhealthy
[**coreStatus**](MetricsApi.md#coreStatus) | **GET** /status | Show basic API information
[**coreTime**](MetricsApi.md#coreTime) | **GET** /time | Returns current system time
[**coreUnsubscribe**](MetricsApi.md#coreUnsubscribe) | **GET** /unsubscribe | Unsubscribe from model updates
[**developmentAccountCreate**](MetricsApi.md#developmentAccountCreate) | **POST** /development | Create a Development Account
[**developmentAccountDelete**](MetricsApi.md#developmentAccountDelete) | **DELETE** /development-account/{id} | Delete a Development Account
[**developmentAccountList**](MetricsApi.md#developmentAccountList) | **GET** /development/list | List Development Accounts
[**developmentAccountRelationshipList**](MetricsApi.md#developmentAccountRelationshipList) | **GET** /development-account/{developmentAccountId}/relationship/list | List User Development Account Relationships
[**developmentAccountRelationshipRequestDelete**](MetricsApi.md#developmentAccountRelationshipRequestDelete) | **DELETE** /development-account/{developmentAccountId}/relationship-request/{id} | Deletes a Development Account Relationship Request
[**developmentAccountRelationshipRequestFulfillment**](MetricsApi.md#developmentAccountRelationshipRequestFulfillment) | **PUT** /development-account/relationship-request/fulfillment | Fulfills a Development Account Relationship Request
[**developmentAccountRelationshipRequestInit**](MetricsApi.md#developmentAccountRelationshipRequestInit) | **POST** /development-account/{developmentAccountId}/relationship-request/init | Initialize a Development Account Relationship Request
[**developmentAccountRelationshipRequestList**](MetricsApi.md#developmentAccountRelationshipRequestList) | **GET** /development-account/relationship-request/list | List Development Account Relationship Requests
[**developmentAccountRelationshipRequestShow**](MetricsApi.md#developmentAccountRelationshipRequestShow) | **GET** /development-account/relationship-request | Show a Development Account Relationship Request
[**developmentAccountRelationshipShow**](MetricsApi.md#developmentAccountRelationshipShow) | **GET** /development-account/{developmentAccountId}/relationship | Show a User Development Account Relationship
[**developmentAccountRelationshipUpdate**](MetricsApi.md#developmentAccountRelationshipUpdate) | **PUT** /development-account/{developmentAccountId}/relationship/{id} | Updates a Development Account Relationship
[**developmentAccountShow**](MetricsApi.md#developmentAccountShow) | **GET** /development-account | Show a Development Account
[**developmentAccountUpdate**](MetricsApi.md#developmentAccountUpdate) | **PUT** /development-account/{id} | Update a Development Account
[**emailAddressCreate**](MetricsApi.md#emailAddressCreate) | **POST** /user/email-address | Create a user email
[**emailAddressDelete**](MetricsApi.md#emailAddressDelete) | **DELETE** /user/email-address/{id} | Delete a user\&#39;s email address
[**emailAddressList**](MetricsApi.md#emailAddressList) | **GET** /user/email-address/list | List a user\&#39;s email addresses
[**emailAddressShow**](MetricsApi.md#emailAddressShow) | **GET** /user/email-address | Show a user\&#39;s email address
[**emailAddressValidationFulfillment**](MetricsApi.md#emailAddressValidationFulfillment) | **POST** /user/email-address/validation-fulfillment/{validationToken} | Fulfills a user\&#39;s email validation process
[**emailAddressValidationRequest**](MetricsApi.md#emailAddressValidationRequest) | **POST** /user/email-address/validation-request/{id} | Request an email validation email be sent
[**exerciseAliasCreate**](MetricsApi.md#exerciseAliasCreate) | **POST** /exercise-alias | Create an exercise alias
[**exerciseAliasDelete**](MetricsApi.md#exerciseAliasDelete) | **DELETE** /exercise-alias/{id} | Delete an exercise alias
[**exerciseAliasList**](MetricsApi.md#exerciseAliasList) | **GET** /exercise-alias/list | List exercise aliases
[**exerciseAliasShow**](MetricsApi.md#exerciseAliasShow) | **GET** /exercise-alias | Show an exercise alias
[**exerciseAliasUpdate**](MetricsApi.md#exerciseAliasUpdate) | **PUT** /exercise-alias/{id} | Update an exercise alias
[**exerciseOrdinalSetAssignmentCreate**](MetricsApi.md#exerciseOrdinalSetAssignmentCreate) | **POST** /exercise-ordinal-set/{exerciseOrdinalSetId}/assignment | Create an exercise ordinal set assignment
[**exerciseOrdinalSetAssignmentDelete**](MetricsApi.md#exerciseOrdinalSetAssignmentDelete) | **DELETE** /exercise-ordinal-set/assignment/{id} | Delete an exercise ordinal set assignment
[**exerciseOrdinalSetAssignmentList**](MetricsApi.md#exerciseOrdinalSetAssignmentList) | **GET** /exercise-ordinal-set/assignment/list | List exercise ordinal set assignments
[**exerciseOrdinalSetAssignmentShow**](MetricsApi.md#exerciseOrdinalSetAssignmentShow) | **GET** /exercise-ordinal-set/assignment | Show an exercise ordinal set assignment
[**exerciseOrdinalSetCreate**](MetricsApi.md#exerciseOrdinalSetCreate) | **POST** /exercise-ordinal-set | Create an exercise ordinal set
[**exerciseOrdinalSetDelete**](MetricsApi.md#exerciseOrdinalSetDelete) | **DELETE** /exercise-ordinal-set/{id} | Delete an exercise ordinal set
[**exerciseOrdinalSetList**](MetricsApi.md#exerciseOrdinalSetList) | **GET** /exercise-ordinal-set/list | List exercise ordinal sets
[**exerciseOrdinalSetShow**](MetricsApi.md#exerciseOrdinalSetShow) | **GET** /exercise-ordinal-set | Show an exercise ordinal set
[**exerciseOrdinalSetUpdate**](MetricsApi.md#exerciseOrdinalSetUpdate) | **PUT** /exercise-ordinal-set/{id} | Update an exercise ordinal set
[**facilityAccessControlIPRangeCreate**](MetricsApi.md#facilityAccessControlIPRangeCreate) | **POST** /facility/access-control/ip-range | Create a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeDelete**](MetricsApi.md#facilityAccessControlIPRangeDelete) | **DELETE** /facility/access-control/ip-range/{id} | Delete a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeList**](MetricsApi.md#facilityAccessControlIPRangeList) | **GET** /facility/access-control/ip-range/list | List a facility\&#39;s access control IP Range whitelist entities
[**facilityAccessControlIPRangeShow**](MetricsApi.md#facilityAccessControlIPRangeShow) | **GET** /facility/access-control/ip-range | Show a facility access control IP Range whitelist entity
[**facilityAccessControlIPRangeUpdate**](MetricsApi.md#facilityAccessControlIPRangeUpdate) | **PUT** /facility/access-control/ip-range/{id} | Update a facility access control IP Range whitelist entity
[**facilityAccessControlKioskShow**](MetricsApi.md#facilityAccessControlKioskShow) | **GET** /facility/access-control/kiosk | Show the facility access control kiosk entity
[**facilityAccessControlKioskUpdate**](MetricsApi.md#facilityAccessControlKioskUpdate) | **PUT** /facility/access-control/kiosk | Update the facility access control kiosk entity
[**facilityAccessControlShow**](MetricsApi.md#facilityAccessControlShow) | **GET** /facility/access-control | Show a facility access control
[**facilityApplyLicense**](MetricsApi.md#facilityApplyLicense) | **POST** /facility/apply-license | Updates a facility license
[**facilityCardioMachineDelete**](MetricsApi.md#facilityCardioMachineDelete) | **DELETE** /facility/cardio-machine/{id} | Delete a facility cardio machine
[**facilityCardioMachineShow**](MetricsApi.md#facilityCardioMachineShow) | **POST** /facility/cardio-machine | Show a facility cardio machine
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
[**facilityLicenseList**](MetricsApi.md#facilityLicenseList) | **GET** /facility/license/list | List facility licenses
[**facilityLicenseShow**](MetricsApi.md#facilityLicenseShow) | **GET** /facility/license | Show a facility license
[**facilityList**](MetricsApi.md#facilityList) | **GET** /facility/list | List facilities
[**facilityProfileShow**](MetricsApi.md#facilityProfileShow) | **GET** /facility/profile | Show facility profile
[**facilityProfileUpdate**](MetricsApi.md#facilityProfileUpdate) | **PUT** /facility/profile | Update a facility profile
[**facilityRelationshipFacilityCreate**](MetricsApi.md#facilityRelationshipFacilityCreate) | **POST** /facility/relationship | Create a user with a facility relationship
[**facilityRelationshipFacilityDelete**](MetricsApi.md#facilityRelationshipFacilityDelete) | **DELETE** /facility/relationship/{id} | Delete a facility\&#39;s user relationship
[**facilityRelationshipFacilityList**](MetricsApi.md#facilityRelationshipFacilityList) | **GET** /facility/relationship/list | List a facility\&#39;s user relationships
[**facilityRelationshipFacilityShow**](MetricsApi.md#facilityRelationshipFacilityShow) | **GET** /facility/relationship | Show a facility\&#39;s user relationship
[**facilityRelationshipFacilitySubscribe**](MetricsApi.md#facilityRelationshipFacilitySubscribe) | **GET** /facilityRelationship/facilitySubscribe | Subscribe to changes to facility relationship
[**facilityRelationshipFacilityUpdate**](MetricsApi.md#facilityRelationshipFacilityUpdate) | **PUT** /facility/relationship/{id} | Update a facility\&#39;s user relationship
[**facilityRelationshipRequestFacilityCreate**](MetricsApi.md#facilityRelationshipRequestFacilityCreate) | **POST** /facility/relationship-request | Create a facility relationship request (Facility to User)
[**facilityRelationshipRequestFacilityList**](MetricsApi.md#facilityRelationshipRequestFacilityList) | **GET** /facility/relationship-request/list | List facility relationship requests (User to Facility)
[**facilityRelationshipRequestFacilityShow**](MetricsApi.md#facilityRelationshipRequestFacilityShow) | **GET** /facility/relationship-request | Show a facility relationship request (User to Facility)
[**facilityRelationshipRequestFacilitySubscribe**](MetricsApi.md#facilityRelationshipRequestFacilitySubscribe) | **GET** /facilityRelationshipRequest/facilitySubscribe | Subscribe to changes to facility relationship request
[**facilityRelationshipRequestFacilityUpdate**](MetricsApi.md#facilityRelationshipRequestFacilityUpdate) | **PUT** /facility/relationship-request/{id} | Update a facility relationship request (User to Facility)
[**facilityRelationshipRequestUserCreate**](MetricsApi.md#facilityRelationshipRequestUserCreate) | **POST** /user/facility/relationship-request | Create a facility relationship request (User to Facility)
[**facilityRelationshipRequestUserList**](MetricsApi.md#facilityRelationshipRequestUserList) | **GET** /user/facility/relationship-request/list | List facility relationship requests (Facility to User)
[**facilityRelationshipRequestUserShow**](MetricsApi.md#facilityRelationshipRequestUserShow) | **GET** /user/facility/relationship-request | Show a facility relationship request (Facility to User)
[**facilityRelationshipRequestUserSubscribe**](MetricsApi.md#facilityRelationshipRequestUserSubscribe) | **GET** /facilityRelationshipRequest/userSubscribe | Subscribe to changes to facility relationship request
[**facilityRelationshipRequestUserUpdate**](MetricsApi.md#facilityRelationshipRequestUserUpdate) | **PUT** /user/facility/relationship-request/{id} | Update a facility relationship request (Facility to User)
[**facilityRelationshipUserDelete**](MetricsApi.md#facilityRelationshipUserDelete) | **DELETE** /user/facility/relationship/{id} | Delete a user\&#39;s facility relationship
[**facilityRelationshipUserList**](MetricsApi.md#facilityRelationshipUserList) | **GET** /user/facility/relationship/list | List a user\&#39;s facility relationships
[**facilityRelationshipUserShow**](MetricsApi.md#facilityRelationshipUserShow) | **GET** /user/facility/relationship | Show a user\&#39;s facility relationship
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
[**facilityStrengthMachineList**](MetricsApi.md#facilityStrengthMachineList) | **GET** /facility/strength-machine/list | List facility strength machines
[**facilityStrengthMachineMaintenanceRecordCreate**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordCreate) | **POST** /facility/strength-machine/maintenance-record | Create a maintenance record for facility strength machine
[**facilityStrengthMachineMaintenanceRecordDelete**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordDelete) | **DELETE** /facility/strength-machine/maintenance-record/{id} | Delete a maintenance record for facility strength machine
[**facilityStrengthMachineMaintenanceRecordList**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordList) | **GET** /facility/strength-machine/maintenance-record/list | List maintenance records for facility strength machines
[**facilityStrengthMachineMaintenanceRecordShow**](MetricsApi.md#facilityStrengthMachineMaintenanceRecordShow) | **GET** /facility/strength-machine/maintenance-record | Show a maintenance record by for facility strength machine
[**facilityStrengthMachineShow**](MetricsApi.md#facilityStrengthMachineShow) | **GET** /facility/strength-machine | Show a facility strength machine
[**facilityStrengthMachineSubscribe**](MetricsApi.md#facilityStrengthMachineSubscribe) | **GET** /facilityStrengthMachine/subscribe | Subscribe to changes to facility strength machine
[**facilityStrengthMachineUpdate**](MetricsApi.md#facilityStrengthMachineUpdate) | **PUT** /facility/strength-machine/{id} | Update a facility strength machine
[**facilityStrengthMachineUtilizationInstanceList**](MetricsApi.md#facilityStrengthMachineUtilizationInstanceList) | **GET** /facility/strength-machine/utilization-instance/list | List facility strength machine utilization instances
[**facilityStrengthMachineUtilizationInstanceShow**](MetricsApi.md#facilityStrengthMachineUtilizationInstanceShow) | **GET** /facility/strength-machine/utilization-instance | Show facility strength machine utilization instance
[**facilitySubscribe**](MetricsApi.md#facilitySubscribe) | **GET** /facility/subscribe | Subscribe to changes to a facility
[**heartRateDataSetCreate**](MetricsApi.md#heartRateDataSetCreate) | **POST** /user/heart-rate-data-set | Create a user heart rate data set
[**heartRateDataSetDelete**](MetricsApi.md#heartRateDataSetDelete) | **DELETE** /user/heart-rate-data-set/{id} | Delete a user\&#39;s heart rate data set
[**heartRateDataSetList**](MetricsApi.md#heartRateDataSetList) | **GET** /user/heart-rate-data-set/list | List a user\&#39;s heart rate data sets
[**heartRateDataSetShow**](MetricsApi.md#heartRateDataSetShow) | **GET** /user/heart-rate-data-set | Show a user\&#39;s heart rate data set
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
[**mSeriesProfileStatsShow**](MetricsApi.md#mSeriesProfileStatsShow) | **GET** /m-series/profile-stats | Show a user\&#39;s M Series data set
[**machineAdjustmentCreate**](MetricsApi.md#machineAdjustmentCreate) | **POST** /user/machine-adjustment | Create a user machine adjustment
[**machineAdjustmentDelete**](MetricsApi.md#machineAdjustmentDelete) | **DELETE** /user/machine-adjustment/{id} | Delete a users machine adjustment
[**machineAdjustmentList**](MetricsApi.md#machineAdjustmentList) | **GET** /user/machine-adjustment/list | List user machine adjustments
[**machineAdjustmentShow**](MetricsApi.md#machineAdjustmentShow) | **GET** /user/machine-adjustment | Shows a users machine adjustments
[**machineAdjustmentUpdate**](MetricsApi.md#machineAdjustmentUpdate) | **PUT** /user/machine-adjustment/{id} | Update a users machine adjustments
[**oauthAuthorize**](MetricsApi.md#oauthAuthorize) | **POST** /oauth/authorize | Authorizes a third party application
[**oauthDeauthorize**](MetricsApi.md#oauthDeauthorize) | **DELETE** /oauth/deauthorize | Deauthorizes an oauth user
[**oauthInitiate**](MetricsApi.md#oauthInitiate) | **POST** /oauth/initiate/{service} | Initiates OAuth access request and return parameters
[**oauthServiceDelete**](MetricsApi.md#oauthServiceDelete) | **DELETE** /oauth/service/{id} | Delete a user\&#39;s oauth service connection
[**oauthServiceList**](MetricsApi.md#oauthServiceList) | **GET** /oauth/service/list | List a user\&#39;s oauth service connections
[**oauthServiceShow**](MetricsApi.md#oauthServiceShow) | **GET** /oauth/service | Show a user\&#39;s oauth service connection
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
[**sessionPlanList**](MetricsApi.md#sessionPlanList) | **GET** /session-plan/list | List session plan
[**sessionPlanSequenceCreate**](MetricsApi.md#sessionPlanSequenceCreate) | **POST** /session-plan-sequence | Create session plan sequence
[**sessionPlanSequenceDelete**](MetricsApi.md#sessionPlanSequenceDelete) | **DELETE** /session-plan-sequence/{id} | Delete session plan sequence
[**sessionPlanSequenceInstanceDelete**](MetricsApi.md#sessionPlanSequenceInstanceDelete) | **DELETE** /session-plan-sequence-instance/{id} | Delete session plan sequence instance
[**sessionPlanSequenceInstanceList**](MetricsApi.md#sessionPlanSequenceInstanceList) | **GET** /session-plan-sequence-instance/list | List session plan sequence instance
[**sessionPlanSequenceInstanceShow**](MetricsApi.md#sessionPlanSequenceInstanceShow) | **GET** /session-plan-sequence-instance | Show a session plan sequence instance
[**sessionPlanSequenceList**](MetricsApi.md#sessionPlanSequenceList) | **GET** /session-plan-sequence/list | List session plan sequence
[**sessionPlanSequenceShow**](MetricsApi.md#sessionPlanSequenceShow) | **GET** /session-plan-sequence | Show a session plan sequence
[**sessionPlanSequenceTemplateCreate**](MetricsApi.md#sessionPlanSequenceTemplateCreate) | **POST** /session-plan-sequence-template | Create session plan sequence template
[**sessionPlanSequenceTemplateDelete**](MetricsApi.md#sessionPlanSequenceTemplateDelete) | **DELETE** /session-plan-sequence-template/{id} | Delete session plan sequence template
[**sessionPlanSequenceTemplateList**](MetricsApi.md#sessionPlanSequenceTemplateList) | **GET** /session-plan-sequence-template/list | List session plan sequence template
[**sessionPlanSequenceTemplateShow**](MetricsApi.md#sessionPlanSequenceTemplateShow) | **GET** /session-plan-sequence-template | Show a session plan sequence template
[**sessionPlanSequenceTemplateUpdate**](MetricsApi.md#sessionPlanSequenceTemplateUpdate) | **PUT** /session-plan-sequence-template/{id} | Update session plan sequence template
[**sessionPlanSequenceUpdate**](MetricsApi.md#sessionPlanSequenceUpdate) | **PUT** /session-plan-sequence/{id} | Update session plan sequence
[**sessionPlanSetCreateActivity**](MetricsApi.md#sessionPlanSetCreateActivity) | **POST** /session-plan-set/{sequenceId}/activity-set | Create session plan activity set
[**sessionPlanSetCreateCardio**](MetricsApi.md#sessionPlanSetCreateCardio) | **POST** /session-plan-set/{sequenceId}/cardio-set | Create session plan cardio set
[**sessionPlanSetCreateStrength**](MetricsApi.md#sessionPlanSetCreateStrength) | **POST** /session-plan-set/{sequenceId}/strength-set | Create session plan strength set
[**sessionPlanSetCreateStretch**](MetricsApi.md#sessionPlanSetCreateStretch) | **POST** /session-plan-set/{sequenceId}/stretch-set | Create session plan stretch set
[**sessionPlanSetDelete**](MetricsApi.md#sessionPlanSetDelete) | **DELETE** /session-plan-set/{id} | Delete session plan set
[**sessionPlanSetInstanceShow**](MetricsApi.md#sessionPlanSetInstanceShow) | **GET** /session-plan-set-instance | Show a session plan set intance
[**sessionPlanSetInstanceUpdateActivity**](MetricsApi.md#sessionPlanSetInstanceUpdateActivity) | **PUT** /session-plan-set-instance/{id}/activity-set | Update session plan activity set instance
[**sessionPlanSetInstanceUpdateCardio**](MetricsApi.md#sessionPlanSetInstanceUpdateCardio) | **PUT** /session-plan-set-instance/{id}/cardio-set | Update session plan cardio set instance
[**sessionPlanSetInstanceUpdateStrength**](MetricsApi.md#sessionPlanSetInstanceUpdateStrength) | **PUT** /session-plan-set-instance/{id}/strength-set | Update session plan strength set instance
[**sessionPlanSetInstanceUpdateStretch**](MetricsApi.md#sessionPlanSetInstanceUpdateStretch) | **PUT** /session-plan-set-instance/{id}/stretch-set | Update session plan stretch set instance
[**sessionPlanSetList**](MetricsApi.md#sessionPlanSetList) | **GET** /session-plan-set/list | List session plan sets
[**sessionPlanSetShow**](MetricsApi.md#sessionPlanSetShow) | **GET** /session-plan-set | Show a session plan set
[**sessionPlanSetTemplateCreateActivity**](MetricsApi.md#sessionPlanSetTemplateCreateActivity) | **POST** /session-plan-set-template/{sequenceId}/activity-set | Create session plan activity set template
[**sessionPlanSetTemplateCreateCardio**](MetricsApi.md#sessionPlanSetTemplateCreateCardio) | **POST** /session-plan-set-template/{sequenceId}/cardio-set | Create session plan cardio set template
[**sessionPlanSetTemplateCreateStrength**](MetricsApi.md#sessionPlanSetTemplateCreateStrength) | **POST** /session-plan-set-template/{sequenceId}/strength-set | Create session plan strength set template
[**sessionPlanSetTemplateCreateStretch**](MetricsApi.md#sessionPlanSetTemplateCreateStretch) | **POST** /session-plan-set-template/{sequenceId}/stretch-set | Create session plan stretch set template
[**sessionPlanSetTemplateDelete**](MetricsApi.md#sessionPlanSetTemplateDelete) | **DELETE** /session-plan-set-template/{id} | Delete session plan set template
[**sessionPlanSetTemplateList**](MetricsApi.md#sessionPlanSetTemplateList) | **GET** /session-plan-set-template/list | List session plan set templates
[**sessionPlanSetTemplateShow**](MetricsApi.md#sessionPlanSetTemplateShow) | **GET** /session-plan-set-template | Show a session plan set template
[**sessionPlanSetTemplateUpdateActivity**](MetricsApi.md#sessionPlanSetTemplateUpdateActivity) | **PUT** /session-plan-set-template/activity-set/{id} | Update session plan activity set template
[**sessionPlanSetTemplateUpdateCardio**](MetricsApi.md#sessionPlanSetTemplateUpdateCardio) | **PUT** /session-plan-set-template/cardio-set/{id} | Update session plan cardio set template
[**sessionPlanSetTemplateUpdateStrength**](MetricsApi.md#sessionPlanSetTemplateUpdateStrength) | **PUT** /session-plan-set-template/strength-set/{id} | Update session plan strength set template
[**sessionPlanSetTemplateUpdateStretch**](MetricsApi.md#sessionPlanSetTemplateUpdateStretch) | **PUT** /session-plan-set-template/stretch-set/{id} | Update session plan stretch set template
[**sessionPlanSetUpdateActivity**](MetricsApi.md#sessionPlanSetUpdateActivity) | **PUT** /session-plan-set/{id}/activity-set | Update session plan activity set
[**sessionPlanSetUpdateCardio**](MetricsApi.md#sessionPlanSetUpdateCardio) | **PUT** /session-plan-set/{id}/cardio-set | Update session plan cardio set
[**sessionPlanSetUpdateStrength**](MetricsApi.md#sessionPlanSetUpdateStrength) | **PUT** /session-plan-set/{id}/strength-set | Update session plan strength set
[**sessionPlanSetUpdateStretch**](MetricsApi.md#sessionPlanSetUpdateStretch) | **PUT** /session-plan-set/{id}/stretch-set | Update session plan stretch set
[**sessionPlanShow**](MetricsApi.md#sessionPlanShow) | **GET** /session-plan | Show a session plan
[**sessionPlanTemplateAttachSequence**](MetricsApi.md#sessionPlanTemplateAttachSequence) | **POST** /session-plan-template/{id}/sequence/{sequenceId} | Attach a sequence to an session plan template
[**sessionPlanTemplateCreate**](MetricsApi.md#sessionPlanTemplateCreate) | **POST** /session-plan-template | Create session plan template
[**sessionPlanTemplateDelete**](MetricsApi.md#sessionPlanTemplateDelete) | **DELETE** /session-plan-template/{id} | Delete session plan template
[**sessionPlanTemplateDetachSequence**](MetricsApi.md#sessionPlanTemplateDetachSequence) | **PUT** /session-plan-template/{id}/sequence/{sequenceId} | Detach a sequence to an session plan template
[**sessionPlanTemplateList**](MetricsApi.md#sessionPlanTemplateList) | **GET** /session-plan-template/list | List session plan templates
[**sessionPlanTemplateShow**](MetricsApi.md#sessionPlanTemplateShow) | **GET** /session-plan-template | Show a session plan template
[**sessionPlanTemplateUpdate**](MetricsApi.md#sessionPlanTemplateUpdate) | **PUT** /session-plan-template/{id} | Update session plan template
[**sessionPlanUpdate**](MetricsApi.md#sessionPlanUpdate) | **PUT** /session-plan/{id} | Update session plan
[**sessionShow**](MetricsApi.md#sessionShow) | **GET** /session | Show a user\&#39;s session
[**sessionStart**](MetricsApi.md#sessionStart) | **POST** /session | Start a user session
[**sessionSubscribe**](MetricsApi.md#sessionSubscribe) | **GET** /session:subscribe | Subscribe to changes to a user\&#39;s session
[**strengthExerciseCreate**](MetricsApi.md#strengthExerciseCreate) | **POST** /strength-exercise | Create a strength exercise
[**strengthExerciseDelete**](MetricsApi.md#strengthExerciseDelete) | **DELETE** /strength-exercise/{id} | Delete a strength exercise
[**strengthExerciseList**](MetricsApi.md#strengthExerciseList) | **GET** /strength-exercise/list | List strength exercises
[**strengthExerciseMuscleCreate**](MetricsApi.md#strengthExerciseMuscleCreate) | **POST** /strength-exercise/{strengthExerciseId}/muscle | Create a strength exercise muscle
[**strengthExerciseMuscleDelete**](MetricsApi.md#strengthExerciseMuscleDelete) | **DELETE** /strength-exercise/muscle/{id} | Delete a strength exercise muscle
[**strengthExerciseMuscleList**](MetricsApi.md#strengthExerciseMuscleList) | **GET** /strength-exercise/{strengthExerciseId}/muscle/list | List strength exercise muscles
[**strengthExerciseMuscleShow**](MetricsApi.md#strengthExerciseMuscleShow) | **GET** /strength-exercise/muscle | Show a strength exercise muscle
[**strengthExerciseMuscleUpdate**](MetricsApi.md#strengthExerciseMuscleUpdate) | **PUT** /strength-exercise/muscle/{id} | Update a strength exercise muscle
[**strengthExerciseShow**](MetricsApi.md#strengthExerciseShow) | **GET** /strength-exercise | Show a strength exercise
[**strengthExerciseUpdate**](MetricsApi.md#strengthExerciseUpdate) | **PUT** /strength-exercise/{id} | Update a strength exercise
[**strengthExerciseVariantCreate**](MetricsApi.md#strengthExerciseVariantCreate) | **POST** /strength-exercise/{strengthExerciseId}/variant | Create a strength exercise variant
[**strengthExerciseVariantDelete**](MetricsApi.md#strengthExerciseVariantDelete) | **DELETE** /strength-exercise/variant/{id} | Delete a strength exercise variant
[**strengthExerciseVariantList**](MetricsApi.md#strengthExerciseVariantList) | **GET** /strength-exercise/variant/list | List strength exercise variants
[**strengthExerciseVariantShow**](MetricsApi.md#strengthExerciseVariantShow) | **GET** /strength-exercise/variant | Show a strength exercise variant
[**strengthExerciseVariantUpdate**](MetricsApi.md#strengthExerciseVariantUpdate) | **PUT** /strength-exercise/variant/{id} | Update a strength exercise variant
[**strengthMachineDataSetCreate**](MetricsApi.md#strengthMachineDataSetCreate) | **POST** /strength-machine-data-set | Create a strength machine data set
[**strengthMachineDataSetCreateA500**](MetricsApi.md#strengthMachineDataSetCreateA500) | **POST** /strength-machine-data-set/a500 | Create a strength machine data set from an A500 machine
[**strengthMachineDataSetDelete**](MetricsApi.md#strengthMachineDataSetDelete) | **DELETE** /strength-machine-data-set/{id} | Delete a strength machine data set
[**strengthMachineDataSetExport**](MetricsApi.md#strengthMachineDataSetExport) | **GET** /strength-machine-data-set/{id}/export/{format} | Export an A500 strength machine data set
[**strengthMachineDataSetExportFlat**](MetricsApi.md#strengthMachineDataSetExportFlat) | **GET** /user/{userId}/strength-machine-data-set/export/{filename} | Export an A500 strength machine data set as a flat file
[**strengthMachineDataSetList**](MetricsApi.md#strengthMachineDataSetList) | **GET** /strength-machine-data-set/list | List strength machine data sets
[**strengthMachineDataSetShow**](MetricsApi.md#strengthMachineDataSetShow) | **GET** /strength-machine-data-set | Show a strength machine data set
[**strengthMachineDataSetSubscribe**](MetricsApi.md#strengthMachineDataSetSubscribe) | **GET** /strengthMachineDataSet/subscribe | Subscribe to strength machine data set changes
[**strengthMachineDataSetUpdate**](MetricsApi.md#strengthMachineDataSetUpdate) | **PUT** /strength-machine-data-set/{id}/{sessionId} | Update a strength machine data set
[**strengthMachineHistoryList**](MetricsApi.md#strengthMachineHistoryList) | **GET** /strength-machine-history | List strength machines used by user
[**strengthMachineList**](MetricsApi.md#strengthMachineList) | **GET** /strength-machine/list | List strength machines
[**strengthMachineProfileStatsShow**](MetricsApi.md#strengthMachineProfileStatsShow) | **GET** /strength-machine/{strengthMachineId}/profile-stats | Show a user\&#39;s strength machine profile stats
[**strengthMachineShow**](MetricsApi.md#strengthMachineShow) | **GET** /strength-machine | Show a strength machine
[**stretchExerciseCreate**](MetricsApi.md#stretchExerciseCreate) | **POST** /stretch-exercise | Create a stretch exercise
[**stretchExerciseDelete**](MetricsApi.md#stretchExerciseDelete) | **DELETE** /stretch-exercise/{id} | Delete a stretch exercise
[**stretchExerciseList**](MetricsApi.md#stretchExerciseList) | **GET** /stretch-exercise/list | List stretch exercises
[**stretchExerciseMuscleCreate**](MetricsApi.md#stretchExerciseMuscleCreate) | **POST** /stretch-exercise/{stretchExerciseId}/muscle | Create a stretch exercise muscle
[**stretchExerciseMuscleDelete**](MetricsApi.md#stretchExerciseMuscleDelete) | **DELETE** /stretch-exercise/muscle/{id} | Delete a stretch exercise muscle
[**stretchExerciseMuscleList**](MetricsApi.md#stretchExerciseMuscleList) | **GET** /stretch-exercise/{stretchExerciseId}/muscle/list | List stretch exercise muscles
[**stretchExerciseMuscleShow**](MetricsApi.md#stretchExerciseMuscleShow) | **GET** /stretch-exercise/muscle | Show a stretch exercise muscle
[**stretchExerciseMuscleUpdate**](MetricsApi.md#stretchExerciseMuscleUpdate) | **PUT** /stretch-exercise/muscle/{id} | Update a stretch exercise muscle
[**stretchExerciseShow**](MetricsApi.md#stretchExerciseShow) | **GET** /stretch-exercise | Show a stretch exercise
[**stretchExerciseUpdate**](MetricsApi.md#stretchExerciseUpdate) | **PUT** /stretch-exercise/{id} | Update a stretch exercise
[**stretchExerciseVariantCreate**](MetricsApi.md#stretchExerciseVariantCreate) | **POST** /stretch-exercise/{stretchExerciseId}/variant | Create a stretch exercise variant
[**stretchExerciseVariantDelete**](MetricsApi.md#stretchExerciseVariantDelete) | **DELETE** /stretch-exercise/variant/{id} | Delete a stretch exercise variant
[**stretchExerciseVariantList**](MetricsApi.md#stretchExerciseVariantList) | **GET** /stretch-exercise/variant/list | List stretch exercise variants
[**stretchExerciseVariantShow**](MetricsApi.md#stretchExerciseVariantShow) | **GET** /stretch-exercise/variant | Show a stretch exercise variant
[**stretchExerciseVariantUpdate**](MetricsApi.md#stretchExerciseVariantUpdate) | **PUT** /stretch-exercise/variant/{id} | Update a stretch exercise variant
[**userApplicationAuthorizationDeveloperDelete**](MetricsApi.md#userApplicationAuthorizationDeveloperDelete) | **DELETE** /development-account/{developmentAccountId}/user-application-authorization/{id} | Deletes a user application authorization as a developer
[**userApplicationAuthorizationDeveloperList**](MetricsApi.md#userApplicationAuthorizationDeveloperList) | **GET** /development-account/{developmentAccountId}/user-application-authorization/list | Lists user application authorizations as a developer
[**userApplicationAuthorizationDeveloperShow**](MetricsApi.md#userApplicationAuthorizationDeveloperShow) | **GET** /development-account/{developmentAccountId}/user-application-authorization/ | Shows a user application authorization as a developer
[**userApplicationAuthorizationUserDelete**](MetricsApi.md#userApplicationAuthorizationUserDelete) | **DELETE** /user/application-authorization/{id} | Deletes a user application authorization
[**userApplicationAuthorizationUserList**](MetricsApi.md#userApplicationAuthorizationUserList) | **GET** /user/application-authorization/list | Lists user application authorizations
[**userApplicationAuthorizationUserShow**](MetricsApi.md#userApplicationAuthorizationUserShow) | **GET** /user/application-authorization | Shows a user application authorization
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


# **a500CreateSet**
> StrengthMachineDataSetResponse a500CreateSet()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

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
  // string
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


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **displaySerial** | [**string**] |  | defaults to undefined
 **displaySoftwareVersion** | [**string**] |  | defaults to undefined
 **facilityId** | [**number**] |  | defaults to undefined
 **memberIdentifier** | [**string**] |  | defaults to undefined
 **model** | [**string**] |  | defaults to undefined
 **resistancePrecision** | [**string**] | Allowed values: int, dec | defaults to undefined
 **setData** | [**string**] |  | defaults to undefined
 **lz4SampleData** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineDataSetResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500CreateUtilizationInstance**
> a500CreateUtilizationInstance()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500CreateUtilizationInstanceRequest = {
  // number
  repetitionCount: 8.14,
  // Date
  takenAt: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500CreateUtilizationInstance(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repetitionCount** | [**number**] |  | defaults to undefined
 **takenAt** | [**Date**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500GetUser**
> A500GetUserResponse a500GetUser()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500GetUserRequest = {
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
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500GetUser(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **displaySerial** | [**string**] |  | defaults to undefined
 **displaySoftwareVersion** | [**string**] |  | defaults to undefined
 **facilityId** | [**number**] |  | defaults to undefined
 **memberIdentifier** | [**string**] |  | defaults to undefined
 **model** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**A500GetUserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500Initialize**
> StrengthMachineInitializeResponse a500Initialize()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500InitializeRequest = {
  // string
  displayUUID: displayUUID_example,
  // string
  firmwareVersion: firmwareVersion_example,
  // string
  leftCylinderSerial: leftCylinderSerial_example,
  // string
  machineModel: machineModel_example,
  // string
  mainBoardSerial: mainBoardSerial_example,
  // string
  softwareVersion: softwareVersion_example,
  // string (optional)
  rightCylinderSerial: rightCylinderSerial_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500Initialize(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **displayUUID** | [**string**] |  | defaults to undefined
 **firmwareVersion** | [**string**] |  | defaults to undefined
 **leftCylinderSerial** | [**string**] |  | defaults to undefined
 **machineModel** | [**string**] |  | defaults to undefined
 **mainBoardSerial** | [**string**] |  | defaults to undefined
 **softwareVersion** | [**string**] |  | defaults to undefined
 **rightCylinderSerial** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineInitializeResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500ShowMachineState**
> A500MachineStateResponse a500ShowMachineState()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500ShowMachineStateRequest = {
  // number
  facilityStrengthMachineId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500ShowMachineState(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facilityStrengthMachineId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**A500MachineStateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500SubscribeMachineState**
> SubscriptionResponse a500SubscribeMachineState()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500SubscribeMachineStateRequest = {
  // number (optional)
  facilityStrengthMachineId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500SubscribeMachineState(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facilityStrengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500UpdateMachine**
> FacilityStrengthMachineResponse a500UpdateMachine()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500UpdateMachineRequest = {
  // string
  displaySerial: displaySerial_example,
  // string
  displaySoftwareVersion: displaySoftwareVersion_example,
  // number
  facilityId: 8.14,
  // string
  model: model_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500UpdateMachine(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **displaySerial** | [**string**] |  | defaults to undefined
 **displaySoftwareVersion** | [**string**] |  | defaults to undefined
 **facilityId** | [**number**] |  | defaults to undefined
 **model** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500UpdateMachineState**
> A500MachineStateResponse a500UpdateMachineState()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500UpdateMachineStateRequest = {
  // string
  appType: appType_example,
  // number
  facilityStrengthMachineId: 8.14,
  // string
  forceUnit: forceUnit_example,
  // boolean
  isFacilityConfigurationOverridden: true,
  // string
  primaryFocus: primaryFocus_example,
  // string
  secondaryFocus: secondaryFocus_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500UpdateMachineState(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appType** | [**string**] | Allowed values: performance, elder, medical, commercial | defaults to undefined
 **facilityStrengthMachineId** | [**number**] |  | defaults to undefined
 **forceUnit** | [**string**] | Allowed values: lb, kg, ne, er | defaults to undefined
 **isFacilityConfigurationOverridden** | [**boolean**] |  | defaults to undefined
 **primaryFocus** | [**string**] | Allowed values: power, force, velocity, rom | defaults to undefined
 **secondaryFocus** | [**string**] | Allowed values: power, force, velocity, rom | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**A500MachineStateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a500UserLogin**
> FacilityUserResponse a500UserLogin()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiA500UserLoginRequest = {
  // string
  memberIdentifier: memberIdentifier_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.a500UserLogin(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberIdentifier** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityUserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationCreate**
> ApplicationResponse applicationCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiApplicationCreateRequest = {
  // string
  applicationName: applicationName_example,
  // number
  developmentAccountId: 8.14,
  // string
  redirectUrl: redirectUrl_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.applicationCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationName** | [**string**] |  | defaults to undefined
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **redirectUrl** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationDelete**
> applicationDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiApplicationDeleteRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.applicationDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationList**
> ApplicationListResponse applicationList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiApplicationListRequest = {
  // number
  developmentAccountId: 8.14,
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.applicationList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, applicationName | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ApplicationListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationShow**
> ApplicationResponse applicationShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiApplicationShowRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.applicationShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationUpdate**
> ApplicationResponse applicationUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiApplicationUpdateRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string (optional)
  applicationName: applicationName_example,
  // string (optional)
  redirectUrl: redirectUrl_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.applicationUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **applicationName** | [**string**] |  | (optional) defaults to undefined
 **redirectUrl** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authExchangeFulfillment**
> UserResponse authExchangeFulfillment()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiAuthExchangeFulfillmentRequest = {
  // string
  exchangeToken: exchangeToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authExchangeFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseCreate**
> CardioExerciseResponse cardioExerciseCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseCreateRequest = {
  // string
  defaultExerciseAlias: defaultExerciseAlias_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultExerciseAlias** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseDelete**
> cardioExerciseDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseList**
> CardioExerciseListResponse cardioExerciseList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  defaultAlias: defaultAlias_example,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **defaultAlias** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, defaultAlias | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseMuscleCreate**
> CardioExerciseMuscleResponse cardioExerciseMuscleCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseMuscleCreateRequest = {
  // number
  cardioExerciseId: 8.14,
  // string
  muscle: muscle_example,
  // string
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseMuscleCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioExerciseId** | [**number**] |  | defaults to undefined
 **muscle** | [**string**] | Allowed values: omohyoid, levatorScapulae, sternohyoid, sternocleidomastoid, pectoralisMajor, pectoralisMinor, deltoid, brachialis, bicepsBrachii, tricepsBrachii, pronatorTeres, palmarisLongus, extensorPollicisBrevis, extensorPollicisLongus, abductorPollicisLongus, flexorCarpiRadialis, brachioradialis, flexorCarpiUlnaris, extensorCarpiUlnaris, serratusAnterior, internalOblique, externalOblique, rectusAdbominis, transversalis, sartorius, piriformis, pectineus, adductorLongus, adductorBrevis, gracilis, tensorFasciaeLatae, vastusMedialis, rectusFemoris, vastusIntermedius, vastusLateralis, gastrocnemius, soleius, tibialisAnterior, tibialisPosterior, peroneusLongus, peroneusBrevis, extensorDigitorumLongus, flexorHallucisLongus, flexorDigitorumLongus, plantaris, bicepsFemoris, adductorMagnus, semitendinosus, semimembranosus, gluteusMinimus, gluteusMedius, gluteusMaximus, psoasMinor, psoasMajor, iliacus, teresMinor, teresMajor, infraspinatus, rhomboidMinor, rhomboidMajor, trapezius, latissimusDorsi, semispinalis, erectorSpinae, multifidus | defaults to undefined
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseMuscleDelete**
> cardioExerciseMuscleDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseMuscleDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseMuscleDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseMuscleList**
> CardioExerciseMuscleListResponse cardioExerciseMuscleList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseMuscleListRequest = {
  // number
  cardioExerciseId: 8.14,
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  muscle: muscle_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseMuscleList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioExerciseId** | [**number**] |  | defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **muscle** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, muscle, targetLevel | (optional) defaults to 'id'
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseMuscleListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseMuscleShow**
> CardioExerciseMuscleResponse cardioExerciseMuscleShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseMuscleShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseMuscleShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseMuscleUpdate**
> CardioExerciseMuscleResponse cardioExerciseMuscleUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseMuscleUpdateRequest = {
  // number
  id: 8.14,
  // string
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseMuscleUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseShow**
> CardioExerciseResponse cardioExerciseShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseUpdate**
> CardioExerciseResponse cardioExerciseUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseUpdateRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseVariantCreate**
> CardioExerciseVariantResponse cardioExerciseVariantCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseVariantCreateRequest = {
  // number
  cardioExerciseId: 8.14,
  // string
  variant: variant_example,
  // number (optional)
  cardioMachineId: 8.14,
  // string (optional)
  instructionalImage: instructionalImage_example,
  // string (optional)
  instructionalVideo: instructionalVideo_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseVariantCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioExerciseId** | [**number**] |  | defaults to undefined
 **variant** | [**string**] | Allowed values: normal | defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **instructionalImage** | [**string**] |  | (optional) defaults to undefined
 **instructionalVideo** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseVariantDelete**
> cardioExerciseVariantDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseVariantDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseVariantDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseVariantList**
> CardioExerciseVariantListResponse cardioExerciseVariantList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseVariantListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  cardioExerciseId: 8.14,
  // number (optional)
  cardioMachineId: 8.14,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  variant: variant_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseVariantList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **cardioExerciseId** | [**number**] |  | (optional) defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, variant | (optional) defaults to 'id'
 **variant** | [**string**] | Allowed values: normal | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseVariantListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseVariantShow**
> CardioExerciseVariantResponse cardioExerciseVariantShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseVariantShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseVariantShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioExerciseVariantUpdate**
> CardioExerciseVariantResponse cardioExerciseVariantUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioExerciseVariantUpdateRequest = {
  // number
  id: 8.14,
  // string
  variant: variant_example,
  // string (optional)
  instructionalImage: instructionalImage_example,
  // string (optional)
  instructionalVideo: instructionalVideo_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioExerciseVariantUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **variant** | [**string**] | Allowed values: normal | defaults to undefined
 **instructionalImage** | [**string**] |  | (optional) defaults to undefined
 **instructionalVideo** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioMachineList**
> CardioMachineListResponse cardioMachineList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioMachineListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioMachineList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioMachineListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardioMachineShow**
> CardioMachineResponse cardioMachineShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCardioMachineShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.cardioMachineShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CardioMachineResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coreEndpoints**
> EndpointsResponse coreEndpoints()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCoreEndpointsRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.coreEndpoints(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**EndpointsResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coreErrors**
> ErrorResponse coreErrors()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCoreErrorsRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.coreErrors(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ErrorResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coreHealth**
> HealthResponse coreHealth()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCoreHealthRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.coreHealth(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HealthResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coreStatus**
> StatusResponse coreStatus()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCoreStatusRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.coreStatus(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StatusResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coreTime**
> TimeResponse coreTime()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCoreTimeRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.coreTime(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**TimeResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coreUnsubscribe**
> coreUnsubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiCoreUnsubscribeRequest = {
  // string
  subscriptionKey: subscriptionKey_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.coreUnsubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionKey** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountCreate**
> DevelopmentAccountResponse developmentAccountCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountCreateRequest = {
  // string
  privacyUrl: privacyUrl_example,
  // string
  termsUrl: termsUrl_example,
  // string (optional)
  address: address_example,
  // number (optional)
  company: 8.14,
  // string (optional)
  websiteUrl: websiteUrl_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **privacyUrl** | [**string**] |  | defaults to undefined
 **termsUrl** | [**string**] |  | defaults to undefined
 **address** | [**string**] |  | (optional) defaults to undefined
 **company** | [**number**] |  | (optional) defaults to undefined
 **websiteUrl** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountDelete**
> developmentAccountDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountList**
> DevelopmentAccountListResponse developmentAccountList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, company | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipList**
> DevelopmentAccountRelationshipListResponse developmentAccountRelationshipList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipListRequest = {
  // number
  developmentAccountId: 8.14,
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, userId, role | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountRelationshipListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipRequestDelete**
> developmentAccountRelationshipRequestDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipRequestDeleteRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipRequestDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipRequestFulfillment**
> DevelopmentAccountRelationshipResponse developmentAccountRelationshipRequestFulfillment()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipRequestFulfillmentRequest = {
  // string
  code: code_example,
  // boolean
  shouldAuthorize: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipRequestFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined
 **shouldAuthorize** | [**boolean**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipRequestInit**
> DevelopmentAccountRelationshipRequestResponse developmentAccountRelationshipRequestInit()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipRequestInitRequest = {
  // number
  developmentAccountId: 8.14,
  // string
  email: email_example,
  // string
  role: role_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipRequestInit(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **email** | [**string**] |  | defaults to undefined
 **role** | [**string**] | Allowed values: owner, developer | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountRelationshipRequestResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipRequestList**
> DevelopmentAccountRelationshipRequestListResponse developmentAccountRelationshipRequestList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipRequestListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  company: company_example,
  // number (optional)
  developmentAccountId: 8.14,
  // string (optional)
  email: email_example,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipRequestList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **company** | [**string**] |  | (optional) defaults to undefined
 **developmentAccountId** | [**number**] |  | (optional) defaults to undefined
 **email** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, developmentAccountId, email, userId, role | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountRelationshipRequestListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipRequestShow**
> DevelopmentAccountRelationshipRequestResponse developmentAccountRelationshipRequestShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipRequestShowRequest = {
  // string (optional)
  code: code_example,
  // number (optional)
  developmentAccountId: 8.14,
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipRequestShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | (optional) defaults to undefined
 **developmentAccountId** | [**number**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountRelationshipRequestResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipShow**
> DevelopmentAccountRelationshipResponse developmentAccountRelationshipShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipShowRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountRelationshipUpdate**
> DevelopmentAccountRelationshipResponse developmentAccountRelationshipUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountRelationshipUpdateRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string
  role: role_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountRelationshipUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **role** | [**string**] | Allowed values: owner, developer | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountShow**
> DevelopmentAccountResponse developmentAccountShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **developmentAccountUpdate**
> DevelopmentAccountResponse developmentAccountUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiDevelopmentAccountUpdateRequest = {
  // number
  id: 8.14,
  // string (optional)
  address: address_example,
  // string (optional)
  company: company_example,
  // string (optional)
  privacyUrl: privacyUrl_example,
  // string (optional)
  termsUrl: termsUrl_example,
  // string (optional)
  websiteUrl: websiteUrl_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.developmentAccountUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **address** | [**string**] |  | (optional) defaults to undefined
 **company** | [**string**] |  | (optional) defaults to undefined
 **privacyUrl** | [**string**] |  | (optional) defaults to undefined
 **termsUrl** | [**string**] |  | (optional) defaults to undefined
 **websiteUrl** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**DevelopmentAccountResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailAddressCreate**
> EmailAddressResponse emailAddressCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiEmailAddressCreateRequest = {
  // string
  email: email_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.emailAddressCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**EmailAddressResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailAddressDelete**
> emailAddressDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiEmailAddressDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.emailAddressDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailAddressList**
> EmailAddressListResponse emailAddressList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiEmailAddressListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  email: email_example,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.emailAddressList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **email** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, email | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**EmailAddressListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailAddressShow**
> EmailAddressResponse emailAddressShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiEmailAddressShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.emailAddressShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**EmailAddressResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailAddressValidationFulfillment**
> EmailAddressResponse emailAddressValidationFulfillment()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiEmailAddressValidationFulfillmentRequest = {
  // string
  validationToken: validationToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.emailAddressValidationFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**EmailAddressResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailAddressValidationRequest**
> emailAddressValidationRequest()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiEmailAddressValidationRequestRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.emailAddressValidationRequest(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseAliasCreate**
> ExerciseAliasResponse exerciseAliasCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseAliasCreateRequest = {
  // string
  alias: alias_example,
  // number (optional)
  cardioExerciseId: 8.14,
  // number (optional)
  strengthExerciseId: 8.14,
  // number (optional)
  stretchExerciseId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseAliasCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] |  | defaults to undefined
 **cardioExerciseId** | [**number**] |  | (optional) defaults to undefined
 **strengthExerciseId** | [**number**] |  | (optional) defaults to undefined
 **stretchExerciseId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseAliasResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseAliasDelete**
> exerciseAliasDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseAliasDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseAliasDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseAliasList**
> ExerciseAliasListResponse exerciseAliasList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseAliasListRequest = {
  // string (optional)
  alias: alias_example,
  // boolean (optional)
  ascending: true,
  // number (optional)
  cardioExerciseId: 8.14,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  strengthExerciseId: 8.14,
  // number (optional)
  stretchExerciseId: 8.14,
  // string (optional)
  type: type_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseAliasList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] |  | (optional) defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **cardioExerciseId** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, alias | (optional) defaults to 'id'
 **strengthExerciseId** | [**number**] |  | (optional) defaults to undefined
 **stretchExerciseId** | [**number**] |  | (optional) defaults to undefined
 **type** | [**string**] | Allowed values: cardio, strength, stretch | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseAliasListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseAliasShow**
> ExerciseAliasResponse exerciseAliasShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseAliasShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseAliasShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseAliasResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseAliasUpdate**
> ExerciseAliasResponse exerciseAliasUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseAliasUpdateRequest = {
  // string
  alias: alias_example,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseAliasUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseAliasResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetAssignmentCreate**
> ExerciseOrdinalSetAssignmentResponse exerciseOrdinalSetAssignmentCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetAssignmentCreateRequest = {
  // number
  exerciseOrdinalSetId: 8.14,
  // string
  ordinalIdentifier: ordinalIdentifier_example,
  // number (optional)
  cardioExerciseVariantId: 8.14,
  // number (optional)
  strengthExerciseVariantId: 8.14,
  // number (optional)
  stretchExerciseVariantId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetAssignmentCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exerciseOrdinalSetId** | [**number**] |  | defaults to undefined
 **ordinalIdentifier** | [**string**] |  | defaults to undefined
 **cardioExerciseVariantId** | [**number**] |  | (optional) defaults to undefined
 **strengthExerciseVariantId** | [**number**] |  | (optional) defaults to undefined
 **stretchExerciseVariantId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseOrdinalSetAssignmentResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetAssignmentDelete**
> exerciseOrdinalSetAssignmentDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetAssignmentDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetAssignmentDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetAssignmentList**
> ExerciseOrdinalSetAssignmentListResponse exerciseOrdinalSetAssignmentList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetAssignmentListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  exerciseOrdinalSetId: 8.14,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  ordinalIdentifier: ordinalIdentifier_example,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetAssignmentList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **exerciseOrdinalSetId** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **ordinalIdentifier** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, ordinalIdentifier | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseOrdinalSetAssignmentListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetAssignmentShow**
> ExerciseOrdinalSetAssignmentResponse exerciseOrdinalSetAssignmentShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetAssignmentShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetAssignmentShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseOrdinalSetAssignmentResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetCreate**
> ExerciseOrdinalSetResponse exerciseOrdinalSetCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetCreateRequest = {
  // string
  code: code_example,
  // string
  name: name_example,
  // string (optional)
  description: description_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseOrdinalSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetDelete**
> exerciseOrdinalSetDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetList**
> ExerciseOrdinalSetListResponse exerciseOrdinalSetList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  code: code_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **code** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, code | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseOrdinalSetListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetShow**
> ExerciseOrdinalSetResponse exerciseOrdinalSetShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseOrdinalSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exerciseOrdinalSetUpdate**
> ExerciseOrdinalSetResponse exerciseOrdinalSetUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiExerciseOrdinalSetUpdateRequest = {
  // number
  id: 8.14,
  // string
  name: name_example,
  // string (optional)
  description: description_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.exerciseOrdinalSetUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ExerciseOrdinalSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlIPRangeCreate**
> FacilityAccessControlIPRangeResponse facilityAccessControlIPRangeCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlIPRangeCreateRequest = {
  // string
  cidr: cidr_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlIPRangeCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cidr** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityAccessControlIPRangeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlIPRangeDelete**
> facilityAccessControlIPRangeDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlIPRangeDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlIPRangeDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlIPRangeList**
> FacilityAccessControlIPRangeListResponse facilityAccessControlIPRangeList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlIPRangeListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  cidr: cidr_example,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlIPRangeList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **cidr** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityAccessControlIPRangeListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlIPRangeShow**
> FacilityAccessControlIPRangeResponse facilityAccessControlIPRangeShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlIPRangeShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlIPRangeShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityAccessControlIPRangeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlIPRangeUpdate**
> FacilityAccessControlIPRangeResponse facilityAccessControlIPRangeUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlIPRangeUpdateRequest = {
  // string
  cidr: cidr_example,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlIPRangeUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cidr** | [**string**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityAccessControlIPRangeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlKioskShow**
> FacilityAccessControlKioskResponse facilityAccessControlKioskShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlKioskShowRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlKioskShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityAccessControlKioskResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlKioskUpdate**
> FacilityAccessControlKioskResponse facilityAccessControlKioskUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlKioskUpdateRequest = {
  // boolean
  isKioskModeAllowed: true,
  // boolean (optional)
  isFingerprintAuthenticationAllowed: true,
  // string (optional)
  primaryIdentification: primaryIdentification_example,
  // string (optional)
  secondaryIdentification: secondaryIdentification_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlKioskUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isKioskModeAllowed** | [**boolean**] |  | defaults to undefined
 **isFingerprintAuthenticationAllowed** | [**boolean**] |  | (optional) defaults to undefined
 **primaryIdentification** | [**string**] | Allowed values: uuid, memberIdentifier, emailAddress, fullName | (optional) defaults to undefined
 **secondaryIdentification** | [**string**] | Allowed values: none, uuid, memberIdentifier, yearOfBirth, memberSecret | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityAccessControlKioskResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityAccessControlShow**
> FacilityAccessControlResponse facilityAccessControlShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityAccessControlShowRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityAccessControlShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityAccessControlResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityApplyLicense**
> FacilityResponse facilityApplyLicense()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityApplyLicenseRequest = {
  // string
  key: key_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityApplyLicense(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityCardioMachineDelete**
> facilityCardioMachineDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityCardioMachineDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityCardioMachineDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityCardioMachineShow**
> FacilityCardioMachineResponse facilityCardioMachineShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityCardioMachineShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityCardioMachineShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityCardioMachineResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityCardioMachineUpdate**
> FacilityCardioMachineResponse facilityCardioMachineUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityCardioMachineUpdateRequest = {
  // number
  id: 8.14,
  // string (optional)
  location: location_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityCardioMachineUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **location** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityCardioMachineResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityConfigurationShow**
> FacilityConfigurationResponse facilityConfigurationShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityConfigurationShowRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityConfigurationShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityConfigurationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityConfigurationSubscribe**
> SubscriptionResponse facilityConfigurationSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityConfigurationSubscribeRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityConfigurationSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityConfigurationUpdate**
> FacilityConfigurationResponse facilityConfigurationUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityConfigurationUpdateRequest = {
  // string
  memberIdentificationComposition: memberIdentificationComposition_example,
  // boolean
  memberIdentificationForceLength: true,
  // number
  memberIdentificationLength: 8.14,
  // boolean
  memberRequireEmail: true,
  // string
  memberSecretComposition: memberSecretComposition_example,
  // boolean
  memberSecretForceLength: true,
  // number
  memberSecretLength: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityConfigurationUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberIdentificationComposition** | [**string**] | Allowed values: numeric, alpha | defaults to undefined
 **memberIdentificationForceLength** | [**boolean**] |  | defaults to undefined
 **memberIdentificationLength** | [**number**] |  | defaults to undefined
 **memberRequireEmail** | [**boolean**] |  | defaults to undefined
 **memberSecretComposition** | [**string**] | Allowed values: numeric, alpha | defaults to undefined
 **memberSecretForceLength** | [**boolean**] |  | defaults to undefined
 **memberSecretLength** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityConfigurationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityCreate**
> FacilityResponse facilityCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityCreateRequest = {
  // string
  key: key_example,
  // string
  name: name_example,
  // string (optional)
  address: address_example,
  // string (optional)
  city: city_example,
  // string (optional)
  country: country_example,
  // string (optional)
  phone: phone_example,
  // string (optional)
  postcode: postcode_example,
  // string (optional)
  state: state_example,
  // string (optional)
  website: website_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **address** | [**string**] |  | (optional) defaults to undefined
 **city** | [**string**] |  | (optional) defaults to undefined
 **country** | [**string**] |  | (optional) defaults to undefined
 **phone** | [**string**] |  | (optional) defaults to undefined
 **postcode** | [**string**] |  | (optional) defaults to undefined
 **state** | [**string**] |  | (optional) defaults to undefined
 **website** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityInBodyIntegrationCreate**
> FacilityInBodyIntegrationResponse facilityInBodyIntegrationCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityInBodyIntegrationCreateRequest = {
  // string
  type: type_example,
  // string (optional)
  account: account_example,
  // string (optional)
  key: key_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityInBodyIntegrationCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] | Allowed values: web, local | defaults to undefined
 **account** | [**string**] |  | (optional) defaults to undefined
 **key** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityInBodyIntegrationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityInBodyIntegrationDelete**
> facilityInBodyIntegrationDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityInBodyIntegrationDeleteRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityInBodyIntegrationDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityInBodyIntegrationShow**
> FacilityInBodyIntegrationResponse facilityInBodyIntegrationShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityInBodyIntegrationShowRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityInBodyIntegrationShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityInBodyIntegrationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityKioskSessionEndEchip**
> KioskSessionResponse facilityKioskSessionEndEchip()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityKioskSessionEndEchipRequest = {
  // string
  echipData: echipData_example,
  // string
  echipId: echipId_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityKioskSessionEndEchip(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **echipData** | [**string**] |  | defaults to undefined
 **echipId** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**KioskSessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityKioskSessionUpdateEchip**
> KioskSessionResponse facilityKioskSessionUpdateEchip()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityKioskSessionUpdateEchipRequest = {
  // string
  echipData: echipData_example,
  // string
  echipId: echipId_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityKioskSessionUpdateEchip(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **echipData** | [**string**] |  | defaults to undefined
 **echipId** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**KioskSessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityKioskTokenCheck**
> facilityKioskTokenCheck()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityKioskTokenCheckRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityKioskTokenCheck(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityKioskTokenCreate**
> FacilityKioskTokenResponse facilityKioskTokenCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityKioskTokenCreateRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityKioskTokenCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityKioskTokenResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityKioskTokenDelete**
> facilityKioskTokenDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityKioskTokenDeleteRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityKioskTokenDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityKioskUserLogin**
> FacilityUserResponse facilityKioskUserLogin()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityKioskUserLoginRequest = {
  // string
  primaryIdentification: primaryIdentification_example,
  // string (optional)
  secondaryIdentification: secondaryIdentification_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityKioskUserLogin(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **primaryIdentification** | [**string**] |  | defaults to undefined
 **secondaryIdentification** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityUserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityLicenseList**
> FacilityLicenseListResponse facilityLicenseList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityLicenseListRequest = {
  // string (optional)
  accountId: accountId_example,
  // boolean (optional)
  ascending: true,
  // string (optional)
  key: key_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  type: type_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityLicenseList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] |  | (optional) defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **key** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, type, term, effectiveDate | (optional) defaults to 'id'
 **type** | [**string**] | Allowed values: normal, demo, test | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityLicenseListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityLicenseShow**
> FacilityLicenseResponse facilityLicenseShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityLicenseShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityLicenseShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityLicenseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityList**
> FacilityListResponse facilityList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityListRequest = {
  // number (optional)
  address: 8.14,
  // boolean (optional)
  ascending: true,
  // number (optional)
  city: 8.14,
  // number (optional)
  country: 8.14,
  // number (optional)
  limit: 8.14,
  // number (optional)
  name: 8.14,
  // number (optional)
  offset: 8.14,
  // number (optional)
  page: 8.14,
  // number (optional)
  phone: 8.14,
  // number (optional)
  postcode: 8.14,
  // number (optional)
  quantity: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  state: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | [**number**] |  | (optional) defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **city** | [**number**] |  | (optional) defaults to undefined
 **country** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **phone** | [**number**] |  | (optional) defaults to undefined
 **postcode** | [**number**] |  | (optional) defaults to undefined
 **quantity** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **state** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityProfileShow**
> FacilityProfileResponse facilityProfileShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityProfileShowRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityProfileShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityProfileResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityProfileUpdate**
> FacilityProfileResponse facilityProfileUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityProfileUpdateRequest = {
  // string
  name: name_example,
  // string (optional)
  address: address_example,
  // number (optional)
  city: 8.14,
  // string (optional)
  country: country_example,
  // string (optional)
  phone: phone_example,
  // string (optional)
  postcode: postcode_example,
  // string (optional)
  state: state_example,
  // string (optional)
  website: website_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityProfileUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **address** | [**string**] |  | (optional) defaults to undefined
 **city** | [**number**] |  | (optional) defaults to undefined
 **country** | [**string**] |  | (optional) defaults to undefined
 **phone** | [**string**] |  | (optional) defaults to undefined
 **postcode** | [**string**] |  | (optional) defaults to undefined
 **state** | [**string**] |  | (optional) defaults to undefined
 **website** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityProfileResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipFacilityCreate**
> FacilityRelationshipResponse facilityRelationshipFacilityCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipFacilityCreateRequest = {
  // string
  name: name_example,
  // Date (optional)
  birthday: 2013-10-20T19:20:30+01:00,
  // string (optional)
  email: email_example,
  // string (optional)
  employeeRole: employeeRole_example,
  // string (optional)
  gender: gender_example,
  // string (optional)
  language: language_example,
  // boolean (optional)
  member: true,
  // string (optional)
  memberIdentifier: memberIdentifier_example,
  // string (optional)
  memberSecret: memberSecret_example,
  // string (optional)
  units: units_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipFacilityCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **birthday** | [**Date**] |  | (optional) defaults to undefined
 **email** | [**string**] |  | (optional) defaults to undefined
 **employeeRole** | [**string**] | Allowed values: admin, customerSupport, trainer, frontDesk, maintenance, machine, kiosk | (optional) defaults to undefined
 **gender** | [**string**] | Allowed values: m, f, o | (optional) defaults to undefined
 **language** | [**string**] | Allowed values: af, ar, az, be, bg, ca, cs, cy, da, de, dv, el, en, eo, es, et, eu, fa, fi, fo, fr, gl, gu, he, hi, hr, hu, hy, id, is, it, ja, ka, kk, kn, ko, kok, ky, lt, lv, mi, mk, mn, mr, ms, mt, nb, nl, ns, pa, pl, ps, pt, qu, ro, ru, sa, se, sk, sl, sq, sv, sw, ta, te, th, tl, tn, tr, tt, ts, uk, ur, uz, vi, xh, zh, zu | (optional) defaults to undefined
 **member** | [**boolean**] |  | (optional) defaults to undefined
 **memberIdentifier** | [**string**] |  | (optional) defaults to undefined
 **memberSecret** | [**string**] |  | (optional) defaults to undefined
 **units** | [**string**] | Allowed values: metric, imperial | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipFacilityDelete**
> facilityRelationshipFacilityDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipFacilityDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipFacilityDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipFacilityList**
> FacilityUserRelationshipListResponse facilityRelationshipFacilityList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipFacilityListRequest = {
  // boolean (optional)
  ascending: true,
  // boolean (optional)
  employee: true,
  // string (optional)
  employeeRole: employeeRole_example,
  // boolean (optional)
  includeSession: true,
  // number (optional)
  limit: 8.14,
  // boolean (optional)
  member: true,
  // string (optional)
  memberIdentifier: memberIdentifier_example,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipFacilityList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **employee** | [**boolean**] |  | (optional) defaults to undefined
 **employeeRole** | [**string**] | Allowed values: admin, customerSupport, trainer, frontDesk, maintenance, machine, kiosk | (optional) defaults to undefined
 **includeSession** | [**boolean**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **member** | [**boolean**] |  | (optional) defaults to undefined
 **memberIdentifier** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, memberIdentifier, employeeRole | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityUserRelationshipListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipFacilityShow**
> FacilityRelationshipResponse facilityRelationshipFacilityShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipFacilityShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipFacilityShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipFacilitySubscribe**
> SubscriptionResponse facilityRelationshipFacilitySubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipFacilitySubscribeRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipFacilitySubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipFacilityUpdate**
> FacilityRelationshipResponse facilityRelationshipFacilityUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipFacilityUpdateRequest = {
  // number
  id: 8.14,
  // string (optional)
  employeeRole: employeeRole_example,
  // boolean (optional)
  member: true,
  // string (optional)
  memberIdentifier: memberIdentifier_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipFacilityUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **employeeRole** | [**string**] | Allowed values: admin, customerSupport, trainer, frontDesk, maintenance, machine, kiosk | (optional) defaults to undefined
 **member** | [**boolean**] |  | (optional) defaults to undefined
 **memberIdentifier** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestFacilityCreate**
> FacilityRelationshipRequestResponse facilityRelationshipRequestFacilityCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestFacilityCreateRequest = {
  // string (optional)
  email: email_example,
  // string (optional)
  employeeRole: employeeRole_example,
  // boolean (optional)
  member: true,
  // string (optional)
  memberIdentifier: memberIdentifier_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestFacilityCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | (optional) defaults to undefined
 **employeeRole** | [**string**] | Allowed values: admin, customerSupport, trainer, frontDesk, maintenance, machine, kiosk | (optional) defaults to undefined
 **member** | [**boolean**] |  | (optional) defaults to undefined
 **memberIdentifier** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipRequestResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestFacilityList**
> FacilityRelationshipRequestListResponse facilityRelationshipRequestFacilityList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestFacilityListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  memberIdentifier: memberIdentifier_example,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestFacilityList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **memberIdentifier** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, memberIdentifier, employeeRole | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipRequestListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestFacilityShow**
> FacilityRelationshipRequestResponse facilityRelationshipRequestFacilityShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestFacilityShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestFacilityShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipRequestResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestFacilitySubscribe**
> SubscriptionResponse facilityRelationshipRequestFacilitySubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestFacilitySubscribeRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestFacilitySubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestFacilityUpdate**
> FacilityRelationshipResponse facilityRelationshipRequestFacilityUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestFacilityUpdateRequest = {
  // boolean
  approval: true,
  // number
  id: 8.14,
  // string (optional)
  memberIdentifier: memberIdentifier_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestFacilityUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approval** | [**boolean**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **memberIdentifier** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestUserCreate**
> FacilityRelationshipRequestResponse facilityRelationshipRequestUserCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestUserCreateRequest = {
  // number
  facilityId: 8.14,
  // string (optional)
  memberIdentifier: memberIdentifier_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestUserCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facilityId** | [**number**] |  | defaults to undefined
 **memberIdentifier** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipRequestResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestUserList**
> PrivilegedFacilityRelationshipRequestListResponse facilityRelationshipRequestUserList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestUserListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  facilityId: 8.14,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestUserList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **facilityId** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**PrivilegedFacilityRelationshipRequestListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestUserShow**
> FacilityRelationshipRequestResponse facilityRelationshipRequestUserShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestUserShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestUserShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipRequestResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestUserSubscribe**
> SubscriptionResponse facilityRelationshipRequestUserSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestUserSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestUserSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipRequestUserUpdate**
> FacilityRelationshipResponse facilityRelationshipRequestUserUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipRequestUserUpdateRequest = {
  // boolean
  approval: true,
  // string
  id: id_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipRequestUserUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approval** | [**boolean**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipUserDelete**
> facilityRelationshipUserDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipUserDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipUserDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipUserList**
> UserFacilityRelationshipListResponse facilityRelationshipUserList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipUserListRequest = {
  // boolean (optional)
  ascending: true,
  // boolean (optional)
  employee: true,
  // string (optional)
  employeeRole: employeeRole_example,
  // number (optional)
  limit: 8.14,
  // boolean (optional)
  member: true,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipUserList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **employee** | [**boolean**] |  | (optional) defaults to undefined
 **employeeRole** | [**string**] | Allowed values: admin, customerSupport, trainer, frontDesk, maintenance, machine, kiosk | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **member** | [**boolean**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, employeeRole | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserFacilityRelationshipListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipUserShow**
> FacilityRelationshipResponse facilityRelationshipUserShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipUserShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipUserShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipUserSubscribe**
> SubscriptionResponse facilityRelationshipUserSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipUserSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipUserSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityRelationshipUserUpdate**
> FacilityRelationshipResponse facilityRelationshipUserUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityRelationshipUserUpdateRequest = {
  // number
  id: 8.14,
  // string
  memberSecret: memberSecret_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityRelationshipUserUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **memberSecret** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityRelationshipResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityReportCheckIn**
> facilityReportCheckIn()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityReportCheckInRequest = {
  // Date
  from: 2013-10-20T19:20:30+01:00,
  // string
  group: group_example,
  // Date
  to: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityReportCheckIn(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | [**Date**] |  | defaults to undefined
 **group** | [**string**] | Allowed values: monthly, weekly, yearly | defaults to undefined
 **to** | [**Date**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionCheckEchip**
> SessionResponse facilitySessionCheckEchip()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionCheckEchipRequest = {
  // string
  echipId: echipId_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionCheckEchip(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **echipId** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionDelete**
> facilitySessionDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionEnd**
> SessionResponse facilitySessionEnd()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionEndRequest = {
  // string (optional)
  echipData: echipData_example,
  // string (optional)
  echipId: echipId_example,
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionEnd(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **echipData** | [**string**] |  | (optional) defaults to undefined
 **echipId** | [**string**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionList**
> FacilitySessionListResponse facilitySessionList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // boolean (optional)
  open: true,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **open** | [**boolean**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, open, startedAt, endedAt | (optional) defaults to 'startedAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilitySessionListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionShow**
> SessionResponse facilitySessionShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionShowRequest = {
  // string (optional)
  echipId: echipId_example,
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **echipId** | [**string**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionStart**
> SessionStartResponse facilitySessionStart()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionStartRequest = {
  // number
  userId: 8.14,
  // boolean (optional)
  continueFromLastSet: true,
  // string (optional)
  echipId: echipId_example,
  // boolean (optional)
  forceEndPrevious: true,
  // number (optional)
  sessionPlanSequenceAssignmentId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionStart(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **continueFromLastSet** | [**boolean**] |  | (optional) defaults to undefined
 **echipId** | [**string**] |  | (optional) defaults to undefined
 **forceEndPrevious** | [**boolean**] |  | (optional) defaults to undefined
 **sessionPlanSequenceAssignmentId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionStartResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionStatus**
> FacilitySessionListResponse facilitySessionStatus()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionStatusRequest = {
  // number
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionStatus(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilitySessionListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionSubscribe**
> SubscriptionResponse facilitySessionSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySessionUpdate**
> SessionResponse facilitySessionUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySessionUpdateRequest = {
  // string
  echipData: echipData_example,
  // string
  echipId: echipId_example,
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySessionUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **echipData** | [**string**] |  | defaults to undefined
 **echipId** | [**string**] |  | defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityShow**
> FacilityResponse facilityShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityShowRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineConfigurationShow**
> FacilityStrengthMachineConfigurationResponse facilityStrengthMachineConfigurationShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineConfigurationShowRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineConfigurationShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineConfigurationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineConfigurationSubscribe**
> SubscriptionResponse facilityStrengthMachineConfigurationSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineConfigurationSubscribeRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineConfigurationSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineConfigurationUpdate**
> FacilityStrengthMachineConfigurationResponse facilityStrengthMachineConfigurationUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineConfigurationUpdateRequest = {
  // string
  appType: appType_example,
  // string
  forceUnit: forceUnit_example,
  // string
  locale: locale_example,
  // string
  primaryFocus: primaryFocus_example,
  // string
  secondaryFocus: secondaryFocus_example,
  // string
  timeZone: timeZone_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineConfigurationUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appType** | [**string**] | Allowed values: performance, elder, medical, commercial | defaults to undefined
 **forceUnit** | [**string**] | Allowed values: lb, kg, ne, er | defaults to undefined
 **locale** | [**string**] | Allowed values: en-us | defaults to undefined
 **primaryFocus** | [**string**] |  | defaults to undefined
 **secondaryFocus** | [**string**] |  | defaults to undefined
 **timeZone** | [**string**] | Allowed values: Africa/Abidjan, Africa/Accra, Africa/Addis_Ababa, Africa/Algiers, Africa/Asmara, Africa/Asmera, Africa/Bamako, Africa/Bangui, Africa/Banjul, Africa/Bissau, Africa/Blantyre, Africa/Brazzaville, Africa/Bujumbura, Africa/Cairo, Africa/Casablanca, Africa/Ceuta, Africa/Conakry, Africa/Dakar, Africa/Dar_es_Salaam, Africa/Djibouti, Africa/Douala, Africa/El_Aaiun, Africa/Freetown, Africa/Gaborone, Africa/Harare, Africa/Johannesburg, Africa/Juba, Africa/Kampala, Africa/Khartoum, Africa/Kigali, Africa/Kinshasa, Africa/Lagos, Africa/Libreville, Africa/Lome, Africa/Luanda, Africa/Lubumbashi, Africa/Lusaka, Africa/Malabo, Africa/Maputo, Africa/Maseru, Africa/Mbabane, Africa/Mogadishu, Africa/Monrovia, Africa/Nairobi, Africa/Ndjamena, Africa/Niamey, Africa/Nouakchott, Africa/Ouagadougou, Africa/Porto-Novo, Africa/Sao_Tome, Africa/Timbuktu, Africa/Tripoli, Africa/Tunis, Africa/Windhoek, America/Adak, America/Anchorage, America/Anguilla, America/Antigua, America/Araguaina, America/Argentina/Buenos_Aires, America/Argentina/Catamarca, America/Argentina/ComodRivadavia, America/Argentina/Cordoba, America/Argentina/Jujuy, America/Argentina/La_Rioja, America/Argentina/Mendoza, America/Argentina/Rio_Gallegos, America/Argentina/Salta, America/Argentina/San_Juan, America/Argentina/San_Luis, America/Argentina/Tucuman, America/Argentina/Ushuaia, America/Aruba, America/Asuncion, America/Atikokan, America/Atka, America/Bahia, America/Bahia_Banderas, America/Barbados, America/Belem, America/Belize, America/Blanc-Sablon, America/Boa_Vista, America/Bogota, America/Boise, America/Buenos_Aires, America/Cambridge_Bay, America/Campo_Grande, America/Cancun, America/Caracas, America/Catamarca, America/Cayenne, America/Cayman, America/Chicago, America/Chihuahua, America/Coral_Harbour, America/Cordoba, America/Costa_Rica, America/Creston, America/Cuiaba, America/Curacao, America/Danmarkshavn, America/Dawson, America/Dawson_Creek, America/Denver, America/Detroit, America/Dominica, America/Edmonton, America/Eirunepe, America/El_Salvador, America/Ensenada, America/Fort_Nelson, America/Fort_Wayne, America/Fortaleza, America/Glace_Bay, America/Godthab, America/Goose_Bay, America/Grand_Turk, America/Grenada, America/Guadeloupe, America/Guatemala, America/Guayaquil, America/Guyana, America/Halifax, America/Havana, America/Hermosillo, America/Indiana/Indianapolis, America/Indiana/Knox, America/Indiana/Marengo, America/Indiana/Petersburg, America/Indiana/Tell_City, America/Indiana/Vevay, America/Indiana/Vincennes, America/Indiana/Winamac, America/Indianapolis, America/Inuvik, America/Iqaluit, America/Jamaica, America/Jujuy, America/Juneau, America/Kentucky/Louisville, America/Kentucky/Monticello, America/Knox_IN, America/Kralendijk, America/La_Paz, America/Lima, America/Los_Angeles, America/Louisville, America/Lower_Princes, America/Maceio, America/Managua, America/Manaus, America/Marigot, America/Martinique, America/Matamoros, America/Mazatlan, America/Mendoza, America/Menominee, America/Merida, America/Metlakatla, America/Mexico_City, America/Miquelon, America/Moncton, America/Monterrey, America/Montevideo, America/Montreal, America/Montserrat, America/Nassau, America/New_York, America/Nipigon, America/Nome, America/Noronha, America/North_Dakota/Beulah, America/North_Dakota/Center, America/North_Dakota/New_Salem, America/Ojinaga, America/Panama, America/Pangnirtung, America/Paramaribo, America/Phoenix, America/Port-au-Prince, America/Port_of_Spain, America/Porto_Acre, America/Porto_Velho, America/Puerto_Rico, America/Rainy_River, America/Rankin_Inlet, America/Recife, America/Regina, America/Resolute, America/Rio_Branco, America/Rosario, America/Santa_Isabel, America/Santarem, America/Santiago, America/Santo_Domingo, America/Sao_Paulo, America/Scoresbysund, America/Shiprock, America/Sitka, America/St_Barthelemy, America/St_Johns, America/St_Kitts, America/St_Lucia, America/St_Thomas, America/St_Vincent, America/Swift_Current, America/Tegucigalpa, America/Thule, America/Thunder_Bay, America/Tijuana, America/Toronto, America/Tortola, America/Vancouver, America/Virgin, America/Whitehorse, America/Winnipeg, America/Yakutat, America/Yellowknife, Antarctica/Casey, Antarctica/Davis, Antarctica/DumontDUrville, Antarctica/Macquarie, Antarctica/Mawson, Antarctica/McMurdo, Antarctica/Palmer, Antarctica/Rothera, Antarctica/South_Pole, Antarctica/Syowa, Antarctica/Troll, Antarctica/Vostok, Arctic/Longyearbyen, Asia/Aden, Asia/Almaty, Asia/Amman, Asia/Anadyr, Asia/Aqtau, Asia/Aqtobe, Asia/Ashgabat, Asia/Ashkhabad, Asia/Atyrau, Asia/Baghdad, Asia/Bahrain, Asia/Baku, Asia/Bangkok, Asia/Barnaul, Asia/Beirut, Asia/Bishkek, Asia/Brunei, Asia/Calcutta, Asia/Chita, Asia/Choibalsan, Asia/Chongqing, Asia/Chungking, Asia/Colombo, Asia/Dacca, Asia/Damascus, Asia/Dhaka, Asia/Dili, Asia/Dubai, Asia/Dushanbe, Asia/Famagusta, Asia/Gaza, Asia/Hanoi, Asia/Harbin, Asia/Hebron, Asia/Ho_Chi_Minh, Asia/Hong_Kong, Asia/Hovd, Asia/Irkutsk, Asia/Istanbul, Asia/Jakarta, Asia/Jayapura, Asia/Jerusalem, Asia/Kabul, Asia/Kamchatka, Asia/Karachi, Asia/Kashgar, Asia/Kathmandu, Asia/Katmandu, Asia/Khandyga, Asia/Kolkata, Asia/Krasnoyarsk, Asia/Kuala_Lumpur, Asia/Kuching, Asia/Kuwait, Asia/Macao, Asia/Macau, Asia/Magadan, Asia/Makassar, Asia/Manila, Asia/Muscat, Asia/Nicosia, Asia/Novokuznetsk, Asia/Novosibirsk, Asia/Omsk, Asia/Oral, Asia/Phnom_Penh, Asia/Pontianak, Asia/Pyongyang, Asia/Qatar, Asia/Qyzylorda, Asia/Rangoon, Asia/Riyadh, Asia/Saigon, Asia/Sakhalin, Asia/Samarkand, Asia/Seoul, Asia/Shanghai, Asia/Singapore, Asia/Srednekolymsk, Asia/Taipei, Asia/Tashkent, Asia/Tbilisi, Asia/Tehran, Asia/Tel_Aviv, Asia/Thimbu, Asia/Thimphu, Asia/Tokyo, Asia/Tomsk, Asia/Ujung_Pandang, Asia/Ulaanbaatar, Asia/Ulan_Bator, Asia/Urumqi, Asia/Ust-Nera, Asia/Vientiane, Asia/Vladivostok, Asia/Yakutsk, Asia/Yangon, Asia/Yekaterinburg, Asia/Yerevan, Atlantic/Azores, Atlantic/Bermuda, Atlantic/Canary, Atlantic/Cape_Verde, Atlantic/Faeroe, Atlantic/Faroe, Atlantic/Jan_Mayen, Atlantic/Madeira, Atlantic/Reykjavik, Atlantic/South_Georgia, Atlantic/St_Helena, Atlantic/Stanley, Australia/ACT, Australia/Adelaide, Australia/Brisbane, Australia/Broken_Hill, Australia/Canberra, Australia/Currie, Australia/Darwin, Australia/Eucla, Australia/Hobart, Australia/LHI, Australia/Lindeman, Australia/Lord_Howe, Australia/Melbourne, Australia/NSW, Australia/North, Australia/Perth, Australia/Queensland, Australia/South, Australia/Sydney, Australia/Tasmania, Australia/Victoria, Australia/West, Australia/Yancowinna, Brazil/Acre, Brazil/DeNoronha, Brazil/East, Brazil/West, CET, CST6CDT, Canada/Atlantic, Canada/Central, Canada/East-Saskatchewan, Canada/Eastern, Canada/Mountain, Canada/Newfoundland, Canada/Pacific, Canada/Saskatchewan, Canada/Yukon, Chile/Continental, Chile/EasterIsland, Cuba, EET, EST, EST5EDT, Egypt, Eire, Etc/GMT, Etc/GMT+0, Etc/GMT+1, Etc/GMT+10, Etc/GMT+11, Etc/GMT+12, Etc/GMT+2, Etc/GMT+3, Etc/GMT+4, Etc/GMT+5, Etc/GMT+6, Etc/GMT+7, Etc/GMT+8, Etc/GMT+9, Etc/GMT-0, Etc/GMT-1, Etc/GMT-10, Etc/GMT-11, Etc/GMT-12, Etc/GMT-13, Etc/GMT-14, Etc/GMT-2, Etc/GMT-3, Etc/GMT-4, Etc/GMT-5, Etc/GMT-6, Etc/GMT-7, Etc/GMT-8, Etc/GMT-9, Etc/GMT0, Etc/Greenwich, Etc/UCT, Etc/UTC, Etc/Universal, Etc/Zulu, Europe/Amsterdam, Europe/Andorra, Europe/Astrakhan, Europe/Athens, Europe/Belfast, Europe/Belgrade, Europe/Berlin, Europe/Bratislava, Europe/Brussels, Europe/Bucharest, Europe/Budapest, Europe/Busingen, Europe/Chisinau, Europe/Copenhagen, Europe/Dublin, Europe/Gibraltar, Europe/Guernsey, Europe/Helsinki, Europe/Isle_of_Man, Europe/Istanbul, Europe/Jersey, Europe/Kaliningrad, Europe/Kiev, Europe/Kirov, Europe/Lisbon, Europe/Ljubljana, Europe/London, Europe/Luxembourg, Europe/Madrid, Europe/Malta, Europe/Mariehamn, Europe/Minsk, Europe/Monaco, Europe/Moscow, Europe/Nicosia, Europe/Oslo, Europe/Paris, Europe/Podgorica, Europe/Prague, Europe/Riga, Europe/Rome, Europe/Samara, Europe/San_Marino, Europe/Sarajevo, Europe/Saratov, Europe/Simferopol, Europe/Skopje, Europe/Sofia, Europe/Stockholm, Europe/Tallinn, Europe/Tirane, Europe/Tiraspol, Europe/Ulyanovsk, Europe/Uzhgorod, Europe/Vaduz, Europe/Vatican, Europe/Vienna, Europe/Vilnius, Europe/Volgograd, Europe/Warsaw, Europe/Zagreb, Europe/Zaporozhye, Europe/Zurich, GB, GB-Eire, GMT, GMT+0, GMT-0, GMT0, Greenwich, HST, Hongkong, Iceland, Indian/Antananarivo, Indian/Chagos, Indian/Christmas, Indian/Cocos, Indian/Comoro, Indian/Kerguelen, Indian/Mahe, Indian/Maldives, Indian/Mauritius, Indian/Mayotte, Indian/Reunion, Iran, Israel, Jamaica, Japan, Kwajalein, Libya, MET, MST, MST7MDT, Mexico/BajaNorte, Mexico/BajaSur, Mexico/General, NZ, NZ-CHAT, Navajo, PRC, PST8PDT, Pacific/Apia, Pacific/Auckland, Pacific/Bougainville, Pacific/Chatham, Pacific/Chuuk, Pacific/Easter, Pacific/Efate, Pacific/Enderbury, Pacific/Fakaofo, Pacific/Fiji, Pacific/Funafuti, Pacific/Galapagos, Pacific/Gambier, Pacific/Guadalcanal, Pacific/Guam, Pacific/Honolulu, Pacific/Johnston, Pacific/Kiritimati, Pacific/Kosrae, Pacific/Kwajalein, Pacific/Majuro, Pacific/Marquesas, Pacific/Midway, Pacific/Nauru, Pacific/Niue, Pacific/Norfolk, Pacific/Noumea, Pacific/Pago_Pago, Pacific/Palau, Pacific/Pitcairn, Pacific/Pohnpei, Pacific/Ponape, Pacific/Port_Moresby, Pacific/Rarotonga, Pacific/Saipan, Pacific/Samoa, Pacific/Tahiti, Pacific/Tarawa, Pacific/Tongatapu, Pacific/Truk, Pacific/Wake, Pacific/Wallis, Pacific/Yap, Poland, Portugal, ROC, ROK, Singapore, Turkey, UCT, US/Alaska, US/Aleutian, US/Arizona, US/Central, US/East-Indiana, US/Eastern, US/Hawaii, US/Indiana-Starke, US/Michigan, US/Mountain, US/Pacific, US/Samoa, UTC, Universal, W-SU, WET, Zulu | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineConfigurationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineCreateEchip**
> FacilityStrengthMachineBulkCreateResponse facilityStrengthMachineCreateEchip()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineCreateEchipRequest = {
  // number
  echipData: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineCreateEchip(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **echipData** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineBulkCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineDelete**
> facilityStrengthMachineDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineInitializerOTP**
> FacilityStrengthMachineInitializerOTPTokenResponse facilityStrengthMachineInitializerOTP()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineInitializerOTPRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineInitializerOTP(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineInitializerOTPTokenResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineInitializerToken**
> FacilityStrengthMachineInitializerTokenResponse facilityStrengthMachineInitializerToken()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineInitializerTokenRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineInitializerToken(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineInitializerTokenResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineList**
> FacilityStrengthMachineListResponse facilityStrengthMachineList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  model: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **model** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, model | (optional) defaults to 'model'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineMaintenanceRecordCreate**
> FacilityStrengthMachineMaintenanceRecordResponse facilityStrengthMachineMaintenanceRecordCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineMaintenanceRecordCreateRequest = {
  // number
  facilityStrengthMachineId: 8.14,
  // string
  log: log_example,
  // Date
  takenAt: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineMaintenanceRecordCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facilityStrengthMachineId** | [**number**] |  | defaults to undefined
 **log** | [**string**] |  | defaults to undefined
 **takenAt** | [**Date**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineMaintenanceRecordResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineMaintenanceRecordDelete**
> facilityStrengthMachineMaintenanceRecordDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineMaintenanceRecordDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineMaintenanceRecordDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineMaintenanceRecordList**
> FacilityStrengthMachineMaintenanceRecordListResponse facilityStrengthMachineMaintenanceRecordList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineMaintenanceRecordListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  facilityStrengthMachineId: 8.14,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // string (optional)
  log: log_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineMaintenanceRecordList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **facilityStrengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **log** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id | (optional) defaults to 'id'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineMaintenanceRecordListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineMaintenanceRecordShow**
> FacilityStrengthMachineMaintenanceRecordResponse facilityStrengthMachineMaintenanceRecordShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineMaintenanceRecordShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineMaintenanceRecordShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineMaintenanceRecordResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineShow**
> FacilityStrengthMachineResponse facilityStrengthMachineShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineSubscribe**
> SubscriptionResponse facilityStrengthMachineSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineUpdate**
> FacilityStrengthMachineResponse facilityStrengthMachineUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineUpdateRequest = {
  // number
  id: 8.14,
  // string (optional)
  location: location_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **location** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineUtilizationInstanceList**
> FacilityStrengthMachineUtilizationInstanceListResponse facilityStrengthMachineUtilizationInstanceList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineUtilizationInstanceListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  facilityStrengthMachineId: 8.14,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineUtilizationInstanceList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **facilityStrengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, takenAt | (optional) defaults to 'id'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineUtilizationInstanceListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityStrengthMachineUtilizationInstanceShow**
> FacilityStrengthMachineUtilizationInstanceResponse facilityStrengthMachineUtilizationInstanceShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilityStrengthMachineUtilizationInstanceShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityStrengthMachineUtilizationInstanceShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityStrengthMachineUtilizationInstanceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilitySubscribe**
> SubscriptionResponse facilitySubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiFacilitySubscribeRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilitySubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heartRateDataSetCreate**
> HeartRateDataSetResponse heartRateDataSetCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeartRateDataSetCreateRequest = {
  // string
  heartRateDataPoints: heartRateDataPoints_example,
  // string
  source: source_example,
  // boolean (optional)
  autoAttachSession: true,
  // number (optional)
  sessionId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heartRateDataSetCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **heartRateDataPoints** | [**string**] |  | defaults to undefined
 **source** | [**string**] |  | defaults to undefined
 **autoAttachSession** | [**boolean**] |  | (optional) defaults to undefined
 **sessionId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeartRateDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heartRateDataSetDelete**
> heartRateDataSetDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeartRateDataSetDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heartRateDataSetDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heartRateDataSetList**
> HeartRateDataSetListResponse heartRateDataSetList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeartRateDataSetListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  source: source_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heartRateDataSetList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, startedAt, endedAt, source, maxHeartRate, averageHeartRate | (optional) defaults to 'startedAt'
 **source** | [**string**] |  | (optional) defaults to undefined
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeartRateDataSetListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heartRateDataSetShow**
> HeartRateDataSetResponse heartRateDataSetShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeartRateDataSetShowRequest = {
  // number (optional)
  graph: 8.14,
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heartRateDataSetShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **graph** | [**number**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeartRateDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heartRateDataSetSubscribe**
> SubscriptionResponse heartRateDataSetSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeartRateDataSetSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heartRateDataSetSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heartRateDataSetUpdate**
> HeartRateDataSetResponse heartRateDataSetUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeartRateDataSetUpdateRequest = {
  // number
  id: 8.14,
  // number
  sessionId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heartRateDataSetUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **sessionId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeartRateDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heightMeasurementCreate**
> HeightMeasurementResponse heightMeasurementCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeightMeasurementCreateRequest = {
  // number
  metricHeight: 8.14,
  // string
  source: source_example,
  // Date
  takenAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heightMeasurementCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricHeight** | [**number**] |  | defaults to undefined
 **source** | [**string**] |  | defaults to undefined
 **takenAt** | [**Date**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeightMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heightMeasurementDelete**
> heightMeasurementDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeightMeasurementDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heightMeasurementDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heightMeasurementList**
> HeightMeasurementListResponse heightMeasurementList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeightMeasurementListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heightMeasurementList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, source, takenAt | (optional) defaults to 'takenAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeightMeasurementListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heightMeasurementShow**
> HeightMeasurementResponse heightMeasurementShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeightMeasurementShowRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heightMeasurementShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeightMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **heightMeasurementSubscribe**
> SubscriptionResponse heightMeasurementSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiHeightMeasurementSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.heightMeasurementSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesAppSessionCreate**
> MSeriesAppSessionResponse mSeriesAppSessionCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesAppSessionCreateRequest = {
  // number
  averageCadence: 8.14,
  // number
  averagePower: 8.14,
  // number
  averageWattsPerKilogram: 8.14,
  // string
  broadcastData: broadcastData_example,
  // number
  buildMajor: 8.14,
  // number
  buildMinor: 8.14,
  // number
  caloricBurn: 8.14,
  // number
  cardioMachineId: 8.14,
  // number
  distance: 8.14,
  // number
  duration: 8.14,
  // Date
  endedAt: 2013-10-20T19:20:30+01:00,
  // number
  energyOutput: 8.14,
  // number
  maxCadence: 8.14,
  // number
  maxPower: 8.14,
  // number
  maxWattsPerKilogram: 8.14,
  // number
  metricHeight: 8.14,
  // number
  metricWeight: 8.14,
  // number
  ordinalId: 8.14,
  // string
  source: source_example,
  // Date
  startedAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  averageMetabolicEquivalent: 8.14,
  // string (optional)
  segmentData: segmentData_example,
  // number (optional)
  stepCount: 8.14,
  // number (optional)
  targetFtp: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesAppSessionCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **averageCadence** | [**number**] |  | defaults to undefined
 **averagePower** | [**number**] |  | defaults to undefined
 **averageWattsPerKilogram** | [**number**] |  | defaults to undefined
 **broadcastData** | [**string**] |  | defaults to undefined
 **buildMajor** | [**number**] |  | defaults to undefined
 **buildMinor** | [**number**] |  | defaults to undefined
 **caloricBurn** | [**number**] |  | defaults to undefined
 **cardioMachineId** | [**number**] |  | defaults to undefined
 **distance** | [**number**] |  | defaults to undefined
 **duration** | [**number**] |  | defaults to undefined
 **endedAt** | [**Date**] |  | defaults to undefined
 **energyOutput** | [**number**] |  | defaults to undefined
 **maxCadence** | [**number**] |  | defaults to undefined
 **maxPower** | [**number**] |  | defaults to undefined
 **maxWattsPerKilogram** | [**number**] |  | defaults to undefined
 **metricHeight** | [**number**] |  | defaults to undefined
 **metricWeight** | [**number**] |  | defaults to undefined
 **ordinalId** | [**number**] |  | defaults to undefined
 **source** | [**string**] |  | defaults to undefined
 **startedAt** | [**Date**] |  | defaults to undefined
 **averageMetabolicEquivalent** | [**number**] |  | (optional) defaults to undefined
 **segmentData** | [**string**] |  | (optional) defaults to undefined
 **stepCount** | [**number**] |  | (optional) defaults to undefined
 **targetFtp** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesAppSessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesAppSessionDelete**
> mSeriesAppSessionDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesAppSessionDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesAppSessionDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesAppSessionExport**
> MSeriesAppSessionExportResponse mSeriesAppSessionExport()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesAppSessionExportRequest = {
  // string
  format: format_example,
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesAppSessionExport(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**string**] | Allowed values: tcx | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesAppSessionExportResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesAppSessionExportFlat**
> mSeriesAppSessionExportFlat()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesAppSessionExportFlatRequest = {
  // string
  filename: filename_example,
  // string (optional)
  userId: userId_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesAppSessionExportFlat(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesAppSessionList**
> MSeriesAppSessionListResponse mSeriesAppSessionList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesAppSessionListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesAppSessionList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, startedAt, endedAt | (optional) defaults to 'startedAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesAppSessionListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesAppSessionShow**
> MSeriesAppSessionResponse mSeriesAppSessionShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesAppSessionShowRequest = {
  // number (optional)
  graph: 8.14,
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesAppSessionShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **graph** | [**number**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesAppSessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeCreate**
> MSeriesChallengeResponse mSeriesChallengeCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeCreateRequest = {
  // string
  challengeType: challengeType_example,
  // string
  focus: focus_example,
  // boolean
  isPublic: true,
  // string
  name: name_example,
  // number
  userLimit: 8.14,
  // Date (optional)
  endAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  goal: 8.14,
  // Date (optional)
  startAt: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **challengeType** | [**string**] | Allowed values: timeBased, goalBased | defaults to undefined
 **focus** | [**string**] | Allowed values: points, caloricBurn, distance, duration | defaults to undefined
 **isPublic** | [**boolean**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **userLimit** | [**number**] |  | defaults to undefined
 **endAt** | [**Date**] |  | (optional) defaults to undefined
 **goal** | [**number**] |  | (optional) defaults to undefined
 **startAt** | [**Date**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesChallengeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeDelete**
> mSeriesChallengeDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeList**
> MSeriesChallengeListResponse mSeriesChallengeList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // boolean (optional)
  isCompleted: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  relationship: relationship_example,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **isCompleted** | [**boolean**] |  | (optional) defaults to false
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **relationship** | [**string**] | Allowed values: owned, joined | (optional) defaults to 'joined'
 **sort** | [**string**] | Allowed values: id, startAt, endAt, createdAt | (optional) defaults to 'startAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesChallengeListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeParticipantCreate**
> MSeriesChallengeParticipantResponse mSeriesChallengeParticipantCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeParticipantCreateRequest = {
  // string
  joinCode: joinCode_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeParticipantCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **joinCode** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesChallengeParticipantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeParticipantDelete**
> mSeriesChallengeParticipantDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeParticipantDeleteRequest = {
  // number
  mSeriesChallengeId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeParticipantDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mSeriesChallengeId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeParticipantList**
> MSeriesChallengeParticipantListResponse mSeriesChallengeParticipantList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeParticipantListRequest = {
  // string
  nameSearchQuery: nameSearchQuery_example,
  // boolean (optional)
  ascending: true,
  // string (optional)
  joinCode: joinCode_example,
  // number (optional)
  limit: 8.14,
  // number (optional)
  mSeriesChallengeId: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeParticipantList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameSearchQuery** | [**string**] |  | defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **joinCode** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **mSeriesChallengeId** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, joinedAt | (optional) defaults to 'name'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesChallengeParticipantListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeParticipantShow**
> MSeriesChallengeParticipantResponse mSeriesChallengeParticipantShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeParticipantShowRequest = {
  // string (optional)
  joinCode: joinCode_example,
  // number (optional)
  mSeriesChallengeId: 8.14,
  // number (optional)
  mSeriesChallengeParticipantId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeParticipantShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **joinCode** | [**string**] |  | (optional) defaults to undefined
 **mSeriesChallengeId** | [**number**] |  | (optional) defaults to undefined
 **mSeriesChallengeParticipantId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesChallengeParticipantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeShow**
> MSeriesChallengeResponse mSeriesChallengeShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeShowRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  joinCode: joinCode_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **joinCode** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesChallengeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesChallengeUpdate**
> MSeriesChallengeResponse mSeriesChallengeUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesChallengeUpdateRequest = {
  // number
  id: 8.14,
  // boolean (optional)
  isPublic: true,
  // string (optional)
  name: name_example,
  // number (optional)
  userLimit: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesChallengeUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **isPublic** | [**boolean**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **userLimit** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesChallengeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetCreate**
> MSeriesDataSetResponse mSeriesDataSetCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetCreateRequest = {
  // number
  buildMajor: 8.14,
  // number
  buildMinor: 8.14,
  // string
  mSeriesDataPoints: mSeriesDataPoints_example,
  // number
  ordinalId: 8.14,
  // string
  source: source_example,
  // boolean (optional)
  autoAttachSession: true,
  // number (optional)
  cardioMachineId: 8.14,
  // string (optional)
  machineType: machineType_example,
  // number (optional)
  sessionId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildMajor** | [**number**] |  | defaults to undefined
 **buildMinor** | [**number**] |  | defaults to undefined
 **mSeriesDataPoints** | [**string**] |  | defaults to undefined
 **ordinalId** | [**number**] |  | defaults to undefined
 **source** | [**string**] |  | defaults to undefined
 **autoAttachSession** | [**boolean**] |  | (optional) defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **machineType** | [**string**] |  | (optional) defaults to undefined
 **sessionId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetDelete**
> mSeriesDataSetDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetList**
> MSeriesDataSetListResponse mSeriesDataSetList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  source: source_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, startedAt, endedAt | (optional) defaults to 'startedAt'
 **source** | [**string**] |  | (optional) defaults to undefined
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesDataSetListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetReenqueue**
> mSeriesDataSetReenqueue()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetReenqueueRequest = {
  // number (optional)
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetReenqueue(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetSegmentShow**
> MSeriesDataSetSegmentResponse mSeriesDataSetSegmentShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetSegmentShowRequest = {
  // number (optional)
  graph: 8.14,
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetSegmentShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **graph** | [**number**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesDataSetSegmentResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetShow**
> MSeriesDataSetResponse mSeriesDataSetShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetShowRequest = {
  // number (optional)
  graph: 8.14,
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **graph** | [**number**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetSubscribe**
> SubscriptionResponse mSeriesDataSetSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesDataSetUpdate**
> MSeriesDataSetResponse mSeriesDataSetUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesDataSetUpdateRequest = {
  // number
  id: 8.14,
  // number
  mSeriesFtpMeasurementId: 8.14,
  // number
  sessionId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesDataSetUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **mSeriesFtpMeasurementId** | [**number**] |  | defaults to undefined
 **sessionId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesFtpMeasurementCreate**
> MSeriesFtpMeasurementResponse mSeriesFtpMeasurementCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesFtpMeasurementCreateRequest = {
  // string
  source: source_example,
  // Date
  takenAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  cardioMachineId: 8.14,
  // number (optional)
  ftp: 8.14,
  // string (optional)
  machineType: machineType_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesFtpMeasurementCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | [**string**] |  | defaults to undefined
 **takenAt** | [**Date**] |  | defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **ftp** | [**number**] |  | (optional) defaults to undefined
 **machineType** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesFtpMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesFtpMeasurementDelete**
> mSeriesFtpMeasurementDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesFtpMeasurementDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesFtpMeasurementDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesFtpMeasurementList**
> MSeriesFtpMeasurementListResponse mSeriesFtpMeasurementList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesFtpMeasurementListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  cardioMachineId: 8.14,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // string (optional)
  machineType: machineType_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  source: source_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesFtpMeasurementList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **machineType** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, takenAt, source | (optional) defaults to 'takenAt'
 **source** | [**string**] |  | (optional) defaults to undefined
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesFtpMeasurementListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesFtpMeasurementShow**
> MSeriesFtpMeasurementResponse mSeriesFtpMeasurementShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesFtpMeasurementShowRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesFtpMeasurementShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesFtpMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mSeriesProfileStatsShow**
> MSeriesProfileStatsResponse mSeriesProfileStatsShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMSeriesProfileStatsShowRequest = {
  // number
  cardioMachineId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.mSeriesProfileStatsShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioMachineId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MSeriesProfileStatsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineAdjustmentCreate**
> MachineAdjustmentResponse machineAdjustmentCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMachineAdjustmentCreateRequest = {
  // string
  model: model_example,
  // string (optional)
  leftPosition: leftPosition_example,
  // string (optional)
  rightPosition: rightPosition_example,
  // string (optional)
  seat: seat_example,
  // string (optional)
  start: start_example,
  // string (optional)
  stop: stop_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.machineAdjustmentCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**string**] |  | defaults to undefined
 **leftPosition** | [**string**] |  | (optional) defaults to undefined
 **rightPosition** | [**string**] |  | (optional) defaults to undefined
 **seat** | [**string**] |  | (optional) defaults to undefined
 **start** | [**string**] |  | (optional) defaults to undefined
 **stop** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MachineAdjustmentResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineAdjustmentDelete**
> machineAdjustmentDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMachineAdjustmentDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.machineAdjustmentDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineAdjustmentList**
> MachineAdjustmentListResponse machineAdjustmentList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMachineAdjustmentListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  model: model_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.machineAdjustmentList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **model** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MachineAdjustmentListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineAdjustmentShow**
> MachineAdjustmentResponse machineAdjustmentShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMachineAdjustmentShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.machineAdjustmentShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MachineAdjustmentResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machineAdjustmentUpdate**
> MachineAdjustmentResponse machineAdjustmentUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiMachineAdjustmentUpdateRequest = {
  // number
  id: 8.14,
  // string (optional)
  leftPosition: leftPosition_example,
  // string (optional)
  rightPosition: rightPosition_example,
  // string (optional)
  seat: seat_example,
  // string (optional)
  start: start_example,
  // string (optional)
  stop: stop_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.machineAdjustmentUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **leftPosition** | [**string**] |  | (optional) defaults to undefined
 **rightPosition** | [**string**] |  | (optional) defaults to undefined
 **seat** | [**string**] |  | (optional) defaults to undefined
 **start** | [**string**] |  | (optional) defaults to undefined
 **stop** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**MachineAdjustmentResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthAuthorize**
> OauthResponse oauthAuthorize()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiOauthAuthorizeRequest = {
  // string
  clientIdentifier: clientIdentifier_example,
  // string
  redirectUrl: redirectUrl_example,
  // string
  responseType: responseType_example,
  // string
  state: state_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthAuthorize(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientIdentifier** | [**string**] |  | defaults to undefined
 **redirectUrl** | [**string**] |  | defaults to undefined
 **responseType** | [**string**] | Allowed values: code, token | defaults to undefined
 **state** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OauthResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthDeauthorize**
> oauthDeauthorize()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiOauthDeauthorizeRequest = {
  // string
  accessToken: accessToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthDeauthorize(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthInitiate**
> RedirectResponse oauthInitiate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiOauthInitiateRequest = {
  // string
  redirect: redirect_example,
  // string
  service: service_example,
  // string
  type: type_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthInitiate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect** | [**string**] |  | defaults to undefined
 **service** | [**string**] | Allowed values: google, facebook, apple, strava, trainingpeaks | defaults to undefined
 **type** | [**string**] | Allowed values: login, connect | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**RedirectResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceDelete**
> oauthServiceDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiOauthServiceDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceList**
> OAuthServiceListResponse oauthServiceList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiOauthServiceListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  service: service_example,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **service** | [**string**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, service | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuthServiceListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthServiceShow**
> OAuthServiceResponse oauthServiceShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiOauthServiceShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthServiceShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuthServiceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthToken**
> oauthToken()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiOauthTokenRequest = {
  // string
  clientIdentifier: clientIdentifier_example,
  // string
  clientSecret: clientSecret_example,
  // string
  grantType: grantType_example,
  // string (optional)
  authorizationCode: authorizationCode_example,
  // string (optional)
  refreshToken: refreshToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.oauthToken(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientIdentifier** | [**string**] |  | defaults to undefined
 **clientSecret** | [**string**] |  | defaults to undefined
 **grantType** | [**string**] | Allowed values: authorization_code, refresh_token | defaults to undefined
 **authorizationCode** | [**string**] |  | (optional) defaults to undefined
 **refreshToken** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **primaryEmailAddressShow**
> PrimaryEmailAddressResponse primaryEmailAddressShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiPrimaryEmailAddressShowRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.primaryEmailAddressShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**PrimaryEmailAddressResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **primaryEmailAddressUpdate**
> PrimaryEmailAddressResponse primaryEmailAddressUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiPrimaryEmailAddressUpdateRequest = {
  // number
  emailAddressId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.primaryEmailAddressUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailAddressId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**PrimaryEmailAddressResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileShow**
> ProfileResponse profileShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiProfileShowRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.profileShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProfileResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileSubscribe**
> SubscriptionResponse profileSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiProfileSubscribeRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.profileSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileUpdate**
> ProfileResponse profileUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiProfileUpdateRequest = {
  // Date (optional)
  birthday: 2013-10-20T19:20:30+01:00,
  // string (optional)
  gender: gender_example,
  // string (optional)
  language: language_example,
  // string (optional)
  name: name_example,
  // string (optional)
  units: units_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.profileUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **birthday** | [**Date**] |  | (optional) defaults to undefined
 **gender** | [**string**] | Allowed values: m, f, o | (optional) defaults to undefined
 **language** | [**string**] | Allowed values: af, ar, az, be, bg, ca, cs, cy, da, de, dv, el, en, eo, es, et, eu, fa, fi, fo, fr, gl, gu, he, hi, hr, hu, hy, id, is, it, ja, ka, kk, kn, ko, kok, ky, lt, lv, mi, mk, mn, mr, ms, mt, nb, nl, ns, pa, pl, ps, pt, qu, ro, ru, sa, se, sk, sl, sq, sv, sw, ta, te, th, tl, tn, tr, tt, ts, uk, ur, uz, vi, xh, zh, zu | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **units** | [**string**] | Allowed values: metric, imperial | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProfileResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionDelete**
> sessionDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionEnd**
> SessionResponse sessionEnd()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionEndRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionEnd(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionList**
> SessionListResponse sessionList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // boolean (optional)
  open: true,
  // string (optional)
  requireExtendedDataType: requireExtendedDataType_example,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **open** | [**boolean**] |  | (optional) defaults to undefined
 **requireExtendedDataType** | [**string**] | Allowed values: mSeries, strength, heartRate, session, workout | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, startedAt, endedAt | (optional) defaults to 'startedAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanAttachSequence**
> SessionPlanResponse sessionPlanAttachSequence()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanAttachSequenceRequest = {
  // number
  id: 8.14,
  // number
  scheduleIndexes: 8.14,
  // number
  sequenceId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanAttachSequence(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **scheduleIndexes** | [**number**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanAttachSequenceTemplate**
> SessionPlanResponse sessionPlanAttachSequenceTemplate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanAttachSequenceTemplateRequest = {
  // number
  id: 8.14,
  // number
  scheduleIndexes: 8.14,
  // number
  sequenceTemplateId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanAttachSequenceTemplate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **scheduleIndexes** | [**number**] |  | defaults to undefined
 **sequenceTemplateId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanCloneTemplate**
> SessionPlanResponse sessionPlanCloneTemplate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanCloneTemplateRequest = {
  // boolean
  active: true,
  // Date
  startAt: 2013-10-20T19:20:30+01:00,
  // number
  templateId: 8.14,
  // Date (optional)
  endAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanCloneTemplate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] |  | defaults to undefined
 **startAt** | [**Date**] |  | defaults to undefined
 **templateId** | [**number**] |  | defaults to undefined
 **endAt** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanCreate**
> SessionPlanResponse sessionPlanCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanCreateRequest = {
  // boolean
  active: true,
  // boolean
  flexible: true,
  // string
  name: name_example,
  // boolean
  repeating: true,
  // number
  scheduleLength: 8.14,
  // string
  startAt: startAt_example,
  // string (optional)
  description: description_example,
  // string (optional)
  endAt: endAt_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] |  | defaults to undefined
 **flexible** | [**boolean**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **repeating** | [**boolean**] |  | defaults to undefined
 **scheduleLength** | [**number**] |  | defaults to undefined
 **startAt** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **endAt** | [**string**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanDelete**
> sessionPlanDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanDetachSequence**
> SessionPlanResponse sessionPlanDetachSequence()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanDetachSequenceRequest = {
  // number
  id: 8.14,
  // number
  scheduleIndexes: 8.14,
  // number
  sequenceId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanDetachSequence(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **scheduleIndexes** | [**number**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanList**
> SessionPlanListResponse sessionPlanList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanListRequest = {
  // boolean (optional)
  active: true,
  // boolean (optional)
  ascending: true,
  // string (optional)
  description: description_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] |  | (optional) defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **description** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, startAt, name, active, repeating, flexible, scheduleLength | (optional) defaults to 'startAt'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceCreate**
> SessionPlanSequenceResponse sessionPlanSequenceCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceCreateRequest = {
  // string
  name: name_example,
  // string (optional)
  description: description_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceDelete**
> sessionPlanSequenceDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceInstanceDelete**
> sessionPlanSequenceInstanceDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceInstanceDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceInstanceDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceInstanceList**
> SessionPlanSequenceInstanceListResponse sessionPlanSequenceInstanceList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceInstanceListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  description: description_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceInstanceList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **description** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceInstanceListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceInstanceShow**
> SessionPlanSequenceInstanceResponse sessionPlanSequenceInstanceShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceInstanceShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceInstanceShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceInstanceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceList**
> SessionPlanSequenceListResponse sessionPlanSequenceList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  description: description_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **description** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceShow**
> SessionPlanSequenceResponse sessionPlanSequenceShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceTemplateCreate**
> SessionPlanSequenceTemplateResponse sessionPlanSequenceTemplateCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceTemplateCreateRequest = {
  // string
  name: name_example,
  // string (optional)
  description: description_example,
  // string (optional)
  notes: notes_example,
  // boolean (optional)
  _public: true,
  // boolean (optional)
  searchable: true,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceTemplateCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **searchable** | [**boolean**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceTemplateDelete**
> sessionPlanSequenceTemplateDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceTemplateDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceTemplateDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceTemplateList**
> SessionPlanSequenceTemplateListResponse sessionPlanSequenceTemplateList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceTemplateListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  description: description_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // boolean (optional)
  _public: true,
  // boolean (optional)
  searchable: true,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceTemplateList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **description** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **searchable** | [**boolean**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, searchable, public | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceTemplateListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceTemplateShow**
> SessionPlanSequenceTemplateResponse sessionPlanSequenceTemplateShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceTemplateShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceTemplateShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceTemplateUpdate**
> SessionPlanSequenceTemplateResponse sessionPlanSequenceTemplateUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceTemplateUpdateRequest = {
  // number
  id: 8.14,
  // string
  name: name_example,
  // string (optional)
  description: description_example,
  // string (optional)
  notes: notes_example,
  // boolean (optional)
  _public: true,
  // boolean (optional)
  searchable: true,
  // string (optional)
  setIdOrder: setIdOrder_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceTemplateUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **searchable** | [**boolean**] |  | (optional) defaults to undefined
 **setIdOrder** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSequenceUpdate**
> SessionPlanSequenceResponse sessionPlanSequenceUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSequenceUpdateRequest = {
  // number
  id: 8.14,
  // string
  name: name_example,
  // string (optional)
  description: description_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  setIdOrder: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSequenceUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **setIdOrder** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSequenceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetCreateActivity**
> SessionPlanSetResponse sessionPlanSetCreateActivity()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetCreateActivityRequest = {
  // string
  name: name_example,
  // number
  sequenceId: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetCreateActivity(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetCreateCardio**
> SessionPlanSetResponse sessionPlanSetCreateCardio()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetCreateCardioRequest = {
  // number
  cardioExerciseId: 8.14,
  // number
  sequenceId: 8.14,
  // number (optional)
  caloricBurn: 8.14,
  // number (optional)
  cardioMachineId: 8.14,
  // number (optional)
  distance: 8.14,
  // number (optional)
  duration: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetCreateCardio(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioExerciseId** | [**number**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **caloricBurn** | [**number**] |  | (optional) defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **distance** | [**number**] |  | (optional) defaults to undefined
 **duration** | [**number**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetCreateStrength**
> SessionPlanSetResponse sessionPlanSetCreateStrength()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetCreateStrengthRequest = {
  // number
  sequenceId: 8.14,
  // number
  strengthExerciseId: 8.14,
  // string (optional)
  forceUnit: forceUnit_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  repetitionCount: 8.14,
  // number (optional)
  resistance: 8.14,
  // number (optional)
  strengthMachineId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetCreateStrength(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sequenceId** | [**number**] |  | defaults to undefined
 **strengthExerciseId** | [**number**] |  | defaults to undefined
 **forceUnit** | [**string**] | Allowed values: lb, kg, ne, er | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **repetitionCount** | [**number**] |  | (optional) defaults to undefined
 **resistance** | [**number**] |  | (optional) defaults to undefined
 **strengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetCreateStretch**
> SessionPlanSetResponse sessionPlanSetCreateStretch()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetCreateStretchRequest = {
  // string
  name: name_example,
  // number
  sequenceId: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetCreateStretch(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetDelete**
> sessionPlanSetDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetInstanceShow**
> SessionPlanSetInstanceResponse sessionPlanSetInstanceShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetInstanceShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetInstanceShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetInstanceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetInstanceUpdateActivity**
> SessionPlanSetInstanceResponse sessionPlanSetInstanceUpdateActivity()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetInstanceUpdateActivityRequest = {
  // boolean
  completed: true,
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetInstanceUpdateActivity(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completed** | [**boolean**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetInstanceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetInstanceUpdateCardio**
> SessionPlanSetInstanceResponse sessionPlanSetInstanceUpdateCardio()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetInstanceUpdateCardioRequest = {
  // boolean
  completed: true,
  // number
  id: 8.14,
  // number (optional)
  completedCaloricBurn: 8.14,
  // number (optional)
  completedDistance: 8.14,
  // number (optional)
  completedDuration: 8.14,
  // number (optional)
  mSeriesDataSetId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetInstanceUpdateCardio(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completed** | [**boolean**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **completedCaloricBurn** | [**number**] |  | (optional) defaults to undefined
 **completedDistance** | [**number**] |  | (optional) defaults to undefined
 **completedDuration** | [**number**] |  | (optional) defaults to undefined
 **mSeriesDataSetId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetInstanceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetInstanceUpdateStrength**
> SessionPlanSetInstanceResponse sessionPlanSetInstanceUpdateStrength()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetInstanceUpdateStrengthRequest = {
  // boolean
  completed: true,
  // number
  id: 8.14,
  // number (optional)
  completedForceUnit: 8.14,
  // number (optional)
  completedRepetitionCount: 8.14,
  // number (optional)
  completedResistance: 8.14,
  // number (optional)
  strengthMachineDataSetId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetInstanceUpdateStrength(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completed** | [**boolean**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **completedForceUnit** | [**number**] |  | (optional) defaults to undefined
 **completedRepetitionCount** | [**number**] |  | (optional) defaults to undefined
 **completedResistance** | [**number**] |  | (optional) defaults to undefined
 **strengthMachineDataSetId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetInstanceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetInstanceUpdateStretch**
> SessionPlanSetInstanceResponse sessionPlanSetInstanceUpdateStretch()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetInstanceUpdateStretchRequest = {
  // boolean
  completed: true,
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetInstanceUpdateStretch(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completed** | [**boolean**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetInstanceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetList**
> SessionPlanSetListResponse sessionPlanSetList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  type: type_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **type** | [**string**] | Allowed values: cardio, strength, stretch, activity | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetShow**
> SessionPlanSetResponse sessionPlanSetShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateCreateActivity**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateCreateActivity()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateCreateActivityRequest = {
  // string
  name: name_example,
  // number
  sequenceId: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateCreateActivity(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateCreateCardio**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateCreateCardio()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateCreateCardioRequest = {
  // number
  cardioExerciseId: 8.14,
  // number
  sequenceId: 8.14,
  // number (optional)
  caloricBurn: 8.14,
  // number (optional)
  cardioMachineId: 8.14,
  // number (optional)
  distance: 8.14,
  // number (optional)
  duration: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateCreateCardio(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioExerciseId** | [**number**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **caloricBurn** | [**number**] |  | (optional) defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **distance** | [**number**] |  | (optional) defaults to undefined
 **duration** | [**number**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateCreateStrength**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateCreateStrength()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateCreateStrengthRequest = {
  // number
  sequenceId: 8.14,
  // number
  strengthExerciseId: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  repetitionCount: 8.14,
  // number (optional)
  strengthMachineId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateCreateStrength(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sequenceId** | [**number**] |  | defaults to undefined
 **strengthExerciseId** | [**number**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **repetitionCount** | [**number**] |  | (optional) defaults to undefined
 **strengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateCreateStretch**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateCreateStretch()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateCreateStretchRequest = {
  // string
  name: name_example,
  // number
  sequenceId: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateCreateStretch(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateDelete**
> sessionPlanSetTemplateDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateList**
> SessionPlanSetTemplateListResponse sessionPlanSetTemplateList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  type: type_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **type** | [**string**] | Allowed values: cardio, strength, stretch, activity | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateShow**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateUpdateActivity**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateUpdateActivity()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateUpdateActivityRequest = {
  // number
  id: 8.14,
  // string
  name: name_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateUpdateActivity(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateUpdateCardio**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateUpdateCardio()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateUpdateCardioRequest = {
  // number
  cardioExerciseId: 8.14,
  // number
  id: 8.14,
  // number (optional)
  caloricBurn: 8.14,
  // number (optional)
  cardioMachineId: 8.14,
  // number (optional)
  distance: 8.14,
  // number (optional)
  duration: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateUpdateCardio(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioExerciseId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **caloricBurn** | [**number**] |  | (optional) defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **distance** | [**number**] |  | (optional) defaults to undefined
 **duration** | [**number**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateUpdateStrength**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateUpdateStrength()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateUpdateStrengthRequest = {
  // number
  id: 8.14,
  // number
  strengthExerciseId: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  repetitionCount: 8.14,
  // number (optional)
  strengthMachineId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateUpdateStrength(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **strengthExerciseId** | [**number**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **repetitionCount** | [**number**] |  | (optional) defaults to undefined
 **strengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetTemplateUpdateStretch**
> SessionPlanSetTemplateResponse sessionPlanSetTemplateUpdateStretch()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetTemplateUpdateStretchRequest = {
  // number
  id: 8.14,
  // string
  name: name_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetTemplateUpdateStretch(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetUpdateActivity**
> SessionPlanSetResponse sessionPlanSetUpdateActivity()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetUpdateActivityRequest = {
  // number
  id: 8.14,
  // string
  name: name_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetUpdateActivity(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetUpdateCardio**
> SessionPlanSetResponse sessionPlanSetUpdateCardio()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetUpdateCardioRequest = {
  // number
  cardioExerciseId: 8.14,
  // number
  id: 8.14,
  // number (optional)
  caloricBurn: 8.14,
  // number (optional)
  cardioMachineId: 8.14,
  // number (optional)
  distance: 8.14,
  // number (optional)
  duration: 8.14,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetUpdateCardio(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardioExerciseId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **caloricBurn** | [**number**] |  | (optional) defaults to undefined
 **cardioMachineId** | [**number**] |  | (optional) defaults to undefined
 **distance** | [**number**] |  | (optional) defaults to undefined
 **duration** | [**number**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetUpdateStrength**
> SessionPlanSetResponse sessionPlanSetUpdateStrength()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetUpdateStrengthRequest = {
  // number
  id: 8.14,
  // number
  strengthExerciseId: 8.14,
  // string (optional)
  forceUnit: forceUnit_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  repetitionCount: 8.14,
  // number (optional)
  resistance: 8.14,
  // number (optional)
  strengthMachineId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetUpdateStrength(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **strengthExerciseId** | [**number**] |  | defaults to undefined
 **forceUnit** | [**string**] | Allowed values: lb, kg, ne, er | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **repetitionCount** | [**number**] |  | (optional) defaults to undefined
 **resistance** | [**number**] |  | (optional) defaults to undefined
 **strengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanSetUpdateStretch**
> SessionPlanSetResponse sessionPlanSetUpdateStretch()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanSetUpdateStretchRequest = {
  // number
  id: 8.14,
  // string
  name: name_example,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanSetUpdateStretch(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanShow**
> SessionPlanResponse sessionPlanShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanTemplateAttachSequence**
> SessionPlanTemplateResponse sessionPlanTemplateAttachSequence()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanTemplateAttachSequenceRequest = {
  // number
  id: 8.14,
  // number
  scheduleIndexes: 8.14,
  // number
  sequenceId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanTemplateAttachSequence(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **scheduleIndexes** | [**number**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanTemplateCreate**
> SessionPlanTemplateResponse sessionPlanTemplateCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanTemplateCreateRequest = {
  // boolean
  flexible: true,
  // string
  name: name_example,
  // boolean
  repeating: true,
  // number
  scheduleLength: 8.14,
  // string (optional)
  description: description_example,
  // string (optional)
  notes: notes_example,
  // boolean (optional)
  _public: true,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanTemplateCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flexible** | [**boolean**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **repeating** | [**boolean**] |  | defaults to undefined
 **scheduleLength** | [**number**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanTemplateDelete**
> sessionPlanTemplateDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanTemplateDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanTemplateDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanTemplateDetachSequence**
> SessionPlanTemplateResponse sessionPlanTemplateDetachSequence()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanTemplateDetachSequenceRequest = {
  // number
  id: 8.14,
  // number
  scheduleIndexes: 8.14,
  // number
  sequenceId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanTemplateDetachSequence(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **scheduleIndexes** | [**number**] |  | defaults to undefined
 **sequenceId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanTemplateList**
> SessionPlanTemplateListResponse sessionPlanTemplateList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanTemplateListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  description: description_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // boolean (optional)
  _public: true,
  // boolean (optional)
  scheduleLength: true,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanTemplateList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **description** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **scheduleLength** | [**boolean**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, scheduleLength, public | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanTemplateListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanTemplateShow**
> SessionPlanTemplateResponse sessionPlanTemplateShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanTemplateShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanTemplateShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanTemplateUpdate**
> SessionPlanTemplateResponse sessionPlanTemplateUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanTemplateUpdateRequest = {
  // boolean
  flexible: true,
  // number
  id: 8.14,
  // string
  name: name_example,
  // boolean
  repeating: true,
  // number
  scheduleLength: 8.14,
  // string (optional)
  description: description_example,
  // string (optional)
  notes: notes_example,
  // boolean (optional)
  _public: true,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanTemplateUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flexible** | [**boolean**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **repeating** | [**boolean**] |  | defaults to undefined
 **scheduleLength** | [**number**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanTemplateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionPlanUpdate**
> SessionPlanResponse sessionPlanUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionPlanUpdateRequest = {
  // boolean
  active: true,
  // boolean
  flexible: true,
  // number
  id: 8.14,
  // string
  name: name_example,
  // boolean
  repeating: true,
  // number
  scheduleLength: 8.14,
  // Date
  startAt: 2013-10-20T19:20:30+01:00,
  // string (optional)
  description: description_example,
  // Date (optional)
  endAt: 2013-10-20T19:20:30+01:00,
  // string (optional)
  notes: notes_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionPlanUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] |  | defaults to undefined
 **flexible** | [**boolean**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **repeating** | [**boolean**] |  | defaults to undefined
 **scheduleLength** | [**number**] |  | defaults to undefined
 **startAt** | [**Date**] |  | defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **endAt** | [**Date**] |  | (optional) defaults to undefined
 **notes** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionPlanResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionShow**
> SessionResponse sessionShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionShowRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionStart**
> SessionResponse sessionStart()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionStartRequest = {
  // boolean (optional)
  continueFromLastSet: true,
  // boolean (optional)
  forceEndPrevious: true,
  // number (optional)
  sessionPlanSequenceAssignmentId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionStart(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continueFromLastSet** | [**boolean**] |  | (optional) defaults to undefined
 **forceEndPrevious** | [**boolean**] |  | (optional) defaults to undefined
 **sessionPlanSequenceAssignmentId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sessionSubscribe**
> SubscriptionResponse sessionSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiSessionSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.sessionSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseCreate**
> StrengthExerciseResponse strengthExerciseCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseCreateRequest = {
  // string
  category: category_example,
  // string
  defaultExerciseAlias: defaultExerciseAlias_example,
  // string
  humanMovement: humanMovement_example,
  // string
  plane: plane_example,
  // string (optional)
  movement: movement_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] | Allowed values: lowerBody, upperBody, core, explosive, complex | defaults to undefined
 **defaultExerciseAlias** | [**string**] |  | defaults to undefined
 **humanMovement** | [**string**] | Allowed values: unilateral, bilateral | defaults to undefined
 **plane** | [**string**] | Allowed values: sagittal, frontal, transverse | defaults to undefined
 **movement** | [**string**] | Allowed values: compound, isolation | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseDelete**
> strengthExerciseDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseList**
> StrengthExerciseListResponse strengthExerciseList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  category: category_example,
  // string (optional)
  defaultAlias: defaultAlias_example,
  // string (optional)
  humanMovement: humanMovement_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  movement: movement_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  plane: plane_example,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **category** | [**string**] | Allowed values: lowerBody, upperBody, core, explosive, complex | (optional) defaults to undefined
 **defaultAlias** | [**string**] |  | (optional) defaults to undefined
 **humanMovement** | [**string**] | Allowed values: unilateral, bilateral | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **movement** | [**string**] | Allowed values: compound, isolation | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **plane** | [**string**] | Allowed values: sagittal, frontal, transverse | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, defaultAlias, category, movement, plane, humanMovement | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseMuscleCreate**
> StrengthExerciseMuscleResponse strengthExerciseMuscleCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseMuscleCreateRequest = {
  // string
  muscle: muscle_example,
  // number
  strengthExerciseId: 8.14,
  // string
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseMuscleCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muscle** | [**string**] | Allowed values: omohyoid, levatorScapulae, sternohyoid, sternocleidomastoid, pectoralisMajor, pectoralisMinor, deltoid, brachialis, bicepsBrachii, tricepsBrachii, pronatorTeres, palmarisLongus, extensorPollicisBrevis, extensorPollicisLongus, abductorPollicisLongus, flexorCarpiRadialis, brachioradialis, flexorCarpiUlnaris, extensorCarpiUlnaris, serratusAnterior, internalOblique, externalOblique, rectusAdbominis, transversalis, sartorius, piriformis, pectineus, adductorLongus, adductorBrevis, gracilis, tensorFasciaeLatae, vastusMedialis, rectusFemoris, vastusIntermedius, vastusLateralis, gastrocnemius, soleius, tibialisAnterior, tibialisPosterior, peroneusLongus, peroneusBrevis, extensorDigitorumLongus, flexorHallucisLongus, flexorDigitorumLongus, plantaris, bicepsFemoris, adductorMagnus, semitendinosus, semimembranosus, gluteusMinimus, gluteusMedius, gluteusMaximus, psoasMinor, psoasMajor, iliacus, teresMinor, teresMajor, infraspinatus, rhomboidMinor, rhomboidMajor, trapezius, latissimusDorsi, semispinalis, erectorSpinae, multifidus | defaults to undefined
 **strengthExerciseId** | [**number**] |  | defaults to undefined
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseMuscleDelete**
> strengthExerciseMuscleDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseMuscleDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseMuscleDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseMuscleList**
> StrengthExerciseMuscleListResponse strengthExerciseMuscleList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseMuscleListRequest = {
  // number
  strengthExerciseId: 8.14,
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  muscle: muscle_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseMuscleList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strengthExerciseId** | [**number**] |  | defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **muscle** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, muscle, targetLevel | (optional) defaults to 'id'
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseMuscleListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseMuscleShow**
> StrengthExerciseMuscleResponse strengthExerciseMuscleShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseMuscleShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseMuscleShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseMuscleUpdate**
> StrengthExerciseMuscleResponse strengthExerciseMuscleUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseMuscleUpdateRequest = {
  // number
  id: 8.14,
  // string
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseMuscleUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseShow**
> StrengthExerciseResponse strengthExerciseShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseUpdate**
> StrengthExerciseResponse strengthExerciseUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseUpdateRequest = {
  // string
  category: category_example,
  // string
  humanMovement: humanMovement_example,
  // number
  id: 8.14,
  // string
  plane: plane_example,
  // string (optional)
  movement: movement_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] | Allowed values: lowerBody, upperBody, core, explosive, complex | defaults to undefined
 **humanMovement** | [**string**] | Allowed values: unilateral, bilateral | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **plane** | [**string**] | Allowed values: sagittal, frontal, transverse | defaults to undefined
 **movement** | [**string**] | Allowed values: compound, isolation | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseVariantCreate**
> StrengthExerciseVariantResponse strengthExerciseVariantCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseVariantCreateRequest = {
  // string
  equipmentMechanicalMovement: equipmentMechanicalMovement_example,
  // number
  strengthExerciseId: 8.14,
  // string
  variant: variant_example,
  // string (optional)
  attachment: attachment_example,
  // string (optional)
  instructionalImage: instructionalImage_example,
  // string (optional)
  instructionalVideo: instructionalVideo_example,
  // number (optional)
  strengthMachineId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseVariantCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **equipmentMechanicalMovement** | [**string**] | Allowed values: unilateral, bilateral | defaults to undefined
 **strengthExerciseId** | [**number**] |  | defaults to undefined
 **variant** | [**string**] | Allowed values: normal, singleArm, singleLeg, singleArmSingleLeg, doubleArmSingleLeg, alternate | defaults to undefined
 **attachment** | [**string**] | Allowed values: bar, rope, singleHandles, doubleHandles, ankleStrap, thighStrap, belt, dip, pullUpBar | (optional) defaults to undefined
 **instructionalImage** | [**string**] |  | (optional) defaults to undefined
 **instructionalVideo** | [**string**] |  | (optional) defaults to undefined
 **strengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseVariantDelete**
> strengthExerciseVariantDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseVariantDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseVariantDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseVariantList**
> StrengthExerciseVariantListResponse strengthExerciseVariantList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseVariantListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  attachment: attachment_example,
  // string (optional)
  equipmentMechanicalMovement: equipmentMechanicalMovement_example,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  strengthExerciseId: 8.14,
  // number (optional)
  strengthMachineId: 8.14,
  // string (optional)
  variant: variant_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseVariantList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **attachment** | [**string**] | Allowed values: bar, rope, singleHandles, doubleHandles, ankleStrap, thighStrap, belt, dip, pullUpBar | (optional) defaults to undefined
 **equipmentMechanicalMovement** | [**string**] | Allowed values: unilateral, bilateral | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, variant, attachment, equipmentMechanicalMovement | (optional) defaults to 'id'
 **strengthExerciseId** | [**number**] |  | (optional) defaults to undefined
 **strengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **variant** | [**string**] | Allowed values: normal, singleArm, singleLeg, singleArmSingleLeg, doubleArmSingleLeg, alternate | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseVariantListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseVariantShow**
> StrengthExerciseVariantResponse strengthExerciseVariantShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseVariantShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseVariantShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthExerciseVariantUpdate**
> StrengthExerciseVariantResponse strengthExerciseVariantUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthExerciseVariantUpdateRequest = {
  // string
  equipmentMechanicalMovement: equipmentMechanicalMovement_example,
  // number
  id: 8.14,
  // string
  variant: variant_example,
  // string (optional)
  attachment: attachment_example,
  // string (optional)
  instructionalImage: instructionalImage_example,
  // string (optional)
  instructionalVideo: instructionalVideo_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthExerciseVariantUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **equipmentMechanicalMovement** | [**string**] | Allowed values: unilateral, bilateral | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **variant** | [**string**] | Allowed values: normal, singleArm, singleLeg, singleArmSingleLeg, doubleArmSingleLeg, alternate | defaults to undefined
 **attachment** | [**string**] | Allowed values: bar, rope, singleHandles, doubleHandles, ankleStrap, thighStrap, belt, dip, pullUpBar | (optional) defaults to undefined
 **instructionalImage** | [**string**] |  | (optional) defaults to undefined
 **instructionalVideo** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetCreate**
> StrengthMachineDataSetResponse strengthMachineDataSetCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetCreateRequest = {
  // Date
  completedAt: 2013-10-20T19:20:30+01:00,
  // number
  peakPower: 8.14,
  // number
  repetitionCount: 8.14,
  // number
  resistance: 8.14,
  // string
  resistancePrecision: resistancePrecision_example,
  // string
  serial: serial_example,
  // number
  strengthMachineId: 8.14,
  // string
  version: version_example,
  // number
  work: 8.14,
  // number (optional)
  addedWeight: 8.14,
  // boolean (optional)
  autoAttachSession: true,
  // number (optional)
  chest: 8.14,
  // number (optional)
  distance: 8.14,
  // number (optional)
  forceUnit: 8.14,
  // number (optional)
  rom1: 8.14,
  // number (optional)
  rom2: 8.14,
  // number (optional)
  seat: 8.14,
  // number (optional)
  sessionId: 8.14,
  // number (optional)
  strengthExerciseId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completedAt** | [**Date**] |  | defaults to undefined
 **peakPower** | [**number**] |  | defaults to undefined
 **repetitionCount** | [**number**] |  | defaults to undefined
 **resistance** | [**number**] |  | defaults to undefined
 **resistancePrecision** | [**string**] | Allowed values: int, dec | defaults to undefined
 **serial** | [**string**] |  | defaults to undefined
 **strengthMachineId** | [**number**] |  | defaults to undefined
 **version** | [**string**] |  | defaults to undefined
 **work** | [**number**] |  | defaults to undefined
 **addedWeight** | [**number**] |  | (optional) defaults to undefined
 **autoAttachSession** | [**boolean**] |  | (optional) defaults to undefined
 **chest** | [**number**] |  | (optional) defaults to undefined
 **distance** | [**number**] |  | (optional) defaults to undefined
 **forceUnit** | [**number**] |  | (optional) defaults to undefined
 **rom1** | [**number**] |  | (optional) defaults to undefined
 **rom2** | [**number**] |  | (optional) defaults to undefined
 **seat** | [**number**] |  | (optional) defaults to undefined
 **sessionId** | [**number**] |  | (optional) defaults to undefined
 **strengthExerciseId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetCreateA500**
> StrengthMachineDataSetResponse strengthMachineDataSetCreateA500()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetCreateA500Request = {
  // string
  machineToken: machineToken_example,
  // string
  setData: setData_example,
  // string (optional)
  deflatedSampleData: deflatedSampleData_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetCreateA500(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **machineToken** | [**string**] |  | defaults to undefined
 **setData** | [**string**] |  | defaults to undefined
 **deflatedSampleData** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetDelete**
> strengthMachineDataSetDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetExport**
> StrengthMachineDataSetExportResponse strengthMachineDataSetExport()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetExportRequest = {
  // string
  format: format_example,
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetExport(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**string**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineDataSetExportResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetExportFlat**
> strengthMachineDataSetExportFlat()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetExportFlatRequest = {
  // string
  filename: filename_example,
  // number
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetExportFlat(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetList**
> StrengthMachineDataSetListResponse strengthMachineDataSetList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  strengthMachineId: 8.14,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, completedAt | (optional) defaults to 'completedAt'
 **strengthMachineId** | [**number**] |  | (optional) defaults to undefined
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineDataSetListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetShow**
> StrengthMachineDataSetResponse strengthMachineDataSetShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetSubscribe**
> SubscriptionResponse strengthMachineDataSetSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineDataSetUpdate**
> StrengthMachineDataSetResponse strengthMachineDataSetUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineDataSetUpdateRequest = {
  // number
  id: 8.14,
  // number
  sessionId: 8.14,
  // number (optional)
  strengthExerciseId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineDataSetUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **sessionId** | [**number**] |  | defaults to undefined
 **strengthExerciseId** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineDataSetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineHistoryList**
> StrengthMachineHistoryListResponse strengthMachineHistoryList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineHistoryListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineHistoryList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: completedAt | (optional) defaults to 'completedAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineHistoryListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineList**
> StrengthMachineListResponse strengthMachineList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  line: line_example,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  variant: variant_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **line** | [**string**] | Allowed values: a250, a300, a350, infinity, powerRack, a400, a500 | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, line | (optional) defaults to 'id'
 **variant** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineProfileStatsShow**
> StrengthMachineProfileStatsResponse strengthMachineProfileStatsShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineProfileStatsShowRequest = {
  // number
  strengthMachineId: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineProfileStatsShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strengthMachineId** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineProfileStatsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strengthMachineShow**
> StrengthMachineResponse strengthMachineShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStrengthMachineShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.strengthMachineShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StrengthMachineResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseCreate**
> StretchExerciseResponse stretchExerciseCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseCreateRequest = {
  // string
  defaultExerciseAlias: defaultExerciseAlias_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultExerciseAlias** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseDelete**
> stretchExerciseDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseList**
> StretchExerciseListResponse stretchExerciseList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  defaultAlias: 8.14,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **defaultAlias** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, defaultAlias | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseMuscleCreate**
> StretchExerciseMuscleResponse stretchExerciseMuscleCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseMuscleCreateRequest = {
  // string
  muscle: muscle_example,
  // number
  stretchExerciseId: 8.14,
  // string
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseMuscleCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muscle** | [**string**] | Allowed values: omohyoid, levatorScapulae, sternohyoid, sternocleidomastoid, pectoralisMajor, pectoralisMinor, deltoid, brachialis, bicepsBrachii, tricepsBrachii, pronatorTeres, palmarisLongus, extensorPollicisBrevis, extensorPollicisLongus, abductorPollicisLongus, flexorCarpiRadialis, brachioradialis, flexorCarpiUlnaris, extensorCarpiUlnaris, serratusAnterior, internalOblique, externalOblique, rectusAdbominis, transversalis, sartorius, piriformis, pectineus, adductorLongus, adductorBrevis, gracilis, tensorFasciaeLatae, vastusMedialis, rectusFemoris, vastusIntermedius, vastusLateralis, gastrocnemius, soleius, tibialisAnterior, tibialisPosterior, peroneusLongus, peroneusBrevis, extensorDigitorumLongus, flexorHallucisLongus, flexorDigitorumLongus, plantaris, bicepsFemoris, adductorMagnus, semitendinosus, semimembranosus, gluteusMinimus, gluteusMedius, gluteusMaximus, psoasMinor, psoasMajor, iliacus, teresMinor, teresMajor, infraspinatus, rhomboidMinor, rhomboidMajor, trapezius, latissimusDorsi, semispinalis, erectorSpinae, multifidus | defaults to undefined
 **stretchExerciseId** | [**number**] |  | defaults to undefined
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseMuscleDelete**
> stretchExerciseMuscleDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseMuscleDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseMuscleDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseMuscleList**
> StretchExerciseMuscleListResponse stretchExerciseMuscleList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseMuscleListRequest = {
  // number
  stretchExerciseId: 8.14,
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  muscle: muscle_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseMuscleList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stretchExerciseId** | [**number**] |  | defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **muscle** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, muscle, targetLevel | (optional) defaults to 'id'
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseMuscleListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseMuscleShow**
> StretchExerciseMuscleResponse stretchExerciseMuscleShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseMuscleShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseMuscleShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseMuscleUpdate**
> StretchExerciseMuscleResponse stretchExerciseMuscleUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseMuscleUpdateRequest = {
  // number
  id: 8.14,
  // string
  targetLevel: targetLevel_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseMuscleUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **targetLevel** | [**string**] | Allowed values: primary, secondary, tertiary | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseMuscleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseShow**
> StretchExerciseResponse stretchExerciseShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseUpdate**
> StretchExerciseResponse stretchExerciseUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseUpdateRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseVariantCreate**
> StretchExerciseVariantResponse stretchExerciseVariantCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseVariantCreateRequest = {
  // number
  stretchExerciseId: 8.14,
  // string
  variant: variant_example,
  // string (optional)
  instructionalImage: instructionalImage_example,
  // string (optional)
  instructionalVideo: instructionalVideo_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseVariantCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stretchExerciseId** | [**number**] |  | defaults to undefined
 **variant** | [**string**] | Allowed values: normal | defaults to undefined
 **instructionalImage** | [**string**] |  | (optional) defaults to undefined
 **instructionalVideo** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseVariantDelete**
> stretchExerciseVariantDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseVariantDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseVariantDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseVariantList**
> StretchExerciseVariantListResponse stretchExerciseVariantList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseVariantListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  stretchExerciseId: 8.14,
  // string (optional)
  variant: variant_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseVariantList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, variant | (optional) defaults to 'id'
 **stretchExerciseId** | [**number**] |  | (optional) defaults to undefined
 **variant** | [**string**] | Allowed values: normal | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseVariantListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseVariantShow**
> StretchExerciseVariantResponse stretchExerciseVariantShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseVariantShowRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseVariantShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stretchExerciseVariantUpdate**
> StretchExerciseVariantResponse stretchExerciseVariantUpdate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiStretchExerciseVariantUpdateRequest = {
  // number
  id: 8.14,
  // string
  variant: variant_example,
  // string (optional)
  instructionalImage: instructionalImage_example,
  // string (optional)
  instructionalVideo: instructionalVideo_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.stretchExerciseVariantUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **variant** | [**string**] | Allowed values: normal | defaults to undefined
 **instructionalImage** | [**string**] |  | (optional) defaults to undefined
 **instructionalVideo** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StretchExerciseVariantResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userApplicationAuthorizationDeveloperDelete**
> userApplicationAuthorizationDeveloperDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserApplicationAuthorizationDeveloperDeleteRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userApplicationAuthorizationDeveloperDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userApplicationAuthorizationDeveloperList**
> UserApplicationAuthorizationDeveloperListResponse userApplicationAuthorizationDeveloperList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserApplicationAuthorizationDeveloperListRequest = {
  // number
  applicationId: 8.14,
  // number
  developmentAccountId: 8.14,
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userApplicationAuthorizationDeveloperList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] |  | defaults to undefined
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, userId | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserApplicationAuthorizationDeveloperListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userApplicationAuthorizationDeveloperShow**
> UserApplicationAuthorizationResponse userApplicationAuthorizationDeveloperShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserApplicationAuthorizationDeveloperShowRequest = {
  // number
  developmentAccountId: 8.14,
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userApplicationAuthorizationDeveloperShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **developmentAccountId** | [**number**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserApplicationAuthorizationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userApplicationAuthorizationUserDelete**
> userApplicationAuthorizationUserDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserApplicationAuthorizationUserDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userApplicationAuthorizationUserDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userApplicationAuthorizationUserList**
> UserApplicationAuthorizationUserListResponse userApplicationAuthorizationUserList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserApplicationAuthorizationUserListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userApplicationAuthorizationUserList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, userId | (optional) defaults to 'id'
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserApplicationAuthorizationUserListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userApplicationAuthorizationUserShow**
> UserApplicationAuthorizationResponse userApplicationAuthorizationUserShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserApplicationAuthorizationUserShowRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userApplicationAuthorizationUserShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserApplicationAuthorizationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userCreate**
> UserResponse userCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserCreateRequest = {
  // number
  email: 8.14,
  // string
  password: password_example,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**number**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userCreateBasic**
> userCreateBasic()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserCreateBasicRequest = {
  // number
  email: 8.14,
  // string
  password: password_example,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userCreateBasic(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**number**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userDelete**
> userDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserDeleteRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInBodyIntegrationCreate**
> UserInBodyIntegrationResponse userInBodyIntegrationCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserInBodyIntegrationCreateRequest = {
  // number
  userId: 8.14,
  // string
  userToken: userToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userInBodyIntegrationCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **userToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserInBodyIntegrationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInBodyIntegrationDelete**
> userInBodyIntegrationDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserInBodyIntegrationDeleteRequest = {
  // number
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userInBodyIntegrationDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInBodyIntegrationShow**
> UserInBodyIntegrationResponse userInBodyIntegrationShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserInBodyIntegrationShowRequest = {
  // number
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userInBodyIntegrationShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserInBodyIntegrationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInBodyIntegrationSync**
> userInBodyIntegrationSync()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserInBodyIntegrationSyncRequest = {
  // number
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userInBodyIntegrationSync(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userShow**
> UserResponse userShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserShowRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userSubscribe**
> SubscriptionResponse userSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiUserSubscribeRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementCreate**
> WeightMeasurementResponse weightMeasurementCreate()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiWeightMeasurementCreateRequest = {
  // number
  metricWeight: 8.14,
  // string
  source: source_example,
  // Date
  takenAt: 2013-10-20T19:20:30+01:00,
  // number (optional)
  bodyFatPercentage: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricWeight** | [**number**] |  | defaults to undefined
 **source** | [**string**] |  | defaults to undefined
 **takenAt** | [**Date**] |  | defaults to undefined
 **bodyFatPercentage** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**WeightMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementDelete**
> weightMeasurementDelete()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiWeightMeasurementDeleteRequest = {
  // number
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementImportInBody**
> WeightMeasurementResponse weightMeasurementImportInBody()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiWeightMeasurementImportInBodyRequest = {
  // string
  jsonString: jsonString_example,
  // number
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementImportInBody(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonString** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**WeightMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementImportInBodyCSV**
> WeightMeasurementListResponse weightMeasurementImportInBodyCSV()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiWeightMeasurementImportInBodyCSVRequest = {
  // string
  csvString: csvString_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementImportInBodyCSV(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **csvString** | [**string**] |  | defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**WeightMeasurementListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementList**
> WeightMeasurementListResponse weightMeasurementList()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiWeightMeasurementListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, source, takenAt | (optional) defaults to 'takenAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**WeightMeasurementListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementShow**
> WeightMeasurementResponse weightMeasurementShow()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiWeightMeasurementShowRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**WeightMeasurementResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **weightMeasurementSubscribe**
> SubscriptionResponse weightMeasurementSubscribe()


### Example


```typescript
import { MetricsApi } from '@keiser/metrics-sdk-typescript';
import * as fs from 'fs';

const api = new MetricsApi();

let body:MetricsApiWeightMeasurementSubscribeRequest = {
  // number (optional)
  id: 8.14,
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.weightMeasurementSubscribe(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

