
# Customer

Represents a Square customer profile in the Customer Directory of a Square seller.

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | A unique Square-assigned ID for the customer profile.<br><br>If you need this ID for an API request, use the ID returned when you created the customer profile or call the [SearchCustomers](../../doc/api/customers.md#search-customers)<br>or [ListCustomers](../../doc/api/customers.md#list-customers) endpoint. |
| `created_at` | `string` | Optional | The timestamp when the customer profile was created, in RFC 3339 format. |
| `updated_at` | `string` | Optional | The timestamp when the customer profile was last updated, in RFC 3339 format. |
| `cards` | [`List of Card`](../../doc/models/card.md) | Optional | Payment details of the credit, debit, and gift cards stored on file for the customer profile.<br><br>DEPRECATED at version 2021-06-16. Replaced by calling [ListCards](../../doc/api/cards.md#list-cards) (for credit and debit cards on file)<br>or [ListGiftCards](../../doc/api/gift-cards.md#list-gift-cards) (for gift cards on file) and including the `customer_id` query parameter.<br>For more information, see [Migration notes](https://developer.squareup.com/docs/customers-api/what-it-does#migrate-customer-cards). |
| `given_name` | `string` | Optional | The given name (that is, the first name) associated with the customer profile. |
| `family_name` | `string` | Optional | The family name (that is, the last name) associated with the customer profile. |
| `nickname` | `string` | Optional | A nickname for the customer profile. |
| `company_name` | `string` | Optional | A business name associated with the customer profile. |
| `email_address` | `string` | Optional | The email address associated with the customer profile. |
| `address` | [`Address`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `phone_number` | `string` | Optional | The phone number associated with the customer profile. A phone number can contain 9–16 digits, with an optional `+` prefix. |
| `birthday` | `string` | Optional | The birthday associated with the customer profile, in RFC 3339 format. The year is optional. The timezone and time are not allowed.<br>For example, `0000-09-21T00:00:00-00:00` represents a birthday on September 21 and `1998-09-21T00:00:00-00:00` represents a birthday on September 21, 1998. |
| `reference_id` | `string` | Optional | An optional second ID used to associate the customer profile with an<br>entity in another system. |
| `note` | `string` | Optional | A custom note associated with the customer profile. |
| `preferences` | [`Customer Preferences`](../../doc/models/customer-preferences.md) | Optional | Represents communication preferences for the customer profile. |
| `creation_source` | [`str (Customer Creation Source)`](../../doc/models/customer-creation-source.md) | Optional | Indicates the method used to create the customer profile. |
| `group_ids` | `List of string` | Optional | The IDs of customer groups the customer belongs to. |
| `segment_ids` | `List of string` | Optional | The IDs of segments the customer belongs to. |
| `version` | `long\|int` | Optional | The Square-assigned version number of the customer profile. The version number is incremented each time an update is committed to the customer profile, except for changes to customer segment membership and cards on file. |
| `tax_ids` | [`Customer Tax Ids`](../../doc/models/customer-tax-ids.md) | Optional | Represents the tax ID associated with a [customer profile](../../doc/models/customer.md). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.<br>For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids). |

## Example (as JSON)

```json
{
  "id": "id0",
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "cards": [
    {
      "id": "id7",
      "card_brand": "EBT",
      "last_4": "last_49",
      "exp_month": 79,
      "exp_year": 217
    },
    {
      "id": "id8",
      "card_brand": "FELICA",
      "last_4": "last_40",
      "exp_month": 78,
      "exp_year": 218
    }
  ],
  "given_name": "given_name2"
}
```

