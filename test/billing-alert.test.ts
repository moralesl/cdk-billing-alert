import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import { Stack } from '@aws-cdk/core';
import { BillingAlert } from '../lib/index';


test('BillingAlert matches snapshot', () => {
  const stack = new Stack();
  new BillingAlert(stack, 'TestBillingAlert', {
    amount: 100,
    emails: ["test@example.com"]
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});

test('BillingAlert has mail subscription', () => {
  const stack = new Stack();

  new BillingAlert(stack, 'TestBillingAlert', {
    amount: 100,
    emails: ["test@example.com"]
  });

  expect(stack).toHaveResource('AWS::SNS::Subscription', {
    Endpoint: 'test@example.com'
  });
});

test('BillingAlert has amount as threshold', () => {
  const stack = new Stack();

  new BillingAlert(stack, 'TestBillingAlert', {
    amount: 42,
    emails: ["test@example.com"]
  });

  expect(stack).toHaveResource('AWS::CloudWatch::Alarm', {
    Threshold: 42
  });
});