'use strict'

export default {
  title: 'Data begäran',
  shortDescription: 'Ber HealthKit och GoogleFit om aktivitetsdata',
  shortTitle: 'Data begäran',
  description: 'Den här uppgiften laddar ner din aktivitetsdata från antingen Google Fit eller Apple HealthKit',
  instructionSlidesAndroid: [
    {
      title: 'Introduktion',
      img: 'statics/instructions/data_query_android_1.png',
      description: 'I den här uppgiften kommer appen hämta data från Google Fit om du har det intallerat på din mobil.'
    },
    {
      img: 'statics/instructions/data_query_2.png',
      description: 'Mobistudy appen kommer endast att hämta data som är efterfrågad av den här studien. En sammanfattning av datan kommer visas i form av diagram. Efter att du har granskat informationen så kan skicka informationen eller välja att radera den.'
    }
  ],
  instructionSlidesiOS: [
    {
      title: 'Introduktion',
      img: 'statics/instructions/data_query_ios_1.png',
      description: 'I den här uppgiften kommer appen att hämta data som har samlats av Health appen.'
    },
    {
      img: 'statics/instructions/data_query_2.png',
      description: 'Mobistudy appen kommer endast att hämta data som är efterfrågad av den här studien. En sammanfattning av datan kommer visas i form av diagram. Efter att du har granskat informationen så kan skicka informationen eller välja att radera den.'
    }
  ],
  dataQueryExplanation: 'Det här är en sammanfattning av den datan som har hämtats från din mobil. Skicka iväg informationen eller radera den.'
}
