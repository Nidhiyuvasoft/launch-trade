const API_PATH = {
  AUTH: {
    SIGN_IN: "sign_in",
    SIGN_UP: "sign_up",
    RESET_PASSWORD: "reset_password",
    FORGOT_PASSWORD: "forgot_password",
    RESEND_VARIFICATION_EMAIL: "resend_verification_email",
    LINK_VALIDATE: "check_reset_token",
    LOGOUT: "logout",
    EMAIL_VERIFICATION: "verify_email",
  },
  ONBOARDING: {
    FETCH_INDUSTRY: "fetch_all_data",
  },
  COMPANY: {
    SHOW_COMPANY: "companies/show",
    UPDATE_COMPANY: "companies/update",
    CREATE_COMPANY: "companies/create",
  },
  PROFILE: {
    SHOW_PROFILE: "users/show",
    UPDATE_PROFILE: "users/update",
    CHANGE_PASSWORD: "change_password",
    LOGOUT: "logout",
  },
  CAMPAIGN: {
    CAMPAIGN: "/campaigns",
    CAMPAIGN_DELETE: "campaigns/destroy",
    CAMPAIGN_MESSAGE: "personalization_messages",
  },
  LINKEDIN: {
    GET_LINKEDIN: "leads",
    CREATE_LINKEDIN: "leads",
    DELETE_LINKEDIN: "leads/delete",
    UPDATE_LINKEDIN: "leads/update",
  },
  LEAD: {
    GET_LEAD: "leads",
    CREATE_LEAD: "leads",
    DELETE_LEAD: "leads/destroy",
    UPDATE_LEAD: "leads/update",
    CREATE_BULK_LEAD: "leads/create_bulk_lead",
    DOWNLOAD_CSV: "leads/export",
  },
};
export default API_PATH;
