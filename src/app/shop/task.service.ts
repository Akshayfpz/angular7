import {Injectable} from "@angular/core";

export class Task {
  id: number;
  start_date: string;
  text: string;
  progress: number;
  duration: number;
}

@Injectable()
export class TaskService {
    get(): Promise<Task[]>{
        return Promise.resolve([
            
            {id: 1, text: "Task #1", start_date: "2017-04-15 00:00", duration: 3, progress: 0.6},
            {id: 2, text: "Task #2", start_date: "2017-04-18 00:00", duration: 3, progress: 0.4}
        ]);
    }
}