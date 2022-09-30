onBeforeServe(() => {
  console.log(`onBeforeServe (JS)`)
})

/*
      app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
          // add new "GET /api/hello" route
          e.Router.AddRoute(echo.Route{
              Method: http.MethodGet,
              Path:   "/api/hello",
              Handler: func(c echo.Context) error {
                  return c.String(200, "Hello world!")
              },
              Middlewares: []echo.MiddlewareFunc{
                  apis.RequireAdminOrUserAuth(),
              },
          })
  
          return nil
      })
  */

// OnModelBeforeCreate hook is triggered before inserting a new
// entry in the DB, allowing you to modify or validate the stored data.
onModelBeforeCreate((e) => {
  console.log(`OnModelBeforeCreate`)
})

// OnModelAfterCreate hook is triggered after successfully
// inserting a new entry in the DB.
onModelAfterCreate((e) => {
  console.log(`OnModelAfterCreate`)
})

// OnModelBeforeUpdate hook is triggered before updating existing
// entry in the DB, allowing you to modify or validate the stored data.
onModelBeforeUpdate((e) => {
  console.log(`OnModelBeforeUpdate`)
})

// OnModelAfterUpdate hook is triggered after successfully updating
// existing entry in the DB.
onModelAfterUpdate((e) => {
  console.log(`OnModelAfterUpdate`)
})

// OnModelBeforeDelete hook is triggered before deleting an
// existing entry from the DB.
onModelBeforeDelete((e) => {
  console.log(`OnModelBeforeDelete`)
})

// OnModelAfterDelete is triggered after successfully deleting an
// existing entry from the DB.
onModelAfterDelete((e) => {
  console.log(`OnModelAfterDelete`)
})

// ---------------------------------------------------------------
// Mailer event hooks
// ---------------------------------------------------------------

// OnMailerBeforeAdminResetPasswordSend hook is triggered right before
// sending a password reset email to an admin.
//
// Could be used to send your own custom email template if
// [hook.StopPropagation] is returned in one of its listeners.
onMailerBeforeAdminResetPasswordSend((e) => {
  console.log(`OnMailerBeforeAdminResetPasswordSend`)
})

// OnMailerAfterAdminResetPasswordSend hook is triggered after
// admin password reset email was successfully sent.
onMailerAfterAdminResetPasswordSend((mailerAdminEvent) => {
  console.log(``)
})

// OnMailerBeforeUserResetPasswordSend hook is triggered right before
// sending a password reset email to a user.
//
// Could be used to send your own custom email template if
// [hook.StopPropagation] is returned in one of its listeners.
onMailerBeforeUserResetPasswordSend((e) => {
  console.log(`OnMailerBeforeUserResetPasswordSend`)
})

// OnMailerAfterUserResetPasswordSend hook is triggered after
// a user password reset email was successfully sent.
onMailerAfterUserResetPasswordSend((e) => {
  console.log(`OnMailerAfterUserResetPasswordSend`)
})

// OnMailerBeforeUserVerificationSend hook is triggered right before
// sending a verification email to a user.
//
// Could be used to send your own custom email template if
// [hook.StopPropagation] is returned in one of its listeners.
onMailerBeforeUserVerificationSend((e) => {
  console.log(`OnMailerBeforeUserVerificationSend`)
})

// OnMailerAfterUserVerificationSend hook is triggered after a user
// verification email was successfully sent.
onMailerAfterUserVerificationSend((e) => {
  console.log(`OnMailerAfterUserVerificationSend`)
})

// OnMailerBeforeUserChangeEmailSend hook is triggered right before
// sending a confirmation new address email to a a user.
//
// Could be used to send your own custom email template if
// [hook.StopPropagation] is returned in one of its listeners.
onMailerBeforeUserChangeEmailSend((e) => {
  console.log(`OnMailerBeforeUserChangeEmailSend`)
})

// OnMailerAfterUserChangeEmailSend hook is triggered after a user
// change address email was successfully sent.
onMailerAfterUserChangeEmailSend((e) => {
  console.log(`OnMailerAfterUserChangeEmailSend`)
})

