import bcrypt from "bcrypt";

const passwordPlainText = "hunter42";
const passwordPlainText2 = "notHunter";
const hashedPassword = "$2b$08$6TGer9ajxS7SD62M7UXQremUNr.NXIb2xioUJ6CQHMIcASe4Xjcgu";

const encryptedPassword = await bcrypt.hash(passwordPlainText, 8);
console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlainText, hashedPassword);
console.log(isSame);