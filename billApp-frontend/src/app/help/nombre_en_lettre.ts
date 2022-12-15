export class NombreEnLettre {
  unite(nombre: number) {
    var unite = '';
    switch (nombre) {
      case 0:
        unite = 'Zéro';
        break;
      case 1:
        unite = 'Un';
        break;
      case 2:
        unite = 'Deux';
        break;
      case 3:
        unite = 'Trois';
        break;
      case 4:
        unite = 'Quatre';
        break;
      case 5:
        unite = 'Cinq';
        break;
      case 6:
        unite = 'Six';
        break;
      case 7:
        unite = 'Sept';
        break;
      case 8:
        unite = 'Huit';
        break;
      case 9:
        unite = 'Neuf';
        break;
    } //fin switch
    return unite;
  } //-----------------------------------------------------------------------

  dizaine(nombre: number) {
    var dizaine = '';
    switch (nombre) {
      case 10:
        dizaine = 'Dix';
        break;
      case 11:
        dizaine = 'Onze';
        break;
      case 12:
        dizaine = 'Douze';
        break;
      case 13:
        dizaine = 'Treize';
        break;
      case 14:
        dizaine = 'Quatorze';
        break;
      case 15:
        dizaine = 'Quinze';
        break;
      case 16:
        dizaine = 'Seize';
        break;
      case 17:
        dizaine = 'Dix-sept';
        break;
      case 18:
        dizaine = 'Dix-huit';
        break;
      case 19:
        dizaine = 'Dix-neuf';
        break;
      case 20:
        dizaine = 'Vingt';
        break;
      case 30:
        dizaine = 'Trente';
        break;
      case 40:
        dizaine = 'Quarante';
        break;
      case 50:
        dizaine = 'Cinquante';
        break;
      case 60:
        dizaine = 'Soixante';
        break;
      case 70:
        dizaine = 'Soixante-dix';
        break;
      case 80:
        dizaine = 'Quatre-vingt';
        break;
      case 90:
        dizaine = 'Quatre-vingt-dix';
        break;
    } //fin switch
    return dizaine;
  } //-----------------------------------------------------------------------

  numberToLetter(nombre: number) {
    var i, j, n, quotient, reste, nb;
    var ch;
    var numberToLetter = '';
    //__________________________________

    if (nombre.toString().replace(/ /gi, '').length > 15)
      return 'dépassement de capacité';
    if (isNaN(Number(nombre.toString().replace(/ /gi, ''))))
      return 'Nombre non valide';

    nb = parseFloat(nombre.toString().replace(/ /gi, ''));
    if (Math.ceil(nb) != nb) return 'Nombre avec virgule non géré.';

    n = nb.toString().length;
    switch (n) {
      case 1:
        numberToLetter = this.unite(nb);
        break;
      case 2:
        if (nb > 19) {
          quotient = Math.floor(nb / 10);
          reste = nb % 10;
          if (nb < 71 || (nb > 79 && nb < 91)) {
            if (reste == 0) numberToLetter = this.dizaine(quotient * 10);
            if (reste == 1)
              numberToLetter =
                this.dizaine(quotient * 10) + '-Et-' + this.unite(reste);
            if (reste > 1)
              numberToLetter =
                this.dizaine(quotient * 10) + '-' + this.unite(reste);
          } else
            numberToLetter =
              this.dizaine((quotient - 1) * 10) +
              '-' +
              this.dizaine(10 + reste);
        } else numberToLetter = this.dizaine(nb);
        break;
      case 3:
        quotient = Math.floor(nb / 100);
        reste = nb % 100;
        if (quotient == 1 && reste == 0) numberToLetter = 'Cent';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Cent' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.unite(quotient) + ' Cents';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.unite(quotient) + ' Cent ' + this.numberToLetter(reste);
        break;
      case 4:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Mille';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Mille' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Mille';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Mille ' +
            this.numberToLetter(reste);
        break;
      case 5:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Mille';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Mille' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Mille';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Mille ' +
            this.numberToLetter(reste);
        break;
      case 6:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Mille';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Mille' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Mille';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Mille ' +
            this.numberToLetter(reste);
        break;
      case 7:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Million';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Million' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Millions';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Millions ' +
            this.numberToLetter(reste);
        break;
      case 8:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Million';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Million' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Millions';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Millions ' +
            this.numberToLetter(reste);
        break;
      case 9:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Million';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Million' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Millions';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Millions ' +
            this.numberToLetter(reste);
        break;
      case 10:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Milliard';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Milliard' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Milliards';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Milliards ' +
            this.numberToLetter(reste);
        break;
      case 11:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Milliard';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Milliard' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Milliards';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Milliards ' +
            this.numberToLetter(reste);
        break;
      case 12:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Milliard';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Milliard' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Milliards';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Milliards ' +
            this.numberToLetter(reste);
        break;
      case 13:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Billion';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Billion' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Billions';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Billions ' +
            this.numberToLetter(reste);
        break;
      case 14:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Billion';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Billion' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Billions';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Billions ' +
            this.numberToLetter(reste);
        break;
      case 15:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'Un Billion';
        if (quotient == 1 && reste != 0)
          numberToLetter = 'Un Billion' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.numberToLetter(quotient) + ' Billions';
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.numberToLetter(quotient) +
            ' Billions ' +
            this.numberToLetter(reste);
        break;
    } //fin switch
    /*respect de l'accord de quatre-vingt*/
    if (
      numberToLetter.substr(
        numberToLetter.length - 'quatre-vingt'.length,
        'quatre-vingt'.length
      ) == 'quatre-vingt'
    )
      numberToLetter = numberToLetter + 's';

    return numberToLetter;
  } //-----------------------------------------------------------------------
}
