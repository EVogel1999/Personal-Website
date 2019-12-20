import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProjects(): Promise<Project[]> {
    return this.http.get<Project[]>(environment.API_URL + '/projects').toPromise();
  }

  public createProject(project: Project) {
    return this.http.post<Project>(environment.API_URL + '/projects', project).toPromise();
  }

  public updateProject(project: Project) {
    return this.http.patch<Project>(environment.API_URL + '/projects/' + project.id, project).toPromise();
  }

  public async deleteProject(id: string) {
    await this.http.delete(environment.API_URL + '/projects/' + id).toPromise();
  }
}
