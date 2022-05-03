# O Auth

```python
o_auth_api = client.o_auth
```

## Class Name

`OAuthApi`

## Methods

* [Renew Token](../../doc/api/o-auth.md#renew-token)
* [Revoke Token](../../doc/api/o-auth.md#revoke-token)
* [Obtain Token](../../doc/api/o-auth.md#obtain-token)


# Renew Token

**This endpoint is deprecated.**

`RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
[Migrate from Renew to Refresh OAuth Tokens](https://developer.squareup.com/docs/oauth-api/migrate-to-refresh-tokens).

Renews an OAuth access token before it expires.

OAuth access tokens besides your application's personal access token expire after 30 days.
You can also renew expired tokens within 15 days of their expiration.
You cannot renew an access token that has been expired for more than 15 days.
Instead, the associated user must recomplete the OAuth flow from the beginning.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the Credentials
page in the [Developer Dashboard](https://developer.squareup.com/apps).

:information_source: **Note** This endpoint does not require authentication.

```python
def renew_token(self,
               client_id,
               body,
               authorization)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `client_id` | `string` | Template, Required | Your application ID, which is available in the OAuth page in the [Developer Dashboard](https://developer.squareup.com/apps). |
| `body` | [`Renew Token Request`](../../doc/models/renew-token-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `authorization` | `string` | Header, Required | Client APPLICATION_SECRET |

## Response Type

[`Renew Token Response`](../../doc/models/renew-token-response.md)

## Example Usage

```python
client_id = 'client_id8'
body = {}
body['access_token'] = 'ACCESS_TOKEN'
authorization = 'Client CLIENT_SECRET'

result = o_auth_api.renew_token(client_id, body, authorization)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Revoke Token

Revokes an access token generated with the OAuth flow.

If an account has more than one OAuth access token for your application, this
endpoint revokes all of them, regardless of which token you specify. When an
OAuth access token is revoked, all of the active subscriptions associated
with that OAuth token are canceled immediately.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the OAuth
page for your application on the Developer Dashboard.

:information_source: **Note** This endpoint does not require authentication.

```python
def revoke_token(self,
                body,
                authorization)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Revoke Token Request`](../../doc/models/revoke-token-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `authorization` | `string` | Header, Required | Client APPLICATION_SECRET |

## Response Type

[`Revoke Token Response`](../../doc/models/revoke-token-response.md)

## Example Usage

```python
body = {}
body['client_id'] = 'CLIENT_ID'
body['access_token'] = 'ACCESS_TOKEN'
body['merchant_id'] = 'merchant_id6'
body['revoke_only_access_token'] = False
authorization = 'Client CLIENT_SECRET'

result = o_auth_api.revoke_token(body, authorization)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Obtain Token

Returns an OAuth access token and a refresh token unless the
`short_lived` parameter is set to `true`, in which case the endpoint
returns only an access token.

The `grant_type` parameter specifies the type of OAuth request. If
`grant_type` is `authorization_code`, you must include the authorization
code you received when a seller granted you authorization. If `grant_type`
is `refresh_token`, you must provide a valid refresh token. If you are using
an old version of the Square APIs (prior to March 13, 2019), `grant_type`
can be `migration_token` and you must provide a valid migration token.

You can use the `scopes` parameter to limit the set of permissions granted
to the access token and refresh token. You can use the `short_lived` parameter
to create an access token that expires in 24 hours.

__Note:__ OAuth tokens should be encrypted and stored on a secure server.
Application clients should never interact directly with OAuth tokens.

:information_source: **Note** This endpoint does not require authentication.

```python
def obtain_token(self,
                body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Obtain Token Request`](../../doc/models/obtain-token-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

## Response Type

[`Obtain Token Response`](../../doc/models/obtain-token-response.md)

## Example Usage

```python
body = {}
body['client_id'] = 'APPLICATION_ID'
body['client_secret'] = 'APPLICATION_SECRET'
body['code'] = 'CODE_FROM_AUTHORIZE'
body['redirect_uri'] = 'redirect_uri4'
body['grant_type'] = 'authorization_code'
body['refresh_token'] = 'refresh_token6'
body['migration_token'] = 'migration_token4'
body['scopes'] = ['scopes6', 'scopes7', 'scopes8']

result = o_auth_api.obtain_token(body)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```

