## CDK Billing Alert util

---

[![Build Status](https://travis-ci.org/liyasthomas/banner.svg?branch=master)](https://travis-ci.org/liyasthomas/banner)
[![GitHub release](https://img.shields.io/github/release/liyasthomas/banner/all.svg)](https://github.com/liyasthomas/banner/releases/latest)

---

Utility CDK construct to setup billing alerts easily


## Example

The following example shows how to set up a billing alert:

```ts
import { BillingAlert } from "@moralesl/billing_alert";

new BillingAlert(this, "BillingAlertTenDollars", {
    amount: 10,
    emails: [
        "test@example.com",
    ]
});
```
