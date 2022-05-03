
# Create Location Request

The request object for the [CreateLocation](../../doc/api/locations.md#create-location) endpoint.

## Structure

`Create Location Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `location` | [`Location`](../../doc/models/location.md) | Optional | Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). |

## Example (as JSON)

```json
{
  "location": {
    "address": {
      "address_line_1": "1234 Peachtree St. NE",
      "administrative_district_level_1": "GA",
      "locality": "Atlanta",
      "postal_code": "30309"
    },
    "description": "Midtown Atlanta store",
    "name": "Midtown"
  }
}
```

