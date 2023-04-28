function encrypt() {
    const text = document.getElementById("text").value;
    const ciphertext = CryptoJS.AES.encrypt(
      text,
      "secret key 123"
    ).toString();
    document.getElementById("encryptedText").innerHTML = ciphertext;
  }

  function decrypt() {
    const encryptedText =
      document.getElementById("encryptedText").innerHTML;
    const bytes = CryptoJS.AES.decrypt(encryptedText, "secret key 123");
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("decryptedText").innerHTML = originalText;
  }