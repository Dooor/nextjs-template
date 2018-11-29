export default class KeenTracking {
  constructor(options: { projectId: string; writeKey: string; requestType?: string });

  // keen-core
  static enabled: boolean;
  static log(
    message: string,
  ): any

  // keen-tracking
  recordEvent(
      collectionName: string,
      event: object
  ): Promise<{ created: boolean }>;

  recordEvents(events: {
      [collectionName: string]: object[];
  }): Promise<{
      [collectionName: string]: boolean[];
  }>;

  initAutoTracking({
    recordClicks,
    recordFormSubmits,
    recordPageViews,
  }: {
    recordClicks: boolean,
    recordFormSubmits: boolean,
    recordPageViews: boolean,
  }): any;

  on(
    events: string,
    handler: Function,
  ): any;
}
