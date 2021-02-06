const nodemailer = require("nodemailer"); //npm install nodemailer

const email = {
  host: "",
  port: "",
  secure: "false",
  auth: {
    user: "",
    pass: "",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "moonlightsoft@naver.com",
  to: "moonlightsoft@naver.com",
  subject: "테스트 메일입니다.",
  text: "node.js 소스코드",
};

send(email_data);