// ---------------------------------------------------------------
// Realtime API event hooks
// ---------------------------------------------------------------

// OnRealtimeConnectRequest hook is triggered right before establishing
// the SSE client connection.
onRealtimeConnectRequest((e) => {
  console.log(`OnRealtimeConnectRequest`)
})

// OnRealtimeBeforeSubscribeRequest hook is triggered before changing
// the client subscriptions, allowing you to further validate and
// modify the submitted change.
onRealtimeBeforeSubscribeRequest((e) => {
  console.log(`OnRealtimeBeforeSubscribeRequest`)
})

// OnRealtimeAfterSubscribeRequest hook is triggered after the client
// subscriptions were successfully changed.
onRealtimeAfterSubscribeRequest((e) => {
  console.log(`OnRealtimeAfterSubscribeRequest`)
})

// ---------------------------------------------------------------
// Settings API event hooks
// ---------------------------------------------------------------

// OnSettingsListRequest hook is triggered on each successful
// API Settings list request.
//
// Could be used to validate or modify the response before
// returning it to the client.
onSettingsListRequest((e) => {
  console.log(`OnSettingsListRequest`)
})

// OnSettingsBeforeUpdateRequest hook is triggered before each API
// Settings update request (after request data load and before settings persistence).
//
// Could be used to additionally validate the request data or
// implement completely different persistence behavior
// (returning [hook.StopPropagation]).
onSettingsBeforeUpdateRequest((e) => {
  console.log(`OnSettingsBeforeUpdateRequest`)
})

// OnSettingsAfterUpdateRequest hook is triggered after each
// successful API Settings update request.
onSettingsAfterUpdateRequest((e) => {
  console.log(`OnSettingsAfterUpdateRequest`)
})

// ---------------------------------------------------------------
// File API event hooks
// ---------------------------------------------------------------

// OnFileDownloadRequest hook is triggered before each API File download request.
//
// Could be used to validate or modify the file response before
// returning it to the client.
onFileDownloadRequest((e) => {
  console.log(`OnFileDownloadRequest`)
})

// ---------------------------------------------------------------
// Admin API event hooks
// ---------------------------------------------------------------

// OnAdminsListRequest hook is triggered on each API Admins list request.
//
// Could be used to validate or modify the response before returning it to the client.
onAdminsListRequest((e) => {
  console.log(`OnAdminsListRequest`)
})

// OnAdminViewRequest hook is triggered on each API Admin view request.
//
// Could be used to validate or modify the response before returning it to the client.
onAdminViewRequest((e) => {
  console.log(`OnAdminViewRequest`)
})

// OnAdminBeforeCreateRequest hook is triggered before each API
// Admin create request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onAdminBeforeCreateRequest((e) => {
  console.log(`OnAdminBeforeCreateRequest`)
})

// OnAdminAfterCreateRequest hook is triggered after each
// successful API Admin create request.
onAdminAfterCreateRequest((e) => {
  console.log(`OnAdminAfterCreateRequest`)
})

// OnAdminBeforeUpdateRequest hook is triggered before each API
// Admin update request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onAdminBeforeUpdateRequest((e) => {
  console.log(`OnAdminBeforeUpdateRequest`)
})

// OnAdminAfterUpdateRequest hook is triggered after each
// successful API Admin update request.
onAdminAfterUpdateRequest((e) => {
  console.log(`OnAdminAfterUpdateRequest`)
})

// OnAdminBeforeDeleteRequest hook is triggered before each API
// Admin delete request (after model load and before actual deletion).
//
// Could be used to additionally validate the request data or implement
// completely different delete behavior (returning [hook.StopPropagation]).
onAdminBeforeDeleteRequest((e) => {
  console.log(`OnAdminBeforeDeleteRequest`)
})

// OnAdminAfterDeleteRequest hook is triggered after each
// successful API Admin delete request.
onAdminAfterDeleteRequest((e) => {
  console.log(`OnAdminAfterDeleteRequest`)
})

