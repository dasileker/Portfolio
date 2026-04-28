const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, '.env');
const outputPath = path.join(projectRoot, 'public', 'config.js');

function parseEnvFile(content) {
  return content.split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      return acc;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      return acc;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    acc[key] = value;
    return acc;
  }, {});
}

function requireValue(env, key) {
  const value = env[key];

  if (!value) {
    throw new Error(`Missing required env variable: ${key}`);
  }

  return value;
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = parseEnvFile(envContent);

const config = {
  firebase: {
    apiKey: requireValue(env, 'FIREBASE_API_KEY'),
    authDomain: requireValue(env, 'FIREBASE_AUTH_DOMAIN'),
    databaseURL: requireValue(env, 'FIREBASE_DATABASE_URL'),
    projectId: requireValue(env, 'FIREBASE_PROJECT_ID'),
    storageBucket: requireValue(env, 'FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: requireValue(env, 'FIREBASE_MESSAGING_SENDER_ID'),
    appId: requireValue(env, 'FIREBASE_APP_ID')
  },
  emailSecureToken: requireValue(env, 'EMAIL_SECURE_TOKEN')
};

const output = `window.APP_CONFIG = ${JSON.stringify(config, null, 2)};\n`;

fs.writeFileSync(outputPath, output);

console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
