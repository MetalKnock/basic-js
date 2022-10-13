const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    const messageUpper = message.toUpperCase();
    let encryptedMessage = messageUpper;
    let lengthLettersInMessage;
    if (/[A-Z]/g.test(messageUpper)) {
      lengthLettersInMessage = messageUpper.match(/[A-Z]/g).length;
    } else {
      if (!this.reverse) return encryptedMessage.split("").reverse().join("");
      return encryptedMessage;
    }

    let trueKey = "";
    for (let i = 0; i < lengthLettersInMessage; i++) {
      trueKey += key[i % key.length].toUpperCase();
    }

    for (let i = 0, j = 0; i < messageUpper.length; i++) {
      if (/[A-Z]/g.test(messageUpper[i])) {
        const indexInAlphabetLetterMessage = messageUpper.charCodeAt(i) - 65;
        const indexInAlphabetLetterKey = trueKey.charCodeAt(j) - 65;
        const indexInAlphabetLetterEncryptedMessage =
          ((indexInAlphabetLetterMessage + indexInAlphabetLetterKey) % 26) + 65;
        const letterEncryptedMessage = String.fromCharCode(
          indexInAlphabetLetterEncryptedMessage
        );
        encryptedMessage =
          encryptedMessage.substring(0, i) +
          letterEncryptedMessage +
          encryptedMessage.substring(i + 1);
        j++;
      }
    }
    if (!this.reverse) return encryptedMessage.split("").reverse().join("");
    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    let message = encryptedMessageUpper;
    let lengthLettersInEncryptedMessage;
    if (/[A-Z]/g.test(encryptedMessageUpper)) {
      lengthLettersInEncryptedMessage =
        encryptedMessageUpper.match(/[A-Z]/g).length;
    } else {
      if (!this.reverse) return encryptedMessage.split("").reverse().join("");
      return encryptedMessage;
    }

    let trueKey = "";
    for (let i = 0; i < lengthLettersInEncryptedMessage; i++) {
      trueKey += key[i % key.length].toUpperCase();
    }

    for (let i = 0, j = 0; i < encryptedMessageUpper.length; i++) {
      if (/[A-Z]/g.test(encryptedMessageUpper[i])) {
        const indexInAlphabetLetterEncryptedMessage =
          encryptedMessageUpper.charCodeAt(i) - 65;
        // console.log(indexInAlphabetLetterEncryptedMessage);
        const indexInAlphabetLetterKey = trueKey.charCodeAt(j) - 65;
        // console.log(indexInAlphabetLetterKey);
        const indexInAlphabetLetterMessage =
          ((indexInAlphabetLetterEncryptedMessage -
            indexInAlphabetLetterKey +
            52) %
            26) +
          65;
        console.log(indexInAlphabetLetterMessage);
        const letterEncryptedMessage = String.fromCharCode(
          indexInAlphabetLetterMessage
        );
        message =
          message.substring(0, i) +
          letterEncryptedMessage +
          message.substring(i + 1);
        j++;
      }
    }
    if (!this.reverse) return encryptedMessage.split("").reverse().join("");
    return message;
  }
}

const directMachine = new VigenereCipheringMachine();
const a = directMachine.encrypt("attack at dawn!", "alphonse");
console.log(directMachine.decrypt(a, "alphonse"));

module.exports = {
  VigenereCipheringMachine,
};
