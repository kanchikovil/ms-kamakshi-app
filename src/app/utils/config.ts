const APP_CONFIG = {
    env: process.env.APP_ENV,
    apiBaseUrl: process.env.API_BASE_URL || "https://kanchikovil-be-api-g2f4fbb0hbdkhqd9.canadacentral-01.azurewebsites.net/api",
    recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfVmewqAAAAAIPZGb3ASDDjjrG-meg07kZn5HwF"
};
console.log("APP_CONFIG", JSON.stringify(APP_CONFIG));
export default APP_CONFIG;