// OnAdminAuthRequest hook is triggered on each successful API Admin
// authentication request (sign-in, token refresh, etc.).
//
// Could be used to additionally validate or modify the
// authenticated admin data and token.
onAdminAuthRequest((e) => {
  console.log(`OnAdminAuthRequest`)
})

// ---------------------------------------------------------------
// User API event hooks
// ---------------------------------------------------------------

// OnUsersListRequest hook is triggered on each API Users list request.
//
// Could be used to validate or modify the response before returning it to the client.
onUsersListRequest((e) => {
  console.log(`OnUsersListRequest`)
})

// OnUserViewRequest hook is triggered on each API User view request.
//
// Could be used to validate or modify the response before returning it to the client.
onUserViewRequest((e) => {
  console.log(`OnUserViewRequest`)
})

// OnUserBeforeCreateRequest hook is triggered before each API User
// create request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onUserBeforeCreateRequest((e) => {
  console.log(`OnUserBeforeCreateRequest`)
})

// OnUserAfterCreateRequest hook is triggered after each
// successful API User create request.
onUserAfterCreateRequest((e) => {
  console.log(`OnUserAfterCreateRequest`)
})

// OnUserBeforeUpdateRequest hook is triggered before each API User
// update request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onUserBeforeUpdateRequest((e) => {
  console.log(`OnUserBeforeUpdateRequest`)
})

// OnUserAfterUpdateRequest hook is triggered after each
// successful API User update request.
onUserAfterUpdateRequest((e) => {
  console.log(`OnUserAfterUpdateRequest`)
})

// OnUserBeforeDeleteRequest hook is triggered before each API User
// delete request (after model load and before actual deletion).
//
// Could be used to additionally validate the request data or implement
// completely different delete behavior (returning [hook.StopPropagation]).
onUserBeforeDeleteRequest((e) => {
  console.log(`OnUserBeforeDeleteRequest`)
})

// OnUserAfterDeleteRequest hook is triggered after each
// successful API User delete request.
onUserAfterDeleteRequest((e) => {
  console.log(`OnUserAfterDeleteRequest`)
})

// OnUserAuthRequest hook is triggered on each successful API User
// authentication request (sign-in, token refresh, etc.).
//
// Could be used to additionally validate or modify the
// authenticated user data and token.
onUserAuthRequest((e) => {
  console.log(`OnUserAuthRequest`)
})

// OnUserListExternalAuths hook is triggered on each API user's external auths list request.
//
// Could be used to validate or modify the response before returning it to the client.
onUserListExternalAuths((e) => {
  console.log(`OnUserListExternalAuths`)
})

// OnUserBeforeUnlinkExternalAuthRequest hook is triggered before each API user's
// external auth unlink request (after models load and before the actual relation deletion).
//
// Could be used to additionally validate the request data or implement
// completely different delete behavior (returning [hook.StopPropagation]).
onUserBeforeUnlinkExternalAuthRequest((e) => {
  console.log(`OnUserBeforeUnlinkExternalAuthRequest`)
})

// OnUserAfterUnlinkExternalAuthRequest hook is triggered after each
// successful API user's external auth unlink request.
onUserAfterUnlinkExternalAuthRequest((e) => {
  console.log(`OnUserAfterUnlinkExternalAuthRequest`)
})

// ---------------------------------------------------------------
// Record API event hooks
// ---------------------------------------------------------------

// OnRecordsListRequest hook is triggered on each API Records list request.
//
// Could be used to validate or modify the response before returning it to the client.
onRecordsListRequest((e) => {
  console.log(`OnRecordsListRequest`)
})

// OnRecordViewRequest hook is triggered on each API Record view request.
//
// Could be used to validate or modify the response before returning it to the client.
onRecordViewRequest((e) => {
  console.log(`OnRecordViewRequest`)
})

// OnRecordBeforeCreateRequest hook is triggered before each API Record
// create request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onRecordBeforeCreateRequest((e) => {
  console.log(`OnRecordBeforeCreateRequest`)
})

// OnRecordAfterCreateRequest hook is triggered after each
// successful API Record create request.
onRecordAfterCreateRequest((e) => {
  console.log(`OnRecordAfterCreateRequest`)
})

