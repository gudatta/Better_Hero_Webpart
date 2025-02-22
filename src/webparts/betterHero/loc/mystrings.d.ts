declare interface IBetterHeroWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  AddImageFieldLabel: string;
  OpacityFieldLabel: string;
  CardColFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  UnknownEnvironment: string;
}

declare module 'BetterHeroWebPartStrings' {
  const strings: IBetterHeroWebPartStrings;
  export = strings;
}
