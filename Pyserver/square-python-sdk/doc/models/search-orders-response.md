
# Search Orders Response

Either the `order_entries` or `orders` field is set, depending on whether
`return_entries` is set on the [SearchOrdersRequest](../../doc/api/orders.md#search-orders).

## Structure

`Search Orders Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order_entries` | [`List of Order Entry`](../../doc/models/order-entry.md) | Optional | A list of [OrderEntries](../../doc/models/order-entry.md) that fit the query<br>conditions. The list is populated only if `return_entries` is set to `true` in the request. |
| `orders` | [`List of Order`](../../doc/models/order.md) | Optional | A list of<br>[Order](../../doc/models/order.md) objects that match the query conditions. The list is populated only if<br>`return_entries` is set to `false` in the request. |
| `cursor` | `string` | Optional | The pagination cursor to be used in a subsequent request. If unset,<br>this is the final response.<br>For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |
| `errors` | [`List of Error`](../../doc/models/error.md) | Optional | [Errors](../../doc/models/error.md) encountered during the search. |

## Example (as JSON)

```json
{
  "cursor": "123",
  "order_entries": [
    {
      "location_id": "057P5VYJ4A5X1",
      "order_id": "CAISEM82RcpmcFBM0TfOyiHV3es",
      "version": 1
    },
    {
      "location_id": "18YC4JDH91E1H",
      "order_id": "CAISENgvlJ6jLWAzERDzjyHVybY"
    },
    {
      "location_id": "057P5VYJ4A5X1",
      "order_id": "CAISEM52YcpmcWAzERDOyiWS3ty"
    }
  ]
}
```

