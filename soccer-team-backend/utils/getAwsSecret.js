import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secretsManager = new SecretsManagerClient({ region: "us-west-1" });

// Helper function to fetch secrets
export const getSecret = async (secretName) => {
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const response = await secretsManager.send(command);

    if (response.SecretString) {
      const secret = JSON.parse(response.SecretString);
      console.log(`Secret ${secretName} retrieved successfully.`);
      return secret;
    } else {
      console.error(`Secret ${secretName} does not contain SecretString.`);
      return undefined;
    }
  } catch (err) {
    console.error(`Unable to fetch secret ${secretName}: `, err);
    return undefined;
  }
};
