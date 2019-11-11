# Phone Number Verification without Regular Expression

This demo is based off the [Phone Number Verification without Regular Expression](https://github.com/dkundel/phone-verification-form) project.
I extended it to use [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js), which is based off Google's [libpphonenumber](https://github.com/google/libphonenumber).  The canonicalized output is of the [E126](https://en.wikipedia.org/wiki/E.164) standard.

## Setup

### 1. Make sure you have Node.js and NPM installed

### 2. Clone repository, build and run the container

```bash
git clone https://github.com/senglin/phone-validation.git
cd phone-validation
docker build -t phonenumber-validation .
docker run -it --rm  phonenumber-validation
```

### 5. Navigate to http://localhost:3000

# Contributors

- Seng Lin Shee <senglin@users.noreply.github.com>

# License

MIT