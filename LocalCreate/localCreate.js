const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const firefox = require("selenium-webdriver/firefox");
require("geckodriver");

// Calculo digito verificador RUT 
function digitoVerificador(T) {
    var M=0,S=1;
     for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
     return S?S-1:'K';
};


/* Para hacer testing en localhost - se puede poner false en Heroku */
let ops = new firefox.Options();
ops.setAcceptInsecureCerts(true);

(async function example() {
    
  let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(ops).build();
//   let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("https://localhost:4200/registro-negocio");
    await driver.sleep(2000);
    
    //Menu 1
    await driver.findElement(By.id("cdk-step-label-0-0")).click();
    await driver.findElement(By.id("mat-input-0")).click();
    await driver.findElement(By.id("mat-input-0")).sendKeys("Prueba");
    await driver.findElement(By.id("mat-input-1")).click();
    await driver.findElement(By.id("mat-input-1")).sendKeys("Prueba");
    let encargadoNumero = Math.floor(Math.random() * 100000000) + 900000000;
    await driver.findElement(By.id("mat-input-21")).click();
    await driver.findElement(By.id("mat-input-21")).sendKeys(encargadoNumero);
    await driver.findElement(By.id("mat-input-2")).click();
    let encargadoEmail = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "@test.com";
    await driver.findElement(By.id("mat-input-2")).sendKeys(encargadoEmail);
    await driver.findElement(By.id("mat-input-3")).click();
    await driver.findElement(By.id("mat-input-3")).sendKeys(encargadoEmail);
    await driver.findElement(By.id("mat-input-4")).click();
    await driver.findElement(By.id("mat-input-4")).sendKeys("Prueba12345!");
    await driver.findElement(By.id("mat-input-5")).click();
    await driver.findElement(By.id("mat-input-5")).sendKeys("Prueba12345!");

    //Menu 2
    await driver.findElement(By.id("cdk-step-label-0-1")).click();
    await driver.findElement(By.id("mat-input-6")).click();
    await driver.findElement(By.id("mat-input-6")).sendKeys("Local creado en prueba!");
    await driver.findElement(By.id("mat-input-7")).click();
    await driver.findElement(By.id("mat-input-7")).sendKeys("DonPrueba");
    await driver.findElement(By.id("mat-input-8")).click();
    await driver.findElement(By.id("mat-input-8")).sendKeys("Bot");
    let repLegalRut = Math.floor(Math.random() * 10000000) + 20000000;
    repLegalRut= repLegalRut.toString() + digitoVerificador(repLegalRut);
    await driver.findElement(By.id("mat-input-9")).click();
    await driver.findElement(By.id("mat-input-9")).sendKeys(repLegalRut);
    let repLegalEmail = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "@test.com";
    await driver.findElement(By.id("mat-input-10")).click();
    await driver.findElement(By.id("mat-input-10")).sendKeys(repLegalEmail);
    let repLegalNumero = Math.floor(Math.random() * 100000000) + 900000000;
    await driver.findElement(By.id("mat-input-22")).click();
    await driver.findElement(By.id("mat-input-22")).sendKeys(repLegalNumero);
    await driver.findElement(By.id("mat-input-11")).click();
    await driver.findElement(By.id("mat-input-11")).sendKeys("RazonDePrueba");
    await driver.findElement(By.id("mat-select-value-1")).click();
    await driver.findElement(By.id("mat-option-7")).click();
    await driver.findElement(By.id("mat-input-12")).click();
    let rutLocal = Math.floor(Math.random() * 10000000) + 70000000;
    rutLocal= rutLocal.toString() + digitoVerificador(rutLocal);
    await driver.findElement(By.id("mat-input-12")).sendKeys(rutLocal);
    await driver.findElement(By.id("mat-input-13")).click();
    await driver.findElement(By.id("mat-input-13")).sendKeys("Avenida Eyzaguirre");
    let localDireccion = Math.floor(Math.random() * (4550 - 1000 + 1)) + 1000;
    await driver.findElement(By.id("mat-input-14")).click();
    await driver.findElement(By.id("mat-input-14")).sendKeys(localDireccion);
    await driver.findElement(By.id("mat-input-23")).click();
    let localNumero = Math.floor(Math.random() * 100000000) + 900000000;
    await driver.findElement(By.id("mat-input-23")).sendKeys(localNumero);
    await driver.findElement(By.id("mat-select-2")).click();
    await driver.findElement(By.xpath("//span[contains(text(), 'Metropolitana de Santiago')]")).click();
    await driver.sleep(500);
    await driver.findElement(By.id("mat-select-4")).click();
    await driver.findElement(By.xpath("//span[contains(text(), 'Puente Alto')]")).click();
    await driver.findElement(By.id("mat-input-15")).click();
    await driver.findElement(By.id("mat-input-15")).sendKeys("Local de Prueba");
    await driver.findElement(By.id("mat-input-16")).click();
    await driver.findElement(By.id("mat-input-16")).sendKeys("Avenida Eyzaguirre");
    await driver.findElement(By.id("mat-input-17")).click();
    await driver.findElement(By.id("mat-input-17")).sendKeys(localDireccion);
    await driver.findElement(By.id("mat-select-6")).click();
    await driver.findElement(By.id("mat-option-13")).click();
    await driver.sleep(500);
    await driver.findElement(By.id("mat-select-8")).click();
    await driver.findElement(By.xpath("//mat-option[39]/span")).click();
    await driver.findElement(By.id("mat-radio-2")).click();

    //Menu 3
    await driver.findElement(By.id("cdk-step-label-0-2")).click();
    await driver.findElement(By.id("mat-input-18")).click();
    let titularRut = Math.floor(Math.random() * 10000000) + 20000000;
    titularRut= titularRut.toString() + digitoVerificador(titularRut);
    await driver.findElement(By.id("mat-input-18")).sendKeys(titularRut);
    await driver.findElement(By.id("mat-input-19")).click();
    await driver.findElement(By.id("mat-input-19")).sendKeys("MrPrueba");
    await driver.findElement(By.id("mat-input-20")).click();
    await driver.findElement(By.id("mat-input-20")).sendKeys("123456789");
    await driver.findElement(By.id("mat-select-10")).click();
    await driver.findElement(By.id("mat-option-37")).click();
    await driver.findElement(By.id("mat-select-12")).click();
    await driver.findElement(By.id("mat-option-10")).click();
    await driver.findElement(By.xpath("//span[contains(text(), '¡Listo!')]")).click();












    // await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    //   await driver.quit();
  }
})();
