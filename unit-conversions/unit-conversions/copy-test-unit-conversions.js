const {By,Key,Builder, Actions} = require("selenium-webdriver");
require("chromedriver");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

async function example(){
 
       var cmToMm = "10";
       var mmToCm = "100";
       var fToC = "32";
       var cToF = "0";
       var mToKm = "1000";
       var kmToM = "1";
 
       //Waits for the browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //Opens my "unit-conversion" file.
        await driver.get("http://127.0.0.1:5500/coding-projects/unit-conversions/copy-unit-conversions.html");
            
        await driver.findElement(By.id("Length")).click();

        await driver.findElement(By.id("centimeter")).click();
        
        //Passes the value in "cmToMm" into the inputbox.
        await driver.findElement(By.id("numInput")).sendKeys(cmToMm);

        //Clicks the "Convert" button
        await driver.findElement(By.id("button")).click();
 
        //Verifies the result for the "Centimeter to Millimeter" option and prints it
        var labelBox = await driver.findElement(By.id("result")).getText();
        console.log('The result says:',labelBox);

        if(labelBox === 'Your answer is, 100.0mm') {
          console.log('(1) Test passed\n');
        } else {
          console.log('(1) Test failed\n');
        }

        await driver.findElement(By.id("millimeter")).click();
        
        //Clears the inputbox
        await driver.findElement(By.id("numInput")).clear();

        //Passes the value in "mmToCm" into the inputbox.
        await driver.findElement(By.id("numInput")).sendKeys(mmToCm);

        //Clicks the "Convert" button
        await driver.findElement(By.id("button")).click();

        //Verifies the result for the "Millimeter to Centimeter" option and prints it
        var labelBox = await driver.findElement(By.id("result")).getText();
        console.log('The result says:',labelBox);

        if(labelBox === 'Your answer is, 10.0cm') {
          console.log('(2) Test passed\n');
        } else {
          console.log('(2) Test failed\n');
        }

        await driver.findElement(By.id("Temperature")).click();

        await driver.findElement(By.id("fahrenheit")).click();
        
        //Clears the inputbox
        await driver.findElement(By.id("numInput")).clear();

        //Passes the value in "fToC" into the inputbox.
        await driver.findElement(By.id("numInput")).sendKeys(fToC);

        //Clicks the "Convert" button
        await driver.findElement(By.id("button")).click();

        //Verifies the result for the "Fahrenheit to Celsius" option and prints it
        var labelBox = await driver.findElement(By.id("result")).getText();
        console.log('The result says:',labelBox);

        if(labelBox === 'Your answer is, 0.0°C') {
          console.log('(3) Test passed\n');
        } else {
          console.log('(3) Test failed\n');
        }

        await driver.findElement(By.id("celsius")).click();
        
        //Clears the inputbox
        await driver.findElement(By.id("numInput")).clear();

        //Passes the value in "cToF" into the inputbox.
        await driver.findElement(By.id("numInput")).sendKeys(cToF);

        //Clicks the "Convert" button
        await driver.findElement(By.id("button")).click();

        //Verifies the result for the "Celsius to Fahrenheit" option and prints it
        var labelBox = await driver.findElement(By.id("result")).getText();
        console.log('The result says:',labelBox);

        if(labelBox === 'Your answer is, 32.0°F') {
          console.log('(4) Test passed\n');
        } else {
          console.log('(4) Test failed\n');
        }

        await driver.findElement(By.id("Distance")).click();

        await driver.findElement(By.id("meter")).click();
        
        //Clears the inputbox
        await driver.findElement(By.id("numInput")).clear();

        //Passes the value in "mToKm" into the inputbox.
        await driver.findElement(By.id("numInput")).sendKeys(mToKm);

        //Clicks the "Convert" button
        await driver.findElement(By.id("button")).click();

        //Verifies the result for the "Meter to Kilometer" option and prints it
        var labelBox = await driver.findElement(By.id("result")).getText();
        console.log('The result says:',labelBox);

        if(labelBox === 'Your answer is, 1.0km') {
          console.log('(5) Test passed\n');
        } else {
          console.log('(5) Test failed\n');
        }

        await driver.findElement(By.id("kilometer")).click();
        
        //Clears the inputbox
        await driver.findElement(By.id("numInput")).clear();

        //Passes the value in "kmToM" into the inputbox.
        await driver.findElement(By.id("numInput")).sendKeys(kmToM);

        //Clicks the "Convert" button
        await driver.findElement(By.id("button")).click();

        //Verifies the result for the "Kilometer to Meter" option and prints it
        var labelBox = await driver.findElement(By.id("result")).getText();
        console.log('The result says:',labelBox);

        if(labelBox === 'Your answer is, 1000.0m') {
          console.log('(6) Test passed\n');
        } else {
          console.log('(6) Test failed\n');
        }

        //Tells the browser to wait for 1sec.(1000ms) before quiting
        sleep(1000);

        //It is always a safe practice to quit the browser after execution
        await driver.quit();
 
}
 
example()