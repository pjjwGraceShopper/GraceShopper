
# Terminal Refund

Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian debit network) payment refunds.

## Structure

`Terminal Refund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | A unique ID for this `TerminalRefund`.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `255` |
| `refund_id` | `string` | Optional | The reference to the payment refund created by completing this `TerminalRefund`. |
| `payment_id` | `string` | Required | The unique ID of the payment being refunded.<br>**Constraints**: *Minimum Length*: `1` |
| `order_id` | `string` | Optional | The reference to the Square order ID for the payment identified by the `payment_id`. |
| `amount_money` | [`Money`](../../doc/models/money.md) | Required | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `reason` | `string` | Required | A description of the reason for the refund.<br>**Constraints**: *Maximum Length*: `192` |
| `device_id` | `string` | Required | The unique ID of the device intended for this `TerminalRefund`.<br>The Id can be retrieved from /v2/devices api. |
| `deadline_duration` | `string` | Optional | The RFC 3339 duration, after which the refund is automatically canceled.<br>A `TerminalRefund` that is `PENDING` is automatically `CANCELED` and has a cancellation reason<br>of `TIMED_OUT`.<br><br>Default: 5 minutes from creation.<br><br>Maximum: 5 minutes |
| `status` | `string` | Optional | The status of the `TerminalRefund`.<br>Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, or `COMPLETED`. |
| `cancel_reason` | [`str (Action Cancel Reason)`](../../doc/models/action-cancel-reason.md) | Optional | - |
| `created_at` | `string` | Optional | The time when the `TerminalRefund` was created, as an RFC 3339 timestamp. |
| `updated_at` | `string` | Optional | The time when the `TerminalRefund` was last updated, as an RFC 3339 timestamp. |
| `app_id` | `string` | Optional | The ID of the application that created the refund. |
| `location_id` | `string` | Optional | The location of the device where the `TerminalRefund` was directed. |

## Example (as JSON)

```json
{
  "id": "id0",
  "refund_id": "refund_id4",
  "payment_id": "payment_id0",
  "order_id": "order_id6",
  "amount_money": {
    "amount": 186,
    "currency": "NGN"
  },
  "reason": "reason4",
  "device_id": "device_id6",
  "deadline_duration": "deadline_duration8",
  "status": "status8"
}
```

