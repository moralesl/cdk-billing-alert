## CDK Billing Alert utility

---

[![Build Status](https://travis-ci.com/moralesl/cdk-billing-alert.svg?branch=master)](https://travis-ci.com/moralesl/cdk-billing-alert)
[![GitHub release](https://img.shields.io/github/release/moralesl/cdk-billing-alert/all.svg)](https://img.shields.io/github/release/moralesl/cdk-billing-alert/all.svg)

---

Utility CDK construct to setup billing alerts easily


## Usage
### Typescript

First you need to install the package

```
npm install @moralesl/billing-alert
```

Then you can use the billing alert utility in your code:

```ts
import { BillingAlert } from "@moralesl/billing-alert";

new BillingAlert(this, "BillingAlertTenDollars", {
    amount: 10,
    emails: [
        "test@example.com",
    ]
});
```
