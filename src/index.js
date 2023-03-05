export default class ErrorRepository {
  constructor() {
    this.errorCollection = new Map();
    this.errorCollection.set(10, 'Неизвестный персонаж');
    this.errorCollection.set(20, 'Персонаж умер');
  }

  translate(code) {
    if (this.errorCollection.has(code)) {
      return this.errorCollection.get(code);
    }

    return 'Unknown error';
  }
}