// OnRecordBeforeUpdateRequest hook is triggered before each API Record
// update request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onRecordBeforeUpdateRequest((e) => {
  console.log(`OnRecordBeforeUpdateRequest`)
})

// OnRecordAfterUpdateRequest hook is triggered after each
// successful API Record update request.
onRecordAfterUpdateRequest((e) => {
  console.log(`OnRecordAfterUpdateRequest`)
})

// OnRecordBeforeDeleteRequest hook is triggered before each API Record
// delete request (after model load and before actual deletion).
//
// Could be used to additionally validate the request data or implement
// completely different delete behavior (returning [hook.StopPropagation]).
onRecordBeforeDeleteRequest((e) => {
  console.log(`OnRecordBeforeDeleteRequest`)
})

// OnRecordAfterDeleteRequest hook is triggered after each
// successful API Record delete request.
onRecordAfterDeleteRequest((e) => {
  console.log(`OnRecordAfterDeleteRequest`)
})

// ---------------------------------------------------------------
// Collection API event hooks
// ---------------------------------------------------------------

// OnCollectionsListRequest hook is triggered on each API Collections list request.
//
// Could be used to validate or modify the response before returning it to the client.
onCollectionsListRequest((e) => {
  console.log(`OnCollectionsListRequest`)
})

// OnCollectionViewRequest hook is triggered on each API Collection view request.
//
// Could be used to validate or modify the response before returning it to the client.
onCollectionViewRequest((e) => {
  console.log(`OnCollectionViewRequest`)
})

// OnCollectionBeforeCreateRequest hook is triggered before each API Collection
// create request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onCollectionBeforeCreateRequest((e) => {
  console.log(`OnCollectionBeforeCreateRequest`)
})

// OnCollectionAfterCreateRequest hook is triggered after each
// successful API Collection create request.
onCollectionAfterCreateRequest((e) => {
  console.log(`OnCollectionAfterCreateRequest`)
})

// OnCollectionBeforeUpdateRequest hook is triggered before each API Collection
// update request (after request data load and before model persistence).
//
// Could be used to additionally validate the request data or implement
// completely different persistence behavior (returning [hook.StopPropagation]).
onCollectionBeforeUpdateRequest((e) => {
  console.log(`OnCollectionBeforeUpdateRequest`)
})

// OnCollectionAfterUpdateRequest hook is triggered after each
// successful API Collection update request.
onCollectionAfterUpdateRequest((e) => {
  console.log(`OnCollectionAfterUpdateRequest`)
})

// OnCollectionBeforeDeleteRequest hook is triggered before each API
// Collection delete request (after model load and before actual deletion).
//
// Could be used to additionally validate the request data or implement
// completely different delete behavior (returning [hook.StopPropagation]).
onCollectionBeforeDeleteRequest((e) => {
  console.log(`OnCollectionBeforeDeleteRequest`)
})

// OnCollectionAfterDeleteRequest hook is triggered after each
// successful API Collection delete request.
onCollectionAfterDeleteRequest((e) => {
  console.log(`OnCollectionAfterDeleteRequest`)
})

// OnCollectionsBeforeImportRequest hook is triggered before each API
// collections import request (after request data load and before the actual import).
//
// Could be used to additionally validate the imported collections or
// to implement completely different import behavior (returning [hook.StopPropagation]).
onCollectionsBeforeImportRequest((e) => {
  console.log(`OnCollectionsBeforeImportRequest`)
})

// OnCollectionsAfterImportRequest hook is triggered after each
// successful API collections import request.
onCollectionsAfterImportRequest((e) => {
  console.log(`OnCollectionsAfterImportRequest`)
})

onBeforeServe((e) => {
  console.log(`onBeforeServe`)

  // e.Router.addRoute({
  //   method: HttpMethods.Get,
  //   path: '/api/hello',
  //   handler: (context) => {
  //     return context.string(200, 'Hello world!')
  //   },
  //   middlewares: [CoreMiddleware.requireAdminOrUserAuth()],
  // })
})
