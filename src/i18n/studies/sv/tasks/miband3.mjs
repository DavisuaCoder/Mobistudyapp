'use strict'

export default {
  title: 'Nedladdning av aktivitetsdata',
  shortTitle: 'Aktivitetsarmband',
  shortDescription: 'Hämta data från ditt aktivitetsarmband',
  OSpermissioniOS: 'This task requires the app to access Bluetooth on your phone. This is needed to connect the app with the MiBand3 fitness tracker and collect the data from it. The collected data will be shared with the research team of this study for analysis. Tap on Next if you want to proceed with the authorization process.',
  OSpermissionAndroid: 'This task requires the app to access Bluetooth on your phone. This is needed to connect the app with the MiBand3 fitness tracker and collect the data from it. The collected data will be shared with the research team of this study for analysis. Tap on Next if you want to proceed with the authorization process.',
  introductionSlides: [
    {
      title: 'Introduktion',
      img: 'instructions/miband3_1.png',
      description: 'I den här uppgiften kommer du att ansluta till ditt MiBand-armband och ladda ner aktivitetsdata, inklusive stegräkning, hjärtfrekvens, aktivitet och sömninformation.'
    },
    {
      title: 'Inställning',
      img: 'instructions/miband3_2.png',
      description: 'För ansluta mobiltelefon med MiBand:et, var god att försäkra dig om att Bluetooth är aktiverat på din mobil, samt att armbandet är laddat och i närheten av mobilen.'
    },
    {
      title: 'Viktigt!',
      img: 'instructions/miband3_tap.png',
      description: 'Om det är första gången du ansluter till Miband:et, då kommer armbandet att be dig att konfirmera anslutningen till mobilen genom att trycka på armbandet. Var god och tryck på armbandet när du känner att den vibrerar på din handled.'
    }
  ],
  connect: 'Anslut',
  searching: 'Letar efter MiBand i närheten',
  searchFailed: 'Ett problem uppstod med sökningen efter MiBand:et, vill du försöka igen?',
  noDeviceTitle: 'Inget MiBand hittat.',
  noDevice: 'Kunde inte hitta ett MiBand. Var god och se till att Bluetooth är aktiverat på din mobil. Vill du söka efter armbandet igen?',
  notEnoughData: 'Det fanns ingen ny data att hämta från MiBand:et. Du kan försöka igen nästa gång den här uppgiften ska utföras.',
  moreDevices: 'Fler än en MiBand hittades. Det närmaste armbandet hittar du längst upp i listan. Välj den enhet från listan du vill ansluta till.',
  tap: 'Tryck på aktivitetsarmbandet.',
  connectionFail: 'Kan inte ansluta till armbandet. Vill du försöka igen?',
  connecting: 'Ansluter till MiBand:et',
  activityTypes: {
    walk: 'Promenerar',
    charging: 'Laddar',
    activity_high: 'Högintensiv aktivitet',
    activity_low: 'Lågintenstiv aktivitet',
    sleep: 'Sover',
    unknown: 'Okänd',
    not_worn: 'Inte buren',
    sedentary: 'Stilla',
    running: 'Springer'
  },
  dataDownload: 'Laddar ned data',
  dataDownloadError: 'Kunde inte ladda ner data från armbandet, var god försök igen eller avbryt.',
  dataSending: 'Skickar data',
  chartsIntro: 'Följande diagram sammanfattar den insamlade datan från ditt aktivitetsarmband. Tryck på "Skicka" för att dela datan med forskningsgruppen eller tryck på "Kasta bort" om du inte vill skicka datan.',
  lineChart: 'Aktivitet över tid',
  hrs: 'hjärtfrekvens',
  intensities: 'intensitet',
  steps: 'steg',
  pieChart: 'Tid spenderad på varje aktivitet',
  hours: 'timmar'
}
