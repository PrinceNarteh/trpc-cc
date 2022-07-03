import nodemailer from "nodemailer";

export async function sendLoginEmail({
  email,
  url,
  token,
}: {
  email: string;
  url: string;
  token: string;
}) {
  const testAccount = nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethernal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"John Doe" <john.doe@email.com>',
    to: email,
    subject: "Login to your account",
    html: `Login by clicking here <a href="${url}/login#token=${token}">${token}</a>`,
  });

  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}
