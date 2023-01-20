import { inject, injectable } from "tsyringe";
import { HttpService } from "./http.service";

@injectable()
export class CourseService {
  namespace = 'courses';

  constructor(
    @inject(HttpService) private httpService: HttpService,
  ) {}

  async searchCourses(keyword: string, label: string[]) {
    return this.httpService.get(`/${this.namespace}/search?keyword=${keyword}&label=${label}`).then((res) => res.data);
  }

  async getStudentView() {
    return this.httpService.get(`/${this.namespace}/popular`).then((res) => {
      return res.data
    });
  }

  async getCourseById(id: string) {
    return this.httpService.get(`/${this.namespace}/${id}`).then((res) => res.data);
  }
}
