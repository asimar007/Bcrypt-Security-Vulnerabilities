const bcrypt = require('bcrypt');

const pass1 = "111111111111111111111111111111111111111111111111111111111111111111111111";
const pass2 = "1111111111111111111111111111111111111111111111111111111111111111111111111111111111asimdev12345";

const main = async () => {
    const hash1 = await bcrypt.hash(pass1, 10);
    const hash2 = await bcrypt.hash(pass2, 10);

    const pass1Verified = await bcrypt.compare(pass2, hash1);
    const pass2Verified = await bcrypt.compare(pass1, hash2);
    console.log(pass1.length);
    console.log(pass2.length);

    console.log(pass1Verified);
    console.log(pass2Verified);
}
main();