interface String {
   isNullOrWhiteSpace(this: string): boolean;
   toHTMLElement(this: string): HTMLElement;
   toCamelCase(this: string): string;
 }
 
String.prototype.isNullOrWhiteSpace = function (this : string): boolean 
{
   return (!this || /^\s*$/.test(this));
};

String.prototype.toHTMLElement = function (this : string): HTMLElement 
{
   const t = document.createElement('div');
   t.innerHTML = this;return <HTMLElement>t.firstElementChild;
};

String.prototype.toCamelCase = function(this : string): string 
{
   return this.split(' ')
      .map(function (word, index) 
      {
         // If it is not the first word only upper case the first char and lowercase the rest.
         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
}
