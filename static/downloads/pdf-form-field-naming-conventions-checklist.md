# Fillable PDF Form Field Naming Conventions Checklist — free download from DollarWise (dollarwise.xyz)

Use these conventions when naming fields in fillable PDFs (Acrobat, pdf-lib, or any form builder). Consistent names make forms scriptable, accessible, and easy to debug.

## The 10 naming rules

1. Use lowercase snake_case for every field name: `applicant_first_name` — never `FirstName`, `firstName`, or `text1`.
2. Never use spaces, dashes, or special characters — only letters, numbers, and underscores.
3. Prefix fields with their section: `billing_street`, `billing_city`, `shipping_street`, `shipping_city`.
4. Zero-pad sequential numbers so fields sort correctly: `dependent_01_name`, `dependent_02_name` (not `dependent_1_name`).
5. Suffix special field types: `_sig` for signatures, `_chk` for checkboxes, `_radio` for radio groups, `_date` for dates.
6. Radio button groups share ONE field name; each option gets a distinct export value.
7. Checkboxes that act independently get UNIQUE names; checkboxes that act as one group share a name.
8. Mirror the field name in the tooltip and accessibility label so screen readers announce it clearly.
9. Keep names stable — never rename a field after scripts or integrations reference it.
10. Document every name in a data dictionary: field name, visible label, format, required or optional.

## Good vs bad examples

```
GOOD                              BAD
applicant_first_name              First Name
applicant_last_name               text2
contact_email                     Email-Address
contact_phone_mobile              Phone #
billing_postal_code               ZipCode
emergency_contact_01_name         EmergencyContact1
consent_privacy_chk               Check Box 14
signature_applicant_sig           SignatureField1
application_date_date             Date
payment_card_last4                CardNumber
```

## Quick audit checklist

- [ ] All names are lowercase snake_case
- [ ] Section prefixes applied consistently
- [ ] Sequential numbers zero-padded
- [ ] Type suffixes on signatures, checkboxes, radios, and dates
- [ ] Radio groups share one name with unique export values
- [ ] Tooltips match field names for accessibility
- [ ] Data dictionary written and stored alongside the form
