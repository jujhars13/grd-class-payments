## GrdTrust.org Class Payments system

## Api

### `POST /payment`
Send a payment email

### `POST /payment/received`
Update source spreadsheet with the fact that a payment has been made

## Tasks
- [] setup apostle account and email
- [] generate email
- [] test and send email
- [] test email verification
- [] get google sheet auth sorted
- [] update payment details to spreadsheet

## Run Dev
```bash
docker build -t pay ./ && docker run -ti -p 8080:8080 -p 9229:9229 -v ${PWD}/app:/app --entrypoint=/bin/bash pay
```

## Hosting

Hosted on sloppy.io
[https://grd-class-payments.sloppy.zone/](https://grd-class-payments.sloppy.zone/)