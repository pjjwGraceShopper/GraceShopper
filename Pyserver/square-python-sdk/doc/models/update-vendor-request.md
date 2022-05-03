
# Update Vendor Request

Represents an input to a call to [UpdateVendor](../../doc/api/vendors.md#update-vendor).

## Structure

`Update Vendor Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotency_key` | `string` | Optional | A client-supplied, universally unique identifier (UUID) for the<br>request.<br><br>See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the<br>[API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more<br>information.<br>**Constraints**: *Maximum Length*: `128` |
| `vendor` | [`Vendor`](../../doc/models/vendor.md) | Required | Represents a supplier to a seller. |

## Example (as JSON)

```json
{
  "idempotency_key": "8fc6a5b0-9fe8-4b46-b46b-2ef95793abbe",
  "vendor": {
    "id": "INV_V_JDKYHBWT1D4F8MFH63DBMEN8Y4",
    "name": "Jack's Chicken Shack",
    "status": "ACTIVE",
    "version": 1
  }
}
```

