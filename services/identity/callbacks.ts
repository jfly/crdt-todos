import { mockingOn } from "@saflib/email";
import { getSafReporters } from "@saflib/node";
import type { IdentityServiceCallbacks } from "@saflib/identity";
import type {
  PasswordResetPayload,
  PasswordUpdatedPayload,
  VerificationTokenCreatedPayload,
} from "@saflib/identity-common";

// TODO: Set up email sends for proper email verification. See @saflib/email for more details.

async function onVerificationTokenCreated(
  payload: VerificationTokenCreatedPayload,
) {
  const { log } = getSafReporters();
  // TODO: add your own email with `npm exec saf-workflow kickoff add-email-template ./emails/verify-email.ts`
  log.info(`Verification email successfully sent to ${payload.user.id}`);
  if (mockingOn) {
    log.info(`Link: ${payload.verificationUrl}`);
  }
}

async function onPasswordReset(payload: PasswordResetPayload) {
  const { log } = getSafReporters();
  // TODO: add your own email with `npm exec saf-workflow kickoff add-email-template ./emails/reset-password.ts`
  log.info(`Password reset email successfully sent to ${payload.user.id}`);
  if (mockingOn) {
    log.info(`Link: ${payload.resetUrl}`);
  }
}

async function onPasswordUpdated(payload: PasswordUpdatedPayload) {
  const { log } = getSafReporters();
  // TODO: add your own email with `npm exec saf-workflow kickoff add-email-template ./emails/password-updated.ts`
  log.info(
    `Password update confirmation email successfully sent to ${payload.user.id}`,
  );
}

export const callbacks: IdentityServiceCallbacks = {
  onVerificationTokenCreated,
  onPasswordReset,
  onPasswordUpdated,
};
