
# Catalog Category

A category to which a `CatalogItem` instance belongs.

## Structure

`Catalog Category`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Optional | The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `image_ids` | `List of string` | Optional | The IDs of images associated with this `CatalogCategory` instance.<br>Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications. |

## Example (as JSON)

```json
{
  "object": {
    "category_data": {
      "name": "Beverages"
    },
    "id": "#Beverages",
    "present_at_all_locations": true,
    "type": "CATEGORY"
  }
}
```

