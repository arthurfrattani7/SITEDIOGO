export class RandomCodeGenerator {

  static generateAlphaNumeric(length: number = 6): string {
    // Defini os caracteres permitidos (A-Z e 0-9)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    
    return result;
  }
}