# Vendors

```python
vendors_api = client.vendors
```

## Class Name

`VendorsApi`

## Methods

* [Bulk Create Vendors](../../doc/api/vendors.md#bulk-create-vendors)
* [Bulk Retrieve Vendors](../../doc/api/vendors.md#bulk-retrieve-vendors)
* [Bulk Update Vendors](../../doc/api/vendors.md#bulk-update-vendors)
* [Create Vendor](../../doc/api/vendors.md#create-vendor)
* [Search Vendors](../../doc/api/vendors.md#search-vendors)
* [Retrieve Vendor](../../doc/api/vendors.md#retrieve-vendor)
* [Update Vendor](../../doc/api/vendors.md#update-vendor)


# Bulk Create Vendors

Creates one or more [Vendor](../../doc/models/vendor.md) objects to represent suppliers to a seller.

```python
def bulk_create_vendors(self,
                       body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Bulk Create Vendors Request`](../../doc/models/bulk-create-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

## Response Type

[`Bulk Create Vendors Response`](../../doc/models/bulk-create-vendors-response.md)

## Example Usage

```python
body = {}
body['vendors'] = {}

result = vendors_api.bulk_create_vendors(body)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Bulk Retrieve Vendors

Retrieves one or more vendors of specified [Vendor](../../doc/models/vendor.md) IDs.

```python
def bulk_retrieve_vendors(self,
                         body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Bulk Retrieve Vendors Request`](../../doc/models/bulk-retrieve-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

## Response Type

[`Bulk Retrieve Vendors Response`](../../doc/models/bulk-retrieve-vendors-response.md)

## Example Usage

```python
body = {}
body['vendor_ids'] = ['INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4']

result = vendors_api.bulk_retrieve_vendors(body)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Bulk Update Vendors

Updates one or more of existing [Vendor](../../doc/models/vendor.md) objects as suppliers to a seller.

```python
def bulk_update_vendors(self,
                       body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Bulk Update Vendors Request`](../../doc/models/bulk-update-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

## Response Type

[`Bulk Update Vendors Response`](../../doc/models/bulk-update-vendors-response.md)

## Example Usage

```python
body = {}
body['vendors'] = {}
body['vendors']['vendor'] = {}

result = vendors_api.bulk_update_vendors(body)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Create Vendor

Creates a single [Vendor](../../doc/models/vendor.md) object to represent a supplier to a seller.

```python
def create_vendor(self,
                 body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Create Vendor Request`](../../doc/models/create-vendor-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

## Response Type

[`Create Vendor Response`](../../doc/models/create-vendor-response.md)

## Example Usage

```python
body = {}
body['idempotency_key'] = 'idempotency_key2'
body['vendor'] = {}
body['vendor']['id'] = 'id2'
body['vendor']['created_at'] = 'created_at0'
body['vendor']['updated_at'] = 'updated_at8'
body['vendor']['name'] = 'name2'
body['vendor']['address'] = {}
body['vendor']['address']['address_line_1'] = 'address_line_18'
body['vendor']['address']['address_line_2'] = 'address_line_28'
body['vendor']['address']['address_line_3'] = 'address_line_34'
body['vendor']['address']['locality'] = 'locality8'
body['vendor']['address']['sublocality'] = 'sublocality8'

result = vendors_api.create_vendor(body)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Search Vendors

Searches for vendors using a filter against supported [Vendor](../../doc/models/vendor.md) properties and a supported sorter.

```python
def search_vendors(self,
                  body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Search Vendors Request`](../../doc/models/search-vendors-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

## Response Type

[`Search Vendors Response`](../../doc/models/search-vendors-response.md)

## Example Usage

```python
body = {}
body['filter'] = {}
body['filter']['name'] = ['name8', 'name9']
body['filter']['status'] = ['ACTIVE']
body['sort'] = {}
body['sort']['field'] = 'NAME'
body['sort']['order'] = 'DESC'
body['cursor'] = 'cursor0'

result = vendors_api.search_vendors(body)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Retrieve Vendor

Retrieves the vendor of a specified [Vendor](../../doc/models/vendor.md) ID.

```python
def retrieve_vendor(self,
                   vendor_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendor_id` | `string` | Template, Required | ID of the [Vendor](../../doc/models/vendor.md) to retrieve. |

## Response Type

[`Retrieve Vendor Response`](../../doc/models/retrieve-vendor-response.md)

## Example Usage

```python
vendor_id = 'vendor_id8'

result = vendors_api.retrieve_vendor(vendor_id)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```


# Update Vendor

Updates an existing [Vendor](../../doc/models/vendor.md) object as a supplier to a seller.

```python
def update_vendor(self,
                 body,
                 vendor_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Update Vendor Request`](../../doc/models/update-vendor-request.md) | Body, Required | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |
| `vendor_id` | `string` | Template, Required | - |

## Response Type

[`Update Vendor Response`](../../doc/models/update-vendor-response.md)

## Example Usage

```python
body = {}
body['idempotency_key'] = '8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe'
body['vendor'] = {}
body['vendor']['id'] = 'INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4'
body['vendor']['created_at'] = 'created_at0'
body['vendor']['updated_at'] = 'updated_at8'
body['vendor']['name'] = 'Jack\'s Chicken Shack'
body['vendor']['address'] = {}
body['vendor']['address']['address_line_1'] = 'address_line_18'
body['vendor']['address']['address_line_2'] = 'address_line_28'
body['vendor']['address']['address_line_3'] = 'address_line_34'
body['vendor']['address']['locality'] = 'locality8'
body['vendor']['address']['sublocality'] = 'sublocality8'
body['vendor']['version'] = 1
body['vendor']['status'] = 'ACTIVE'
vendor_id = 'vendor_id8'

result = vendors_api.update_vendor(body, vendor_id)

if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)
```

