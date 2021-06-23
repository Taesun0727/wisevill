
var codeEnc = {
    
  enc_key : 'sed3_tpyrc_WFACTO#c9ti0w',
    
  /**
  * Encrypt message by DES in ECB mode and Pkcs7 padding scheme
  *
  * NOTE: DES is weak, please use 3DES(Triple DES) or AES
  * 
  * @param  {String} message
  * @param  {String} key
  * @return {String} ciphertext(base64 string)
  * 
  */
  encryptByDESM5 : function(message, key) {
      

      keyHex = CryptoJS.MD5(CryptoJS.enc.Utf8.parse(key)).toString();
      keyHex = keyHex + keyHex.substring(0, 8);

      // CryptoJS use CBC as the default mode, and Pkcs7 as the default padding scheme
      var encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
      });

      return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  },

  /**
  * Encrypt message by DES in ECB mode and Pkcs7 padding scheme
  *
  * NOTE: DES is weak, please use 3DES(Triple DES) or AES
  * 
  * @param  {String} message
  * @param  {String} key
  * @return {String} ciphertext(base64 string)
  * 
  */
  encryptByDES : function(message, key) {

      var keyHex = CryptoJS.enc.Utf8.parse(key);

      // CryptoJS use CBC as the default mode, and Pkcs7 as the default padding scheme
      var encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
      });

      return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  },

  /**
   * Decrypt ciphertext by DES in ECB mode and Pkcs7 padding scheme
   * 
   * @param  {String} ciphertext(base64 string)
   * @param  {String} key
   * @return {String} plaintext
   *
   */
  decryptByDES : function(ciphertext, key) {
      var keyHex = CryptoJS.enc.Utf8.parse(key);

      // direct decrypt ciphertext
      var decrypted = CryptoJS.TripleDES.decrypt({
          ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
      }, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
      });

      return decrypted.toString(CryptoJS.enc.Utf8);
  },


  //암호화
  IdSecuEncode : function(data){
      if(data)
          return codeEnc.encryptByDES(data.toString(), codeEnc.enc_key);
      else
          return "";
  },
  //복호화
  IdSecuDecode : function(data){
      if(data)
          return codeEnc.decryptByDES(data, codeEnc.enc_key);
      else
          return data;
  },

  IdSecuDecodeRe : function(data){
      if(data){
             
              data = data.replace(/\%2508/g, "");
              data = data.replace(/\%08/g, "");
              data = data.replace(/\%26/g, "&");
              data = data.replace(/\%2B/g, "+");
              data = data.replace(/\%2F/g, "/");
              data = data.replace(/\%3A/g, ":");
              data = data.replace(/\%3F/g, "?");
              data = data.replace(/\%3D/g, "=");

              var rdata = codeEnc.IdSecuDecode(data);
            //    rdata = rdata.replace('&#37', "%");

              return rdata;
      }else{
          return data;
      }
  }
}