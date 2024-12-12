async function verifyPassword() {
  try {
    let hasValue = "2sedrtfgy54334erdf";
    let userPassword = "fatima12334";
    let verify = await bcrypt.compare(userPassword, hasValue);
    console.log(verify);
    if (verify) {
      console.log("login successfully");
    } else {
      console.log("Invalid password");                                                                                          
    }
  } catch (error) {

}

}

