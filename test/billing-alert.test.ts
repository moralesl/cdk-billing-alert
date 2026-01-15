import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BillingAlert } from '../lib/index';


test('BillingAlert matches snapshot', () => {
  const stack = new Stack();
  new BillingAlert(stack, 'TestBillingAlert', {
    amount: 100,
    emails: ["test@example.com"]
  });

  expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
});

test('BillingAlert has mail subscription', () => {
  const stack = new Stack();

  new BillingAlert(stack, 'TestBillingAlert', {
    amount: 100,
    emails: ["test@example.com"]
  });

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::SNS::Subscription', {
    Endpoint: 'test@example.com'
  });
});

test('BillingAlert has amount as threshold', () => {
  const stack = new Stack();

  new BillingAlert(stack, 'TestBillingAlert', {
    amount: 42,
    emails: ["test@example.com"]
  });

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::CloudWatch::Alarm', {
    Threshold: 42
  });
});