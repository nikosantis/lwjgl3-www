export const helmetConfig = (production, hsts) => {
  const config = {
    contentSecurityPolicy: {
      directives: {
        blockAllMixedContent: true,
        // defaultSrc: ['*'],
        // connectSrc: ['*'],
        // fontSrc: ['*'], // default-src
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        // frameSrc: ['*'], // default-src
        // imgSrc: ['*'], // default-src
        // manifestSrc: ["'self'"],
        // mediaSrc: ['*'], // default-src
        objectSrc: ["'none'"],
        // scriptSrc: ['*'], // default-src
        // styleSrc: ['*'], // default-src
        // workerSrc: ["'self'"]
      },
    },
    // browserSniff: false,
    dnsPrefetchControl: false,
    // dnsPrefetchControl: {
    //   allow: false,
    // },
    frameguard: {
      action: 'sameorigin',
    },
    hidePoweredBy: false,
    ieNoOpen: false,
    noSniff: true,
    xssFilter: false,
    featurePolicy: {
      features: {
        accelerometer: ["'none'"],
        ambientLightSensor: ["'none'"],
        autoplay: ["'none'"],
        camera: ["'none'"],
        fullscreen: ["'self'"],
        geolocation: ["'none'"],
        gyroscope: ["'none'"],
        magnetometer: ["'none'"],
        microphone: ["'none'"],
        midi: ["'none'"],
        payment: ["'none'"],
        speaker: ["'none'"],
        syncXhr: ["'none'"],
        usb: ["'none'"],
      },
    },
    referrerPolicy: {
      policy: 'no-referrer-when-downgrade',
    },
  };

  if (production && hsts) {
    config.hsts = {
      maxAge: 365 * 24 * 60 * 60,
      includeSubDomains: false,
      // TODO: includeSubDomains must be true for preloading to be approved
      preload: false,
    };
  }

  return config;
};
