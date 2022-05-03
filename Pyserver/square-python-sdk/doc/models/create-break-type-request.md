
# Create Break Type Request

A request to create a new `BreakType`.

## Structure

`Create Break Type Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotency_key` | `string` | Optional | A unique string value to ensure the idempotency of the operation.<br>**Constraints**: *Maximum Length*: `128` |
| `break_type` | [`Break Type`](../../doc/models/break-type.md) | Required | A defined break template that sets an expectation for possible `Break`<br>instances on a `Shift`. |

## Example (as JSON)

```json
{
  "break_type": {
    "break_name": "Lunch Break",
    "expected_duration": "PT30M",
    "is_paid": true,
    "location_id": "CGJN03P1D08GF"
  },
  "idempotency_key": "PAD3NG5KSN2GL"
}
```

