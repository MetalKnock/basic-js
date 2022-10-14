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
  constructor(notReverse = true) {
    this.notReverse = notReverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let messageUpper = message.toUpperCase();
    if (!this.notReverse) {
      messageUpper = messageUpper.split("").reverse().join("");
    }

    let encryptedMessage = messageUpper;

    let lengthLettersInMessage;
    if (/[A-Z]/g.test(messageUpper)) {
      lengthLettersInMessage = messageUpper.match(/[A-Z]/g).length;
    } else {
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
        let indexInAlphabetLetterEncryptedMessage;
        if (this.notReverse) {
          indexInAlphabetLetterEncryptedMessage =
            ((indexInAlphabetLetterMessage + indexInAlphabetLetterKey) % 26) +
            65;
        } else {
          indexInAlphabetLetterEncryptedMessage =
            ((indexInAlphabetLetterKey - indexInAlphabetLetterMessage + 26) %
              26) +
            65;
        }
        const letterEncryptedMessage = String.fromCharCode(
          indexInAlphabetLetterEncryptedMessage
        );
        encryptedMessage =
          encryptedMessage.substring(0, i) +
          letterEncryptedMessage +
          encryptedMessage.substring(i + 1);
        console.log(encryptedMessage);

        j++;
      }
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    let encryptedMessageUpper = encryptedMessage.toUpperCase();
    if (!this.notReverse) {
      encryptedMessageUpper = encryptedMessageUpper
        .split("")
        .reverse()
        .join("");
    }

    let message = encryptedMessageUpper;

    let lengthLettersInEncryptedMessage;
    if (/[A-Z]/g.test(encryptedMessageUpper)) {
      lengthLettersInEncryptedMessage =
        encryptedMessageUpper.match(/[A-Z]/g).length;
    } else {
      if (!this.notReverse)
        return encryptedMessage.split("").reverse().join("");
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
        const indexInAlphabetLetterKey = trueKey.charCodeAt(j) - 65;
        let indexInAlphabetLetterMessage;
        if (this.notReverse) {
          indexInAlphabetLetterMessage =
            ((indexInAlphabetLetterEncryptedMessage -
              indexInAlphabetLetterKey +
              26) %
              26) +
            65;
        } else {
          indexInAlphabetLetterMessage =
            ((indexInAlphabetLetterKey -
              indexInAlphabetLetterEncryptedMessage +
              26) %
              26) +
            65;
        }
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
    return message;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
