## CDK Billing Alert utility

---

[![Build Status](https://travis-ci.com/moralesl/cdk-billing-alert.svg?branch=master)](https://travis-ci.com/moralesl/cdk-billing-alert)
[![GitHub release](https://img.shields.io/github/release/moralesl/cdk-billing-alert/all.svg)](https://img.shields.io/github/release/moralesl/cdk-billing-alert/all.svg)

---

Utility CDK construct to setup billing alerts easily

## Migration to AWS CDK v2

This library has been migrated from AWS CDK v1 to AWS CDK v2. The following changes were made:

### Breaking Changes

- **AWS CDK Version**: Now requires AWS CDK v2 (`aws-cdk-lib ^2.0.0`)
- **Constructs**: Now requires `constructs ^10.0.0` (previously `^2.0.0`)
- **Import Changes**: All imports now use `aws-cdk-lib` instead of individual `@aws-cdk/*` packages

### Dependency Updates

- **TypeScript**: Updated from ~3.7.2 to ~5.0.0
- **jsii**: Updated from ^1.2.0 to ^5.0.0
- **Jest**: Updated from ^24.9.0 to ^29.5.0
- **@types/node**: Updated from 10.17.5 to ^20.0.0

### Usage Changes

The API remains the same - no changes are required to your code that uses this library. However, you'll need to ensure your project is using AWS CDK v2.

## Installation

### Typescript

First you need to install the package

```
npm install @moralesl/billing-alert
```

Make sure your project uses AWS CDK v2:

```
npm install aws-cdk-lib@^2.0.0 constructs@^10.0.0
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

### Python

First you need to install the package

```
pip install moralesl.billing-alert
```

Then you can use the billing alert utility in your code:

```python
import moralesl.billing_alert as billing_alert

billing_alert.BillingAlert(self, "BillingAlertTenDollars",
    amount=10,
    emails=["test@example.com"]
)
```

## Development

### Building

```bash
npm install
npm run build
```

### Testing

```bash
npm test
```

### Packaging

```bash
npm run package
```
