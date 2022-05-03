
# List Cash Drawer Shift Events Request

## Structure

`List Cash Drawer Shift Events Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location_id` | `string` | Required | The ID of the location to list cash drawer shifts for.<br>**Constraints**: *Minimum Length*: `1` |
| `limit` | `int` | Optional | Number of resources to be returned in a page of results (200 by<br>default, 1000 max).<br>**Constraints**: `<= 1000` |
| `cursor` | `string` | Optional | Opaque cursor for fetching the next page of results. |

## Example (as JSON)

```json
{
  "location_id": "location_id4",
  "limit": 172,
  "cursor": "cursor6"
}
```

