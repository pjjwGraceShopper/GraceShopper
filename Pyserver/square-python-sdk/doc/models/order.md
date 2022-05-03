
# Order

Contains all information related to a single order to process with Square,
including line items that specify the products to purchase. `Order` objects also
include information about any associated tenders, refunds, and returns.

All Connect V2 Transactions have all been converted to Orders including all associated
itemization data.

## Structure

`Order`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The order's unique ID. |
| `location_id` | `string` | Required | The ID of the seller location that this order is associated with.<br>**Constraints**: *Minimum Length*: `1` |
| `reference_id` | `string` | Optional | A client-specified ID to associate an entity in another system<br>with this order.<br>**Constraints**: *Maximum Length*: `40` |
| `source` | [`Order Source`](../../doc/models/order-source.md) | Optional | Represents the origination details of an order. |
| `customer_id` | `string` | Optional | The ID of the [customer](../../doc/models/customer.md) associated with the order.<br><br>__IMPORTANT:__ You should specify a `customer_id` if you want the corresponding payment transactions<br>to be explicitly linked to the customer in the Seller Dashboard. If this field is omitted, the<br>`customer_id` assigned to any underlying `Payment` objects is ignored and might result in the<br>creation of new [instant profiles](https://developer.squareup.com/docs/customers-api/what-it-does#instant-profiles).<br>**Constraints**: *Maximum Length*: `191` |
| `line_items` | [`List of Order Line Item`](../../doc/models/order-line-item.md) | Optional | The line items included in the order. |
| `taxes` | [`List of Order Line Item Tax`](../../doc/models/order-line-item-tax.md) | Optional | The list of all taxes associated with the order.<br><br>Taxes can be scoped to either `ORDER` or `LINE_ITEM`. For taxes with `LINE_ITEM` scope, an<br>`OrderLineItemAppliedTax` must be added to each line item that the tax applies to. For taxes<br>with `ORDER` scope, the server generates an `OrderLineItemAppliedTax` for every line item.<br><br>On reads, each tax in the list includes the total amount of that tax applied to the order.<br><br>__IMPORTANT__: If `LINE_ITEM` scope is set on any taxes in this field, using the deprecated<br>`line_items.taxes` field results in an error. Use `line_items.applied_taxes`<br>instead. |
| `discounts` | [`List of Order Line Item Discount`](../../doc/models/order-line-item-discount.md) | Optional | The list of all discounts associated with the order.<br><br>Discounts can be scoped to either `ORDER` or `LINE_ITEM`. For discounts scoped to `LINE_ITEM`,<br>an `OrderLineItemAppliedDiscount` must be added to each line item that the discount applies to.<br>For discounts with `ORDER` scope, the server generates an `OrderLineItemAppliedDiscount`<br>for every line item.<br><br>__IMPORTANT__: If `LINE_ITEM` scope is set on any discounts in this field, using the deprecated<br>`line_items.discounts` field results in an error. Use `line_items.applied_discounts`<br>instead. |
| `service_charges` | [`List of Order Service Charge`](../../doc/models/order-service-charge.md) | Optional | A list of service charges applied to the order. |
| `fulfillments` | [`List of Order Fulfillment`](../../doc/models/order-fulfillment.md) | Optional | Details about order fulfillment.<br><br>Orders can only be created with at most one fulfillment. However, orders returned<br>by the API might contain multiple fulfillments. |
| `returns` | [`List of Order Return`](../../doc/models/order-return.md) | Optional | A collection of items from sale orders being returned in this one. Normally part of an<br>itemized return or exchange. There is exactly one `Return` object per sale `Order` being<br>referenced. |
| `return_amounts` | [`Order Money Amounts`](../../doc/models/order-money-amounts.md) | Optional | A collection of various money amounts. |
| `net_amounts` | [`Order Money Amounts`](../../doc/models/order-money-amounts.md) | Optional | A collection of various money amounts. |
| `rounding_adjustment` | [`Order Rounding Adjustment`](../../doc/models/order-rounding-adjustment.md) | Optional | A rounding adjustment of the money being returned. Commonly used to apply cash rounding<br>when the minimum unit of the account is smaller than the lowest physical denomination of the currency. |
| `tenders` | [`List of Tender`](../../doc/models/tender.md) | Optional | The tenders that were used to pay for the order. |
| `refunds` | [`List of Refund`](../../doc/models/refund.md) | Optional | The refunds that are part of this order. |
| `metadata` | `dict` | Optional | Application-defined data attached to this order. Metadata fields are intended<br>to store descriptive references or associations with an entity in another system or store brief<br>information about the object. Square does not process this field; it only stores and returns it<br>in relevant API calls. Do not use metadata to store any sensitive information (such as personally<br>identifiable information or card details).<br><br>Keys written by applications must be 60 characters or less and must be in the character set<br>`[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed<br>with a namespace, separated from the key with a ':' character.<br><br>Values have a maximum length of 255 characters.<br><br>An application can have up to 10 entries per metadata field.<br><br>Entries written by applications are private and can only be read or modified by the same<br>application.<br><br>For more information, see  [Metadata](https://developer.squareup.com/docs/build-basics/metadata). |
| `created_at` | `string` | Optional | The timestamp for when the order was created, in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `updated_at` | `string` | Optional | The timestamp for when the order was last updated, in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `closed_at` | `string` | Optional | The timestamp for when the order reached a terminal [state](../../doc/models/order-state.md), in RFC 3339 format (for example "2016-09-04T23:59:33.123Z"). |
| `state` | [`str (Order State)`](../../doc/models/order-state.md) | Optional | The state of the order. |
| `version` | `int` | Optional | The version number, which is incremented each time an update is committed to the order.<br>Orders not created through the API do not include a version number and<br>therefore cannot be updated.<br><br>[Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders). |
| `total_money` | [`Money`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `total_tax_money` | [`Money`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `total_discount_money` | [`Money`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `total_tip_money` | [`Money`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `total_service_charge_money` | [`Money`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `ticket_name` | `string` | Optional | A short-term identifier for the order (such as a customer first name, table number, or<br>auto-generated order number that resets daily). For orders created in Square Point of Sale, the `ticket_name` is<br>printed on in-person tickets and stubs. It converts to the `kitchen_printing.name` field in the<br>bill cart feature details.<br>**Constraints**: *Maximum Length*: `30` |
| `pricing_options` | [`Order Pricing Options`](../../doc/models/order-pricing-options.md) | Optional | Pricing options for an order. The options affect how the order's price is calculated.<br>They can be used, for example, to apply automatic price adjustments that are based on preconfigured<br>[pricing rules](../../doc/models/catalog-pricing-rule.md). |
| `rewards` | [`List of Order Reward`](../../doc/models/order-reward.md) | Optional | A set-like list of Rewards that have been added to the Order. |

## Example (as JSON)

```json
{
  "id": "id0",
  "location_id": "location_id4",
  "reference_id": "reference_id2",
  "source": {
    "name": "name4"
  },
  "customer_id": "customer_id8",
  "line_items": [
    {
      "uid": "uid9",
      "name": "name9",
      "quantity": "quantity5",
      "quantity_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name7",
            "abbreviation": "abbreviation9"
          },
          "area_unit": "IMPERIAL_SQUARE_YARD",
          "length_unit": "METRIC_CENTIMETER",
          "volume_unit": "GENERIC_PINT",
          "weight_unit": "METRIC_KILOGRAM"
        },
        "precision": 199,
        "catalog_object_id": "catalog_object_id9",
        "catalog_version": 133
      },
      "note": "note5",
      "catalog_object_id": "catalog_object_id7"
    },
    {
      "uid": "uid0",
      "name": "name0",
      "quantity": "quantity6",
      "quantity_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name8",
            "abbreviation": "abbreviation0"
          },
          "area_unit": "IMPERIAL_SQUARE_MILE",
          "length_unit": "METRIC_MILLIMETER",
          "volume_unit": "GENERIC_QUART",
          "weight_unit": "METRIC_GRAM"
        },
        "precision": 200,
        "catalog_object_id": "catalog_object_id0",
        "catalog_version": 134
      },
      "note": "note6",
      "catalog_object_id": "catalog_object_id6"
    },
    {
      "uid": "uid1",
      "name": "name1",
      "quantity": "quantity7",
      "quantity_unit": {
        "measurement_unit": {
          "custom_unit": {
            "name": "name9",
            "abbreviation": "abbreviation1"
          },
          "area_unit": "METRIC_SQUARE_CENTIMETER",
          "length_unit": "IMPERIAL_MILE",
          "volume_unit": "GENERIC_GALLON",
          "weight_unit": "METRIC_MILLIGRAM"
        },
        "precision": 201,
        "catalog_object_id": "catalog_object_id1",
        "catalog_version": 135
      },
      "note": "note7",
      "catalog_object_id": "catalog_object_id5"
    }
  ]
}
```

