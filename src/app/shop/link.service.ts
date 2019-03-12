import {Injectable} from "@angular/core";

export class Link {
    id: number;
    source: number;
    target: number;
    type: string;
  }

  @Injectable()
  export class LinkService {
      get(): Promise<Link[]> {
          return Promise.resolve([
              {id: 1, source: 1, target: 2, type: "0"}
          ]);
      }
  }